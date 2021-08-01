// pages/recept/recept.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array1: ['篮球', '足球', '跑步', '羽毛球', '乒乓球', '网球', '排球', '台球'],
    array2: ['男', '女'],
    near:true,
    all:false,
    showcolor:true
  },


  near:function(e){
    var that = this;
    wx.getLocation({
      success: function(res) {
            that.setData({
              lat: res.latitude,
              lon: res.longitude,
            })
      },
    })
    wx.request({
      url: 'https://jane.applinzi.com/recept.php',
      success: function (res) {
        console.log(res)
        that.setData({
          array: res.data,
          near: false,
          all: true
        })
      }
    })
  },

  all:function(){
    var that = this;
    wx.request({
      url: 'https://jane.applinzi.com/recept.php',
      success: function (res) {
        console.log(res)
        that.setData({
          array: res.data,
          near:true,
          all:false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
     wx.request({
       url: 'https://jane.applinzi.com/recept.php',
       success:function(res){
         console.log(res)
         that.setData({
           array:res.data
         })
       }
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function (e) {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})