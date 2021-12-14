## Cell 单元格 <to-api/>

<demo-model url="/pages/componentsA/cell/cell"></demo-model>


cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:| :-:		|:-:			| :-:		| :-:		| :-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基础功能

- 该组件需要搭配`cell-group`使用，并由它实现列表组的上下边框，如不需要上下边框，配置`cellGroup`的`border`参数为`false`即可。
- 通过`title`设置左侧标题，`value`设置右侧内容。
- 通过`icon`字段设置图标，，或者图片链接(本地文件建议使用绝对地址)。

**注意：** 由于`cell`组件需要由`cellGroup`组件提供参数值，这些父子组件间通过Vue的"provide/inject"特性注入依赖，
所以您必须使用`cellGroup`包裹`cell`组件才能正常使用。

```html
<template>
	<u-cell-group>
		<u-cell icon="setting-fill" title="个人设置"></u-cell>
		<u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
	</u-cell-group>
</template>
```

### 自定义内容

- 通过插槽`icon`可以自定义图标，内容会替换左边图标位置
- 通过插槽`title`定义左边标题部分
- 通过插槽`right-icon`定义右边内容部分

```html
<u-cell-group>
	<u-cell  title="夕阳无限好" arrow-direction="down">
		<u-icon slot="icon" size="32" name="search"></u-icon>
		<!-- <u-badge count="99" :absolute="false" slot="right-icon"></u-badge> -->
		<u-switch slot="right-icon" v-model="checked"></u-switch>
	</u-cell>
	<u-cell icon="setting-fill" title="只是近黄昏"></u-cell>
</u-cell-group>
```

如上所示，可以给`cell`组件通过`slot="right-icon"`设定右边uView自带的`badge`或者`switch`组件：
- 如果搭配的是`badge`组件，注意设置`absolute`参数为`false`去掉绝对定位，否则其位于右侧的恰当位置，详见[Badge 徽标数](/components/badge.html)。
- 如果搭配的是`switch`组件，注意要通过`v-model`绑定一个内容为布尔值的变量，否则无法操作`switch`，详见[Switch 开关选择器](/components/switch.html)。
### 自定义大小

设置`size`可自定义大小

```html

<u-cell-group>
	<u-cell
	    size="large"
	    title="单元格"
	    value="内容"
	    isLink
	></u-cell>
	<u-cell
	    size="large"
	    title="单元格"
	    value="内容"
	    label="描述信息"
	></u-cell>
</u-cell-group>
```

### 展示右箭头

设置`isLink`为`true`，将会显示右侧的箭头，可以通过arrow-direction控制箭头的方向

```html
<u-cell-group>
	<u-cell icon="share" title="停车坐爱枫林晚" :isLink="true" arrow-direction="down"></u-cell>
	<u-cell icon="map" title="霜叶红于二月花" :isLink="false"></u-cell>
</u-cell-group>
```
### 跳转页面

设置`isLink`为`true`，单元格点击可跳转页面,传入`url`设置跳转地址

```html
<u-cell-group>
	<u-cell
	    title="打开标签页"
	    isLink
	    url="/pages/componentsB/tag/tag"
	></u-cell>
	<u-cell
	    title="打开徽标页"
	    isLink
	    url="/pages/componentsB/badge/badge"
	></u-cell>
</u-cell-group>
```
### 右侧内容垂直居中

设置`center`为`true`，可将右侧内容垂直居中

```html
<u-cell-group>
    <u-cell
        title="单元格"
        value="内容"
        label="描述信息"
        center
    ></u-cell>
</u-cell-group>
```
### 自定义插槽

设置`slot`为`title`，可自定义左侧区域内容
设置`slot`为`value`，可自定义右侧区域内容

```html
<u-cell-group>
    <u-cell value="内容">
    	<view
    	    slot="title"
    	    class="u-slot-title"
    	>
    		<text class="u-cell-text">单元格</text>
    		<u-tag
    		    text="标签"
    		    plain
    		    size="mini"
    		    type="warning"
    		>
    		</u-tag>
    	</view>
    </u-cell>
    <u-cell
        title="单元格"
    	isLink
    >
    	<text
    	    slot="value"
    	    class="u-slot-value"
    	>99</text>
    </u-cell>
</u-cell-group>
```


```css
/* App.vue */
.cell-hover-class {
	background-color: rgb(235, 237, 238);
}

/* 或者单是设置透明度 */
.cell-hover-class {
	opacity: 0.5;
}
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsA/cell/cell.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsA/cell/cell.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### CellGroup Props

| 参数			| 说明																			| 类型		| 默认值	| 可选值	|
| :-			| :-																			| :-		| :-	| :-	|
| title			| 分组标题																		| String	| -		| -		|
| border		| 是否显示外边框																	| Boolean	| true	| false	|
| customStyle	| 分组标题的的样式，对象形式，如{'font-size': '12px'} 或 {'fontSize': '12px'}		| object	| -		| -		|

### Cell Props

| 参数			| 说明															| 类型					| 默认值			| 可选值					|
| :-			| :-															| :-					| :-			| :-					|
| title			| 左侧标题														| String &#124; Number	| -				| -						|
| label			| 标题下方的描述信息												| String &#124; Number	| -				| -						|
| value			| 右侧的内容														| String &#124; Number	| -				| -						|
| icon			| 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)				| String				| -				| -						|
| titleWidth	| 标题的宽度，单位任意，数值默认为`px`单位							| String &#124; Number	| -				| -						|
| disabled		| 是否禁用cell													| Boolean				| false			| true					|
| border		| 是否显示下边框													| Boolean				| true			| false					|
| center		| 内容是否垂直居中(主要是针对右侧的value部分)						| Boolean				| false			| true					|
| url			| 点击后跳转的URL地址												| String				| -				| -						|
| linkType		| 链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作	| String				| navigateTo	| -						|
| clickable		| 是否开启点击反馈(表现为点击时加上灰色背景)							| Boolean				| false			| true					|
| isLink		| 是否展示右侧箭头并开启点击反馈									| Boolean				| false			| true					|
| required		| 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)			| Boolean				| false			| true					|
| rightIcon		| 右侧的图标箭头													| String				| arrow-right	| -						|
| arrowDirection| 右侧箭头的方向，可选值为：left，up，down							| String				| right			| left&#124;up&#124;down|
| iconStyle		| 左侧图标样式													| Object				| -				| -						|
| rightIconStyle| 右侧箭头图标的样式												| Object				| -				| -						|
| titleStyle	| 标题的样式														| Object				| -				| -						|
| size			| 单位元的大小，可选值为large										| String				| -				| -						|
| stop			| 点击cell是否阻止事件传播										| Boolean				| true 			| false					|
| name			| 标识符，用于在`click`事件中进行返回							    | String &#124; Number  | - 			| -					|


### Cell Slot

| 名称		| 说明																	|
| :-		| :-																	|
| title		| 自定义左侧标题部分的内容，如需使用，请勿定义`title`参数，或赋值`null`即可	|
| value		| 自定义右侧标题部分的内容，如需使用，请勿定义`value`参数，或赋值`null`即可	|
| icon		| 自定义左侧的图标														|
| right-icon| 自定义右侧图标内容，需设置`arrow`为`false`才起作用						|
| label		| 自定义`label`内容														|

### Cell Event

| 事件名	| 说明				| 回调参数	|
| :-	| :-				| :-		|
| click	| 点击cell列表时触发	| name: `props`的`name`参数标识符  |



<style scoped>
h3[id=cellgroup-props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=cell-props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=cell-slot] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
