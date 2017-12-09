<template>
    <div class="layout-login">
       <div class="layout-main">
           <el-form ref="form" :model="form" label-width="80px">
               <el-form-item label="用户名">
                   <el-input v-model="form.name"></el-input>
               </el-form-item>
               <el-form-item label="密码">
                   <el-input type="password" v-model="form.password"></el-input>
               </el-form-item>
               <el-form-item>
                   <el-button type="primary" @click="onSubmit">登录</el-button>
               </el-form-item>
           </el-form>
       </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    password:''
                }
            }
        },
        methods: {
            onSubmit() {
                $.ajax({
                    url:'http://47.94.134.239:8080/rest/service/routing/nouser/SelectUserInfoBusiService',
                }).done((data)=> {
                    console.log(data);
                    this.$router.push({ path: '/index' });
                })
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
.layout-login{
    background: #f0f2f5;
    background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
    width: 100%;
    min-height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    padding: 110px 0 144px 0;
    position: relative;
}
.layout-main{
    width: 368px;
    margin: 100px auto 0 auto;
}
.el-button{
    width: 288px;
}
</style>