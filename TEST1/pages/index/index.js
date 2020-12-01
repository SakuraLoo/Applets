//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 数据绑定：1.data
    text: true,
    thisString: ""
  },
  onLoad: function () {
    // 数据绑定：2.this.setData
    var postContent = {
      text: "World",
      postContent: {
        img: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
      },
      arr: [1,2,3],
      a: 1,
      b: 2,
      c: 3
    }
    this.setData(postContent);

    // 数据绑定：3.setData赋值给data
    var this_string = "在此赋值";
    this.setData({
      thisString: this_string
    })
  },

  // 绑定事件函数
  ClickMe (event) {
    console.log(event)
  }
})
