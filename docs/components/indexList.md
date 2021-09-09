## IndexList 索引列表 <to-api/>

<demo-model url="/pages/componentsC/indexList/indexList"></demo-model>


通过折叠面板收纳内容区域

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

外层包裹一个`index-list`组件，锚点通过`index-anchor`组件传入，自定义列表内容通过`index-item`嵌套使用
- nvue需要将`index-anchor`写在`index-item`的外部
- 非nvue需要将`index-anchor`嵌套在`index-item`的内部
- 可以通过`index-list`参数自定义索引字符列表
- 需要监听页面的onPageScroll事件，将当前滚动条高度传入`index-list`组件

```html
<template>
	<u-index-list :index-list="indexList">
		<template v-for="(item, index) in itemArr">
			<!-- #ifdef APP-NVUE -->
			<u-index-anchor :text="indexList[index]"></u-index-anchor>
			<!-- #endif -->
			<u-index-item>
				<!-- #ifndef APP-NVUE -->
				<u-index-anchor :text="indexList[index]"></u-index-anchor>
				<!-- #endif -->
				<view class="list-cell" v-for="(cell, index) in item">
					{{cell}}
				</view>
			</u-index-item>
		</template>
	</u-index-list>
</template>

<script>
	export default {
		data() {
			return {
				indexList: ["A", "B", "C"],
				itemArr: [
					['列表A1','列表A2','列表A3'],
					['列表B1','列表B2','列表B3'],
					['列表C1','列表C2','列表C3']
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
```



### 自定义导航栏

默认情况下，组件的锚点是吸附在导航栏下方的，如果您修改了导航栏，比如取消导航栏、或者自定义了导航栏，就需要指定吸顶的高度，也就是`custom-nav-height`
的值，注意这个值的单位为`px`：

- 如果自定义了导航栏，需要`custom-nav-height`设置为导航栏的高度


### API

### IndexBar Props

| 参数				| 说明							| 类型							| 默认值		|  可选值	|
|:-					|:-								|:-								|:-			|:-			|
| inactiveColor		| 右边锚点状态非激活时的颜色		| String						| #606266	| -			|
| activeColor		| 右边锚点状态激活时的颜色			| String						| #5677fc	| -			|
| indexList			| 索引字符列表，数组				| Array[string &#124; number]	| A-Z		| -			|
| sticky			| 是否开启锚点自动吸顶			| Boolean						| true		| false		|
| customNavHeight	| 自定义导航栏的高度，单位默认px	| String &#124; Number			| 0			| -			|

### IndexAnchor Props

| 参数			| 说明							| 类型					| 默认值				|  可选值	|
|:-				|:-								|:-						|:-					|:-			|
| text			| 列表锚点文本内容				| String &#124; Number	| -					| -			|
| color			| 列表锚点文字颜色				| String				| #606266			| -			|
| size			| 列表锚点文字大小，单位默认px		| String &#124; Number	| 14				| -			|
| bgColor		| 列表锚点背景颜色				| String				| #dedede			| -			|
| height		| 列表锚点高度，单位默认px			| String &#124; Number	| 32				| -			|


### IndexBar Events

|事件名	|说明					|回调参数			|版本	|
|:-		|:-						|:-					|:-		|
| select| 选中右边索引字符时触发	| index: 索引字符	| -		|
 
 ### IndexItem Slots

| 名称		| 说明			|
|:-			|:-				|
| default	| 自定义列表内容	|
