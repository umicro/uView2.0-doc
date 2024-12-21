<template>
  <div id="global-layout">
    <component :is="layout"/>
    <!-- <footer class="footer">
      本站由
      <a href="https://www.upyun.com/?from=uview" target="_blank">
        <img src="https://cdn.uviewui.com/uview/resources/9c756df18653282ff831ffec402f46ea.PNG" />
      </a>
      提供CDN及云存储服务
    </footer> -->
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5e6d82;
  font-size: 12px;
  margin: 15px auto;

  img {
    height: 22px;
  }
}
</style>