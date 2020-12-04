var postsData = require("../../../data/posts-data");

Page({
  data: {
    postData: {},
    isCollectActive: "",
    isShareActive: ""
  },
  onLoad: function (options) {
    // 本页面数据
    var postId = options.id;
    var postData = postsData.postList[postId];

    // 几天前
    var time = new Date()*1 - new Date(postData.date)*1;
    var until = parseInt(time/86400000);
    if(until<=7) {
      postData.date = parseInt(time/86400000) + "天前";
    }

    // 读取缓存，是否收藏或分享
    var data = wx.getStorageSync('post'); // 获取缓存
    var isCollectActive = data.collect == true ? "active" : ""; // 点击为active，再次点击为""
    var isShareActive = data.share == true ? "active" : ""; // 点击为active，再次点击为""

    // 绑定数据
    this.setData({
      ...postData,
      isCollectActive: isCollectActive,
      isShareActive: isShareActive
    });
  },

  /*-- 点击收藏 --*/
  CollectClick () {
    // 修改缓存
    var data = wx.getStorageSync('post'); // 获取缓存
    data.collect = data.collect == true ? false : true; // 点击为true，再次点击为false
    wx.setStorageSync('post', data); // 缓存数据

    // 修改class
    var isCollectActive = data.collect == true ? "active" : ""; // 点击为active，再次点击为""
    this.setData({
      isCollectActive: isCollectActive // 绑定数据
    })
  },

  /*-- 点击分享 --*/
  ShareClick () {
    // 修改缓存
    var data = wx.getStorageSync('post'); // 获取缓存
    data.share = data.share == true ? false : true; // 点击为true，再次点击为false
    wx.setStorageSync('post', data); // 缓存数据

    // 修改class
    var isShareActive = data.share == true ? "active" : ""; // 点击为active，再次点击为""
    this.setData({
      isShareActive: isShareActive // 绑定数据
    })
  }
})