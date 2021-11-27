<template>

  <el-row class="row">
    <el-col :span="80" v-for="(item, index) in tableData" :key="index" class="col">
      <el-card @click.native="open(item)" shadow="hover" :body-style="{ padding: '0px' }">
        <img :src="item.avatar_url" class="image">
        <div style="padding: 14px;">
          <span>{{ item.login }}</span>
          <div class="bottom clearfix">
            <div class="count">{{ item.contributions }} commit</div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'githubContributionList',
  props: {
    // 仓库所属空间地址(企业、组织或个人的地址path)
    owner: {
      type: String,
      default: 'umicro'
    },
    // 仓库路径(path)
    repo: {
      type: String,
      default: 'uView'
    }
  },
  methods: {
    open(item) {
      window.open(item.html_url, '_blank')
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

<style>

.row {
  max-height: 500px;
  overflow: auto;

}

.col {
  margin: 10px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.count {
  color: #208EFF;
  padding: 0;
  float: right;
}

.image {
  width: 100px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

</style>
