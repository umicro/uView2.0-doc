## DatetimePicker 选择器 <to-api/>

<demo-model url="/pages/componentsC/datetimePicker/datetimePicker"></demo-model>

此选择器用于时间日期

### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|


### 基本使用

- 通过`show`绑定一个布尔值变量，用于控制组件的弹出与收起。
- 通过`mode`配置选择何种日期格式。

```html
<template>
	<view>
        <u-datetime-picker
                :show="show"
                v-model="value1"
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
                v-model="value1"
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

如有需要，可以通过`formatter`参数编写自定义格式化规则。

:::warning 注意：
微信小程序不支持通过`props`传递函数参数，所以组件内部暴露了一个`setFormatter`方法用于设置格式化方法，注意在页面的`onReady`生命周期获取`ref`再操作。
:::

```html
<template>
    <view>
        <u-datetime-picker
			ref="datetimePicker"
			:show="show"
            v-model="value1"
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
		onReady() {
			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
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

参数`minDate`和`maxDate`可以设置最大值和最小值（传入时间戳）。

```html
<template>
    <view>
        <u-datetime-picker
                :show="show"
                v-model="value1"
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

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsC/datetimePicker/datetimePicker.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="/common/github.svg" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsC/datetimePicker/datetimePicker.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="/common/gitee.svg" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props
| 参数				                                   | 说明							| 类型					               | 默认值				     | 可选值												                       |
|:-----------------------------------------|:-								|:----------------------|:------------|:--------------------------------------|
| show				                                 | 用于控制选择器的弹出与收起		| Boolean				           | false				   | true													                     |
| showToolbar		                            | 是否显示顶部的操作栏			| Boolean				           | true				    | false													                    |
| v-model			                               | 绑定值							| String &#124; Number	 | -					      | -														                       |
| title				                                | 顶部标题						| String				            | -					      | -														                       |
| mode				                                 | 展示格式						| String				            | datetime			 | date为日期选择，time为时间选择，year-month为年月选择		 |
| maxDate			                               | 可选的最大时间（时间戳毫秒）		| Number				            | 最大默认值为后10年	 | -														                       |
| minDate			                               | 可选的最小时间（时间戳毫秒）		| Number				            | 最小默认值为前10年	 | -														                       |
| minHour			                               | 可选的最小小时，仅mode=time有效	| Number				            | 0					      | -														                       |
| maxHour			                               | 可选的最大小时，仅mode=time有效	| Number				            | 23				      | -														                       |
| minMinute			                             | 可选的最小分钟，仅mode=time有效	| Number				            | 0					      | -														                       |
| maxMinute			                             | 可选的最大分钟，仅mode=time有效	| Number				            | 59				      | -														                       |
| filter			                                | 选项过滤函数					| Function				          | null				    | -														                       |
| formatter			                             | 输入过滤或格式化函数(如需兼容微信小程序，则只能通过`setFormatter`方法)					| Function				          | null				    | -														                       |
| loading			                               | 是否显示加载中状态				| Boolean				           | false				   | true													                     |
| itemHeight		                             | 各列中，单个选项的高度			| String &#124; Number	 | 44				      | -														                       |
| cancelText		                             | 取消按钮的文字					| String				            | 取消				      | -														                       |
| confirmText		                            | 确认按钮的文字					| String				            | 确认				      | -														                       |
| cancelColor		                            | 取消按钮的颜色					| String				            | #909193			  | -														                       |
| confirmColor		                           | 确认按钮的颜色					| String				            | #3c9cff			  | -														                       |
| visibleItemCount	                        | 每列中可见选项的数量			| String &#124; Number	 | 5					      | -														                       |
| closeOnClickOverlay                      | 是否允许点击遮罩关闭选择器（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）		| Boolean				           | false				   | true													                     |
| defaultIndex		                           | 各列的默认索引					| Array					            | []				      | -														                       |
| immediateChange	<Badge text="2.0.38" />	 | 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件。					| Boolean					          | false				   | true														                    |


### Events
|事件名		|说明							|回调参数	|版本	|
|:-			|:-								|:-			|:-		|
| close		| 关闭选择器时触发				| -			| -		|
| confirm	| 点击确定按钮时触发	| value:返回所选时间戳，mode:当前模式			| -		|
| change	| 当选择值变化时触发				| value:返回所选时间戳，mode:当前模式			| -		|
| cancel	| 点击取消按钮					| -			| -		|


### Methods
| 方法名								| 说明					| 
| :-								| :-					|
| setFormatter	| 为兼容微信小程序而暴露的内部方法，见上方说明	 |

<style scoped>
h3[id=props] + table thead tr th:nth-child(2) {
	width: 30%;
}

h3[id=methods] + table thead tr th:nth-child(2) {
	width: 50%;
}
</style>
