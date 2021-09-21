## Radio 单选框 <to-api/>

<demo-model url="/pages/componentsA/radio/radio"></demo-model>


单选框用于有一个选择，用户只能选择其中一个的场景。


### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 该组件需要搭配`radioGroup`组件使用，以便用户进行操作时，获得当前单选框组的选中情况
- 通过`v-model`给`radioGroup`组件绑定一个变量，对应的` name`将会被选中



```html
<template>
	<view class="">
		<u-radio-group v-model="value" @change="radioGroupChange">
			<u-radio 
				@change="radioChange" 
				v-for="(item, index) in list" :key="index" 
				:name="item.name"
				:disabled="item.disabled"
			>
				{{item.name}}
			</u-radio>
		</u-radio-group>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: 'apple',
					disabled: false
				},
				{
					name: 'banner',
					disabled: false
				},
				{
					name: 'orange',
					disabled: false
				}
			],
			// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
			value: 'orange',
		};
	},
	methods: {
		// 选中某个单选框时，由radio时触发
		radioChange(e) {
			console.log(e);
		},
		// 选中任一radio时，由radio-group触发
		radioGroupChange(e) {
			console.log(e);
		}
	}
};
</script>
```


### 自定义形状

可以通过设置`shape`为`square`或者`circle`，将单选框设置为方形或者圆形


```html
<u-radio-group v-model="value">
	<u-radio shape="circle">月明人倚楼</u-radio>
</u-radio-group>
```

### 禁用radio

设置`disabled`为`true`，即可禁用某个组件，让用户无法点击

```html
<u-radio-group v-model="value"
	<u-radio :disabled="true">明月几时有</u-radio>
</u-radio-group>
```
### 是否禁止点击提示语选中复选框

设置`labelDisabled`为`true`，即可禁止点击提示语选中复选框

```html
<u-radio-group v-model="value"
	<u-radio :labelDisabled="true">明月几时有</u-radio>
</u-radio-group>
```

### 自定义颜色

此处所指的颜色，为`radio`选中时的背景颜色，参数为`activeColor`


```html
<u-radio-group v-model="value">
	<u-radio activeColor="red">思悠悠，恨悠悠，恨到归时方始休</u-radio>
</u-radio-group>
```

### 横向排列形式

可以通过设置`placement`为`row`或者`column`，将复选框设置为横向排列或者竖向排列

```html
<u-radio-group 
    v-model="value"
    placement="row">
	<u-radio activeColor="red">思悠悠，恨悠悠，恨到归时方始休</u-radio>
</u-radio-group>
```
### 横向两端排列形式

可以通过设置`iconPlacement`为`left`或者`right`，将复选框勾选图标的对齐设置为左对齐或者右对齐

```html
<u-radio-group 
    v-model="value"
    iconPlacement="right">
	<u-radio activeColor="red">思悠悠，恨悠悠，恨到归时方始休</u-radio>
</u-radio-group>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基本案例</text>
			<text class="u-block__title">苹果、香蕉和橙子那个最甜？</text>
			<view class="u-demo-block__content">
				<view class="u-page__radio-item">
					<u-radio-group
						v-model="radiovalue1"
						placement="column"
						@change="groupChange"
					>
						<u-radio
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in radiolist1"
							:key="index"
							:label="item.name"
							:name="item.name"
							@change="radioChange"
						>
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义形状</text>
			<text class="u-block__title">王者荣耀谁最帅？</text>
			<view class="u-demo-block__content">
				<view class="u-page__radio-item">
					<u-radio-group
						v-model="radiovalue2"
						placement="column"
						shape="square"
					>
						<u-radio
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in radiolist2"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否禁用</text>
			<text class="u-block__title">苹果、香蕉和菠萝那个最甜？</text>
			<view class="u-demo-block__content">
				<view class="u-page__radio-item">
					<u-radio-group
						v-model="radiovalue3"
						placement="column"
					>
						<u-radio
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in radiolist3"
							:key="index"
							:label="item.name"
							:name="item.name"
							:disabled="!index"
						>
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">纵向排列</text>
			<text class="u-block__title">狙击枪用哪个倍镜最好？</text>
			<view class="u-demo-block__content">
				<view class="u-page__radio-item">
					<u-radio-group
						v-model="radiovalue4"
						placement="column"
						:labelDisabled="true"
					>
						<u-radio
							:customStyle="{marginBottom:'8px'}"
							v-for="(item, index) in radiolist4"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义颜色？</text>
			<text class="u-block__title">你比较喜欢下面哪个颜色？</text>
			<view class="u-demo-block__content">
				<view class="u-page__radio-item">
					<u-radio-group
						v-model="radiovalue5"
						placement="column"
						activeColor="#19be6b"
					>
						<u-radio
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in radiolist5"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">横向排列形式？</text>
			<text class="u-block__title">王者荣耀哪个英雄最美？</text>
			<view class="u-demo-block__content">
				<view class="u-page__radio-item">
					<u-radio-group
						v-model="radiovalue6"
						placement="row"
					>
						<u-radio
							:customStyle="{marginRight: '16px'}"
							v-for="(item, index) in radiolist6"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">横向两端排列形式？</text>
			<text class="u-block__title">你觉得阿木木可爱吗？</text>
			<view>
				<view class="u-page__radio-item">
					<u-radio-group
						v-model="radiovalue7"
						:borderBottom="true"
						placement="column"
						iconPlacement="right"
					>
						<u-radio
							:customStyle="{marginBottom: '16px'}"
							v-for="(item, index) in radiolist7"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-radio>
					</u-radio-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 基本案列数据
				radiolist1: [{
						name: '苹果',
						disabled: false
					},
					{
						name: '香蕉',
						disabled: false
					},
					{
						name: '橙子',
						disabled: false
					}, {
						name: '榴莲',
						disabled: false
					}
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue1: '苹果',

				// 自定义形状数据
				radiolist2: [{
						name: '李白',
						disabled: false
					},
					{
						name: '韩信',
						disabled: false
					},
					{
						name: '马可波罗',
						disabled: false
					}, {
						name: '百里守约',
						disabled: false
					}
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue2: '李白',

				// 是否禁用数据
				radiolist3: [{
						name: '苹果',
						disabled: false
					},
					{
						name: '香蕉',
						disabled: false
					},
					{
						name: '菠萝',
						disabled: false
					}
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue3: '苹果',

				// 是否禁止点击提示语选中单选框数据
				radiolist4: [{
						name: '3倍镜',
						disabled: false
					},
					{
						name: '4倍镜',
						disabled: false
					},
					{
						name: '6倍镜',
						disabled: false
					},
					{
						name: '8倍镜',
						disabled: false
					}
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue4: '6倍镜',

				//自定义颜色数据
				radiolist5: [{
						name: '红色',
						disabled: false
					},
					{
						name: '绿色',
						disabled: false
					},
					{
						name: '蓝色',
						disabled: false
					},
					{
						name: '黄色',
						disabled: false
					}
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue5: '绿色',

				//横向排列形式数据
				radiolist6: [{
						name: '妲己',
						disabled: false
					},
					{
						name: '虞姬',
						disabled: false
					},
					{
						name: '不知火舞',
						disabled: false
					},
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue6: '妲己',

				//横向两端排列形式数据
				radiolist7: [{
						name: '可爱',
						disabled: false
					},
					{
						name: '一般',
						disabled: false
					},
					{
						name: '不可爱',
						disabled: false
					},
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue7: '可爱',
			}
		},
		watch: {
			radiovalue1(newValue, oldValue) {
				console.log('v-model', newValue);
			}
		},
		onLoad() {

		},
		methods: {
			groupChange(n) {
				console.log('groupChange', n);
			},
			radioChange(n) {
				console.log('radioChange', n);
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		&__style {
			font-size: 16px;
			color: rgb(96, 98, 102);
			margin-bottom: 20rpx;
			font-weight: bold;
		}

		&__title {
			font-size: 16px;
			color: rgb(96, 98, 102);
			margin-bottom: 20rpx;
		}
	}
</style>

```
:::

### API

### Radio Props

注意：`radio`和`radio-group`二者同名参数中，`radio`的参数优先级更高。

| 参数			| 说明																		| 类型				| 默认值	| 可选值	|
| :-			| :-																		| :-				| :-	| :-	|
| name			| checkbox的名称																| String \ Number	| -		| -		|
| shape			| 形状，square为方形，circle为圆型											| String			| square| circle|
| disabled		| 是否禁用																	| Boolean			| -		| -		|
| labelDisabled	| 是否禁止点击提示语选中复选框													| String \ Boolean	| -		| -		|
| activeColor	| 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值					| String			| -		| -		|
| inactiveColor	| 未选中的颜色																| String			| -		| -		|
| iconSize		| 图标的大小，单位px															| String \ Number	| -		| -		|
| labelSize		| label的字体大小，px单位														| String \ Number	| -		| -		|
| label			| label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式		| String \ Number	| -		| -		|
| size			| 整体的大小																	| String \ Number	| -		| -		|
| iconColor		| 图标颜色																	| String			| -		| -		|
| labelColor	| label的颜色																| String			| -		| -		|



### radioGroup Props


	
| 参数			| 说明													| 类型					| 默认值		| 可选值	|
| :-			| :-													| :-					| :-		| :-	|
| value			| 绑定的值												| String\Number\Boolean	| []		| -		|
| disabled		| 是否禁用全部checkbox									| Boolean				| false		| true	|
| shape			| 形状，circle-圆形，square-方形							| String				| circle	| square|
| activeColor	| 选中状态下的颜色，如子`Checkbox`组件设置此值，将会覆盖本值	| String				| #2979ff	| -		|
| inactiveColor	| 未选中的颜色											| String				| #c8c9cc	| -		|
| name			| 标识符													| String				| -			| -		|
| size			| 整个组件的尺寸，默认px									| String \ Number		| 18		| -		|
| placement		| 布局方式，row-横向，column-纵向							| Boolean				| row		| column|
| label			| 文本													| String				| -			| -		|
| labelColor	| label的字体颜色										| String				| #303133	| -		|
| labelSize		| label的字体大小，px单位									| String \ Number		| 14		| -		|
| labelDisabled	| 是否禁止点击文本操作									| Boolean				| false		| true	|
| iconColor		| 图标颜色												| String				| #ffffff	| -		|
| iconSize		| 图标的大小，单位px										| String \ Number		| 12		| -		|
| borderBottom	| 竖向配列时，是否显示下划线								| Boolean				| false		| true	|
| iconPlacement	| 勾选图标的对齐方式，left-左边，right-右边					| String				| left		| right	|


### radio Event

| 事件名	| 说明										| 回调参数							| 版本	|
| :-	| :-										| :-								| :-	|
| change| 某个`radio`状态发生变化时触发(选中状态)		| name: 通过`props`传递的`name`参数	| -		|


### radioGroup Event

| 事件名	| 说明								| 回调参数									| 版本	|
| :-	| :-								| :-										| :-	|
| change| 任一个`radio`状态发生变化时触发		| name: 值为`radio`通过`props`传递的`name`值	| -		|
