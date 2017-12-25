var app = getApp()
Page({
  data: {

  },
  // 生命周期函数--监听页面加载
  onLoad: function () {
    this.setData({
      welcomeImg: 'http://p1.pstatp.com/origin/2ecd00028b2247bd07ad',
    })
  },

  onReady: function () {
    wx.redirectTo({
      url: '../index/index'
    })
  }

}) 