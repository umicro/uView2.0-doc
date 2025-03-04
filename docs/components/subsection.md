## Subsection 分段器 <to-api/>

<demo-model url="/pages/componentsC/subsection/subsection"></demo-model>


该分段器一般用于用户从几个选项中选择某一个的场景

### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

### 基本使用

- 通过`list`数组参数传递分段的选项，数组元素可为字符串，或者通过`keyName`参数传入对象(默认为`name`)
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
				// 或者如下，也可以配置keyName参数修改对象键名
				// list: [{name: '未付款'}, {name: '待评价'}, {name: '已付款'}],
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

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsC/subsection/subsection.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="/common/github.svg" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsC/subsection/subsection.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="/common/gitee.svg" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
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
| keyName		| 从`list`元素对象中读取的键名				| String	            | name		| -			|

### Events

| 事件名| 说明						| 回调参数							|
| :-	| :-						| :-								|
| change| 分段器选项发生改变时触发		| index：选项的index索引值，从0开始	|
