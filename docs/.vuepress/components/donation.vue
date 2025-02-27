<template>
  <div>
    做一个UI框架是一项庞大的工作，尤其是要多端适配，并且迅速跟进uniapp官方的更新，uView作者经常为此工作到深夜……
    <br />
    <br />
    uView文档和源码全部开源免费，如果您认为uView帮到了您的开发工作，您可以捐赠uView的研发工作，捐赠无门槛，哪怕是一杯可乐也好(相信这比打赏主播更有意义)。
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-3 col-xs-12 col-box">
          <div class="sponsor-type">
            <img src="/common/wechat.png" />
          </div>
        </div>
        <div class="col-sm-3 col-md-3 col-xs-12 col-box col-sm-offset-1">
          <div class="sponsor-type">
            <img src="/common/alipay.png" />
          </div>
        </div>
      </div>
    </div>

    以下为历史捐赠者名单，无论金额多少，我们都铭记在心，感谢您的支持！
    <br />
    如有遗漏，请及时联系QQ（1416956117），我们将及时更新。
    <br />
    <br />

    <div class="table-header">
      <el-select
        v-model="order"
        placeholder="排序方式"
        size="small"
        @change="fetchDonationList"
      >
        <el-option label="按日期排序" value="donationDate"></el-option>
        <el-option label="按金额排序" value="amount"></el-option>
      </el-select>
    </div>

    <el-table :data="donationList" border size="small">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="avatar" label="头像">
        <template #default="scope">
          <el-avatar
            v-if="scope.row.avatar"
            :src="baseUrl + scope.row.avatar"
            :size="40"
          ></el-avatar>
          <span v-else>--</span>
        </template>
      </el-table-column>
      <el-table-column prop="amount" label="金额(元)" />
      <el-table-column prop="donationDate" label="日期" />
      <el-table-column prop="platform" label="平台">
        <template #default="scope">
          <span v-if="scope.row.platform === 'wechat'">微信</span>
          <span v-else-if="scope.row.platform === 'alipay'">支付宝</span>
          <span v-else>其他</span>
        </template>
      </el-table-column>
      <el-table-column prop="comment" label="留言">
        <template #default="scope">
          <span>{{ scope.row.comment || '--' }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      donationList: [],
      baseUrl: 'https://api.uviewui.com',
      order: 'donationDate',
    };
  },
  created() {
    this.fetchDonationList();
  },
  methods: {
    fetchDonationList() {
      axios
        .get(`${this.baseUrl}/client/donation?order=${this.order}`)
        .then(({ data }) => {
          const {
            data: { list },
            code,
          } = data;
          if (code === 0) {
            this.donationList = list;
          }
        });
    },
  },
};
</script>

<style scoped>
.sponsor-type {
  text-align: center;
  margin: 30px 0;
  display: inline-block;
}

.sponsor-type img {
  max-width: 200px;
  display: inline-block;
}

.table-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

:deep(td),
:deep(th),
:deep(tr) {
  border: none;
}

:deep(table) {
  margin: 0;
}
</style>
