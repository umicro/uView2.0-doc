## Picker 选择器 <to-api/>

<demo-model url="/pages/componentsC/picker/picker"></demo-model>

此选择器用于单列，多列，多列联动的选择场景。

### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|


### 基本使用

- 通过`show`绑定一个布尔值变量，用于控制组件的弹出与收起。
- 都通过传入数组`columns`配置选择项。

```html
<template>
	<view>
		<u-picker :show="show" :columns="columns"></u-picker>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
                columns: [
                    ['中国', '美国', '日本']
                ],
			}
		}
	}
</script>
```

### 多列模式与多列联动

此模式通过传入`columns`参数，此参数为二维数组，通过`change`事件完成联动操作。

```html
<template>
    <u-picker :show="show" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler"></u-picker>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
                columns: [
                    ['中国', '美国'],
                    ['深圳', '厦门', '上海', '拉萨']
				],
                columnData: [
                    ['深圳', '厦门', '上海', '拉萨'],
                    ['得州', '华盛顿', '纽约', '阿拉斯加']
                ]
			}
		},
		methods: {
            changeHandler(e) {
                const {
                    columnIndex,
                    value,
                    values, // values为当前变化列的数组内容
                    index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
                    picker = this.$refs.uPicker
                } = e
                // 当第一列值发生变化时，变化第二列(后一列)对应的选项
                if (columnIndex === 0) {
                    // picker为选择器this实例，变化第二列对应的选项
                    picker.setColumnValues(1, this.columnData[index])
                }
            },
			// 回调参数为包含columnIndex、value、values
			confirm(e) {
                console.log('confirm', e)
                this.show = false
			}
		}
	}
</script>
```

### 加载状态

由于需要多列联动，此模式和上面的"多列模式"基本相同，在加载之前将`loading`设置为`true`，数据获取完成之后再置为`false`即可。

```html
<template>
    <u-picker :show="show" ref="uPicker" :loading="loading" :columns="columns" @change="changeHandler"></u-picker>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                loading: false,
                columns: [
                    ['中国', '美国'],
                    ['深圳', '厦门', '上海', '拉萨']
                ],
                columnData: [
                    ['深圳', '厦门', '上海', '拉萨'],
                    ['得州', '华盛顿', '纽约', '阿拉斯加']
                ]
            }
        },
        methods: {
            changeHandler(e) {
                const {
                    columnIndex,
                    index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
                } = e
                if (columnIndex === 0) {
                    this.loading = true
                    // 模拟网络请求
                    uni.$u.sleep(1500).then(() => {
                        picker.setColumnValues(1, this.columnData[index])
                        this.loading = false
                    })
                }
            }
        }
    }
</script>
```

### 自定义选项值

参数`columns`可以传入自定义选项值，可以通过`keyName`参数控制对应的显示属性。

```html
<template>
    <u-picker :show="show" :columns="columns" keyName="label"></u-picker>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
                columns: [
                    [{
                        label: '雪月夜',
                        // 其他属性值
                        id: 2021
                        // ...
                    }, {
                        label: '冷夜雨',
                        id: 804
                    }]
                ],
			}
		}
	}
</script>
```

### 默认值

此组件的所有模式，都可以设置默认值，通过`defaultIndex`数组参数配置，数组元素的0表示选中每列的哪个值(从0开始)，下面分别对几种模式进行说明：

**注意：** `defaultIndex`数组的长度，必须与列数相同，否则无效。

1. 单列模式

如设置`defaultIndex`为`[1]`表示默认选中第2个(从0开始)，`[5]`表示选中第6个。


2. 多列模式

如设置`defaultIndex`为`[1, 3]`表示第一列默认选中第2个，第二列默认选中第4个。

<br>

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsC/picker/picker.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsC/picker/picker.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props
| 参数				| 说明										| 类型					| 默认值		|  可选值	|
|:-					|:-											|:-						|:-			|:-			|
| show				| 用于控制选择器的弹出与收起					| Boolean				| false		| true		|
| showToolbar		| 是否显示顶部的操作栏						    | Boolean				| true		| false		|
| title				| 顶部中间的标题								| String				| -			| -			|
| columns			| 设置每一列的数据，见上方说明					| Array					| -			| -			|
| loading			| 加载状态									| Boolean				| false		| true		|
| itemHeight		| 各列中，单个选项的高度						| String &#124; Number	| 44		| -			|
| cancelText		| 取消按钮的文字								| String				| 取消		| -			|
| confirmText		| 确认按钮的文字								| String				| 确认		| -			|
| cancelColor		| 取消按钮的颜色								| String				| #909193	| -			|
| confirmColor		| 确认按钮的颜色								| String				| #3c9cff	| -			|
| visibleItemCount	| 每列中可见选项的数量						    | String &#124; Number	| 5			| -			|
| keyName			| 自定义需要展示的`text`属性键名				| String				| text		| -			|
| closeOnClickOverlay| 是否允许点击遮罩关闭选择器（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）					| Boolean				| false		| true		|
| defaultIndex		| 各列的默认索引								| Array					| -			| -			|
| immediateChange <Badge text="2.0.22" /> | 是否在手指松开时立即触发`change`事件。若不开启则会在滚动动画结束后触发`change`事件，只在微信`2.21.1`及以上有效 	| Boolean					| false		| true			|

### Methods
| 名称				| 说明										|
|:-					|:-											|
| setIndexs			| (index, setLastIndex) 设置对应列的选择值	|
| setColumnValues	| 多列联动时需要用到，见上方说明，注意`微信小程序`的特殊用法				|

### Events
|事件名		|说明							|回调参数							|版本	|
|:-			|:-								|:-									|:-		|
| close		| 关闭选择器时触发				| -									| -		|
| confirm	| 点击确定按钮，返回当前选择的值	| Array: 见上方"回调参数"部分说明		| -		|
| change	| 当选择值变化时触发				| Array: 见上方"回调参数"部分说明		| -		|
| cancel	| 点击取消按钮					| -									| -		|

<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 30%;
}
</style>
