// pages/accepted/accepted.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array1: ['篮球', '足球', '跑步', '羽毛球', '乒乓球', '网球', '排球', '台球'],
    array2: ['男', '女'],
  },

  refuse:function(e){
    wx.setStorageSync('state', 0)
    var id=wx.getStorageSync('id')
    wx.request({
      url: 'https://jane.applinzi.com/refuse.php',
      data:{
        invite_people:e.detail.value.invite_people,
        id:id,
      }
    })
    wx.setStorageSync('id', null)
    wx.showToast({
      title: '取消成功',
      icon: 'success',
      duration: 2000
    })
    wx.navigateBack({
      delta:1
    })
  },

call:function(e){
  wx.makePhoneCall({
    phoneNumber: e.detail.value.phone_number //仅为示例，并非真实的电话号码
  })
},

  back:function(e){
    wx.setStorageSync('state', 0)
    
    wx.showToast({
      title: '取消成功',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var id=wx.getStorageSync('id')
      wx.request({
        url: 'https://jane.applinzi.com/id-find.php',
        data:{
          id: id,
        },
        success:function(res){
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
  onShow: function () {
  
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
  onPullDownRefresh: function () {
  
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