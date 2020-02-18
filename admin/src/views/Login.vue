<template>
    <div class="login-container">
        <el-card header="请先登录" class="login-card">
            <el-form @submit.native.prevent="login">
                <el-form-item>
                    <el-input label="用户名" v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input label="密码" type="password" v-model="model.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            model:{}
        }
    },
    methods:{
        async login(){
            // console.log(this.model)
            
            const res = await this.$http.post('login',this.model)
            localStorage.token = res.data.token
            this.$router.push('/')
            this.$message({
                type:'success',
                message:'登陆成功'
            })
        }
    }
}
</script>
<style lang="scss">
    .login-card{
        width: 25rem;
        margin: 10rem auto;
    }
</style>