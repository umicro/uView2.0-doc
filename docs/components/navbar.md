### Navbar 自定义导航栏 <to-api/>

此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uni-app带的导航栏。

<demo-model url="/pages/componentsC/navbar/navbar"></demo-model>

<custom-block text="右侧的演示中，导航栏上方有圆角，也有顶部的手机模型状态栏内容，以及返回图标和文字不对齐的情况。这是因为网页演示导致，实际中无此情况，请通过右上角的“演示”扫码查看实际效果。"></custom-block>

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|


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
		<u-navbar 
            title="剑未配妥，出门已是江湖" 
            left-text="返回" 
            right-text="帮助" 
            @click-left="onClickBack" 
            @click-right="onClickRight"
        ></u-navbar>
		<view class="content">
			<!-- 正文内容 -->
		</view>
	</view>
</template>

<script>
    methods:{
        /**
         * 点击返回页面
         */
        onClickBack(){
            uni.navigateBack()
        },

        onClickRight(){
            // do something...
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

注意上方说的uni-app方的高度，这里指的是H5，和APP。至于各家小程序，由于受导航栏右侧胶囊的影响，目前组件内部给安卓设定的导航栏高度为`48px`，iOS设定的导航栏高度为`44`，这是结合了大量的
实践的出来的结果，具备完好的兼容性。


### 自定义导航栏内容

通过自定义`slot`传入的内容

``` html
<template>
	<view>
		<u-navbar title="首页">
            <view slot="left">
				......
			</view>
            <view slot="right">
				......
			</view>
		</u-navbar>
		<view class="content">
			<!-- 正文内容 -->
		</view>
	</view>
</template>
```


:::tip 温馨提示
uView有写一个完善的导航栏自定义内容案例，如右侧演示区域所示，如果想要看到具体的案例代码，请下载[uView演示项目](http://uviewui.com/components/install.html#%E7%A4%BA%E4%BE%8B%E9%A1%B9%E7%9B%AE)查看。
:::



### 自定义导航栏背景颜色

uView提供了一个`bg-color`参数，可以自定义导航栏的背景颜色：

``` html
<template>
	<view>
		<u-navbar title="" :bg-color="bgColor">
			
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


### API

### Props


| 参数				| 说明												| 类型					| 默认值		| 可选值	|
| :-				| :-												| :-					| :-		| :-	|
| safeAreaInsetTop	| 是否开启顶部安全区适配								| Boolean				| false		| true	|
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


### Event

| 名称		| 说明			| 类型		|
| :-		| :-			| :-		|
| leftClick	| 点击左侧区域	| Handler	|
| rightClick| 点击右侧区域	| Handler	|

### Slot

| 名称	| 说明			|
| :-	| :-			|
| left	| 点击左侧区域	|
| right	| 点击右侧区域	|



<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=slot] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
