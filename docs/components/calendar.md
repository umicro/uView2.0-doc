## Calendar 日历 <to-api/>

<demo-model url="/pages/componentsC/calendar/calendar"></demo-model>


此组件用于单个选择日期，范围选择日期等，日历被包裹在底部弹起的容器中。

**注意：** 此组件与[Picker 选择器](/components/picker.html)的日期选择模式有一定的重合之处，区别在于本组件为更专业的日期选择场景，能选择日期范围等。
另外`Picker`组件的日期模式可以配置更多的参数，如时、分、秒等，可以根据不同的使用场景进行选择。


### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:| :-:		|:-:			| :-:		| :-:		| :-:		|
|√	|√	|√			|√				|√			|√			|√			|


### 基本使用


- 通过`show`绑定一个布尔变量用于打开或收起日历弹窗。
- 通过`mode`参数指定选择日期模式，包含单选/多选/范围选择。

```html
<template>
	<view>
		<u-calendar :show="show"></u-calendar>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
			}
		}
	}
</script>
```


### 日历模式

- `mode`为`single`只能选择单个日期
- `mode`为`multiple`可以选择多个日期
- `mode`为`range`可以选择日期范围


### 单个日期模式

选择日期后，需要点击底部的`确定`按钮才能触发回调事件，回调参数为一个数组，有如下属性：

```js
["2021-07-01"]
```

示例代码：

```html
<template>
	<u-calendar :show="show" :mode="mode" @confirm="confirm"></u-calendar>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				mode: 'single'
			}
		},
		methods: {
			confirm(e) {
				console.log(e);
			}
		}
	}
</script>
```

### 多个日期模式

选择日期后，需要点击底部的`确定`按钮才能触发回调事件，回调参数为一个数组，有如下属性：

```js
 ["2021-07-27", "2021-07-29", "2021-07-30"]
```

示例代码：

```html
<template>
	<u-calendar :show="show" :mode="mode" @confirm="confirm"></u-calendar>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				mode: 'multiple'
			}
		},
		methods: {
			confirm(e) {
				console.log(e);
			}
		}
	}
</script>
```


### 日期范围模式

此模式用于选择一个日期范围，比如住酒店的入住到离店的日期范围，


此模式的返回参数如下：

```js
["2021-07-27", "2021-07-28", "2021-07-29", "2021-07-30", "2021-07-31"]
```

示例代码：

```html
<template>
	<u-calendar :show="show" :mode="mode" @confirm="confirm"></u-calendar>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				mode: 'range'
			}
		},
		methods: {
			confirm(e) {
				console.log(e);
			}
		}
	}
</script>
```

### 自定义主题颜色

组件可传入`color`参数，更改组件主题色


示例代码：

```html
<template>
	<u-calendar :show="show" 
    color="#f56c6c" :mode="mode" @confirm="confirm"></u-calendar>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				mode: 'range'
			}
		},
		methods: {
			confirm(e) {
				console.log(e);
			}
		}
	}
</script>
```


### 自定义文案

组件可以通过`formatter`以函数的方式定义日期文案

:::warning 注意：
微信小程序不支持通过`props`传递函数参数，所以组件内部暴露了一个`setFormatter`方法用于设置格式化方法，注意在页面的`onReady`生命周期获取`ref`再操作。
:::

```html
<template>
	<u-calendar 
        startText="住店"
        endText="离店"
        confirmDisabledText="请选择离店日期"
        :formatter="formatter"
        :show="show" 
        :mode="mode" 
        @confirm="confirm"
		ref="calendar"
	>
    </u-calendar>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				mode: 'range'
			}
		},
		onReady() {
			// 如果需要兼容微信小程序的话，需要用此写法
			this.$refs.calendar.setFormatter(this.formatter)
		},
		methods: {
			confirm(e) {
				console.log(e);
			},
			formatter(day) {
				const d = new Date()
				let month = d.getMonth() + 1
				const date = d.getDate()
				if(day.month == month && day.day == date + 3)
				{
					day.bottomInfo = '有优惠'
					day.dot = true
				}
				return day
		    }
		}
	}
</script>

<style lang="scss" scoped>
	.title{
		color: $u-primary;
		text-align: center;
		padding: 20rpx 0 0 0;
	}
</style>
```


### 日期最大范围

组件可以通过`maxDate`定义日期文案

```html
<template>
	<u-calendar 
        :maxDate="maxDate"
        :show="show" 
        @confirm="confirm">
	</u-calendar>
</template>

<script>
	const d = new Date()
	const year = d.getFullYear()
	let month = d.getMonth() + 1
	month = month < 10 ? `0${month}` : month
	const date = d.getDate()
	export default {
		data() {
			return {
				show: true,
				maxDate: `${year}-${month}-${date + 10}`,
			}
		},
		methods: {
			confirm(e) {
				console.log(e);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.title{
		color: $u-primary;
		text-align: center;
		padding: 20rpx 0 0 0;
	}
</style>
```

### 是否显示农历

组件可以通过`showLunar`定义是否显示农历

```html
<template>
	<u-calendar 
        showLunar
        :show="show" 
        @confirm="confirm">
	</u-calendar>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
			}
		},
		methods: {
			confirm(e) {
				console.log(e);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.title{
		color: $u-primary;
		text-align: center;
		padding: 20rpx 0 0 0;
	}
</style>
```
### 默认日期

组件可以通过`defaultDate`定义默认日期

```html
<template>
	<u-calendar 
        :defaultDate="defaultDateMultiple"
        :show="show" 
        mode="multiple"
        @confirm="confirm">
	</u-calendar>
</template>

<script>
	const d = new Date()
	const year = d.getFullYear()
	let month = d.getMonth() + 1
	month = month < 10 ? `0${month}` : month
	const date = d.getDate()
	export default {
		data() {
			return {
				show: true,
				defaultDateMultiple: [`${year}-${month}-${date}`, `${year}-${month}-${date + 1}`, `${year}-${month}-${date + 2}`],
			}
		},
		methods: {
			confirm(e) {
				console.log(e);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.title{
		color: $u-primary;
		text-align: center;
		padding: 20rpx 0 0 0;
	}
</style>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsC/calendar/calendar.vue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsC/calendar/calendar.vue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数					| 说明												| 类型								| 默认值		| 可选值											|
| :-					| :-												| :-								| :-		| :-											|
| title					| 标题内容											| String							| 日期选择	| -												|
| showTitle				| 是否显示标题										| Boolean							| true		| false											|
| showSubtitle			| 是否显示副标题										| Boolean							| true		| false											|
| mode					| 日期类型选择										| String							| single	| multiple-可以选择多个日期，range-选择日期范围		|
| startText				| mode=range时，第一个日期底部的提示文字				| String							| 开始		| -												|
| endText				| mode=range时，最后一个日期底部的提示文字				| String							| 结束		| -												|
| customList			| 自定义列表											| Array								| []		|  []											|
| color					| 主题色，对底部按钮和选中日期有效						| String							| #3c9cff	| -												|
| minDate				| 最小的可选日期										| Number &#124; String				| 0			| -												|
| maxDate				| 最大可选日期										| Number &#124; String				| 0			| -												|
| defaultDate			| 默认选中的日期，mode为multiple或range是必须为数组格式	| Array &#124; String &#124; Date	| null		| -												|
| maxCount				| mode=multiple时，最多可选多少个日期					| Number &#124; String				| Number.MAX_SAFE_INTEGER	| -								|
| rowHeight				| 日期行高											| Number &#124;String				| 56		| -												|
| formatter			    | 日期格式化函数(如需兼容微信小程序，则只能通过`setFormatter`方法)					| Function				| null				| -														|		
| showLunar				| 是否显示农历										| Boolean							| false		| true											|
| showMark				| 是否显示月份背景色									| Boolean							| true		| false											|
| confirmText			| 确定按钮的文字										| String							| 确定		| -												|
| confirmDisabledText	| 确认按钮处于禁用状态时的文字							| String							| 确定		| -												|
| show					| 是否显示日历弹窗									| Boolean							| false		| true											|
| closeOnClickOverlay	| 是否允许点击遮罩关闭日历	（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）	| Boolean							| false		| true											|
| readonly	            | 是否为只读状态，只读状态下禁止选择日期								| Boolean							| false		| true											|
| maxRange	            | 日期区间最多可选天数，默认无限制，mode = range时有效				    | Number &#124; String				| 无限制		| -											|
| rangePrompt	        | 范围选择超过最多可选天数时的提示文案，mode = range时有效				| String &#124; null				| 	选择天数不能超过 xx 天	| -											|
| showRangePrompt	    | 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效								| Boolean							| true		| false											|
| allowSameDay	            | 是否允许日期范围的起止时间为同一天，mode = range时有效								| Boolean							| false		| true											|


### Methods
| 方法名								| 说明					| 
| :-								| :-					|
| setFormatter	| 为兼容微信小程序而暴露的内部方法，见上方说明	 |


### Event

| 事件名		| 说明					| 回调参数					|
| :-		| :-					| :-						|
| confirm	| 日期选择完成后触发，若`show-confirm`为`true`，则点击确认按钮后触发	| 选择日期相关的返回参数		|
| close		| 日历关闭时触发			| 可定义页面关闭时的回调事件	|



<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=slot] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
