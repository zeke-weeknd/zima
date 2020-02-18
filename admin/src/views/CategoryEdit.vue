<template>
    <div>
        <h1>{{id?'编辑':'新建'}}分类</h1>
            <el-form @submit.native.prevent="save">
                <el-form-item label="上级分类">
                    <el-select v-model="model.parent">
                        <el-option 
                        v-for="item in parents"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id">
                        
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input v-model="model.name"></el-input>
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
                await this.$http.put(`rest/categories/${this.id}`,this.model)//修改
            }else{
                await this.$http.post('rest/categories',this.model)//新增
            }
            this.$router.push('/categories/list')//新增完之后跳转到列表显示的页面
                this.$message({
                    type:'success',
                    message:'保存成功'
                })
            
        },
        async fetch(){//获取分类的详情
            const res = await this.$http.get(`rest/categories/${this.id}`)
            this.model = res.data
        },
        async fetchParents(){//获取分类的详情
            const res = await this.$http.get(`rest/categories`)
            this.parents = res.data
        }
    },
    created(){
        this.fetchParents()
        this.id && this.fetch()//如果id存在执行fetch这个方法
    }
}
</script>