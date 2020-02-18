<template>
    <div>
        <h1>{{id?'编辑':'新建'}}管理员</h1>
            <el-form @submit.native.prevent="save">
                
                <el-form-item label="管理员">
                    <el-input v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="text" v-model="model.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">保存</el-button>
                </el-form-item>
            </el-form>   
    </div>
</template>
<script>
export default {
    props:{
        id:{}
    },
    data(){
        return{
            model:{},
            parents:[]//父级选项
        }
    },
    methods:{
        async save(){
            if(this.id){
                console.log(this.id)
                await this.$http.put(`rest/admin_users/${this.id}`,this.model)//修改
            }else{
                await this.$http.post('rest/admin_users',this.model)//新增
            }
            this.$router.push('/admin_users/list')//新增完之后跳转到列表显示的页面
                this.$message({
                    type:'success',
                    message:'保存成功'
                })
            
        },
        async fetch(){//获取分类的详情
            const res = await this.$http.get(`rest/admin_users/${this.id}`)
            this.model = res.data
        },
        async fetchParents(){//获取分类的详情
            const res = await this.$http.get(`rest/admin_users`)
            this.parents = res.data
        }
    },
    created(){
        this.fetchParents()
        this.id && this.fetch()//如果id存在执行fetch这个方法
    }
}
</script>