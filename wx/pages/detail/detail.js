// pages/detail/detail.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array1: ['篮球', '足球', '跑步', '羽毛球', '乒乓球', '网球', '排球', '台球'],
    array2: ['男', '女'],
  },

  accept: function (e) {
    console.log(e)
    var state=wx.getStorageSync('state')
    if (state == 0) {
      wx.setStorageSync('state', 1)
      //app.globalData.accept_id = e.detail.value.id;
      wx.setStorageSync('id', e.detail.value.id )
      wx.request({
        url: 'https://jane.applinzi.com/update.php',
        data: {
          id:e.detail.value.id,
          invite_people:e.detail.value.invite_people,
        },
        method: 'GET',
      })
      wx.showToast({
        title: '匹配成功',
        icon: 'success',
        duration: 2000
      })
      wx.navigateTo({
        url: '../accepted/accepted',
      })
      wx.request({
        url: 'https://jane.applinzi.com/message2.php',
        data:{
          openid:app.openid,
          formId:e.detail.formId,
          nickName:e.detail.value.nickName
        }
      })
      console.log(e.detail.value.limit_people)
      console.log(e.detail.value.invite_people)
      if (e.detail.value.invite_people ==e.detail.value.limit_people-1)
      {
        wx.request({
          url: 'https://jane.applinzi.com/message.php',
          data: {
            openid: e.detail.value.openid,
            formId: e.detail.value.formId,
          }
        })
      }   
    }
    else {
      wx.showToast({
        title: '匹配失败，您已匹配',
        icon: 'none',
        duration: 2000
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://jane.applinzi.com/recept.php',
      success: function (res) {
        console.log(res)
        that.setData({
          array: res.data,
          index:options.index,
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