<template>
    <el-container style="height: 100vh">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['3']" unique-opened :default-active="$router.path">
          <el-submenu index="1" >
            <template slot="title"><i class="el-icon-message"></i>内容管理</template>
            <!--管理分类-->
            <el-menu-item-group>
              <template slot="title">分类</template>
              <el-menu-item index="/categories/create">新建分类</el-menu-item>
              <el-menu-item index="/categories/list">分类列表</el-menu-item>
            </el-menu-item-group>
            <!-- 材料管理 -->
            <el-menu-item-group>
              <template slot="title">精英材料</template>
              <el-menu-item index="/items/create">新建材料</el-menu-item>
              <el-menu-item index="/items/list">材料列表</el-menu-item>
            </el-menu-item-group>
            <!-- 干员管理 -->
            <el-menu-item-group>
              <template slot="title">干员</template>
              <el-menu-item index="/operators/create">资料录入</el-menu-item>
              <el-menu-item index="/operators/list">干员图鉴</el-menu-item>
            </el-menu-item-group>
            <!-- 文章管理 -->
            <el-menu-item-group>
              <template slot="title">文章</template>
              <el-menu-item index="/articles/create">新建文章</el-menu-item>
              <el-menu-item index="/articles/list">文章列表</el-menu-item>
            </el-menu-item-group>
            
            
          </el-submenu>


          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>运营管理</template>
            <!-- 广告位管理 -->
            <el-menu-item-group>
              <template slot="title">广告位</template>
              <el-menu-item index="/ads/create">新建广告位</el-menu-item>
              <el-menu-item index="/ads/list">广告位列表</el-menu-item>
            </el-menu-item-group> 
          </el-submenu>


          <el-submenu index="3">
            <template slot="title"><i class="el-icon-message"></i>系统设置</template>
            <!--管理分类-->
            <el-menu-item-group>
              <template slot="title">管理员</template>
              <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
              <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>
    
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <router-view>
              
          </router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>