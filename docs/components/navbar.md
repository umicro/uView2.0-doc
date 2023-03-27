### Navbar 自定义导航栏 <to-api/>

此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uni-app带的导航栏。

<demo-model url="/pages/componentsC/navbar/navbar"></demo-model>

<custom-block text="右侧的演示中，导航栏上方有圆角，也有顶部的手机模型状态栏内容，以及返回图标和文字不对齐的情况。这是因为网页演示导致，实际中无此情况，请通过右上角的“演示”扫码查看实际效果。"></custom-block>

### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|


### 基本使用

默认情况下，该组件只有向左的箭头，**点击**可以返回上一页，如果您想将自定义导航栏用在tabbar(不存在要返回的逻辑)页面，
这样会隐藏左边的返回图标区域。

- 如果想在返回箭头的右边自定义类似"返回"字样，可以将`left-text`设置为"返回"
- 通过`title`参数传入需要显示的标题，通过`title-width`(rpx)设置标题区域的宽度，文字超出会通过省略号隐藏
- 通过`fixed`配置是否将导航栏固定在顶部

:::tip 说明
- 在小程序中，导航栏会自动适配导航栏右侧的胶囊位置，避开该区域
- 组件底部默认有一条下边框，如您不需要，可以设置`border`为`false`即可
:::

``` html
<template>
	<view>
		<!-- 2.0.19支持autoBack，默认为false -->
        <u-navbar
            title="个人中心"
            @rightClick="rightClick"
            :autoBack="true"
        >
        </u-navbar>
	</view>
</template>

<script>
    methods:{
        rightClick() {
            console.log('rightClick');
        },
        leftClick() {
            console.log('leftClick');
        }
    }
</script>
```

### 注意事项

既然是要自定义导航栏，那么首先就要取消系统自带的导航栏，需要在uni-app目的根目录的"pages.json"中设置，同时在此设置状态栏字体的颜色(H5无效)，
自定义导航栏后，如果想通过"uni.setNavigationBarColor"动态设置导航栏颜色相关参数，是可能会出问题的，请勿使用此方式。

```js
// pages.json

"pages": [
	// navbar-自定义导航栏
	{
		"path": "/pages/navbar/index",
		"style": {
			"navigationStyle": "custom" ,// 隐藏系统导航栏
			"navigationBarTextStyle": "white" // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
		}
	}
]
```

### 导航栏高度

可以通过`height`(单位**px**，默认44，和uni-app统导航栏高度一致)配置导航栏的高度，此高度为导航栏内容的高度，不含状态栏的高度，组件内部会自动
加上状态栏的高度，并填充状态栏的占位区域。

### 自定义导航栏内容

通过自定义`slot`传入的内容

``` html
<template>
	<view>
        <u-navbar
            leftText="返回"
            title="个人中心"
            :safeAreaInsetTop="false"
        >
            <view
                class="u-nav-slot"
                slot="left"
            >
                <u-icon
                    name="arrow-left"
                    size="19"
                ></u-icon>
                <u-line
                    direction="column"
                    :hairline="false"
                    length="16"
                    margin="0 8px"
                ></u-line>
                <u-icon
                    name="home"
                    size="20"
                ></u-icon>
            </view>
        </u-navbar>
	</view>
</template>
```



### 自定义导航栏背景颜色

uView提供了一个`bgColor`参数，可以自定义导航栏的背景颜色：

``` html
<template>
	<view>
		<u-navbar title="" :bgColor="bgColor">
			
		</u-navbar>
		<view class="content">
			<!-- 正文内容 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bgColor: '#001f3f',
			}
		}
	}
</script>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsC/navbar/navbar.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsC/navbar/navbar.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props


| 参数				| 说明												| 类型					| 默认值		| 可选值	|
| :-				| :-												| :-					| :-		| :-	|
| safeAreaInsetTop	| 是否开启顶部安全区适配								| Boolean				| true		| false	|
| placeholder		| 固定在顶部时，是否生成一个等高元素，以防止塌陷			| Boolean				| false		| true	|
| fixed				| 导航栏是否固定在顶部								| Boolean				| true		| false	|
| border			| 导航栏底部是否显示下边框								| Boolean				| false		| true	|
| leftIcon			| 左边返回图标的名称，只能为uView自带的图标				| String				| arrow-left| -		|
| leftText			| 左边的提示文字										| String				| -			| -		|
| rightText			| 右边的提示文字										| String				| -			| -		|
| rightIcon			| 右边返回图标的名称，只能为uView自带的图标				| String				| -			| -		|
| title				| 导航栏标题，如设置为空字符，将会隐藏标题占位区域		| String				| -			| -		|
| bgColor			| 导航栏背景设置										| String				| #ffffff	| -		|
| titleWidth		| 导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx	| String &#124; Number	| 400rpx	| -		|
| height			| 导航栏高度(不包括状态栏高度在内，内部自动加上)，单位px	| String &#124; Number	| 44px		| -		|
| leftIconSize		| 左侧返回图标的大小	                    | String &#124; Number	| 20px		| -		| 
| leftIconColor		| 左侧返回图标的颜色                 | String	| #303133		| -		| 
| autoBack <Badge text="2.0.19" />			| 点击左侧区域(返回图标)，是否自动返回上一页			| Boolean				| false		| true	|
| titleStyle <Badge text="2.0.23" />	| 标题的样式，对象或字符串形式			| String &#124; Object				| -		| -	|


### Event

| 名称		| 说明			| 类型		|
| :-		| :-			| :-		|
| leftClick	| 点击左侧区域	| Handler	|
| rightClick| 点击右侧区域	| Handler	|

<br>

::: danger 注意
App端不存在$slots,插槽`slot`使用前,需要满足`rightIcon`或者`rightText`不为空。
:::

<br>

### Slot

| 名称	| 说明			|
| :-	| :-			|
| left	| 自定义左侧部分内容	|
| right	| 自定义右侧部分内容	|
| center <Badge text="2.0.17" />	| 自定义中部内容	|



<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=slot] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
