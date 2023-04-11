import * as echarts from '../../components/ec-canvas/echarts';

let chart = null;

function initChart(canvas: any, width: any, height: any, dpr: any) {
  chart = echarts.init(canvas, undefined, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
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
        name: '预算'
      }
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function () {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    echarts,
    ec: {
      onInit: initChart
    }
  },

  onReady() {
    
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
      console.log("echarts onReady !!");
    }, 2000);
  }
});
