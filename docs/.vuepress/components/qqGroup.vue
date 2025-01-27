<template>
  <div class="qq-group">
    <div class="qq-group__item" v-for="item in groupList" :key="item._id">
      {{item.title}}：
      <a :href="item.joinLink" target="_blank">{{item.groupNumber}}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'qqGroup',
  data() {
    return {
      groupList: []
    }
  },
  created() {
    axios.get(`https://api.uviewui.com/client/qq-group`).then(({ data }) => {
      const { data: { list }, code } = data
      if (code === 0) {
        this.groupList = list
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.qq-group {
  &__item {
    margin-top: 12px;
    font-size: 14px;
    color: #5e6d82;
  }
}
</style>
