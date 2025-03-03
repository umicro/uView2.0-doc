## Toast 消息提示 <to-api/>

<demo-model url="/pages/componentsB/toast/toast"></demo-model>

Toast 组件主要用于消息通知、加载提示、操作结果提示等醒目提示效果，我们为其提供了多种丰富的 API。

:::warning 注意：
由于 uni 中无法通过 js 创建元素，所以需要在页面中调用`<toast />`组件，再通过`ref`开启
:::

### 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| :--------: | :---------: | :-: | :----: |
|     √      |      √      |  √  |   √    |

### 基本使用

以下为不同能力的 toast 的具体表现

```html
<template>
  <view>
    <u-toast ref="uToast"></u-toast>
    <u-cell-group title-bg-color="rgb(243, 244, 246)">
      <u-cell
        :titleStyle="{fontWeight: 500}"
        :title="item.title"
        v-for="(item, index) in list"
        :key="index"
        isLink
        :icon="item.iconUrl"
        @click="showToast(item)"
      >
      </u-cell>
    </u-cell-group>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        list: [
          {
            type: "default",
            title: "默认主题",
            message: "锦瑟无端五十弦",
            iconUrl: "https://uviewui.com/demo/toast/default.png",
          },
          {
            type: "error",
            icon: false,
            title: "失败主题",
            message: "一弦一柱思华年",
            iconUrl: "https://uviewui.com/demo/toast/error.png",
          },
          {
            type: "success",
            title: "成功主题(带图标)",
            message: "庄生晓梦迷蝴蝶",
            iconUrl: "https://uviewui.com/demo/toast/success.png",
          },
          {
            type: "loading",
            title: "正在加载",
            message: "正在加载",
            iconUrl: "https://uviewui.com/demo/toast/loading.png",
          },
          {
            type: "default",
            title: "结束后跳转标签页",
            message: "此情可待成追忆",
            url: "/pages/componentsB/tag/tag",
            iconUrl: "https://uviewui.com/demo/toast/jump.png",
          },
        ],
      };
    },
    computed: {
      getIcon() {
        return (path) => {
          return "https://uviewui.com/example/" + path + ".png";
        };
      },
    },
    methods: {
      showToast(params) {
        this.$refs.uToast.show({
          ...params,
          complete() {
            params.url &&
              uni.navigateTo({
                url: params.url,
              });
          },
        });
      },
    },
  };
</script>
<style lang="scss">
  .u-page {
    padding: 0;
  }

  .u-cell-icon {
    width: 36rpx;
    height: 36rpx;
    margin-right: 8rpx;
  }

  .u-cell-group__title__text {
    font-weight: bold;
  }
</style>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsB/toast/toast.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsB/toast/toast.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Params

这些参数为通过`ref`调用`<toast/>`组件内部的`show`方法时，需要传递参数

| 参数     | 说明                     | 类型                 | 默认值 | 可选值       |
| :------- | :----------------------- | :------------------- | :----- | :----------- |
| loading  | 是否加载中               | Boolean              | false  | true         |
| message  | 显示的文本               | String &#124; Number | -      | -            |
| icon     | 图标，或者绝对路径的图片 | String               | -      | -            |
| position | toast 出现的位置         | String               | center | top / bottom |
| type     | 主题类型                 | String               | -      | -            |
| params   | 跳转的参数               | Object               | -      | -            |
| duration | 展示时间，单位 ms        | String &#124; Number | 2000   | -            |
| complete | 执行完后的回调函数       | Function             | null   | -            |

### Methods

方法是通过`ref`调用的，参见上方说明
注意：所有有关`ref`的调用，都不能在页面的`onLoad`生命周期调用，因为此时组件尚未创建完毕，会报错，应该在`onReady`生命周期调用。

| 方法名 | 说明                                                              | 参数       | 版本 |
| :----- | :---------------------------------------------------------------- | :--------- | :--- |
| show   | 显示 toast，如需一进入页面就显示 toast，请在`onReady`生命周期调用 | 见上方说明 | -    |
