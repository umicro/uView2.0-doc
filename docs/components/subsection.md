## Subsection 分段器 <to-api/>

<demo-model url="/pages/componentsC/subsection/subsection"></demo-model>


该分段器一般用于用户从几个选项中选择某一个的场景

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过`list`数组参数传递分段的选项
- 通过`current`指定初始化时激活的选项

```html
<template>
	<u-subsection :list="list" :current="1"></u-subsection>
</template>

<script>
	export default {
		data() {
			return {
                list: ['未付款', '待评价', '已付款'],
				current: 1
			}
		}
	}
</script>
```

### 模式选择

通过`mode`设置分段器的模式
- 值为`button`时为按钮类型
- 值为`subsection`时为分段器形式

```html
<u-subsection :list="list" mode="subsection" :current="1"></u-subsection>
```


### 颜色配置

- 通过`activeColor`配置激活选项的文字颜色
- 通过`inactiveColor`配置未激活选项的文字颜色
- 通过`bgColor`配置背景颜色，mode为button时有效（默认 '#eeeeef' ）

```html
<u-subsection activeColor="#f56c6c"></u-subsection>
```


### 注意事项

如果想通过一个变量绑定`current`值，需要在`change`事件回调中修改此值，否则可能会由于`props`的限制，前后两次设置`current`为相同的值，
而导致无法通过修改`current`值触发分段器的变化。

```html
<template>
    <u-subsection :list="list" :current="curNow" @change="sectionChange"></u-subsection>
</template>

<script>
	export default {
		data() {
			return {
                list: ['未付款', '待评价', '已付款'],
				curNow: 0
			}
		},
		methods: {
			sectionChange(index) {
				this.curNow = index;
			}
		}
	}
</script>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础使用</text>
			<view class="u-demo-block__content">
				<u-subsection
					:list="list"
					mode="subsection"
					:current="current1"
					@change="change1"
				></u-subsection>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">按钮模式</text>
			<view class="u-demo-block__content">
				<u-subsection
					:list="list"
					mode="button"
					:current="current2"
					@change="change2"
				></u-subsection>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">更换主题</text>
			<view class="u-demo-block__content">
				<u-subsection
					:list="list"
					mode="subsection"
					:current="current3"
					activeColor="#f56c6c"
					@change="change3"
				></u-subsection>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">默认位置</text>
			<view class="u-demo-block__content">
				<u-subsection
					:list="list"
					mode="button"
					:current="current4"
					activeColor="#f9ae3d"
					@change="change4"
				></u-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current1: 0,
				current2: 0,
				current3: 0,
				current4: 1,
				list: ['未付款', '待评价', '已付款']
			}
		},
		onLoad() {
			// setTimeout(() => {
			// 	this.current1 = 2
			// }, 3000); 
		},
		methods: {
			change1(index) {
				this.current1 = index
			},
			change2(index) {
				this.current2 = index
			},
			change3(index) {
				this.current3 = index
			},
			change4(index) {
				this.current4 = index
			}
		},
	}
</script>

<style lang="scss">
	.album {
		@include flex;
		align-items: flex-start;

		&__avatar {
			background-color: $u-bg-color;
			padding: 5px;
			border-radius: 3px;
		}

		&__content {
			margin-left: 10px;
			flex: 1;
		}
	}
</style>

```
:::

### API

### Props

| 参数			| 说明									| 类型					| 默认值		|  可选值	|
|:-				|:-										|:-						|:-			|:-			|
| list			| 选项的数组，形式见上方"基本使用"			| Array					| -			| -			|
| current		| 初始化时默认选中的选项索引值				| String &#124; Number	| 0			| -			|
| activeColor	| 激活时的颜色							| String				| #3c9cff	| -			|
| inactiveColor| 未激活时的颜色							| String				| #303133	| -			|
| mode			| 模式选择，见上方"模式选择"说明			| String				| button	| subsection|
| fontSize		| 字体大小，单位px						| String &#124; Number	| 12		| -			|
| bold			| 激活选项的字体是否加粗					| Boolean				| true		| false		|
| bgColor		| 组件背景颜色，`mode`为`button`时有效		| String				| #eeeeef	| -			|

### Events

| 事件名| 说明						| 回调参数							|
| :-	| :-						| :-								|
| change| 分段器选项发生改变时触发		| index：选项的index索引值，从0开始	|
