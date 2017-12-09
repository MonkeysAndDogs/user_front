<template>
    <div>
        <div>{{ msg }}</div>
        <button @click="click">btn</button>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input:'',
                msg: 'qwe template'
            }
        },
        methods:{
            click(){
                console.log($);
            }
        }
    }
</script>

<style scoped>

</style>