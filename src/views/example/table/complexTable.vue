<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="5">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6"> 
        <el-button type="primary" @click="search">搜索按钮</el-button>
      </el-col>
    </el-row>
     <el-table
      :data="tableData"
      ref="table"
      border
      style="width: 100%"
       @selection-change="handleSelectionChange"
      >
       <el-table-column
           type="selection"
           width="55"
          align="center" />
       <el-table-column
        prop="date"
        label="日期"
        width="180"
         align="center" />
        <el-table-column
        prop="name"
        label="姓名"
        width="180" 
         align="center" />
         <el-table-column
        prop="address"
        label="地址"
         align="center" />
       <el-table-column
        fixed="right"
        label="操作"
        width="180"
         align="center" >
          <template slot-scope="scope">
            <!-- <div class="operate"> -->
                 <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                  <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                       移除
                  </el-button>
            <!-- </div> -->
          
          </template>
         </el-table-column>
     </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
       multipleSelection: [],
       options: [{
          value: '黄金糕',
        }, {
          value: '双皮奶',
        }, {
          value: '蚵仔煎',
        }, {
          value: '龙须面',
        }, {
          value: '北京烤鸭',
        }],
        value: '',
       tableData: [{
            id: '1',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
             id: '2',
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
             id: '3',
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
             id: '4',
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }]
    }
  },
  computed: {
      
  },
  mounted() {
      this.tableData.forEach(item => {
         this.$refs.table.toggleRowSelection(item,true)
      });
  },
  methods: {
       search() {
         console.log("搜索")
       },
       handleClick(row) {
          console.log(row);
       },
        deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleSelectionChange(selection) {
         this.multipleSelection = selection;
        //  console.log(this.multipleSelection)
      }
  },
  components: {
     
  },
}
</script>
<style lang="scss" scoped>
  .app-container {
    padding: 20px;
     .operate {
        display: flex;
        justify-content: center;
        align-items: center;
     }
  }
   .el-row {
     margin-bottom: 20px;
   }
  // div  /deep/ .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  //          background-color: #fff;
  //          border-color: #dcdfe6;
  //    }
</style>