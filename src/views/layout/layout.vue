<template>
  <div class="layout" :class="classObj">
     <sidebar class="sidebar-container" />
      <div class="main-container">
          <navbar />
          <tags-view />
          <app-main />
      </div>

    
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain,TagsView} from "./components"
export default {
  name: 'layout',
  data () {
    return {

    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  components: {
     Navbar, 
     Sidebar,
     TagsView,
     AppMain
  }
}
</script>

