// pages/invite/invite.js
var util = require('../../utils/util.js')
var app=getApp();
var datanow = util.formatTime(new Date);
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array1: ['篮球', '足球', '跑步', '羽毛球', '乒乓球', '网球','排球','台球'],
    index1: '',
    array2:['男','女'],
    index2: '',
    loc_flag:true,
    loc: '',
    loc_name: '',
    timenow:datanow,
    addinfo:false
  },
  /*detailchange:function(e){
    this.setData({
      addinfo:e.detail.value
    })
  },*/
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(datanow)
    console.log(app.globalData.userInfo)
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
  
  },

  sport_type: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },

  sex: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value) 
    this.setData({
      index2: e.detail.value
    })
  },

  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },


  formSubmit: function (e) {
    //console.log(app.globalData.userInfo)
    if (!app.globalData.userInfo)
    {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    else{
    if(!e.detail.value.limit||!e.detail.value.phone_number){
      console.log(111);
      wx.showToast({
        title: "请完善信息",
        icon:'none'
      })
    }
    else
    {
      var formId = e.detail.formId
      console.log(formId)
      var that = this;
      wx.getUserInfo({
        withCredentials: true,
        success: function (res) {
          console.log(res)
          that.setData({
            userInfo: res.userInfo
          })
        }
      })
      console.log(e)
      wx.request({
        url: 'https://jane.applinzi.com/invite.php',
        data: {
          sport: e.detail.value.sport,
          sex: e.detail.value.sex,
          age: e.detail.value.age,
          adress: e.detail.value.adress,
          latitude: e.detail.value.lat,
          longitude: e.detail.value.lon,
          time: e.detail.value.time,
          limit: e.detail.value.limit,
          phone_number:e.detail.value.phone_number,
          nickName: app.globalData.userInfo.nickName,
          avatarUrl: app.globalData.userInfo.avatarUrl,
          openid: app.openid,
          formId: formId
        },
        method: 'GET',
      })
      wx.showToast({
        title: "已提交"
      })
    }
  }
  },
  formReset: function (e) {
    console.log('form发生了reset事件',e.detail.value)
    this.setData({
      index1:'',
      index2:'',
      loc:'',
      loc_name:'',
      loc_flag:true,
      time:'',
      limit:true
    })
    wx.showToast({
      title: "已重置"
    })
  },
  location:function(e){
    var that=this
            wx.chooseLocation({
              success: function(res) {
                console.log(res.name)   //这里可以正常获取位置数据
                console.log(res.latitude)
                that.setData({
                    loc_name:res.name,
                    loc_flag:false,
                    latitude:res.latitude,
                    longitude:res.longitude
                })
            },
          })
    },
  right:function()
  {
    wx.openSetting({
      success: (res) => {

        res.authSetting = {
          "scope.userInfo": true,
          "scope.userLocation": true
        }

      }
    })
  }
})