## NumberBox 步进器 <to-api/>

<demo-model url="/pages/componentsB/numberBox/numberBox"></demo-model>


该组件一般用于商城购物选择物品数量的场景

注意：该输入框只能输入大于或等于0的整数

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

通过`v-model`绑定`value`初始值，此值是双向绑定的，**无需**在回调中将返回的数值重新赋值给`value`。

```html
<template>
	<u-number-box v-model="value" @change="valChange"></u-number-box>
</template>

<script>
	export default {
		data() {
			return {
				value: 0
			}
		},
		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
			}
		}
	}
</script>
```

### 步长设置

- 通过`step`属性设置每次点击增加或减少按钮时变化的值，默认为1，下面示例每次都会加2或者减2

```html
<u-number-box :step="2"></u-number-box>
```

### 限制输入范围

通过`min`和`max`参数限制输的入值最小值和最大值

```html
<u-number-box :min="1" :max="100"></u-number-box>
```

### 限制只能输入整数

通过`integer`限制输入类型

```html
<u-number-box integer></u-number-box>
```

### 禁用 

```html
<!-- 通过设置`disabled`参数来禁用输入框，禁用状态下无法点击加减按钮或修改输入框的值 -->
<u-number-box :disabled="true"></u-number-box>

<!-- 禁用输入框 -->
<u-number-box :disabledInput="true"></u-number-box>

<!-- 禁用增加按钮 -->
<u-number-box :disable-plus="true"></u-number-box>

<!-- 禁用减少按钮 -->
<u-number-box :disable-minus="true"></u-number-box>

<!-- 禁用长按 -->
<u-number-box :longPress="false"></u-number-box>
```

### 固定小数位数

通过`step`设置步进长度，`decimal-length`设置显示小数位数

```html
<u-number-box step="0.25" decimal-length="1" ></u-number-box>
```

### 异步变更

通过`step`设置步进长度，`decimal-length`设置显示小数位数

```html
<template>
    <u-number-box v-model="value" :async-change="true" @change="onChange"></u-number-box>
</template>

<script>
export default {
    data(){
        return {
            value:1
        }
    },
    methods:{
        onChange(e){
            setTimeout(() => {
                this.value = this.value + 1;
            }, 3000)
        }
    }
}
</script>
```

### 自定义颜色和大小

- 通过`button-size`参数设置按钮大小
- 通过`icon-style`参数设置加减按钮图标的样式

```html
<u-number-box 
    button-size="36"
    color="#ffffff" 
    bg-color="#2979ff"
    icon-style="color: #fff"
></u-number-box>
```

### 自定义 slot

```html
<template>
    <u-number-box v-model="value">
        <view
            slot="minus"
            class="minus"
        >
            <u-icon
                name="minus"
                size="12"
            ></u-icon>
        </view>
        <text
            slot="input"
            style="width: 50px;text-align: center;"
            class="input"
        >{{value}}</text>
        <view
            slot="plus"
            class="plus"
        >
            <u-icon
                name="plus"
                color="#FFFFFF"
                size="12"
            ></u-icon>
        </view>
    </u-number-box>
</template>

<script>
export default {
    data(){
        return {
            value:1
        }
    }
}
</script>

<style lang="scss">
	.minus {
		width: 22px;
		height: 22px;
		border-width: 1px;
		border-color: #E6E6E6;
		border-top-left-radius: 100px;
		border-top-right-radius: 100px;
		border-bottom-left-radius: 100px;
		border-bottom-right-radius: 100px;
		@include flex;
		justify-content: center;
		align-items: center;
	}

	.input {
		padding: 0 10px;
	}

	.plus {
		width: 22px;
		height: 22px;
		background-color: #FF0000;
		border-radius: 50%;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
	}
</style>

```

### API

### Props

| 参数			| 说明													| 类型					| 默认值						| 可选值	|
| :-			| :-													| :-					| :-						| :-	|
| name			| 步进器标识符，在change回调返回							| String &#124; Number	| -							| -		|
| value			| 用于双向绑定的值，初始化时设置设为默认min值(最小值)		| String &#124; Number	| 0							| -		|
| min			| 用户可输入的最小值										| String &#124; Number	| 0							| -		|
| max			| 用户可输入的最大值										| String &#124; Number	| `Number.MAX_SAFE_INTEGER`	| -		|
| step			| 步长，每次加或减的值， 支持小数值，如需小数				| String &#124; Number	| 1							| -		|
| integer		| 是否只能输入正整数										| Boolean				| false						| true	|
| disabled		| 是否禁用操作，包括输入框，加减按钮						| Boolean				| false						| true	|
| disabledInput	| 是否禁止输入框											| Boolean				| false						| true	|
| asyncChange	| 是否开启异步变更，开启后需要手动控制输入值					| Boolean				| false						| true	|
| inputWidth	| 输入框宽度，单位px										| String &#124; Number	| 35						| -		|
| showMinus		| 是否显示减少按钮										| Boolean				| true						| false	|
| showPlus		| 是否显示增加按钮										| Boolean				| true						| false	|
| decimalLength	| 显示的小数位数											| String &#124; Number	| -							| -		|
| longPress		| 输入框文字和按钮字体大小，单位rpx							| Boolean				| true						| false	|
| color			| 输入框文字和加减按钮图标的颜色							| String				| #323233					| -		|
| buttonSize	| 按钮大小，宽高等于此值，单位px，输入框高度和此值保持一致	| String &#124; Number	| 30						| -		|
| bgColor		| 输入框和按钮的背景颜色									| String				| #EBECEE					| -		|
| cursorSpacing	| 指定光标于键盘的距离，避免键盘遮挡输入框，单位px			| String &#124; Number	| 100						| -		|
| disablePlus	| 是否禁用增加按钮										| Boolean				| false						| true	|
| disableMinus	| 是否禁用减少按钮										| Boolean				| false						| true	|
| iconStyle		| 加减按钮图标的样式										| String				| -							| -		|


### Events

| 事件名	| 说明											| 回调参数											|
| :-	| :-											| :-												|
| change| 输入框内容发生变化时触发，对象形式				| value：输入框当前值，index：通过props传递的`index`值	|
| blur	| 输入框失去焦点时触发，对象形式					| value：输入框当前值，index：通过props传递的`index`值	|
| minus	| 点击减少按钮时触发(按钮可点击情况下)，对象形式		| value：输入框当前值，index：通过props传递的`index`值	|
| plus	| 点击增加按钮时触发(按钮可点击情况下)，对象形式		| value：输入框当前值，index：通过props传递的`index`值	|
| blur	| 输入框失去焦点时触发，对象形式					| value：输入框当前值，index：通过props传递的`index`值	|

### Slots

| 名称	| 说明		|
| :-	| :-		|
| minus	| 减少按钮	|
| input	| 输入框		|
| plus	| 增加按钮	|

<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=events] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=events] + table thead tr th:nth-child(3){
	width: 40%;
}
</style>
