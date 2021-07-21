## getRect 节点布局信息

<demo-model url="/pages/library/getRect/index"></demo-model>


此方法封装自uni的[nodesRef.boundingClientRect](https://uniapp.dcloud.io/api/ui/nodes-info?id=nodesrefboundingclientrect)，它极大简化了
使用复杂度，内部使用`Promise`，可以让用户同步获取节点信息。


#### getRect(selector, all = false)

- `selector` <String\> 此参数为元素节点，可以是`id`或者`class`，比如"#user-name"，".box"
- `all` <Boolean\> 是否返回全部节点信息，当页面有多个相同`selector`的元素时，`all`为`true`，会以数组形式返回所有节点的信息(结果为数组，数组元素为对象)，否则只返回第一个节点的信息(结果为一个对象)

注意：该方法返回的结果，共有如下有用信息：

```js
res = {
	left: 0,
	right: 414,
	top: 323,
	height: 2597,
	bottom: 2920,
	width: 414
}
```

受限于`nodesRef.boundingClientRect`，其上结果中的`left`，`top`，`right`，`bottom`，是会随着页面滚动而变化的，因为这个查询的相对于屏幕窗口，而不是
相对于页面根元素的，但`width`，`height`，是恒定不变的，所以一般情况我们推荐您想要获取节点宽高的时候采用这个方法。

:::warning 注意
由于`onLoad`生命周期元素尚未创建完成，请勿在此生命周期使用此方法，如果是页面，应该在`onReady`生命周期，组件内应该在`mounted`生命周期调用。
如果要查询的目标，是通过服务端获取数据后才渲染的，那么应该在获取数据后，通过`this.$nextTick`调用此方法。
:::

#### 异步使用方法

通过`then`调用即可

```js
export default {
	methods: {
		getElInfo() {
			this.$u.getRect('.user-avatar').then(res => {
				console.log(res);
			})
		}
	}
}
```


#### 同步使用方法

该方法的使用场景为您下一步的操作需要获取元素的节点后才能进行的情况，可以通过`async/await`方式调用，注意，无论是生命周期还是`methods`中的方法，都可以在
其前面添加`async`修饰符

```js
export default {
	methods: {
		async getElInfo() {
			let rectInfo = await this.$u.getRect('.user-avatar');
			console.log(rectInfo);
		}
	}
}
```


#### 请求数据后再获取节点信息

此场景为元素内容为后端获取数据填充的，节点填充数据前后，元素的大小尺寸是不一样的，所以需要在获取后再执行此方法，这里通过`this.$nextTick`调用，
是因为它会等待数据赋值，元素创建完成后再执行，此时才是准确的尺寸，以下演示，为uView自带的[http 请求](/js/http.html)方法调用

```html
<template>
	<view>
		<view class="user-name">
			{{userName}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: ''
			}
		},
		onLoad() {
			this.getElInfo();
		},
		methods: {
			getElInfo() {
				this.$u.post('http://www.example.com/user/info').then(res => {
					this.userName = res.name;
					this.$nextTick(() => {
						this.$u.getRect('.user-avatar').then(rect => {
							console.log(rect);
						})
					})
				})
			}
		}
	}
</script>
```

#### 获取全部节点信息

设置第二个参数为`true`，此场景为页面有多个相同类名的元素，需要获取所有同类名节点信息时候使用，返回结果为一个数组

```html
<template>
	<view>
		<view class="item">
			uView UI
		</view>
		<view class="item">
			<view>红豆生南国，春来发几枝</view>
			<view>愿君多采撷，此物最相思</view>
		</view>
	</view>
</template>

<script>
	export default {
		onReady() {
			this.getElInfo();
		},
		methods: {
			getElInfo() {
				this.$u.getRect('.item', true).then(rect => {
					// rect为一个数组(内有2个元素)，因为页面有2个.item节点
					console.log(rect);
				})
			}
		}
	}
</script>
```


#### 如何让让某个元素滚动到页面顶部

这里说的顶部，指的是导航栏的下方，比如我们点击某个操作，页面自动滚动，指定元素位于导航栏下方时停止。  
我们需要结合`onPageScroll`生命周期，获得实时的页面滚动条位置。


```html
<template>
	<view class="wrap">
		<view class="item">
			uView UI
		</view>
		<view class="item">
			uView UI
		</view>
		<view class="item">
			uView UI
		</view>
		<view class="item">
			uView UI
		</view>
		<view class="item object-item" @tap="scrollEl">
			点我，我就会滚动到导航栏下方
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			scrollEl() {
				this.$u.getRect('.object-item').then(res => {
					uni.pageScrollTo({
						scrollTop: this.scrollTop + res.top,
						duration: 0
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		height: 200vh;
	}
</style>
```