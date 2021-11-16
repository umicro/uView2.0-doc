## Button 按钮 <to-api/>

<demo-model url="/pages/componentsA/button/button"></demo-model>


该组件内部实现以uni-app`button`组件为基础，进行二次封装，主要区别在于：
- 按钮`type`值有更多的主题颜色
- 按钮`size`值有更多的尺寸可选

::: warning 注意
1. 此组件内部使用uni-app`button`组件为基础，除了开头中所说的增加的功能，另外暴露出来的props属性和官方组件的属性完全一致，
uni-app`button`组件比较特殊，因为它有一些其他小程序平台的特定能力，请参考文档后面的参数列表，更详细说明请参uni-app方文档：  
[uni-app方button组件](https://uniapp.dcloud.io/component/button)  
2. 由于微信小程序的限制，在微信小程序中设置了`form-type`的`u-button`无法触发`form`组件的`submit`事件(H5和APP正常)，详见微信小程序文档[Bug & Tip部分](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
:::

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用
文字内容通过`text`传入

```html
<u-button text="月落"></u-button>
```

### 设置按钮的多种形态

- `type`值可选的有`default`(默认)、`primary`、`success`、`info`、`warning`、`error`
- 通过`plain`值设置是否镂空
- 通过`hairline`值设置是否细边
- 通过`disabled`值设置是否禁用
- 通过`loading`值设置是否开启加载图标，`loadingText`设置加载中文字
- 通过`icon`值设置是否显示图标
- 通过`shape`值设置按钮形状，circle为圆角
- 通过`color`值设置按钮渐变颜色
- 通过`size`值设置按钮的大小

```html
<template>
	<view style="padding: 20px;">
		<u-button type="primary" text="确定"></u-button>
		<u-button type="primary" :plain="true" text="镂空"></u-button>
		<u-button type="primary" :plain="true" :hairline="true" text="细边"></u-button>
		<u-button type="primary" :disabled="disabled" text="禁用"></u-button>
		<u-button type="primary" loading="true" loadingText="加载中"></u-button>
		<u-button type="primary" icon="map" text="图标按钮"></u-button>
		<u-button type="primary" shape="circle" text="按钮形状"></u-button>
		<u-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button>
		<u-button type="primary" size="small" text="大小尺寸"></u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			disabled: true
		};
	}
};
</script>
```



### 定义需要用到的外部样式

1. 针对非微信小程序平台，组件的根元素就是uni-app`button`组件，所以修改按钮的样式很容易，直接给组件定义`类名`或者嵌入`内联样式`即可。  
2. 如果是微信小程序，编译后页面会有组件同名的元素存在，导致样式传递有问题。 
3. 如果是为了修改按钮与其他元素之间的距离或者宽度等，可以给按钮外面套一个`view`元素，控制这个`view`与其他元素的距离或者宽度，即可达到同等效果。  

所以：我们提供了一个`custom-style`参数，推荐用户可以用对象形式传递样式给组件内部，注意驼峰命名。

```html
<template>
	<view style="padding: 20px;">
		 <!-- 以下形式在微信小程序会无效，APP和H5有效  -->
		<u-button class="custom-style" text="雪月夜"></u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			disabled: true,
			customStyle: {
				marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
				color: 'red'
			}
		};
	}
};
</script>

<style lang="scss" scoped>
	.custom-style {
		color: #ff0000;
		width: 400rpx;
	}
</style>
```


### 各家小程序开放能力的对接

uView已对接uni-app档关于[uni-app方button组件](https://uni-app.dcloud.io/component/button)的所有开放能力(截止2020-04-14)uni-app-app文档说明使用即可，如果有发现遗漏的地方，请加群反馈。

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">按钮类型</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button
					    text="默认按钮"
					    size="normal"
					    type="info"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="成功按钮"
					    size="normal"
					    type="success"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="危险按钮"
					    size="normal"
					    type="error"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="主要按钮"
					    size="normal"
					    type="primary"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="警告按钮"
					    size="normal"
					    type="warning"
					></u-button>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">镂空按钮</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button
					    text="镂空按钮"
					    size="normal"
					    type="info"
					    plain
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="镂空按钮"
					    size="normal"
					    type="success"
					    plain
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="镂空按钮"
					    size="normal"
					    type="error"
					    plain
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="镂空按钮"
					    size="normal"
					    type="primary"
					    plain
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="镂空按钮"
					    size="normal"
					    type="warning"
					    plain
					></u-button>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">细边按钮</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button
					    text="细边按钮"
					    size="normal"
					    type="info"
					    plain
					    hairline
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="细边按钮"
					    size="normal"
					    type="success"
					    plain
					    hairline
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="细边按钮"
					    size="normal"
					    type="error"
					    plain
					    hairline
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="细边按钮"
					    size="normal"
					    type="primary"
					    plain
					    hairline
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="细边按钮"
					    size="normal"
					    type="warning"
					    plain
					    hairline
					></u-button>
				</view>
			</view>
		</view>

		<view class="u-demo-block">
			<text class="u-demo-block__title">禁用按钮</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button
					    disabled
					    text="禁用按钮"
					    size="normal"
					    type="info"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    disabled
					    text="禁用按钮"
					    size="normal"
					    type="success"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    disabled
					    text="禁用按钮"
					    size="normal"
					    type="error"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    disabled
					    text="禁用按钮"
					    size="normal"
					    type="primary"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    disabled
					    text="禁用按钮"
					    size="normal"
					    type="warning"
					></u-button>
				</view>
			</view>
		</view>

		<view class="u-demo-block">
			<text class="u-demo-block__title">加载中</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button
					    loadingText="加载中"
					    size="normal"
						loading
					    loadingMode="circle"
					    type="success"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    class="button-layout__item"
					    loadingText="加载中"
					    size="normal"
					    loading
					    type="error"
					></u-button>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">按钮图标&按钮形状</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button
					    text="按钮图标"
					    size="normal"
					    icon="map"
					    plain
					    type="warning"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="按钮图标"
					    size="normal"
					    plain
					    shape="circle"
					    type="success"
					></u-button>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义颜色</text>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button
					    text="渐变色按钮"
					    size="normal"
					    color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="渐变色按钮"
					    size="normal"
					    color="linear-gradient(to right, rgb(220, 194, 11), rgb(4, 151, 99))"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="青绿色按钮"
					    size="normal"
					    color="rgb(10, 185, 156)"
					></u-button>
				</view>
			</view>
		</view>

		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义大小</text>
			<view class="u-demo-block__content" style="padding-bottom: 15px; flex-direction: column;align-items: stretch;">
				<u-button
				    text="超大尺寸"
				    size="large"
				    type="success"
				></u-button>
			</view>
			<view class="u-demo-block__content">
				<view class="u-page__button-item">
					<u-button
					    text="普通尺寸"
					    size="normal"
					    type="error"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    text="小型尺寸"
					    size="small"
					    type="primary"
					></u-button>
				</view>
				<view class="u-page__button-item">
					<u-button
					    class="button-layout__item"
					    text="超小尺寸"
					    size="mini"
					    type="warning"
					></u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// type: 'default',
				// disabled: false
			}
		},
		onLoad() {
			setTimeout(() => {
				this.type = 'primary'
				this.disabled = true
			}, 2000)
		}
	}
</script>

<style lang="scss">
	@import "@/uview-ui/libs/css/components.scss";

	.u-page {
		&__button-item {
			margin: 0 15px 15px 0;
		}
	}

	.u-demo-block__content {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
</style>

```
:::

### API

### Props


|属性名					|说明																					|类型					|默认值	|可选值	|平台差异说明	|
|:-						|:-																						|:-						|:-		|:-		|:-			|
|hairline				|是否显示按钮的细边框																		|Boolean				|true	|false	|-			|
|type					|按钮的样式类型																			|String					|info	|info / primary / error/ warning / success	|-	|	
|size					|按钮的大小																				|String					|normal |large / mini	|-	|
|shape					|按钮外观形状，见上方说明																	|String					|square	|circle	|-			|
|plain					|按钮是否镂空，背景色透明																	|Boolean				|false	|true	|-			|
|disabled				|是否禁用																				|Boolean				|false	|true	|-			|
|loading				|按钮名称前是否带 loading 图标															|Boolean				|false	|true	|App-nvue 平台，在 ios 上为雪花，Android上为圆圈|
|loadingText			|加载中提示文字																			|String					|-		|-		|-			|
|loadingMode			|加载状态图标类型																			|String					|spinner|-		|-			|
|loadingSize			|加载图标大小																				|String &#124; Number	|15		|-		|-			|
|openType				|开放能力，具体请看uniapp稳定关于button组件部分说明											|String					|-		|-		|-			|
|formType				|用于 \<form\> 组件，点击分别会触发 \<form\> 组件的 submit/reset 事件						|String					|-		|-		|-			|
|appParameter			|打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）	|String					|-		|-		|-			|
|hoverStopPropagation	|指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true）							|Boolean				|true	|false	|-			|
|lang					|指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文								|String					|en		|-		|-			|
|sessionFrom			|会话来源，openType="contact"时有效														|String					|-		|-		|-			|
|sendMessageTitle		|会话内消息卡片标题，openType="contact"时有效												|String					|-		|-		|-			|
|sendMessagePath		|会话内消息卡片点击跳转小程序路径，openType="contact"时有效									|String					|-		|-		|-			|
|sendMessageImg			|会话内消息卡片图片，openType="contact"时有效												|String					|-		|-		|-			|
|showMessageCard		|是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效	|String	|-	|-	|-	|
|dataName				|额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取							|String					|-		|-		|-			|
|throttleTime			|节流，一定时间内只能触发一次																|String &#124; Number	|0		|-		|-			|
|hoverStartTime			|按住后多久出现点击态，单位毫秒																|String &#124; Number	|0		|-		|-			|
|hoverStayTime			|手指松开后点击态保留时间，单位毫秒															|String &#124; Number	|200	|-		|-			|
|text					|按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）				|String &#124; Number	|-		|-		|-			|
|icon					|按钮图标																				|String					|-		|-		|-			|
|color					|按钮颜色，支持传入linear-gradient渐变色													|String					|-		|-		|-			|
|customStyle			|定义需要用到的外部样式,详细见上方文档														|Object					|-		|-		|-			|


### Events

**说明**：目前经测试(Hbuilder X 2.6.8)，在H5，APP，可以直接对组件监听`tap`事件，等同组件内部发出的`click`事件效果，某些HX版本上，
微信小程序对组件使用`tap`事件可能无效，故建议对按钮组件的点击事件监听统一使用组件内部发出的`click`事件。

|属性名			|说明																				|类型	|默认值		|可选值	|平台差异说明		|
|:-				|:-																					|:-		|:-			|:-		|:-				|
|click			|按钮点击，请勿使用`@tap`点击事件，微信小程序无效，返回值为点击事件及参数					|Handler|-			|-		|-				|
|getphonenumber	|open-type="getPhoneNumber"时有效													|Handler|微信小程序	|-		|-				|
|getuserinfo	|用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo	|Handler|微信小程序	|-		|-				|
|error			|当使用开放能力时，发生错误的回调														|Handler|微信小程序	|-		|-				|
|opensetting	|在打开授权设置页并关闭后回调															|Handler|微信小程序	|-		|-				|
|launchapp		|打开 APP 成功的回调																	|Handler|微信小程序	|-		|-				|
