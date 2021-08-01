//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    animationData: {},
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    cardInfoList: [{
      cardUrl: '../../image/2.jpg',
      cardInfo: {
        cardTitle: '伴我同行',
        cardInfoMes: ['生命在于运动','运动是一切生命的源泉','运动是健康的源泉，也是长寿的秘诀']
      }
    }, {
        cardUrl: '../../image/3.jpg',
      cardInfo: {
        cardTitle: '伴我同行',
        cardInfoMes: ['生命在于运动', '运动是一切生命的源泉', '运动是健康的源泉，也是长寿的秘诀']
      }
    }, {
        cardUrl: '../../image/4.jpg',
      cardInfo: {
        cardTitle: '伴我同行',
        cardInfoMes: ['生命在于运动', '运动是一切生命的源泉', '运动是健康的源泉，也是长寿的秘诀']
      }
    }]
  },
  //事件处理函数
  slidethis: function(e) {
    console.log(e);
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'cubic-bezier(.8,.2,.1,0.8)',
    });
    var self = this;
    this.animation= animation;
    this.animation.translateY(-420).rotate(-5).translateX(0).step();
    this.animation.translateY(62).translateX(25).rotate(0).step();
    this.setData({
      animationData: this.animation.export()
    });
    setTimeout(function() {
      var cardInfoList = self.data.cardInfoList;
      var slidethis = self.data.cardInfoList.shift();
      self.data.cardInfoList.push(slidethis);
      self.setData({
        cardInfoList: self.data.cardInfoList,
        animationData: {}
      });
    }, 350);
  },
  buythis: function(e) {
    console.log(e);
    app.buyDetail = this.data.cardInfoList[e.target.id];
    wx.navigateTo({
      url: '../first/first'
    });
  },
  onLoad: function () {
    var state = wx.getStorageSync('state')
    if (state != null) {
      console.log('11111')
    }
    else {
      wx.setStorageSync('state', 0)
    }
    if (app.globalData.userInfo) { }
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
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
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {

  }
})
