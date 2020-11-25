// pages/booking/booking.js
Page({

  /**
   * Page initial data
   */
  data: {
    locations: ['Baoshan', 'Changning', 'Hongkou', 'Huangpu', 'Jing\'an', 'Minhang', 'Pudong', 'Putuo', 'Qingpu', 'Songjiang', 'Xuhui', 'Yangpu'],
    location: [
      {
        id: 0,
        name: 'Baoshan'
      },
      {
        id: 1,
        name: 'Changning'
      },
      {
        id: 2,
        name: 'Hongkou'
      },
      {
        id: 3,
        name: 'Huangpu'
      },
      {
        id: 4,
        name: "Jing'an"
      },
      {
        id: 5,
        name: 'Minhang'
      },
      {
        id: 6,
        name: 'Pudong'
      },
      {
        id: 7,
        name: 'Putuo'
      },
      {
        id: 8,
        name: "Qingpu"
      },
      {
        id: 9,
        name: 'Songjiang'
      },
      {
        id: 10,
        name: 'Xuhui'
      },
      {
        id: 11,
        name: 'Yangpu'
      }
    ],

    events: ['Birthday', 'Wedding', 'Funeral', 'Family Function'],
    event: [
      {
        id: 0,
        name: 'Birthday'
      },
      {
        id: 1,
        name: 'Wedding'
      },
      {
        id: 2,
        name: 'Funeral'
      },
      {
        id: 3,
        name: 'Family Function'
      }
    ],

    roles: ['Boyfriend', 'Friend', 'Husband', 'Partner'],
    role: [
      {
        id: 0,
        name: 'Boyfriend'
      },
      {
        id: 1,
        name: 'Friend'
      },
      {
        id: 2,
        name: 'Husband'
      },
      {
        id: 3,
        name: 'Partner'
      }
    ],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})