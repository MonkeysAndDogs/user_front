import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

//全局ajax设置
$.ajaxSetup({
    type:'POST',
    async:true,
    cache:false,
    dataType:'json',
    timeout:100000,
    beforeSend:function(){
    },
    statusCode:{
        404:function() {
        },
        500:function () {
        },
        401:function() {
        },
        200:function () {
        }
    },
    fail:function(jqXHR, textStatus, errorThrown){
        if('timeout' === textStatus){
            alert('网络连接超时');
        }else if('abort' === textStatus){

        }else{
            alert('网络异常');
        }
    }
});