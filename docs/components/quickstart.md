## 快速上手

<demo-model url="/"></demo-model>

### 如何使用

通过npm和下载方式的配置之后，在某个页面可以直接使用组件，无需通过`import`引入组件。

```html
<template>
	<u-action-sheet :list="list" v-model="show"></u-action-sheet>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					text: '点赞',
					color: 'blue',
					fontSize: 28
				}, {
					text: '分享'
				}, {
					text: '评论'
				}],
				show: true
			}
		}
	}
</script>
```

<br>


### 关于uni.$u

从`1.7.9`开始，uView将`$u`对象同时挂载到了`uni`对象上，这意味着您可以在外部的`js`文件中，通过`uni.$u.xxx`的形式去调用uView提供的一些工具方法，而不再像从前一样必须在`*.vue`中通过`this.$u.xxx`的形式调用。

<br>

### 如何不使用easycom而单独引用某一个组件

某些情况下，您可能不想通过easycom引用组件(虽然我们极力推荐您使用easycom)，那么您可以使用`import`这个常规的引入方式，如下：

```html
<template>
	<u-action-sheet :list="list" v-model="show"></u-action-sheet>
</template>

<script>
	import uActionSheet from "uView-ui/components/u-action-sheet/u-action-sheet.vue";
	export default {
		components: {
			uActionSheet
		},
		data() {
			return {
				list: [{
					text: '点赞',
					color: 'blue',
					fontSize: 28
				}, {
					text: '分享'
				}, {
					text: '评论'
				}],
				show: true
			}
		}
	}
</script>
```

<br>

### 关于uView组件的esaycom规则可能和其他组件引入名称冲突的问题

uView的组件引入是通过easycom形式的，写在pages.json中，以`u-`开头，这可能和其他UI组件，或者uni-app插件市场的[uParse修复版-html富文本加载](https://ext.dcloud.net.cn/plugin?id=364)组件名冲突而**报错**，
原因是此`uParse`的组件引用名为`u-parse`，也是`u-`开头，即使您在页面中显式地配置了组件引入，但uni-app仍认为easycom配置的规则优先级比页面引入的组件规则高。

以下为`uParse`第三方插件的官方写法：

```html
<template>
    <u-parse :content="xxx"></u-parse>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		 components: {
			uParse
		 }
	}
</script>
```

可以看到，上方虽然通过`import`声明了此组件，最终引用的组件名称为`<u-parse>`("u-"开头)，但是uni-app仍然忽视了，而认为uView在`pages.json`配置的easycom规则的优先级更高，因而去uView的组件库
中查找`u-parse`，因为找不到而报错，这是不合理的。

解决办法也很简单，给冲突的插件换一个名字即可，比如上面的`uParse`插件，我们在`import`和`components`声明的时候换一个名字即可，比如这里让其为字母`a`开头：

```html
<template>
    <a-parse :content="xxx"></a-parse>
</template>

<script>
	// 记得同时修改引入的名称，以及components中的名称
	import aParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		 components: {
			aParse
		 }
	}
</script>
```
