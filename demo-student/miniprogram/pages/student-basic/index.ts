import * as echarts from '../../components/ec-canvas/echarts';
let chart = null;
function initRadarChart(canvas: any, width: any, height: any, dpr: any) {
    chart = echarts.init(canvas, undefined, {
      width: width,
      height: height,
      devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);
  
    chart.setOption(getRadarOption());
    return chart;
};
function initLineChart(canvas: any, width: any, height: any, dpr: any) {
  chart = echarts.init(canvas, undefined, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  chart.setOption(getLineOption());
  return chart;
};

function getRadarOption() {
  return {
    backgroundColor: "#ffffff",
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle',
      indicator: [{
        name: '语文',
        max: 150
      },
      {
        name: '数学',
        max: 150
      },
      {
        name: '英语',
        max: 150
      },
      {
        name: '物理',
        max: 100
      },
      {
        name: '化学',
        max: 100
      },
      {
        name: '生物',
        max: 100
      }
      ]
    },
    series: [{
      name: '第一个月考',
      type: 'radar',
      data: [{
        value: [99, 110, 100, 75, 77, 20],
        name: '预算',
        label: {
          show: true
        }
      }
      ]
    }]
  };
}

function getLineOption() {
  return {
    legend: {
      data: ['数学', '语文', '英语'],
      top: 20,
      left: 'center',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['第一次月考', '第二次月考', '第三次月考','第四次月考'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: '总分',
      type: 'line',
      smooth: true,
      data: [492, 511, 544, 519]
    },{
      name: '数学',
      type: 'line',
      smooth: true,
      data: [70, 76, 115, 130]
    }, {
      name: '语文',
      type: 'line',
      smooth: true,
      data: [112, 90, 81, 135]
    }, {
      name: '英语',
      type: 'line',
      smooth: true,
      data: [110, 130, 131, 70]
    },
    {
      name: '物理',
      type: 'line',
      smooth: true,
      data: [70, 66, 61, 80]
    },
    {
      name: '化学',
      type: 'line',
      smooth: true,
      data: [60, 30, 67, 80]
    },
    {
      name: '生物',
      type: 'line',
      smooth: true,
      data: [70, 30, 81, 79]
    },
  ]
  };
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        echarts,
        ecRadar: {
          onInit: initRadarChart
        },
        ecLine: {
          onInit: initLineChart
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    onClickCall() {
      wx.makePhoneCall({
        phoneNumber: '188888888888' //仅为示例，并非真实的电话号码
      })
    },
    onClickHistoryListItem() {
      wx.navigateTo({url:'/pages/history-scores/index'});
    },
    onClickStudentCard() {
      wx.navigateTo({url:'/pages/student-detail/index'});
    }
})