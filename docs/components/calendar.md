## Calendar 日历 <Badge text="1.3.0" type="tip"/> <to-api/>

<demo-model url="/pages/componentsA/calendar/index"></demo-model>


此组件用于单个选择日期，范围选择日期等，日历被包裹在底部弹起的容器中。

**注意：** 此组件与[Picker 选择器](/components/picker.html)的日期选择模式有一定的重合之处，区别在于本组件为更专业的日期选择场景，能选择日期范围等。
另外`Picker`组件的日期模式可以配置更多的参数，如时、分、秒等，可以根据不同的使用场景进行选择。


### 平台差异说明

|  App  |  H5   | 微信小程序 | 支付宝小程序 | 百度小程序 | 头条小程序 | QQ小程序 |
| :---: | :---: | :--------: | :----------: | :--------: | :--------: | :------: |
|   √   |   √   |     √      |      √       |     √      |     √      |    √     |


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

```html
<template>
	<u-calendar 
        startText="住店"
        endText="离店"
        confirmDisabledText="请选择离店日期"
        :formatter="formatter"
        :show="show" 
        :mode="mode" 
        @confirm="confirm">
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
		color: $u-type-primary;
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
		color: $u-type-primary;
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
		color: $u-type-primary;
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
		color: $u-type-primary;
		text-align: center;
		padding: 20rpx 0 0 0;
	}
</style>
```

### API

### Props

| 参数                   | 说明                                                                                                | 类型             | 默认值                | 可选值                                    |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ---------------- | --------------------- | ----------------------------------------- |
| title                   | 是否显示标题 | Boolean           | true                  | false                       |
|showSubtitle                | 是否显示副标题   | Boolean          | true                 | false   |
| mode| 日期类型选择 | String          | single                 | multiple-可以选择多个日期，range-选择日期范围  |
| startText          |mode=range时，第一个日期底部的提示文字 | String          | 开始                  | -|
| endText          | mode=range时，最后一个日期底部的提示文字 | String          | 结束 | - |
|customList| 自定义列表|Array | []               |  []  |
| color | 主题色，对底部按钮和选中日期有效                 | String | #3c9cff                  | -                                         |
| minDate               |最小的可选日期 | Number \| String | 0 | -                                         |
| maxDate              | 最大可选日期                                                                                        | Number \| String | 0| -                                         |
| defaultDate  | 默认选中的日期，mode为multiple或range是必须为数组格式  | Array \| String \| Date| null  | -                                         |
| maxCount | mode=multiple时，最多可选多少个日期 | Number \| String | Infinity                  | -                 |
| rowHeight | 日期行高                 |  Number \|String           | 56              | -                                         |
| formatter  | 日期格式化函数                 | Function           | null             | -                                         |
| showLunar                  |是否显示农历  | Boolean           | false | true                         |
| showMark | 是否显示月份背景色 | Boolean           | true  | false    |
| z-index                | 弹出时的`z-index`值                                                                                 | String \| Number | 10075                 | -                                         |
| confirmText           | 确定按钮的文字 | String           | 确定   | -                                         |
| confirmDisabledText | 确认按钮处于禁用状态时的文字 | String           |确定 | -                                         |
| show         | 是否显示日历弹窗                   | Boolean | false    | true                                  |
| closeOnClickOverly  | 是否允许点击遮罩关闭日历 | Boolean           | false                | true              |



### Event

| 事件名 | 说明 | 回调参数 |
| :----- | :--- | :------- |
| confirm | 点击`确定`按钮时触发 | 选择日期相关的返回参数 |
| close | 日历关闭时触发 | 可定义页面关闭时的回调事件 |



<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=slot] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>