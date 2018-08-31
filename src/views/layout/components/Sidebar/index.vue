<template>
        <el-scrollbar wrapClass="scrollbar-wrapper">
             <el-menu
              :default-active="$route.path"
              :collapse="isCollapse"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
              >
                <sidebar-item :routes="constantRouterMap" />
            </el-menu>
        </el-scrollbar>
</template>
<script>
import { asyncRouterMap, constantRouterMap } from '@/router'
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
export default {
  data() {
      return {
        constantRouterMap: constantRouterMap,
      }
  },
  computed: {
      ...mapGetters([
        'sidebar',
      ]),
      isCollapse() {
        return !this.sidebar.opened
    }
  },
  mounted() {
  },
  methods: {
       
  },
  components: {
     SidebarItem
  },
}
</script>
