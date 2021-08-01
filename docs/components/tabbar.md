## Tabbar 底部导航栏 <Badge text="1.4.8" type="tip"/> <to-api/>

<demo-model url="/pages/componentsB/tabbar/index"></demo-model>

#### 优点：

此组件提供了自定义tabbar的能力，具有如下特点：
- 图标可以使用字体图标(内置图标和扩展图标)或者图片
- 可以动态切换菜单的数量以及配置
- 切换菜单之前，可以进行回调鉴权
- 可以设置角标或数字化提示
- 有效防止组件区域高度塌陷，无需给父元素额外的内边距或者外边距来避开导航的区域


<!-- #### 缺点：

为了实现自定义tabbar的能力，使用此组件也同样带来了不可避免的缺点：
- 在uni-app的vue版本上，自定义tabbar让您不得不在一个webview内模拟出多个页面，这存在着严重的性能问题
- 相比原生的uni-app的tabbar，自定义tabbar让你失去了路由管理的功能
- 在渲染层面来说，它的渲染速度略慢一些，但并不严重 -->


<!-- :::tip 提示
以上的缺点，是指自定义模拟tabbar页面的情形，我们提供了一个解决方案，可以使用uni-app自带tabbar系统，保证性能的同时，又能尽情自定义tabbar导航栏，见下方`实战教程`说明。
::: -->


### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|


### 基本使用

推荐您使用list数组遍历循环，案例使用基础方式构建，请根据`click`事件回调进行后续逻辑操作。

``` html
<u-tabbar
	:value="value1"
	@change="change1"
	:fixed="false"
	:placeholder="false"
	:safeAreaInsetBottom="false"
>
	<u-tabbar-item text="首页" icon="home" @click="click1" ></u-tabbar-item>
	<u-tabbar-item text="放映厅" icon="photo" @click="click1" ></u-tabbar-item>
	<u-tabbar-item text="直播" icon="play-right" @click="click1" ></u-tabbar-item>
	<u-tabbar-item text="我的" icon="account" @click="click1" ></u-tabbar-item>
</u-tabbar>
<!-- js -->
value1: 0,
click1(e) {
	console.log('click1', e);
}
```
### 显示徽标

使用`dot`属性添加--小点--类型徽标，使用`badge`属性添加--数字--类型徽标。您也可以使用`:badge='badge'`动态设置徽标数量，
这在消息盒子的展示中是比较好用的功能，

``` html
<u-tabbar
	:value="value2"
	:placeholder="false"
	@change="name => value2 = name"
	:fixed="false"
	:safeAreaInsetBottom="false"
>
	<u-tabbar-item text="首页" icon="home" dot ></u-tabbar-item>
	<u-tabbar-item text="放映厅" icon="photo" badge="3"></u-tabbar-item>
	<u-tabbar-item text="直播" icon="play-right" ></u-tabbar-item>
	<u-tabbar-item text="我的" icon="account" ></u-tabbar-item>
</u-tabbar>
<!-- data -->
value2: 1,
```
### 匹配标签的名称

``` html
<u-tabbar
:placeholder="false"
:value="value3"
@change="name => value3 = name"
:fixed="false"
:safeAreaInsetBottom="false"
>
	<u-tabbar-item text="首页" icon="home" name="home"></u-tabbar-item>
	<u-tabbar-item text="放映厅" icon="photo" name="photo" ></u-tabbar-item>
	<u-tabbar-item text="直播" icon="play-right" name="play-right"></u-tabbar-item>
	<u-tabbar-item text="我的" name="account" icon="account" ></u-tabbar-item>
</u-tabbar>
<!-- data -->
value3: 'play-right',
```

### 自定义图标/颜色

如您需要自定义图标/颜色，在`u-tabbar-item`标签中使用插槽`active-icon`和`inactive-icon`来定义图标和颜色

``` html
<u-tabbar
	:value="value4"
	@change="name => value4 = name"
	:fixed="false"
	:placeholder="false"
	activeColor="#d81e06"
	:safeAreaInsetBottom="false"
>
	<u-tabbar-item text="首页">
		<image
			class="u-page__item__slot-icon"
			slot="active-icon"
			src="https://cdn.uviewui.com/uview/common/bell-selected.png"
		></image>
		<image
			class="u-page__item__slot-icon"
			slot="inactive-icon"
			src="https://cdn.uviewui.com/uview/common/bell.png"
		></image>
	</u-tabbar-item>
	<u-tabbar-item text="放映厅" icon="photo" ></u-tabbar-item>
	<u-tabbar-item text="直播" icon="play-right" ></u-tabbar-item>
	<u-tabbar-item text="我的" icon="account" ></u-tabbar-item>
</u-tabbar>
<!-- data -->
value4: 0,
```

### 拦截切换事件(点击第二个标签)

在切换事件中，处理拦截事件或者您其他js操作逻辑。
``` html
<u-tabbar
	:value="value5"
	:fixed="false"
	@change="change5"
	:safeAreaInsetBottom="false"
	:placeholder="false"
>
	<u-tabbar-item text="首页" icon="home" ></u-tabbar-item>
	<u-tabbar-item text="放映厅" icon="photo" ></u-tabbar-item>
	<u-tabbar-item text="直播" icon="play-right" ></u-tabbar-item>
	<u-tabbar-item text="我的" icon="account" ></u-tabbar-item>
</u-tabbar>
<!-- data -->
value5: 0,
<!-- js -->
change5(name) {
	if (name === 1) return uni.$u.toast('请您先登录')
	else this.value5 = name
},
```


### 边框

组件默认带了顶部边框，如果不需要，配置`border`为`false`即可。
```html
<u-tabbar
	:value="value7"
	:placeholder="false"
	:border="false"
	@change="name => value7 = name"
	:fixed="false"
	:safeAreaInsetBottom="false"
>
	<u-tabbar-item text="首页" icon="home" ></u-tabbar-item>
	<u-tabbar-item text="放映厅" icon="photo" ></u-tabbar-item>
	<u-tabbar-item text="直播" icon="play-right" ></u-tabbar-item>
	<u-tabbar-item text="我的" icon="account" ></u-tabbar-item>
</u-tabbar>
<!-- data -->
value7: 3
```
### 固定在底部(固定在屏幕最下方)

与原生效果无异，但您可以按照api配置您需要的其他配置，如徽标，边框等

```html
<u-tabbar
	:value="value6"
	@change="name => value6 = name"
	:fixed="true"
	:placeholder="true"
	:safeAreaInsetBottom="true"
>
	<u-tabbar-item text="首页" icon="home" ></u-tabbar-item>
	<u-tabbar-item text="放映厅" icon="photo" ></u-tabbar-item>
	<u-tabbar-item text="直播" icon="play-right" ></u-tabbar-item>
	<u-tabbar-item text="我的" icon="account" ></u-tabbar-item>
</u-tabbar>
<!-- data -->
value6: 0,
```
### API

### TableBar Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| value | 当前匹配项的name | String \| Number | null | - |
| safe-area-inset-bottom | 是否为iPhoneX留出底部安全距离 | Boolean | true | false |
| border | 是否显示上方边框 | Boolean | true | false |
| zIndex | 元素层级z-index | String \| Number | 1 | - |
| active-color |  选中标签的颜色 | String | #1989fa | - |
| inactive-color | 未选中标签的颜色 | String  | #7d7e80 | - |
| fixed | 是否固定在底部 | Boolean | true | false |
| placeholder | fixed定位固定在底部时，是否生成一个等高元素防止塌陷 | Boolean | true | false |


### TableBarItem Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| name | item标签的名称，作为与u-tabbar的value参数匹配的标识符 | String \| Number | null | - |
| icon | uView内置图标或者绝对路径的图片 | String \ | - | - |
| badge | 右上角的角标提示信息 | String \| Number  | null | - |
| dot | 是否显示圆点，将会覆盖badge参数 | Boolean | false | true |
| text | 描述文本 | String | - | - |
| badge-style | 控制徽标的位置，对象或者字符串形式，可以设置top和right属性 | Object \| String | 'top: 6px;right:2px;' | - |

### TableBarItem Events

| 事件名 | 说明 | 回调参数 |
| :- | :- | :- |
| change | 切换选项时触发 | index：当前要切换项的name |
| click | 切换选项时触发 | index：当前要切换项的name |
