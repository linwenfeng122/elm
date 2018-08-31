<template>
  <div class="dashboard">
     index
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="柱形图" name="first"></el-tab-pane>
        <el-tab-pane label="统计图" name="second"></el-tab-pane>
     </el-tabs>
     <button @click="test">测试</button>
      <button @click="testType">测试类型切换</button>
     <chart :options="options"  :chart-type="chartType" />
  </div>
</template>
<script>
import chart from '@/components/Echart'
export default {
  data() {
    return {
    activeName: 'first',
    chartType: 'bar',
     options: {
        title: {
            text: 'ECharts 入门示例'
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
             data: [5, 20, 36, 10, 20, 50]
        }]
      },
       options_line: {
        title: {
            text: 'ECharts 入门示例'
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
             data: [5, 20, 36, 10, 20, 50]
        }]
      }
    }
  },
  computed: {
      
  },
  mounted() {
      
  },
  methods: {
       test() {
         this.options.series[0].data =  [5, 40,30,20,50,60]
       },
       testType() {
          this.chartType = 'line';
          this.options = this.options_line
          console.log(this.options)
       },
       handleClick(tab, event) {
        console.log(this.activeName,tab.name, event);
      }
  },
  components: {
     chart
  },
}
</script>
<style lang="scss" scoped>
  .dashboard {
    padding: 20px;
  }
</style>