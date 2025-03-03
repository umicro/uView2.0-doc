## Avatar 头像 <to-api/>

<demo-model url="/pages/componentsC/avatar/avatar"></demo-model>

本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。

### 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| :--------: | :---------: | :-: | :----: |
|     √      |      √      |  √  |   √    |

### 基本使用

通过`src`指定头像的路径即可简单使用，如果传递了`text`参数，`text`将会优先起作用

**注意：** 请保证传递给`src`的是绝对地址，而不是相对地址，为什么呢？因为传入`avatar`组件的相对地址，是相对于组件的，而不是父组件(页面)，所以相对址可能会出错。

```html
<template>
  <view>
    <u-avatar :src="src"></u-avatar>
    <u-avatar :text="text"></u-avatar>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        src: "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
        text: "无头像",
      };
    },
  };
</script>
```

### 头像形状

- `shape`参数指定头像的形状，取值`circle`为圆形，取值`square`为圆角方形

```html
<template>
  <u-avatar :src="src" shape="square"></u-avatar>
</template>

<script>
  export default {
    data() {
      return {
        src: "http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",
      };
    },
  };
</script>
```

### 图标头像

- `icon`参数指定头像的图标，图标可参考`icon`组件

```html
<view class="u-demo-block__content">
  <view class="u-avatar-item">
    <u-avatar icon="red-packet-fill" fontSize="22"></u-avatar>
  </view>
  <view class="u-avatar-item">
    <u-avatar icon="star-fill" fontSize="22"></u-avatar>
  </view>
</view>

<style lang="scss">
  .u-demo-block__content {
    @include flex;
    align-items: center;
  }

  .u-avatar-item {
    margin-right: 30px;
  }
</style>
```

### 文字头像（自动背景色）

- `randomBgColor`参数开启头像的自动背景色

```html
<template>
  <u-avatar text="北" fontSize="18" randomBgColor></u-avatar>
</template>
```

### 默认头像

如果头像加载失败，导致加载图片失败，将会显示一个默认的灰色头像

### 头像组

使用`u-avatar-group`实现头像组

```html
<template>
  <u-avatar-group :urls="urls" size="35" gap="0.4"></u-avatar-group>
</template>

<script>
  export default {
      data() {
          return {
              urls: [
                  'https://uviewui.com/album/1.jpg',
                  'https://uviewui.com/album/2.jpg',
                  'https://uviewui.com/album/3.jpg',
                  'https://uviewui.com/album/4.jpg',
                  'https://uviewui.com/album/7.jpg',
                  'https://uviewui.com/album/6.jpg',
                  'https://uviewui.com/album/5.jpg'
              ]
          }
      }
</script>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsC/avatar/avatar.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsC/avatar/avatar.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Avatar Props

| 参数            | 说明                                                                                                       | 类型                 | 默认值      | 可选值 |
| :-------------- | :--------------------------------------------------------------------------------------------------------- | :------------------- | :---------- | :----- |
| src             | 头像路径，如加载失败，将会显示默认头像(不能为相对路径)                                                     | String               | -           | -      |
| shape           | 头像形状                                                                                                   | String               | circle      | square |
| size            | 头像尺寸，可以为指定字符串(large, default, mini)，或者数值                                                 | String &#124; Number | 40          | -      |
| mode            | 头像图片的裁剪类型，与 uni 的`image`组件的`mode`参数一致，如效果达不到需求，可尝试传`widthFix`值           | String               | scaleToFill | -      |
| text            | 用文字替代图片，级别优先于`src`                                                                            | String               | -           | -      |
| bg-color        | 背景颜色，一般显示文字时用                                                                                 | String               | #c0c4cc     | -      |
| color           | 文字颜色                                                                                                   | String               | #ffffff     | -      |
| font-size       | 文字大小                                                                                                   | String &#124; Number | 18          | -      |
| icon            | 显示的图标                                                                                                 | String               | -           | -      |
| mp-avatar       | 显示小程序头像，只对百度，微信，QQ 小程序有效                                                              | Boolean              | false       | true   |
| random-bg-color | 是否使用随机背景色                                                                                         | Boolean              | false       | true   |
| default-url     | 加载失败的默认头像(组件有内置默认图片)                                                                     | String               | -           | -      |
| color-index     | 如果配置了 randomBgColor 为 true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值 0-19 之间 | String &#124; Number | -           | -      |
| name            | 组件标识符                                                                                                 | String               | level       | -      |

### Avatar Event

| 事件名 | 说明       | 回调参数                |
| :----- | :--------- | :---------------------- |
| click  | 头像被点击 | index: 用户传递的标识符 |

### AvatarGroup Props

| 参数       | 说明                                                           | 类型                 | 默认值     | 可选值 |
| :--------- | :------------------------------------------------------------- | :------------------- | :--------- | :----- |
| urls       | 头像图片组                                                     | Array                | []         | -      |
| maxCount   | 最多展示的头像数量                                             | String &#124; Number | 5          | -      |
| shape      | 头像形状                                                       | String               | circle     | square |
| mode       | 图片裁剪模式                                                   | String               | aspectFill | -      |
| showMore   | 超出 maxCount 时是否显示查看更多的提示                         | Boolean              | true       | -      |
| size       | 头像大小                                                       | String &#124; Number | 40         | -      |
| keyName    | 指定从数组的对象元素中读取哪个属性作为图片地址                 | String               | -          | -      |
| gap        | 头像之间的遮挡比例（0.4 代表遮挡 40%）                         | String &#124; Number | 0.5        | -      |
| extraValue | 需额外显示的值，如设置则优先于内部的`urls.length - maxCount`值 | String &#124; Number | -          | -      |

### AvatarGroup Event

| 事件名   | 说明           | 回调参数 |
| :------- | :------------- | :------- |
| showMore | 头像组更多点击 | -        |

<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 35%;
}
</style>
