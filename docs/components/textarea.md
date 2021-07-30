## Textarea 文本域 <to-api/>

文本域此组件满足了可能出现的表单信息补充，编辑等实际逻辑的功能，内置了字数校验等 

### 基本使用

```html
<u--textarea v-model="value1" placeholder="请输入内容" ></u--textarea>
<script>
	export default {
		data() {
			return {
				value1: '',
			}
		},
	}
</script>
```
### 字数统计

设置`count`属性实现字数统计
```html
<u--textarea v-model="value2" placeholder="请输入内容" count ></u--textarea>
<script>
	export default {
		data() {
			return {
				value2: '统计字数',
			}
		},
	}
</script>
```
### 自动增高

设置`autoHeight`属性实现自动增高
```html
<u--textarea v-model="value3" placeholder="请输入内容" autoHeight ></u--textarea>
<script>
	export default {
		data() {
			return {
				value3: '',
			}
		},
	}
</script>
```

### 禁用状态

设置`disabled`属性实现进行禁用，您也可以动态设置是否禁用
```html
<u--textarea v-model="value4" placeholder="文本域已被禁用" disabled count></u--textarea>
<script>
	export default {
		data() {
			return {
				value4: '',
			}
		},
	}
</script>
```
### 下划线模式

设置`border="bottom"`属性单独设置底部下划线
```html
<u--textarea v-model="value5" placeholder="请输入内容" border="bottom"></u--textarea>
<script>
	export default {
		data() {
			return {
				value5: '',
			}
		},
	}
</script>
```