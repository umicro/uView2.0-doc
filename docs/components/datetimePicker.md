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
