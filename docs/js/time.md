## time 时间格式

<demo-model url="/pages/library/timeFormat/index"></demo-model>


### 格式化时间

#### timeFormat | date(timestamp, format = "yyyy-mm-dd")


**注意**：`1.7.9`之前的版本只能传入`秒`或`毫秒`时间戳，date和timeFormat为同功能不同名函数，无论用哪个方法名，都是一样的。


该函数必须传入第一个参数，第二个参数是可选的，函数返回一个格式化好的时间。

- `time` <String\> 任何合法的时间格式、`秒`或`毫秒`的时间戳
- `format` <String\> 时间格式，可选。默认为`yyyy-mm-dd`，年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss"，格式可以自由搭配，如：
`yyyy:mm:dd`，`yyyy-mm-dd`，`yyyy年mm月dd日`，`yyyy年mm月dd日 hh时MM分ss秒`，`yyyy/mm/dd/`，`MM:ss`等组合

```html
<template>
	<view>
		<view>
			时间为：{{$u.timeFormat(timestamp, 'yyyy年mm月dd日')}}
		</view>
		<view>
			时间为：{{time}}
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				time: null,
				timestamp: '1581170184'
			}
		},
		onLoad() {
			this.time = this.$u.timeFormat(this.timestamp, 'yyyy-mm-dd');
		}
	}
</script>
```

### 过滤器式写法

uView同时把timeFormat()注册到了全局过滤器中，方便您在模板中使用：

```html
<view>
	<!-- 因为默认参数为yyyy-mm-dd，所以这里可以不用写时间格式 -->
	时间为：{{'1585926095536' | date}}
</view>

<view>
	时间为：{{'1585926095536' | date('yyyy-mm')}}
</view>
```

注意过滤器的特殊点，上面的"'1585926095536' | date('yyyy-mm')"，会把'1585926095536'当作`date`的第一个参数传入，'yyyy-mm'作为第二个参数，
也即实际表现为：

```js
this.$u.date('1585926095536', 'yyyy-mm')
```


### 多久以前

#### timeFrom(time, format = String | false)

**注意** `1.7.9`之前的版本只能传入`秒`或`毫秒`时间戳

该函数必须传入第一个参数，格式为任何合法的时间格式、`秒`或`毫秒`的时间戳，第二个参数是可选的，返回的值类似`刚刚`，`25分钟前`，`3小时前`，`7天前`的结果。
如果第二个参数是时间的格式，当前和传入时间戳相差大于一个月时，返回格式化好的时间；如果第二个参数为`false`，则不会返回格式化好的时间，而是诸如"xxx年前"的结果。

- `timestamp` <String\> 时间戳
- `format` <String / false\> 时间格式，默认为`yyyy-mm-dd`，年为"yyyy"，月为"mm"，日为"dd"，时为"hh"，分为"MM"，秒为"ss"，格式可以自由搭配，如：
`yyyy:mm:dd`，`yyyy-mm-dd`，`yyyy年mm月dd日`，`yyyy年mm月dd日 hh时MM分ss秒`，`yyyy/mm/dd/`，`MM:ss`等组合。
如果时间戳距离此时的时间，大于一个月，则返回一个格式化好的时间，如果此参数为`false`，返回均为"多久之前"的结果。

```html
<template>
	<view>
		<view>
			时间为：{{$u.timeFrom(timestamp, 'yyyy年mm月dd日')}}
		</view>
		<view>
			时间为：{{time}}
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				time: null,
				timestamp: '1581170184'
			}
		},
		onLoad() {
			this.time = this.$u.timeFrom(this.timestamp);
		}
	}
</script>
```

### 过滤器式写法

uView同时把timeFrom()注册到了全局过滤器中，方便您在模板中使用：

```html
<view>
	<!-- 因为默认参数为yyyy-mm-dd，所以这里可以不用写时间格式 -->
	时间为：{{'1585926095536' | timeFrom}}
</view>

<view>
	<!-- 因为默认参数为yyyy-mm-dd，所以这里可以不用写时间格式 -->
	时间为：{{'1585926095536' | timeFrom('yyyy-mm')}}
</view>
```