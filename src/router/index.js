import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Index from '@/view/index'
import List from '@/view/list'
import Detail from '@/view/detail'
Vue.use(Router);

export default new Router({
    mode:'hash',
    routes: [
        {
            path:'/login',
            name: 'login',
            component:Login
        },
        {
            path:'/index',
            name: 'index',
            component:Index
        },
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail
        }
    ]
})
