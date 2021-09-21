## DatatimePicker 选择器 <to-api/>

<demo-model url="/pages/componentsC/datetimePicker/datetimePicker"></demo-model>

此选择器用于时间日期

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|


### 基本使用

- 通过`show`绑定一个布尔值变量，用于控制组件的弹出与收起。
- 通过`mode`配置选择何种日期格式。

```html
<template>
	<view>
        <u-datetime-picker
                :show="show"
                :value="value1"
                mode="datetime"
        ></u-datetime-picker>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
                value1: Number(new Date()),
			}
		}
	}
</script>
```

### 年 月 日

此模式通过`mode`设置为`date`。

```html
<template>
    <view>
        <u-datetime-picker
                :show="show"
                :value="value1"
                mode="date"
        ></u-datetime-picker>
        <u-button @click="show = true">打开</u-button>
    </view>
</template>

<script>
	export default {
        data() {
            return {
                show: false,
                value1: Number(new Date()),
            }
        }
	}
</script>
```

### 格式化

通过`formatter`参数编写自定义格式化规则。

```html
<template>
    <view>
        <u-datetime-picker
                :show="show"
                :value="value1"
                mode="datetime"
                :formatter="formatter"
        ></u-datetime-picker>
        <u-button @click="show = true">打开</u-button>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                value1: Number(new Date()),
            }
        },
        methods: {
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}年`
                }
                if (type === 'month') {
                    return `${value}月`
                }
                if (type === 'day') {
                    return `${value}日`
                }
                return value
            },
        },
    }
</script>
```

### 限制最大最小值

参数`minDate`和`maxData`可以设置最大值和最小值（传入时间戳）。

```html
<template>
    <view>
        <u-datetime-picker
                :show="show"
                :value="value1"
                :minDate="1587524800000"
                :maxDate="1786778555000"
                mode="datetime"
        ></u-datetime-picker>
        <u-button @click="show = true">打开</u-button>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                value1: Number(new Date()),
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
		<u-navbar
			title="datetimePicker 时间日期选择器"
			@leftClick="navigateBack"
			safeAreaInsetTop
			fixed
			placeholder
		></u-navbar>
		<u-cell-group>
			<u-cell
				@click="showDatetimePicker(index)"
				:title="item.title"
				v-for="(item, index) in list"
				:key="index"
				isLink
			>
				<image
					slot="icon"
					class="u-cell-icon"
					:src="item.iconUrl"
					mode="widthFix"
				></image>
			</u-cell>
		</u-cell-group>
		<u-datetime-picker
			:show="show1"
			:value="value1"
			mode="datetime"
			closeOnClickOverly
			@confirm="confirm"
			@cancel="cancel"
			@change="change"
			@close="close"
		></u-datetime-picker>
		<u-datetime-picker
			:show="show2"
			:value="value2"
			mode="date"
			closeOnClickOverly
			@confirm="confirm"
			@cancel="cancel"
			@change="change"
			@close="close"
		></u-datetime-picker>
		<u-datetime-picker
			:show="show3"
			:value="value3"
			mode="year-month"
			closeOnClickOverly
			@confirm="confirm"
			@cancel="cancel"
			@change="change"
			@close="close"
		></u-datetime-picker>
		<u-datetime-picker
			:show="show4"
			:value="value4"
			mode="time"
			closeOnClickOverly
			@confirm="confirm"
			@cancel="cancel"
			@change="change"
			@close="close"
		></u-datetime-picker>
		<u-datetime-picker
			:show="show5"
			:value="value5"
			:filter="filter"
			mode="date"
			closeOnClickOverly
			@confirm="confirm"
			@cancel="cancel"
			@change="change"
			@close="close"
		></u-datetime-picker>
		<u-datetime-picker
			:show="show6"
			:value="value6"
			mode="date"
			:formatter="formatter"
			closeOnClickOverly
			@confirm="confirm"
			@cancel="cancel"
			@change="change"
			@close="close"
		></u-datetime-picker>
		<u-datetime-picker
			:show="show7"
			:value="value7"
			mode="datetime"
			:minDate="1587524800000"
			:maxDate="1786778555000"
			closeOnClickOverly
			@confirm="confirm"
			@cancel="cancel"
			@change="change"
			@close="close"
		></u-datetime-picker>
	</view>
</template>
<script>
	export default {
		data() {
			const d = new Date()
			const year = d.getFullYear()
			let month = uni.$u.padZero(d.getMonth() + 1)
			const date = d.getDate()
			return {
				current: 0,
				value1: Number(new Date()),
				value2: Number(new Date()),
				value3: Number(new Date()),
				value4: '05:28',
				value5: Number(new Date()),
				value6: Number(new Date()),
				value7: Number(new Date()),
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				show5: false,
				show6: false,
				show7: false,
				list: [{
						title: '完整日期时间',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/6.png'
					},
					{
						title: '年月日',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/4.png'
					},
					{
						title: '年月',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/3.png'
					},
					{
						title: '时间',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/5.png'
					}, {
						title: '过滤器(保留偶数年)',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/2.png'
					}, {
						title: '格式化',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/1.png'
					}, {
						title: '限制最大最小值',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/datetime-picker/7.png'
					}
				]
			}
		},
		methods: {
			close() {
				this[`show${this.current}`] = false
			},
			cancel() {
				this[`show${this.current}`] = false
			},
			confirm(e) {
				this[`show${this.current}`] = false
				this.result(e.value, e.mode)
			},
			change(e) {
				// console.log('change', e)
			},
			navigateBack() {
				uni.navigateBack()
			},
			formatter(mode, value) {
				if (mode === 'year') {
					return `${value}年`;
				}
				if (mode === 'month') {
					return `${value}月`;
				}
				return value;
			},
			filter(mode, options) {
				if (mode === 'year') {
					return options.filter((option) => option % 2 === 0);
				}

				return options;
			},
			showDatetimePicker(index) {
				this.current = index + 1
				this[`show${index + 1}`] = true
			},
			result(time, mode) {
				const timeFormat = uni.$u.timeFormat,
					toast = uni.$u.toast
				switch (mode) {
					case 'datetime':
						return toast(timeFormat(time, 'yyyy-mm-dd hh:MM'))
					case 'date':
						return toast(timeFormat(time, 'yyyy-mm-dd'))
					case 'year-month':
						return toast(timeFormat(time, 'yyyy-mm'))
					case 'time':
						return toast(time)
					default:
						return ''
				}
			},
			filter(type, options) {
				if (type === 'year') {
					return options.filter((option) => option % 2 === 0)
				}

				return options;
			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				return value
			},
		},
	}
</script>

<style lang="scss">
	.u-page {
		padding: 0;
	}
</style>

```
:::

### API

### Props
| 参数				| 说明							| 类型					| 默认值				|  可选值												|
|:-					|:-								|:-						|:-					|:-														|
| show				| 用于控制选择器的弹出与收起		| Boolean				| false				| true													|
| showToolbar		| 是否显示顶部的操作栏			| Boolean				| true				| false													|
| value				| 绑定值							| String &#124; Number	| -					| -														|
| title				| 顶部标题						| String				| -					| -														|
| mode				| 展示格式						| String				| datetime			| date为日期选择，time为时间选择，year-month为年月选择		|
| maxDate			| 可选的最大时间					| Number				| 最大默认值为后10年	| -														|
| minDate			| 可选的最小时间					| Number				| 最小默认值为前10年	| -														|
| minHour			| 可选的最小小时，仅mode=time有效	| Number				| 0					| -														|
| maxHour			| 可选的最大小时，仅mode=time有效	| Number				| 23				| -														|
| minMinute			| 可选的最小分钟，仅mode=time有效	| Number				| 0					| -														|
| maxMinute			| 可选的最大分钟，仅mode=time有效	| Number				| 59				| -														|
| filter			| 选项过滤函数					| Function				| null				| -														|
| formatter			| 选项格式化函数					| Function				| null				| -														|
| loading			| 是否显示加载中状态				| Boolean				| false				| true													|
| itemHeight		| 各列中，单个选项的高度			| String &#124; Number	| 44				| -														|
| cancelText		| 取消按钮的文字					| String				| 取消				| -														|
| confirmText		| 确认按钮的文字					| String				| 确认				| -														|
| cancelColor		| 取消按钮的颜色					| String				| #909193			| -														|
| confirmColor		| 取消按钮的颜色					| String				| #3c9cff			| -														|
| visibleItemCount	| 每列中可见选项的数量			| String &#124; Number	| 5					| -														|
| closeOnClickOverly| 是否允许点击遮罩关闭选择器		| Boolean				| false				| true													|
| defaultIndex		| 各列的默认索引					| Array					| []				| -														|


### Events
|事件名		|说明							|回调参数	|版本	|
|:-			|:-								|:-			|:-		|
| close		| 关闭选择器时触发				| -			| -		|
| confirm	| 点击确定按钮，返回当前选择的值	| -			| -		|
| change	| 当选择值变化时触发				| -			| -		|
| cancel	| 点击取消按钮					| -			| -		|

<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 30%;
}
</style>
