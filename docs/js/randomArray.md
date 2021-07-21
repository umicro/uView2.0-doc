## randomArray 数组乱序

<demo-model url="/pages/library/randomArray/index"></demo-model>


#### randomArray(array)

该函数可以打乱一维数组元素的顺序，这是随机过程

- `array` <Array\> 一维数组

```js
export default{
	data() {
		return {
			array: [1,2,3,4,5]
		}
	},
	onLoad() {
		console.log(this.$u.randomArray(this.array));
	}
}
```