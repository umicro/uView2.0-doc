<template>
  <div class="qq-group">
    <div class="qq-group__item" v-for="item in groupList" :key="item.groupID">
      {{item.name}}：
      <a :href="item.groupLink" target="_blank">{{item.groupID}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qqGroup',
  data() {
    return {
      groupList: [
        {
          name: 'uView QQ 频道',
          groupID: '点击进入',
          groupLink: 'https://pd.qq.com/s/1ljuh7'
        },
        {
          name: '官方1群',
          groupID: '1042987248',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=TNVbK65v'
        },
        {
          name: '官方2群',
          groupID: '249718512',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=kMJ5BR1V'
        },
        {
          name: '官方3群',
          groupID: '1129077272',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=EPxWGXa9'
        },
        {
          name: '官方4群',
          groupID: '1084514613',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=9N8XXkLk'
        },
        {
          name: '官方5群',
          groupID: '863820668',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=TOxIt2Ga'
        },
        {
          name: '官方6群',
          groupID: '745721078',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=BFWjkCiA'
        },
        {
          name: '官方7群',
          groupID: '627867855',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=pVlVMMbJ'
        },
        {
          name: '官方8群',
          groupID: '496409492',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=Xr6nOg4D'
        },
        {
          name: '官方9群',
          groupID: '828504448',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=qL5ss9od'
        },
        {
          name: '官方10群',
          groupID: '232041042',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=KMIsn0WW'
        },
        {
          name: '官方11群',
          groupID: '364463526',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=rkETT6yH'
        },
        {
          name: '官方12群',
          groupID: '229707069',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=raoExfcm'
        },
        {
          name: '官方13群',
          groupID: '879811455',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=zM5u0Obf'
        },
        {
          name: '官方14群',
          groupID: '965190918',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=qWgiooZx'
        },
        {
          name: '官方15群',
          groupID: '691550458',
          groupLink: 'https://jq.qq.com/?_wv=1027&k=TcQ177ZA'
        },
      ]
    }
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
