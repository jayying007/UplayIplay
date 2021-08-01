// pages/mydetail/mydetail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array1: ['篮球', '足球', '跑步', '羽毛球', '乒乓球', '网球', '排球', '台球'],
    array2: ['男', '女'],
  },

  end:function(e){
    wx.request({
      url: 'https://jane.applinzi.com/end.php',
      data: {
        id:e.detail.value.id
      },
      method: 'GET',
    })
    wx.showToast({
      title: '结束/取消成功',
      icon: 'success',
      duration: 2000
    })
    wx.navigateBack({
      delta:1
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://jane.applinzi.com/id-find.php',
      data: {
        id:options.id
      },
      success: function (res) {
        console.log(res)
        that.setData({
          array: res.data,
          index: 0,
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