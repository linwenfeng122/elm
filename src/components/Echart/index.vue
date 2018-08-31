<template>
  <div class="charts" ref="charts">
     
  </div>
</template>
<script>
var echarts = require('echarts/lib/echarts');
require('echarts/lib/component/title');
  require('echarts/lib/chart/line');
export default {
  props: {
      options: {
          type: Object,
          default: function() {
              return {}
          }
      },
      chartType: {
          type: String,
          default: 'line'
      },
      toolTip: {
          type: Boolean,
          default: false
      }
  },
  data() {
    return {
      myChart: null
    }
  },
  computed: {
      
  },
  mounted() {
        this.selectChartType();
        this.loadOtherModel();
         // 基于准备好的dom，初始化echarts实例
         if (!this.myChart) {
               this.myChart = echarts.init(this.$refs.charts);
         }
          this.myChart.setOption( this.options);
  },
  methods: {
       selectChartType()  {
           switch (this.chartType) {
               case 'bar':
                   require('echarts/lib/chart/bar');
                   break;
               case 'line':
                   require('echarts/lib/chart/line');
                   break;
              case 'pie':
                   require('echarts/lib/chart/pie');
                   break;
           } 
       },
       loadOtherModel() {
          const {toolTip} = this;
          if (toolTip) {
              require('echarts/lib/component/tooltip');
          }
       }
  },
  watch: {
      options: {
          handler: function(newVal,oldVal) {
                this.selectChartType();
                this.myChart.setOption(this.options,true)
          },
          deep: true
      }
  }
}
</script>
<style lang="scss" scoped>
   .charts {
       width: 300px;
       height: 400px;
   }
</style>