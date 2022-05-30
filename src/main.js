import Vue from 'vue'
import App from './App.vue'

// vue路由
import VueRouter from 'vue-router'
import router from './router'

// vuex插件
import store from './store'

// 样式组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)
new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
