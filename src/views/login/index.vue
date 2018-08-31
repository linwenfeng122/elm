<template>
  <div>
     <el-input v-model="name" />
     <el-input v-model="psw" />
     <el-button type="primary" :loading="loading" @click="handleLogin">登录</el-button>
  </div>
</template>
<script>
import { fetchPost } from '@/api/login'
export default {
  data() {
    return {
       name: "",
       psw: "",
       loading: false
    }
  },
  computed: {
      
  },
  mounted() {
    //  this.a().then(() => {
    //      return fetchPost(this.username, this.password).then(response => {
    //            console.log(response)
    //             // resolve()
    //         }).catch(error => {
    //             // reject()
    //         })
       
    //  }).then(() => {
    //   console.log("success222")
    //  },() => {
    //    console.log("rejected222")
    //  })
  },
  methods: {
    // a() {
    //  return new Promise(function (resolve, reject) {
    //       resolve()
    //   })
    // },
    handleLogin() {
      this.loading = true
      this.$store.dispatch('LoginByUsername', {"username":this.name,"password": this.psw}).then(() => {
            //  console.log("resoved")
            this.loading = false
            this.$router.push({ path: '/' })
            //  console.log("123")
          },() => {
            this.loading = false
            this.$router.push({ path: '/' })
            //  console.log("123")
          })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>