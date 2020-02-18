<template>
    <div>
        <h1>{{id?'编辑':'新建'}}文章</h1>
            <el-form @submit.native.prevent="save">
                <el-form-item label="所属分类">
                    <el-select v-model="model.categories" multiple>
                        <el-option 
                        v-for="item in categories"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id">
                        
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="标题">
                    <el-input v-model="model.title"></el-input>
                </el-form-item>

                <el-form-item label="详情">
                    <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" native-type="submit">保存</el-button>
                </el-form-item>
            </el-form>   
    </div>
</template>
<script>
import { VueEditor } from "vue2-editor"

export default {
    components: {//给页面接一个子组件，就是富文本编辑阿奇
        VueEditor
    },
    props:{
        id:{}
    },
    data(){
        return{
            model:{},
            categories:[]//父级选项
        }
    },
    methods:{
        async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
          // An example of using FormData
          // NOTE: Your key could be different such as:
          // formData.append('file', file)
    
            const formData = new FormData();
            formData.append("file", file);

    
            const res = await this.$http.post('upload',formData)
            Editor.insertEmbed(cursorLocation, "image", res.data.url);
            resetUploader();  
        },
        async save(){
            if(this.id){
                console.log(this.id)
                await this.$http.put(`rest/articles/${this.id}`,this.model)//修改
            }else{
                await this.$http.post('rest/articles',this.model)//新增
            }
            this.$router.push('/articles/list')//新增完之后跳转到列表显示的页面
                this.$message({
                    type:'success',
                    message:'保存成功'
                })
            
        },
        async fetch(){//获取分类的详情
            const res = await this.$http.get(`rest/articles/${this.id}`)
            this.model = res.data
        },
        async fetchCategories(){//获取分类的详情
            const res = await this.$http.get(`rest/categories`)
            this.categories = res.data
        }
    },
    created(){
        this.fetchCategories()
        this.id && this.fetch()//如果id存在执行fetch这个方法
    },


    
  

}
</script>