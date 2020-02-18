<template>
    <div>
        <h1>{{id?'编辑':'新建'}}广告位</h1>
            <el-form @submit.native.prevent="save">
                <el-form-item label="名称">
                    <el-input v-model="model.name"></el-input>
                </el-form-item>


                <el-form-item label="广告">
                     <el-button size="small" @click="model.items.push({})"><i class="el-icon-plus"></i>添加广告位信息</el-button>
                       <el-row type="flex" style="flex-wrap:wrap">
                           <el-col :md="24" v-for="(item,i) in model.items" :key="i" style="padding:20px;border:1px solid #fafafa">
                               <!-- 编辑技能 -->
                               <el-form-item label="广告位链接">
                                   <el-input v-model="item.url"></el-input>
                               </el-form-item>
                               <el-form-item label="广告位图片" style="margin-top:0.6rem">
                                   <el-upload
                                    class="avatar-uploader"
                                    :action="$http.defaults.baseURL + '/upload' "
                                    :show-file-list="false"
                                    :on-success="res => $set(item,'image',res.url)"
                                    >
                                        <img v-if="item.image" :src="item.image" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                               </el-form-item>
                              <el-form-item>
                                   <el-button size="small" type="danger" 
                                   @click="model.items.splice(i,1)">删除</el-button>
                               </el-form-item>
                           </el-col>
                       </el-row>
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
            model:{
                items:[]
            },
            
        }
    },
    methods:{
        async save(){
            if(this.id){
                console.log(this.id)
                await this.$http.put(`rest/ads/${this.id}`,this.model)//修改
            }else{
                await this.$http.post('rest/ads',this.model)//新增
            }
            this.$router.push('/ads/list')//新增完之后跳转到列表显示的页面
                this.$message({
                    type:'success',
                    message:'保存成功'
                })
            
        },
        async fetch(){//获取分类的详情
            const res = await this.$http.get(`rest/ads/${this.id}`)
            this.model = Object.assign({},this.model,res.data)
        },
        
    },
    created(){

        this.id && this.fetch()//如果id存在执行fetch这个方法
    }
}
</script>
<style scoped>
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
    min-width: 5rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
  }
  .avatar {
    min-width: 5rem;
    height: 5rem;
    display: block;
  }
</style>