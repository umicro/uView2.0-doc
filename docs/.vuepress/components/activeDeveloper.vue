<template>
  <div>
    <div class="member-item" v-for="(item,index) in activeDeveloperList" :key="index">
      <div class="member-item__avatar"><img :src="item.avatar"/></div>
      <div class="member-item__info">
        <div class="member-item__name">{{ item.name }}</div>
        <div class="member-item__tag">
          <div class="member-item__tag__item" v-if="item.job">{{ item.job }}</div>
          <div class="member-item__tag__split" v-if="item.addr">·</div>
          <div class="member-item__tag__item" v-if="item.addr">{{ item.addr }}</div>
          <div class="member-item__tag__split" v-if="item.github">·</div>
          <div class="member-item__tag__item" v-if="item.github">
            <a :href="item.github" target="_blank"><span class="iconfont">&#xe64a;</span></a>
          </div>
          <div class="member-item__tag__split" v-if="item.uniapp">·</div>
          <div class="member-item__tag__item" v-if="item.uniapp">
            <a :href="item.uniapp" target="_blank"><span class="iconfont">&#xe609;</span></a>
          </div>
          <div class="member-item__tag__split" v-if="item.gitee">·</div>
          <div class="member-item__tag__item" v-if="item.gitee">
            <a :href="item.gitee" target="_blank"><span class="iconfont">&#xe600;</span></a>
          </div>
          <div class="member-item__tag__split" v-if="item.csdn">·</div>
          <div class="member-item__tag__item" v-if="item.csdn">
            <a :href="item.csdn" target="_blank"><span class="iconfont">&#xe601;</span></a>
          </div>
          <div class="member-item__tag__split" v-if="item.link">·</div>
          <div class="member-item__tag__item" v-if="item.link">
            <a :href="item.link" target="_blank"><span class="iconfont">&#xe67b;</span></a>
          </div>
        </div>
        <div class="member-item__intro">介绍：{{ item.intro }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activeDeveloper',
  props: {
    activeDeveloperList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'doc-iconfont';
  src: url('//at.alicdn.com/t/font_1839347_q72yio5zage.ttf') format('truetype');
}

.iconfont {
  font-family: 'doc-iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.member-item {
  display: flex;
  padding: 20px;
  border-radius: 5px;
  margin-top: 25px;
  max-width: 1200px;
  
  &__avatar {
    height: 100px;
    flex: 0 0 100px;
    width: 100px;
    
    img {
      width: 100%;
      border-radius: 4px;
    }
  }
  
  &__info {
    margin-left: 20px;
  }
  
  &__name {
    color: #333;
    font-weight: bold;
    font-size: 16px;
    margin-top: 5px;
  }
  
  &__tag {
    display: flex;
    color: #999;
    font-size: 15px;
    margin-top: 5px;
    align-items: center;
    
    &__split {
      font-size: 20px;
      margin: 0 7px;
      color: #000;
    }
  }
  
  &__intro {
    color: #666;
    font-size: 14px;
    margin-top: 7px;
  }
}

@media screen and (max-width: 768px) {
  .member-item {
    &__avatar {
      width: 50px;
      height: 50px;
      flex: 0 0 50px;
    }
    
    &__info {
      margin-left: 10px;
    }
    
    &__name {
      margin-top: 0;
    }
    
    &__intro{
      font-size: 13px;
      line-height: 1.7;
    }
  }
}
</style>

