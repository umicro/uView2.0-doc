## Steps 步骤条 <to-api/>

<demo-model url="/pages/componentsC/steps/steps"></demo-model>

该组件一般用于完成一个任务要分几个步骤，标识目前处于第几步的场景。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

:::tip 说明
本组件需要```u-steps```和```u-steps-item```配合使用
:::

- 通过`current`参数标识目前处于第几步，从0开始

```html
<template>
	<u-steps current="0">
		<u-steps-item title="已下单" desc="10:30">
		</u-steps-item>
		<u-steps-item title="已出库" desc="10:35" ></u-steps-item>
		<u-steps-item title="运输中" desc="11:40"></u-steps-item>
	</u-steps>
</template>
```

### 错误状态

如果设置```u-steps-item```的```error```参数为```true```的话，当前步骤将会为“失败”的状态

```html
<u-steps current="1">
	<u-steps-item title="已下单" desc="10:30"></u-steps-item>
	<u-steps-item error title="仓库着火" desc="10:35"></u-steps-item>
	<u-steps-item title="破产清算" desc="11:40"></u-steps-item>
</u-steps>
```

### 步骤条模式

```u-steps```的```dot```参数设置为```true```的话，将会以点状的形式展示步骤条样式。

```html
<u-steps current="1" dot>
	<u-steps-item title="已下单" desc="10:30"></u-steps-item>
	<u-steps-item title="已出库" desc="10:35"></u-steps-item>
	<u-steps-item title="运输中" desc="11:40"></u-steps-item>
</u-steps>
```


### 竖向模式

```u-steps```的```direction```参数设置为```column```的话，组件将会以竖向的形式展示步骤条内容。

```html
<template>
	<u-steps current="1" direction="column">
		<u-steps-item title="已下单" desc="10:30">
		</u-steps-item>
		<u-steps-item title="已出库" desc="10:35">
		</u-steps-item>
		<u-steps-item title="运输中" desc="11:40"></u-steps-item>
	</u-steps>
</template>
```


### 自定义图标

- 通过```activeIcon```可以设置激活状态的图标
- 通过```inactiveIcon```可以设置非激活状态的图标

```html
<u-steps
	current="1" activeIcon="checkmark" inactiveIcon="arrow-right">
	<u-steps-item title="已下单" desc="10:30"></u-steps-item>
	<u-steps-item title="已出库" desc="10:35"></u-steps-item>
	<u-steps-item title="运输中" desc="11:40"></u-steps-item>
</u-steps>
```

### 通过插槽自定义样式

通过默认插槽，可以自定义某个步骤当前状态的特殊标识

```html
<u-steps :current="1">
	<u-steps-item title="已下单" desc="10:30"></u-steps-item>
	<u-steps-item title="已出库" desc="10:35"></u-steps-item>
	<u-steps-item title="运输中" desc="11:40">
		<text class="slot-icon" slot="icon">运</text>
	</u-steps-item>
</u-steps>

<style lang="scss">
	.slot-icon {
		width: 21px;
		height: 21px;
		background-color: $u-warning;
		border-radius: 100px;
		font-size: 12px;
		color: #fff;
		line-height: 21px;
		text-align: center;
	}
</style>
```

### API

### Steps Props

| 参数			| 说明					| 类型					| 默认值		|  可选值	|
|:-				|:-						|:-						|:-			|:-			|
| direction		| row-横向，column-竖向	| String				| row		| column	|
| current		| 设置当前处于第几步		| Number &#124; String	| 0			| -			|
| activeColor	| 激活状态颜色			| String				| #3c9cff	| -			|
| inactiveColor	| 未激活状态颜色			| String				| #969799	| -			|
| activeIcon	| 激活状态的图标			| String				| -			| -			|
| inactiveIcon	| 未激活状态图标			| String				| -			| -			|
| dot			| 是否显示点类型			| Boolean				| false		| true		|
	

### Steps Item Props
| 参数		| 说明						| 类型					| 默认值	|  可选值	|
|:-			|:-							|:-						|:-		|:-			|
| title		| 标题文字					| String				| -		| -			|
| current	| 描述文本					| String				| -		| -			|
| iconSize	| 图标大小					| String &#124; Number	| 17	| -			|
| error		| 当前步骤是否处于失败状态		| Boolean				| false	| true		|


### Slot

| 名称	| 说明				|
|:-		|:-					|
| -		| 自定步骤状态内容	|


<style >
h3[id=slot] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
