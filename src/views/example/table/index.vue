<template>
  <transition name="fade" mode="out-in">
    <!-- <keep-alive :include='cachedViews'> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </transition>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
      
  },
  mounted() {
      
  }
}
</script>
<style lang="scss" scoped>
</style>