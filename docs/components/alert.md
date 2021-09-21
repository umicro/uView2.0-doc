## Alert 警告提示 <to-api/>

<demo-model url="/pages/componentsB/alert/alert"></demo-model>

警告提示，展现需要关注的信息。

### 使用场景

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过`title`和`description`设置组件的标题和描述内容
- 通过`type`设置主题类型，有`primary`,`success`,`error`,`warning`,`info`可选值
- 通过`effect`设置主题浅或深色调，有`light`(浅色 默认),`dark`(深色)可选值
```html
<template>
	<view>
		<u-alert :title="title" type = "warning" :description = "description"></u-alert>
		<u-alert :title="title" type = "warning" effect="dark" :description = "description"></u-alert>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'uView的目标是成为uni-app生态最优秀的UI框架',
			description:'uView是uni-app生态专用的UI框架'
		};
	},
	onLoad() {},
	methods: {
	}
};
</script>
```

### 图标

通过`showIcon`设置是否显示图标，作用是让信息类型更加醒目。

**注意**：当前版本图标为uView内置图标，根据`type`参数显示不同的图标，无法自定义。

```html
<u-alert type="warning" :show-icon="true"></u-alert>
```

### 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。
- `closable`参数配置是否可关闭


```html
<template>
	<view>
		<u-alert :title="title"  type = "warning" :closable="closable" :description = "description"></u-alert>
	
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'uView的目标是成为uni-app生态最优秀的UI框架',
			description:'uView是uni-app生态专用的UI框架',
			closable:true
		};
	},
	onLoad() {},
	methods: {
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
				<view class="u-alert-item">
					<u-alert
					    description="山不在于高，有了神仙就出名"
					    type="warning"
					></u-alert>
				</view>
				<view class="u-alert-item">
					<u-alert
					    description="水不在深，有龙则灵"
					    type="primary"
					></u-alert>
				</view>
				<view class="u-alert-item">
					<u-alert
					    description="斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青"
					    type="error"
					></u-alert>
				</view>
				<view class="u-alert-item">
					<u-alert
					    description="谈笑有鸿儒，往来无白丁"
					    type="info"
					></u-alert>
				</view>
				<view class="u-alert-item">
					<u-alert
					    description="可以调素琴，阅金经"
					    type="success"
					></u-alert>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">深浅色</text>
			<view class="u-demo-block__content">
				<view class="u-alert-item">
					<u-alert
					    description="无丝竹之乱耳，无案牍之劳形"
					    type="warning"
					></u-alert>
				</view>
				<view class="u-alert-item">
					<u-alert
					    description="南阳诸葛庐，西蜀子云亭。孔子云：何陋之有"
					    type="warning"
					    effect="dark"
					></u-alert>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">显示图标</text>
			<view class="u-demo-block__content">
				<view class="u-alert-item">
					<u-alert
					    description="六王毕，四海一；蜀山兀，阿房出"
					    type="error"
					    showIcon
					></u-alert>
				</view>
				<view class="u-alert-item">
					<u-alert
					    description="覆压三百余里，隔离天日。骊山北构而西折，直走咸阳，二川溶溶，流入宫墙"
					    type="error"
					    effect="dark"
					    showIcon
					></u-alert>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">可关闭</text>
			<view class="u-demo-block__content">
				<view class="u-alert-item">
					<u-alert
					    description="五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角"
					    type="success"
					    showIcon
					    closable
					></u-alert>
				</view>
				<view class="u-alert-item">
					<u-alert
					    description="盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落"
					    type="success"
					    effect="dark"
					    closable
					    showIcon
					></u-alert>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">带标题</text>
			<view class="u-demo-block__content">
				<view class="u-alert-item">
					<u-alert
					    title="妃嫔媵嫱，王子皇孙，辞楼下殿"
					    description="长桥卧波，未云何龙？复道行空，不霁何虹"
					    type="info"
					    showIcon
					    closable
					></u-alert>
				</view>
				<view class="u-alert-item">
					<u-alert
					    title="辇来于秦，朝歌夜弦，为秦宫人。明星荧荧，开妆镜也"
					    description="高低冥迷，不知西东。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐"
					    type="info"
					    effect="dark"
					    closable
					    showIcon
					></u-alert>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				description: '',
				title: ''
			}
		}
	}
</script>

<style lang="scss">
	.u-alert-item {
		flex: 1;
		margin-bottom: 10px;
	}

	.u-demo-block__content {
		flex-direction: column !important;
		align-items: stretch;
	}
</style>

```
:::

### API

### Props

| 参数			| 说明												| 类型					| 默认值			| 可选值												|
|:-				|:-													|:-						|:-				|:-													|
| title			| 显示的文字											| String				| -				| -													|
| type			| 使用预设的颜色										| String				| warning		| success &#124; primary &#124; error &#124; info	|
| description	| 辅助性文字，颜色比`title`浅一点，字号也小一点，可选	| String				| -				| -													|
| closable		| 关闭按钮(默认为叉号icon图标)							| Boolean				| false			| true												|
| showIcon		| 是否显示左边的辅助图标								| Boolean				| false			| true												|
| effect		| 多图时，图片缩放裁剪的模式							| String				| light(浅色)	| dark(深色)											|
| center		| 文字是否居中										| Boolean				| false			| true												|
| fontSize		| 字体大小											| String &#124; Number	| 14			| -													|


### Events

|事件名	|说明			|回调参数	|
|:-		|:-				|:-			|
|click	|点击组件时触发	|-			|
