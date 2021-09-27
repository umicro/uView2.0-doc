## Switch 开关选择器 <to-api/>

<demo-model url="/pages/componentsB/switch/switch"></demo-model>


选择开关用于在打开和关闭状态之间进行切换。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基础使用

通过`v-model`绑定一个`布尔值`变量，这个变量是双向绑定的，当用户开或关选择器的时候，在父组件的该值也会相应的变为`true`或者`false`，也就是说，
您不用监听`change`事件，也能知道选择器当前处于**开**或者**关**的状态。

我们为其提供了`加载中 禁用 自定义尺寸 自定义颜色 自定义样式 异步控制`等六种能力，并在以下案例中为您展示

```html
<u-switch v-model="value" @change="change"></u-switch>
<!-- methods -->
change(e) {
	console.log('change', e);
},

```

### 加载中

设置`loading`属性，默认为`true`，可以让`switch`处于加载中的状态，这时`switch`是不可操作的，您可以通过`:loading='loading'`以动态设置加载状态

```html
<u-switch v-model="value3" loading ></u-switch>
<u-switch v-model="value4" loading ></u-switch>
<!-- data -->
value3: false,
value4: true,
```
### 禁用switch

设置`disabled`属性,默认为`true`，即可禁用某个组件，让用户无法点击，禁用分为两种状态：

- 一是关闭情况下的禁用，这时只显示一个白色的区域。
- 二是打开后再禁用，这时会在原有的颜色上加一个`opacity`透明度，但此时依然是不可操作的。

```html
<u-switch v-model="value" disabled ></u-switch>
```


### 自定义尺寸

设置`size`属性，可以让您自定义`switch`的尺寸，单位为`px`

```html
<u-switch v-model="value3" size="28" ></u-switch>
<u-switch v-model="value4" size="20" ></u-switch>
<!-- data -->
value3: false,
value4: true,
```
### 自定义颜色

设置`activeColor`属性，可以让您自定义`switch`的颜色，支持多种设置方式，如：`activeColor="#f56c6c" activeColor="red" activeColor="rgb(0,0,0)" `

```html
<u-switch v-model="value" activeColor="#f56c6c" loading ></u-switch>
<u-switch v-model="value1" activeColor="#5ac725" loading ></u-switch>
<!-- data -->
value: true,
value1: true,
```
### 自定义样式

同时设置`activeColor`和`inactiveColor`属性，可以让您自定义`switch`的样式，同样支持多种设置方式

```html
<u-switch
	space="2" v-model="value11" activeColor="#f9ae3d" 
	inactiveColor="rgb(230, 230, 230)">
</u-switch>
<u-switch
	space="2" v-model="value12" activeColor="#f9ae3d"
	inactiveColor="rgb(230, 230, 230)">
</u-switch>
<!-- data -->
value11: false,
value12: true,
```

### 异步控制

异步控制场景，一般发生在用户打开或者关闭选择器时，需要本地或者向后端请求判断，是否允许用户打开或者关闭的场景。  
同时您也可以组合使用，例如根据接口结果添加`disabled`，`loading`属性等

:::warning 注意
请添加`asyncChange`属性来支持异步控制操作，否则您将先操作`v-model`绑定的值，并失去控制效果
:::


```html
<template>
	<u-switch v-model="value13" asyncChange @change="asyncChange" ></u-switch>
</template>

<script>
	export default {
		data() {
			return {
				value13:true
			};
		},
		methods: {
			asyncChange(e) {
				uni.showModal({
					content: e ? '确定要打开吗' : '确定要关闭吗',
					success: (res) => {
						if (res.confirm) {
							this.value13 = e
						}
					}
				})
			}
		}
	};
</script>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础功能</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-switch
						v-model="value1"
						@change="change"
					></u-switch>
				</view>
				<view class="u-page__tag-item">
					<u-switch v-model="value2"></u-switch>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">加载中</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-switch
						v-model="value3"
						loading
					></u-switch>
				</view>
				<view class="u-page__tag-item">
					<u-switch
						v-model="value4"
						loading
					></u-switch>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">禁用状态</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-switch
						v-model="value5"
						disabled
					></u-switch>
				</view>
				<view class="u-page__tag-item">
					<u-switch
						v-model="value6"
						disabled
					></u-switch>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义尺寸</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-switch
						v-model="value7"
						size="28"
					></u-switch>
				</view>
				<view class="u-page__tag-item">
					<u-switch
						v-model="value8"
						size="20"
					></u-switch>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义颜色</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-switch
						v-model="value9"
						activeColor="#f56c6c"
						loading
					></u-switch>
				</view>
				<view class="u-page__tag-item">
					<u-switch
						v-model="value10"
						activeColor="#5ac725"
						loading
					></u-switch>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义样式</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-switch
						:space="2"
						v-model="value11"
						activeColor="#f56c6c"
						inactiveColor="rgb(230, 230, 230)"
					></u-switch>
				</view>
				<view class="u-page__tag-item">
					<u-switch
						space="2"
						v-model="value12"
						activeColor="#f9ae3d"
						inactiveColor="rgb(230, 230, 230)"
					></u-switch>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">异步控制</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-switch
						v-model="value13"
						asyncChange
						@change="asyncChange"
					></u-switch>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: false,
				value2: true,
				value3: false,
				value4: true,
				value5: false,
				value6: true,
				value7: false,
				value8: true,
				value9: true,
				value10: true,
				value11: false,
				value12: true,
				value13: true,
			}
		},
		watch: {
			value1(newValue, oldValue) {
				console.log('v-model', newValue);
			}
		},
		methods: {
			change(e) {
				console.log('change', e);
			},
			asyncChange(e) {
				uni.showModal({
					content: e ? '确定要打开吗' : '确定要关闭吗',
					success: (res) => {
						if (res.confirm) {
							this.value13 = e
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		&__tag-item {
			margin-right: 30px;
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

### Switch Props

注意：需要给`switch`组件通过`v-model`绑定一个布尔值，来初始化`switch`的状态，随后该值被双向绑定，
当用打开选择器时，该值在`switch`组件内部被修改为`true`，并反映到父组件，否则为`false`，换言之，您无需监听`switch`的`change`事件，也能
知道某一个`switch`是否被选中的状态

| 参数			| 说明									| 类型									| 默认值		|  可选值	|
|:-				|:-										|:-										|:-			|:-			|
| loading		| 是否处于加载中							| Boolean								| false		| true		|
| disabled		| 是否禁用								| Boolean								| false		| true		|
| size			| 开关尺寸，单位rpx						| String &#124; Number					| 25		| -			|
| activeColor	| 打开时的背景色							| String								| #2979ff	| -			|
| inactiveColor	| 关闭时的背景色							| String								| #ffffff	| -			|
| value			| 通过v-model双向绑定的值					| Boolean &#124; String &#124; Number	| false		| -			|
| activeValue	| 打开选择器时的值						| Boolean &#124; String &#124; Number	| true		| -			|
| inactiveValue	| 关闭选择器时的值						| Boolean &#124; String &#124; Number	| false		| -			|
| asyncChange	| 是否开启异步变更，开启后需要手动控制输入值	| Boolean								| false		| true		|
| space			| 圆点与外边框的距离						| String &#124; Number					| 0			| -			|


### Switch Event

|事件名	|说明										|回调参数													|
|:-		|:-											|:-															|
| change| 在`switch`打开或关闭时触发					| value：打开时为`activeColor`值，关闭时为`inactiveColor`值	|
| input	| 在`switch`打开或关闭时触发（没开启异步）		| value：打开时为`activeColor`值，关闭时为`inactiveColor`值	|
