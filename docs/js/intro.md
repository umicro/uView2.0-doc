## 介绍

<demo-model url="/pages/example/js"></demo-model>


此js函数方法，为uView框架提供的一部分功能，它的实现，需要通过js调用，而不是组件的形式。 
工具库中的所有方法，均挂载在`$u`对象下，调用方法如下：
- 如果是在js中，需要通过`this.$u.xxx`形式调用，如调用去除空格的`trim`方法：

```js
console.log(this.$u.trim(' abc '));	// 去除两端空格
```

<br>

- 如果是在元素中，无需前缀`this`，如：

```html
<template>
	<view>
		去除所有空格：{{$u.trim(str, 'all')}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				str: 'a  b c '
			}
		},
	}
</script>
```