## Parse 富文本解析器 <to-api/>

<demo-model url="/pages/componentsB/parse/parse"></demo-model>

该组件一般用于富文本解析场景，比如解析文章内容，商品详情，带原生 HTML 标签的各类字符串等，此组件和 uni-app 官方的`rich-text`组件功能有重合之处，但是也有不同的地方。

#### 相同点：

- 二者都能解析 HTML 字符串

#### 不同点：

- 对于轻量、简单的字符串，`rich-text`性能更好
- 对于复杂的字符串，使用`parse`组件效果更好，有更多的自定义属性和效果

总结：如果是简单的场景，比如一段简单的文字和图片内容，可以优先使用`rich-text`组件，在文章内容，商品详情等复杂的文本详情，可以优先使用`parse`组件。

:::tip 提示
此组件源于开源的优秀作品[mp-html](https://github.com/jin-yufeng/mp-html)，本文档只对重要的功能进行介绍，如果需要更详细的说明，请参考[mp-html 官方文档](https://jin-yufeng.gitee.io/mp-html/#/overview/quickstart?id=uni-app)。
:::

### 平台差异说明

| App（vue） | App（nvue） | H5  | 小程序 |
| :--------: | :---------: | :-: | :----: |
|     √      |      √      |  √  |   √    |

### 基本使用

通过`content`参数绑定需要解析的内容即可。

```html
<template>
  <view class="u-content">
    <u-parse :content="content"></u-parse>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        content: `
					<p>露从今夜白，月是故乡明</p>
					<img src="https://xxx.com/swiper/2.jpg" />
				`,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .u-content {
    padding: 24rpx;
  }
</style>
```

### 长按复制

可以通过设置`selectable`参数为`true`来实现长按复制的效果

```html
<u-parse :content="content" :selectable="true"></u-parse>
```

### 设置样式

可以有两种方法可设置富文本的样式：

- 通过组件的`tagStyle`参数可以精细化的对单独的标签设置样式，注意此方式设置的样式为**字符串**的形式，而非**对象**形式：

```html
<template>
  <view class="u-content">
    <u-parse :content="content" :tagStyle="style"></u-parse>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        content: `
					<p>露从今夜白，月是故乡明</p>
					<img src="https://xxx.com/swiper/2.jpg" />
				`,
        style: {
          // 字符串的形式
          p: "color: red;font-size:32rpx",
          span: "font-size: 30rpx",
        },
      };
    },
  };
</script>
```

- 通过父元素标签，统一设置全文的颜色，行高，字体大小等，注意这种方式无法对单独的标签设置样式：

```html
<template>
  <view class="u-content">
    <u-parse :content="content"></u-parse>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        content: `
					<p>露从今夜白，月是故乡明</p>
					<img src="https://xxx.com/swiper/2.jpg" />
				`,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .u-content {
    padding: 24rpx;
    font-size: 32rpx;
    color: $u-content-color;
    line-height: 1.6;
  }
</style>
```

### 懒加载和占位图

- 设置`lazyLoad`为`true`即可开启图片懒加载功能
- 设置`loadingImg`为网络路径或者 base64 图片，可以在图片加载完成前展示占位图

```html
<u-parse
  :content="content"
  :lazyLoad="true"
  :loadingImg="/xxx/xxx.jpg"
></u-parse>
```

### 链接跳转/锚点

H5、App（含 NVUE）外链可以直接打开，小程序端将自动复制链接  
小程序端`a`标签设置`app-id`后可以跳转到其他小程序

```html
<a href="#">跳转到顶部</a>
<a href="#list">跳转到列表</a>
<a href="https://github.com/jin-yufeng/mp-html">外部链接</a>
<a href="/pages/componentsB/parse/jump">内部链接</a>
```

<br>

### 其他配置

本组件还有其他更多的配置功能，如获取页面的所有图片数组，跳转页内锚点，视频播放等，如需更多的配置信息，请移步`mp-html`项目文档：[mp-html 文档](https://jin-yufeng.gitee.io/mp-html/#/overview/quickstart?id=uni-app)

<br>

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsB/parse/parse.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsB/parse/parse.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数        | 说明                                                      | 类型           | 默认值 | 可选值 |
| :---------- | :-------------------------------------------------------- | :------------- | :----- | :----- |
| bgColor     | 背景颜色，只适用与 APP-PLUS-NVUE                          | String         | -      | -      |
| content     | 要显示的富文本字符串                                      | String         | -      | -      |
| copyLink    | 是否允许外部链接被点击时自动复制                          | Boolean        | true   | false  |
| domain      | 主域名，设置后将给链接自动拼接上主域名或协议名            | String         | -      | -      |
| errorImg    | 图片出错时的占位图链接                                    | String         | -      | -      |
| lazyLoad    | 是否开启图片懒加载，nvue 不支持此属性                     | Boolean        | true   | false  |
| loadingImg  | 图片加载完成前的占位图，详见 占位图                       | String         | -      | -      |
| pauseVideo  | 是否在播放一个视频时自动暂停其它视频                      | Boolean        | true   | false  |
| previewImg  | 是否开启图片被点击时自动预览                              | Boolean        | true   | false  |
| scrollTable | 是否自动给 table 添加一个滚动层（使表格可以单独横向滚动） | Boolean        | false  | true   |
| selectable  | 是否开启长按复制内容                                      | Boolean        | false  | true   |
| setTitle    | 是否自动将 title 标签的内容设置到页面标题                 | Boolean        | true   | false  |
| showImgMenu | 是否开启图片被长按时显示菜单                              | Boolean        | true   | false  |
| tagStyle    | 设置标签的默认样式                                        | Object         | -      | -      |
| useAnchor   | 是否使用页面内锚点                                        | Boolean/Number | false  | true   |

### Event

| 事件名  | 说明               | 回调参数                                                                                                                                       |
| :------ | :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| load    | dom 加载完成时触发 | 所有节点被添加到节点树中时触发，无返回值，可以调用 api                                                                                         |
| ready   | 渲染完成时触发     | 返回 boundingClientRect 的查询结果（包含宽高、位置等信息），所有图片（除懒加载）加载完成时才会触发，图片较大时可能 延时较长                    |
| error   | 出错时触发         | 返回一个 object，其中 source 是错误来源，errMsg 为错误信息，target 包含出错标签的具体信息                                                      |
| imgTap  | 图片被点击时触发   | 返回一个 object，其中 src 是图片链接，ignore 是一个函数，在事件中调用将不进行预览；可用于阻挡 onShow 的调用                                    |
| linkTap | 在链接被点击时触发 | 返回一个 object，其中包含了被点击的 a 标签的所有属性，ignore 是一个函数，在事件中调用后将不自动跳转/复制；可在该事件中进行下载文档等进一步操作 |

<style scoped>
h3[id=event] + table thead tr th:nth-child(2){
	width: 20%;
}
h3[id=event] + table thead tr th:nth-child(3){
	width: 60%;
}
</style>
