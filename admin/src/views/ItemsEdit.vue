<template>
    <div>
        <h1>{{id?'编辑':'新建'}}材料</h1>
            <el-form @submit.native.prevent="save">
                <!-- <el-form-item label="上级分类">
                    <el-select v-model="model.parent">
                        <el-option 
                        v-for="item in parents"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id">
                        
                        </el-option>
                    </el-select>
                </el-form-item> -->
                <el-form-item label="名称">
                    <el-input v-model="model.name"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <el-upload
                      class="avatar-uploader"
                      :action="$http.defaults.baseURL + '/upload' "
                      :headers="getAuthHeaders()"
                      :show-file-list="false"
                      :on-success="afterUpload">
                      <img v-if="model.icon" :src="model.icon" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
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
            // parents:[]//父级选项
            
        }
    },
    methods:{
        async save(){
            if(this.id){
                console.log(this.id)
                await this.$http.put(`rest/items/${this.id}`,this.model)//修改
            }else{
                await this.$http.post('rest/items',this.model)//新增
            }
            this.$router.push('/items/list')//新增完之后跳转到列表显示的页面
                this.$message({
                    type:'success',
                    message:'保存成功'
                })
        },
        async fetch(){//获取分类的详情
            const res = await this.$http.get(`rest/items/${this.id}`)
            this.model = res.data
        },

        afterUpload(res){//上传图片后将路径设置为model.icon
            this.$set(this.model,'icon',res.url)
        }


    },
    created(){
        this.id && this.fetch()//如果id存在执行fetch这个方法
    }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>