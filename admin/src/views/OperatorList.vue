<template>
    <div>
        <h1>干员列表</h1>
            <el-table :data="items">
                <el-table-column prop="_id" label="ID" width="220"></el-table-column>
                <el-table-column prop="name" label="干员名称"></el-table-column>
                <el-table-column prop="star" label="星级"></el-table-column>
                <el-table-column prop="avatar" label="头像">
                    <template slot-scope="scope">
                       <img :src="scope.row.avatar" style="height:50px">
                     </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="180">
                    <template slot-scope="scope" >
                      <el-button type="text" size="small" @click="$router.push(`/operators/edit/${scope.row._id}`)">编辑</el-button>
                      <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[]
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get('rest/operators')
            this.items = res.data
        },
        async remove(row){
            this.$confirm(`是否删除该分类 "${row.name}"`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async() => {
                await this.$http.delete(`rest/operators/${row._id}`)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                this.fetch()
            })
            
        }
    },
    created(){//生命周期函数
        this.fetch()
    }
}
</script>