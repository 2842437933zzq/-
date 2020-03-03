var that;
// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  click: function () {
    let plugin = requirePlugin('routePlan');
    let key = 'AQBBZ-5NHCX-SDT4D-Z6B7K-M6U52-VHBRU';  //使用在腾讯位置服务申请的key
    let referer = '小序天气';   //调用插件的app的名称
    let endPoint = JSON.stringify({  //终点
      'name': ' ',
      'latitude': that.data.location.latitude,
      'longitude': that.data.location.longitude
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint + '&navigation=1'
    });

  },


  // 自定义了一个获取自身位置的方法
  getMyLocation: function () {
    // 获取经纬度的api
    wx.getLocation({
      // 需要权限控制
      success: res => {
        //把经纬度传到data中
        that.setData({
          location: res
        })

        console.log(that.data.location)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;

    // 调用获取自身位置的方法
    that.getMyLocation();
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