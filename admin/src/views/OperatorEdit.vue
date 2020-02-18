<template>
    <div>
        <h1>{{id?'编辑':'录入'}}干员</h1>
            <el-form @submit.native.prevent="save">

               <el-tabs value="skills" type="border-card">
                   <el-tab-pane label="基本信息" name="basic">

                        <el-form-item label="名称">
                            <el-input v-model="model.name"></el-input>
                        </el-form-item>
                        <el-form-item label="头像">
                            <el-upload
                              class="avatar-uploader"
                              :action="$http.defaults.baseURL + '/upload' "
                              :show-file-list="false"
                              :on-success="afterUpload">
                              <img v-if="model.avatar" :src="model.avatar" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>

                        <!-- 星级 -->
                        <el-form-item label="星级" >
                            <el-rate :max=6  style="margin-top:0.6rem" show-score v-model="model.star" ></el-rate>
                        </el-form-item>

                        <!-- tag -->
                        <el-form-item label="类型">
                            <el-select v-model="model.categories" multiple>
                                <el-option v-for="item of categories"
                                :key="item._id"
                                :label="item.name"
                                :value="item._id"></el-option>
                            </el-select>
                        </el-form-item>

                        <!-- 干员定位 -->
                        <el-form-item label="干员定位">
                            <el-select v-model="model.job">
                                <el-option v-for="item of categories"
                                :key="item._id"
                                :label="item.name"
                                :value="item._id"></el-option>
                            </el-select>
                        </el-form-item>

                        <!-- 干员属性 -->
                        <el-form-item label="位置">
                            <el-select v-model="model.scores.position">
                                <el-option value="高台" label="高台"></el-option>
                                <el-option value="地面" label="地面"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="攻击速度">
                            <el-select v-model="model.scores.speed">
                                <el-option value="快" label="快"></el-option>
                                <el-option value="很快" label="很快"></el-option>
                                <el-option value="慢" label="慢"></el-option>
                                <el-option value="很慢" label="很慢"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="伤害类型">
                            <el-select v-model="model.scores.damage">
                                <el-option value="法术伤害" label="法术伤害"></el-option>
                                <el-option value="物理伤害" label="物理伤害"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="技能数目">
                            <el-rate :max=3  style="margin-top:0.6rem" show-score v-model="model.scores.skills" ></el-rate>
                        </el-form-item>

                        <!-- 精英材料 -->
                        <el-form-item label="精一材料" >
                            <el-select v-model="model.items1" multiple >
                                <el-option v-for="item of items"
                                :key="item._id"
                                :label="item.name"
                                :value="item._id"></el-option>
                            </el-select>
                        </el-form-item>

                        <!-- 使用技巧 -->
                        <el-form-item label="使用技巧">
                            <el-input type="textarea" v-model="model.usageTips" ></el-input>
                        </el-form-item>
                        <!-- 部署思路 -->
                        <el-form-item label="部署思路">
                            <el-input type="textarea" v-model="model.battleTips" ></el-input>
                        </el-form-item>

                   </el-tab-pane>
                   <el-tab-pane label="技能" name="skills">
                       <el-button type="text" @click="model.skills.push({})"><i class="el-icon-plus"></i>添加技能</el-button>
                       <el-row type="flex" style="flex-wrap:wrap">
                           <el-col :md="12" v-for="(item,i) in model.skills" :key="i" style="padding:20px;border:1px solid #fafafa">

                               <!-- 编辑技能 -->
                               <el-form-item label="名称">
                                   <el-input v-model="item.name"></el-input>
                               </el-form-item>
                               <el-form-item label="图标">
                                   <el-upload
                                    class="avatar-uploader"
                                    :action="$http.defaults.baseURL + '/upload' "
                                    :show-file-list="false"
                                    :on-success="res => $set(item,'icon',  res.url)"
                                    >
                                    
                                        <img v-if="item.icon" :src="item.icon" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                               </el-form-item>
                               <el-form-item label="描述">
                                   <el-input type="textarea" v-model="item.description"></el-input>
                               </el-form-item>
                               <el-form-item label="使用技巧">
                                   <el-input type="textarea" v-model="item.tips"></el-input>
                               </el-form-item>
                               <el-form-item>
                                   <el-button size="small" type="danger" 
                                   @click="model.skills.splice(i,1)">删除</el-button>
                               </el-form-item>
                           </el-col>
                       </el-row>
                   </el-tab-pane>
               </el-tabs>
                


                <el-form-item style="margin-top: 1rem">
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
                name:'',
                avatar:'',
                scores:{},
                items1:{},
            },
            // parents:[]//父级选项
            categories:[],
            items:[]
        }
    },
    methods:{
        async save(){
            if(this.id){
                // console.log(this.id)
                await this.$http.put(`rest/operators/${this.id}`,this.model)//修改
            }else{
                await this.$http.post('rest/operators',this.model)//新增
            }
            this.$router.push('/operators/list')//新增完之后跳转到列表显示的页面
                this.$message({
                    type:'success',
                    message:'保存成功'
                })
        },
        async fetch(){//获取分类的详情
            const res = await this.$http.get(`rest/operators/${this.id}`)
            this.model = Object.assign({},this.model,res.data)
        },
        async fetchCategories(){//获取干员类型
            const res = await this.$http.get(`rest/categories`)
            this.categories = res.data
        },
        async fetchItems(){//获取材料
            const res = await this.$http.get(`rest/items`)
            this.items = res.data
        },

        afterUpload(res){//上传图片后将路径设置为model.icon
            this.$set(this.model,'avatar',res.url)
        },



    },
    created(){
        this.fetchCategories()
        this.fetchItems()
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
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
  }
  .avatar {
    width: 5rem;
    height: 5rem;
    display: block;
  }
</style>