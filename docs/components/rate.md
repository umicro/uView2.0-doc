## Rate 评分 <to-api/>

<demo-model url="/pages/componentsA/rate/rate"></demo-model>

该组件一般用于满意度调查，星型评分的场景。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过`count`参数设置总共有多少颗星星可选择
- 通过`v-model`双向绑定初始化时默认选中的星星数量

```html
<template>
	<u-rate :count="count" v-model="value"></u-rate>
</template>

<script>
	export default {
		data() {
			return {
				count: 4,
				value: 2
			}
		}
	}
</script>
```

### 自定义样式

- 通过`active-color`设置选中的星星的颜色
- 通过`inactive-color`设置未选中时星星的颜色
- 通过`gutter`设置星星的间距，左右内边距各占`gutter`的一半

```html
<u-rate active-color="#FA3534" inactive-color="#b2b2b2" gutter="20"></u-rate>
```

### 自定义图标

- 通过`active-icon`设置激活的图标
- 通过`inactive-icon`设置未激活的图标

下方示例为使用心形图标替代默认的星星图标：

```html
<u-rate activeIcon="heart-fill" inactiveIcon="heart"></u-rate>
```

### 最少选中的数量

```html
<u-rate :minCount="5"></u-rate>
```

### 禁用状态

禁用下，无法点击或者滑动选择，但是可以通过`value`设置默认选中的数量，禁用状态下用来展示分数，允许出现半星

```html
<u-rate :value="3.7" :disabled="true"></u-rate>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基本案例</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-rate size="20"></u-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义选中星星数量</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-rate
						size="20"
						v-model="value"
						@change="change"
					></u-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义星星大小</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-rate size="30" count="4"></u-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否禁用评分</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<u-rate size="20" :disabled="true"></u-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义选中星星颜色</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<u-rate
						size="20"
						v-model="activeColorValue"
						activeColor="#2979ff"
					></u-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义未选中星星颜色</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<u-rate
						size="20"
						v-model="value1"
						inactiveColor="#2979ff"
					></u-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">禁止触摸选择</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<u-rate size="20" :touchable="false"></u-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">允许触摸选择</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<u-rate size="20" :touchable="true"></u-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否允许半星</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<u-rate
						size="20"
						v-model="HalfValue"
						:allowHalf="true"
						@change="change"
					></u-rate>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义选中的图标</text>
			<view class="u-demo-block__content">
				<view class="u-page__rate-item">
					<u-rate
						size="20"
						v-model="activeIconValue"
						inactiveIcon="heart"
						activeIcon="heart-fill"
					></u-rate>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//自定义星星的个数
				value: 3,
				value1: 2,
				// 自定义选择星星颜色个数
				activeColorValue: 3,
				// 是否允许半星的个数
				HalfValue: 3.5,
				// 自定义图标星星个数
				activeIconValue: 3,
			}
		},
		watch: {
			value(newValue, oldValue) {
				// console.log(newValue);
			}
		},
		methods: {
			change(e) {
				// console.log('change', e);
			}
		},
	}
</script>

<style lang="scss">
	.u-page {}
</style>

```
:::

### API

### Props

| 参数			| 说明									| 类型					| 默认值		|  可选值	|
|:-				|:-										|:-						|:-			|:-			|
| value			| 双向绑定选择星星的数量					| String &#124; Number	| 1			| -			|
| count			| 最多可选的星星数量						| String &#124; Number	| 5			| -			|
| disabled		| 是否禁止用户操作						| Boolean				| false		| true		|
| size			| 星星的大小，单位rpx						| String &#124; Number	| 18		| -			|
| inactiveColor	| 未选中星星的颜色						| String				| #b2b2b2	| -			|
| activeColor	| 选中的星星颜色							| String				| #FA3534	| -			|
| gutter		| 星星之间的距离							| String &#124; Number	| 4			| -			|
| minCount		| 最少选中星星的个数						| String &#124; Number	| 1			| -			|
| allowHalf		| 是否允许半星选择						| Boolean				| false		| true		|
| activeIcon	| 选中时的图标名，只能为uView的内置图标		| String				| star-fill	| -			|
| inactiveIcon	| 未选中时的图标名，只能为uView的内置图标	| String				| star		| -			|
| touchable		| 是否可以通过滑动手势选择评分				| Boolean				| true		| false		|

<!-- | colors | 颜色分级显示，可以用不同颜色区分评分层级 | Array  | - | - | -->
<!-- | icons | 图标分级显示，可以用不同类型的icon区分评分层级 | Array  | - | - | -->

### Events

| 事件名 | 说明 | 回调参数 |
| :- | :- | :- |
| change | 选中的星星发生变化时触发 | value：当前选中的星星的数量，如果使用`v-model`双向绑定方式，无需监听此事件|
