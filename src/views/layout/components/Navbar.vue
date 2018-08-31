<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :is-active="sidebar.opened" />
    <breadcrumb class="breadcrumb-container"></breadcrumb>
     <div class="right-menu">
       <lang-select />
     </div>
  </el-menu>

</template>
<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import  LangSelect from '@/components/LangSelect'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed: {
      ...mapGetters([
        'sidebar',
      ])
  },
  methods: {
       toggleSideBar() {
          this.$store.dispatch('toggleSideBar')
       }
  },
  components: {
     Hamburger,
     Breadcrumb,
     LangSelect
  },
}
</script>
<style lang="scss" scoped>
   .navbar{
     height: 50px;
     line-height: 50px;
     border-radius: 0px !important;
     .hamburger-container {
       line-height: 58px;
       height: 50px;
       float: left;
       padding: 0 10px;
      }
      .breadcrumb-container{
        float: left;
      }
       .right-menu {
          float: right
       }
   }
</style>