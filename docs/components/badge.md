## Badge 徽标数 <to-api/>
该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。

<demo-model url="/pages/componentsB/badge/badge"></demo-model>


### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

### 基本使用

- 通过`value`参数定义徽标内容
- 通过`type`设置主题。重申一次，uView中，所有组件的`type`参数都只有5个固定的可选值，分别是`primary`(蓝色-主色)，`warning`(黄色-警告)，
`error`(红色-错误)，`success`(绿色-成功)，`info`(灰色-信息)
- 通过`max`参数控制最大值，超过最大值会显示 '{max}+'

::: warning 注意
此组件内部默认为`absolute`绝对定位，所以需要给`badge`父组件(元素)设置`position: relative`相对定位，
再通过调整`offset`偏移值(数组，两个元素，第一个元素为`top`值，第二个元素为`right`值，单位rpx，可为负值，如"[-10, -10]")设置到合适的位置即可。  
如果不需要组件内容默认的自动绝对定位，设置`absolute`参数为`false`即可。
:::

```html
<template>
	<view style="padding: 20px;">
		<view class="box">
			 <u-badge :type="type" max="99" :value="value"></u-badge>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type:"warning",
			value:100
		}
	}
};
</script>

<style lang="scss" scoped>
	.box{
		width: 100px; 
		height: 100px;
		background-color: #909193;
		border-radius: 15px;
	}
</style>
```

### 设置徽标的类型为一个圆点

通过`isDot`参数设置，该形式组件没有内容，只显示一个圆点

```html
<u-badge :isDot="true" type="success"></u-badge>
```

### 设置数字的显示方式 overflow|ellipsis|limit

- overflow会根据max字段判断，超出显示`${max}+`
- ellipsis会根据max判断，超出显示`${max}...`
- limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数

```html
<template>
	<view style="padding: 20px;">
		<view class="box">
			 <u-badge numberType="overflow" :type="type" max="99" :value="value"></u-badge>
		</view>
		<view class="box">
			 <u-badge numberType="ellipsis" :type="type" max="99" :value="value"></u-badge>
		</view>
		<view class="box">
			 <u-badge numberType="limit" :type="type" max="99" :value="value"></u-badge>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type:"warning",
			value:99999
		}
	}
};
</script>

<style lang="scss" scoped>
	.box{
		width: 100px; 
		height: 100px;
		background-color: #909193;
		border-radius: 15px;
	}
</style>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsB/badge/badge.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="/common/github.svg" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsB/badge/badge.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="/common/gitee.svg" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数		| 说明																								| 类型					| 默认值		|  可选值							|
|:-			|:-																									|:-						|:-			|:-									|
| isDot		| 不展示数字，只有一个小点																				| Boolean				| false		| true								|
| value		| 展示的数字，大于 `overflowCount` 时显示为 `${overflowCount}+`，为`0`且`show-zero`为`false`时隐藏			| String &#124; Number	| -			| -									|
| show		| 组件是否显示																						| Boolean				| true		| false								|
| max		| 最大值，超过最大值会显示 '{max}+'																		| String &#124; Number	| 99		| -									|
| type		| 主题类型																							| String				| error		| warning / success / primary / info|
| showZero	| 当数值为 0 时，是否展示 Badge																			| Boolean				| false		| true								|
| bgColor	| 背景颜色，优先级比`type`高，如设置，`type`参数会失效														| String				| -			| -									|
| color		| 字体颜色																							| String				| #ffffff	| -									|
| shape		| 徽标形状，circle-四角均为圆角，horn-左下角为直角														| String				| circle	| horn								|
| numberType| 置数字的显示方式，详细见上方文档																		| String				| overflow	| ellipsis / limit					|
| offset	| 设置badge的位置偏移，格式为 [x, y]，也即设置的为`top`和`right`的值，`absolute`为`true`时有效				| Array					| -			| -									|
| inverted	| 是否反转背景和字体颜色																				| Boolean				| false		| true								|
| absolute	| 组件是否绝对定位，为`true`时，`offset`参数才有效														| Boolean				| false		| true								|


<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 40%;
}
</style>
