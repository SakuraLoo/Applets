var postsData = require("../../../data/posts-data");

Page({
  data: {
    postData: {},
    collected: "",
    shared: ""
  },
  onLoad: function (options) {
    // 本页面的id
    var postId = options.id;
    this.data.currentPostId = postId;

    var postData = postsData.postList[postId]; // 本页面数据（来自于本地js）

    // "发表于几天前"
    var time = new Date()*1 - new Date(postData.date)*1;
    var until = parseInt(time/86400000);
    if(until<=7) {
      postData.date = parseInt(time/86400000) + "天前";
    }

    // 收藏
    var postsCollected = wx.getStorageSync('postsCollected'); // 读取缓存
    if(postsCollected) {
      var postsCollected = postsCollected[postId];
      if(postsCollected) {
        this.setData({ // 绑定数据
          collected: postsCollected,
        })
      }
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('postsCollected', postsCollected); // 修改缓存
    }

    // 绑定数据
    this.setData({ 
      ...postData
    })
  },

  /*-- 点击收藏 --*/
  CollectClick () {
    var postsCollected = wx.getStorageSync('postsCollected'); // 获取缓存
    var collected = postsCollected[this.data.currentPostId];
    collected = !collected; // 点击改变true/false
    postsCollected[this.data.currentPostId] = collected;
    wx.setStorageSync('postsCollected', postsCollected); // 修改缓存
    this.setData({collected}); // 绑定数据

    // // 提示信息
    // wx.showToast({
    //   title: collected ? "收藏成功" : "取消成功"
    // })

    wx.showModal({
      title: "收藏",
      content: "是否收藏",
      showCancel: true,
      cancelText: "不收藏",
      confirmText: "收藏",
      cancelColor: "#333",  
      confirmColor: "#405f80",
      success:function() {
      }
    })
  },
  
  /*-- 点击分享 --*/
  ShareClick () {
  }
})