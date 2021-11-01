<template>
  <el-table
      :data="tableData"
      max-height="550"
      :border="false"
      stripe>
    <el-table-column
        prop="login"
        label="姓名"
        width="200">
      <template slot-scope="scope">
        <div class="item">
          <el-avatar shape="square" :size="40" :src="scope.row.avatar_url"></el-avatar>
          <a class="item__name" target="_blank" :href="scope.row.html_url">{{ scope.row.login }}</a>
        </div>
      </template>
    </el-table-column>
    <el-table-column
        prop="contributions"
        label="贡献次数"
        width="100">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'

export default {
  name: "githubContributionList",
  props: {
    // 仓库所属空间地址(企业、组织或个人的地址path)
    owner: {
      type: String,
      default: "umicro"
    },
    // 仓库路径(path)
    repo: {
      type: String,
      default: "uView"
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  created() {
    axios.get(`https://api.github.com/repos/${this.owner}/${this.repo}/contributors`).then(response => {
      this.tableData = response.data
    });
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;

  &__name {
    margin-left: 10px;
  }
}
</style>
