import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/authredirect']

router.beforeEach( (to,from,next) => {
    NProgress.start()
    // console.log(getToken())
    if (getToken()) {
      
        if (to.path == '/login') {
            next({ path: '/' })
            NProgress.done()
        }else{
            if (store.getters.roles.length === 0) {
                store.dispatch('GetUserInfo').then(res => { 
                    //    console.log(res)
                       next({...to,replace: true})
                    // next()
                }).catch(err => {
                    next({path: '/'})
                })
            }else{
                next();
            }
        }
    }else{
       /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
        next()
      } else {
        next('/login') // 否则全部重定向到登录页
        NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
      }
    }

})
router.afterEach(() => {
    NProgress.done() // finish progress bar
  })
