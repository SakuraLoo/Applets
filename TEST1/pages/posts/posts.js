// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2019年12月3日"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content = {
      date: "2020/11/27",
      title: "冰山撞岛屿，并不是一场美丽邂逅。",
      img: "https://p4.img.cctvpic.com/photoworkspace/2020/11/26/2020112611331486119.jpg",
      text: "巨型冰山A68于2017年从南极拉森-C冰架上脱离，现在由这座冰山分裂出的A68a冰山正朝着大西洋南部的野生动物天堂南乔治亚岛漂移，将于本月底或下月初漂移至位于大西洋的南乔治亚岛近海，并且有可能会与乔治亚岛发生碰撞。",
      viewNum: "112",
      collectNum: "96",
      authorPhoto: "https://p4.img.cctvpic.com/photoworkspace/2020/11/26/2020112611331486119.jpg"
    }
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