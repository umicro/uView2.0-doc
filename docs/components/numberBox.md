## NumberBox 步进器 <to-api/>

<demo-model url="/pages/componentsB/numberBox/numberBox"></demo-model>


该组件一般用于商城购物选择物品数量的场景

注意：该输入框只能输入大于或等于0的整数

### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

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
<u-number-box :disablePlus="true"></u-number-box>

<!-- 禁用减少按钮 -->
<u-number-box :disableMinus="true"></u-number-box>

<!-- 禁用长按 -->
<u-number-box :longPress="false"></u-number-box>
```

### 固定小数位数

通过`step`设置步进长度，`decimal-length`设置显示小数位数

```html
<u-number-box step="0.25" decimal-length="1" ></u-number-box>
```

### 异步变更

通过`asyncChange`设置异步变更，开启后需要手动控制输入值 （默认 false ）

```html
<template>
    <u-number-box v-model="value" :asyncChange="true" @change="onChange"></u-number-box>
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
    bgColor="#2979ff"
    iconStyle="color: #fff"
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
		border-style: solid;
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

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsB/numberBox/numberBox.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsB/numberBox/numberBox.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数			| 说明													| 类型					| 默认值						| 可选值	|
| :-			| :-													| :-					| :-						| :-	|
| name			| 步进器标识符，在change回调返回							| String &#124; Number	| -							| -		|
| value			| 用于双向绑定的值，初始化时设置设为默认min值(最小值)		| String &#124; Number	| 1							| -		|
| min			| 用户可输入的最小值										| String &#124; Number	| 1						| -		|
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
| longPress		| 是否允许长按进行加减							| Boolean				| true						| false	|
| color			| 输入框文字和加减按钮图标的颜色							| String				| #323233					| -		|
| buttonSize	| 按钮大小，宽高等于此值，单位px，输入框高度和此值保持一致	| String &#124; Number	| 30						| -		|
| bgColor		| 输入框和按钮的背景颜色									| String				| #EBECEE					| -		|
| cursorSpacing	| 指定光标于键盘的距离，避免键盘遮挡输入框，单位px			| String &#124; Number	| 100						| -		|
| disablePlus	| 是否禁用增加按钮										| Boolean				| false						| true	|
| disableMinus	| 是否禁用减少按钮										| Boolean				| false						| true	|
| iconStyle		| 加减按钮图标的样式										| String				| -							| -		|


### Events

| 事件名	| 说明											| 回调参数									|
| :-	| :-											| :-										|
| focus	| 输入框得到焦点触发(按钮可点击情况下)，对象形式		| value：输入框当前值，name：步进器标识符		|
| blur	| 输入框失去焦点时触发，对象形式			    		| value：输入框当前值，name：步进器标识符		|
| change| 输入框内容发生变化时触发，对象形式		    		| value：输入框当前值，name：步进器标识符        |
| overlimit	| 超过范围阈值时触发                     		| type：（`minus`已达最小值，`plus`已达最大值）	|

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
