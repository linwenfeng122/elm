<template>
 <el-breadcrumb class="app-breadcrumb" separator="/">
  <transition-group name="breadcrumb">
    <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path" v-if='item.meta.title'>
       <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{item.meta.title}}</span>
      <router-link v-else :to="item.path">{{item.meta.title}}</router-link>
    </el-breadcrumb-item>
  </transition-group>
</el-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      levelList: null
    }
  },
  mounted() {
      this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
       let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      //  console.log('breadcrumb.vue----')
      //  console.log(first.meta)
      if (first && first.name !== 'dashboard') {
        matched = [...[{ path: '/dashboard', meta: { title: 'dashboard' }}],...matched]
      }
      this.levelList = matched
    }
  },
  watch: {
    $route() {
       this.getBreadcrumb()
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
     transition: all .5s;
  }
  .breadcrumb-enter,.breadcrumb-leave-to{
    opacity: 0;
    transform: translateX(20px);
  }
</style>