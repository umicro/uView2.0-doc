## Tag 标签 <to-api/>

<demo-model url="/pages/componentsB/tag/tag"></demo-model>


tag组件一般用于标记和选择，我们提供了更加丰富的表现形式，能够较全面的涵盖您的使用场景

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过`type`参数设置主题类型，默认为`primary`
- 属性`text`设置标签内容

```html
<u-tag text="标签" plain size="mini" type="warning"></u-tag>
```

### 自定义主题

```html
<u-tag text="标签"></u-tag>
<u-tag text="标签" type="warning"></u-tag>
<u-tag text="标签"type="success"></u-tag>
<u-tag text="标签" type="error"></u-tag>
```

### 圆形标签

- 类似胶囊形状
```html
<u-tag text="标签" plain shape="circle"></u-tag>
<u-tag text="标签" type="warning" shape="circle"></u-tag>
```
### 镂空标签

```html
<u-tag text="标签" plain > </u-tag>
<u-tag text="标签" type="warning" plain></u-tag>
<u-tag text="标签" type="success" plain></u-tag>
<u-tag text="标签" type="error" plain></u-tag>
```

### 镂空带背景色

- 添加`plainFill`属性镂空带背景色
```html
<u-tag text="标签" plain > </u-tag>
<u-tag text="标签" type="warning" plain plainFill></u-tag>
<u-tag text="标签" type="success" plain plainFill></u-tag>
<u-tag text="标签" type="error" plain plainFill></u-tag>
```

### 自定义尺寸

- `size`属性为您提供了三种规格的标签大小，默认中等。
```html
<u-tag text="标签" plain size="mini"></u-tag>
<u-tag text="标签" type="warning"></u-tag>
<u-tag text="标签" type="success" plain size="large"></u-tag>
```
### 可关闭标签

- `tag`在右上角提供了删除标签的样式
```html
<u-tag text="标签" size="mini" closable :show="close1" @close="close1 = false"></u-tag>
<u-tag text="标签" type="warning" closable :show="close2" @close="close2 = false"></u-tag>
<u-tag text="标签" type="success" plain size="large" 
closable :show="close3" @close="close3 = false"></u-tag>

<script>
	export default {
		data() {
			return {
				close1: true,
				close2: true,
				close3: true,
				radios: [{
						checked: true
					},
					{
						checked: false
					},
					{
						checked: false
					}
				],
				checkboxs: [{
						checked: true
					},
					{
						checked: false
					},
					{
						checked: false
					}
				]
			}
		},
	}
</script>
```

### 带图片和图标

```html
<u-tag text="标签" size="mini" icon="map" plain></u-tag>
<u-tag text="标签" type="warning" icon="tags-fill"></u-tag>
<u-tag text="标签" type="success" plain size="large"
icon="https://cdn.uviewui.com/uview/example/tag.png"></u-tag>
```

### 单选标签 和 多选标签

- 我们为您提供了单选和多选的事件，您可以在事件中获取参数列表
```html
<template>
<!-- 单选 -->
<view class="u-page__tag-item" v-for="(item, index) in radios" :key="index">
	<u-tag :text="`选项${index + 1}`" :plain="!item.checked" type="warning" :name="index"
		@click="radioClick">
	</u-tag>
</view>
<!-- 多选 -->
<view class="u-page__tag-item" v-for="(item, index) in checkboxs" :key="index">
	<u-tag :text="`选项${index + 1}`" :plain="!item.checked" type="warning" :name="index"
		@click="checkboxClick">
	</u-tag>
</view>
</template>
<script>
	export default {
		data() {
			return {
				radios: [{
						checked: true
					},
					{
						checked: false
					},
					{
						checked: false
					}
				],
				checkboxs: [{
						checked: true
					},
					{
						checked: false
					},
					{
						checked: false
					}
				]
			}
		},
		methods: {
			radioClick(name) {
				this.radios.map((item, index) => {
					item.checked = index === name ? true : false
				})
			},
			checkboxClick(name) {
				this.checkboxs[name].checked = !this.checkboxs[name].checked
			}
		}
	}
</script>
<style lang="scss">
	.u-page__tag-item {
		margin-right: 20px;
	}
</style>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基础功能</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    plain
					    size="mini"
					    type="warning"
					>
					</u-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义主题</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-tag text="标签">
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="warning"
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="success"
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="error"
					>
					</u-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">圆形标签</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    plain
						shape="circle"
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="warning"
						shape="circle"
					>
					</u-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">镂空标签</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    plain
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="warning"
					    plain
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="success"
					    plain
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="error"
					    plain
					>
					</u-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">镂空带背景色</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    plain
					    plainFill
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="warning"
					    plain
					    plainFill
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="success"
					    plain
					    plainFill
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="error"
					    plain
					    plainFill
					>
					</u-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义尺寸</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    plain
					    size="mini"
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="warning"
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="success"
					    plain
					    size="large"
					>
					</u-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">可关闭标签</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    size="mini"
					    closable
					    :show="close1"
					    @close="close1 = false"
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="warning"
					    closable
						:show="close2"
					    @close="close2 = false"
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="success"
					    plain
					    size="large"
					    closable
						:show="close3"
					    @close="close3 = false"
					>
					</u-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">带图片和图标</text>
			<view class="u-demo-block__content">
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    size="mini"
					    icon="map"
					    plain
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="warning"
					    icon="tags-fill"
					>
					</u-tag>
				</view>
				<view class="u-page__tag-item">
					<u-tag
					    text="标签"
					    type="success"
					    plain
					    size="large"
					    icon="https://cdn.uviewui.com/uview/example/tag.png"
					>
					</u-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">单选标签</text>
			<view class="u-demo-block__content">
				<view
				    class="u-page__tag-item"
				    v-for="(item, index) in radios"
				    :key="index"
				>
					<u-tag
					    :text="`选项${index + 1}`"
					    :plain="!item.checked"
					    type="warning"
					    :name="index"
					    @click="radioClick"
					>
					</u-tag>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">多选标签</text>
			<view class="u-demo-block__content">
				<view
				    class="u-page__tag-item"
				    v-for="(item, index) in checkboxs"
				    :key="index"
				>
					<u-tag
					    :text="`选项${index + 1}`"
					    :plain="!item.checked"
					    type="warning"
					    :name="index"
					    @click="checkboxClick"
					>
					</u-tag>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				close1: true,
				close2: true,
				close3: true,
				radios: [{
						checked: true
					},
					{
						checked: false
					},
					{
						checked: false
					}
				],
				checkboxs: [{
						checked: true
					},
					{
						checked: false
					},
					{
						checked: false
					}
				]
			}
		},
		methods: {
			radioClick(name) {
				this.radios.map((item, index) => {
					item.checked = index === name ? true : false
				})
			},
			checkboxClick(name) {
				this.checkboxs[name].checked = !this.checkboxs[name].checked
			}
		}
	}
</script>

<style lang="scss">
	.u-page__tag-item {
		margin-right: 20px;
	}

	.u-demo-block__content {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
</style>

```
:::

### API

### Props

| 参数			| 说明												| 类型					| 默认值		|  可选值							|
|:-				|:-													|:-						|:-			|:-									|
| type			| 主题类型											| String				| primary	| success / info / warning / error	|
| disabled		| 不可用												| Boolean &#124; String	| false		| -									|
| size			| 标签大小											| String				| medium	| large、mini						|
| shape			| 标签形状											| String				| square	| circle							|
| text			| 标签的文字内容										| String &#124; Number	| -			| -									|
| bgColor		| 背景颜色，默认为空字符串，即不处理					| String				| #C6C7CB		| -									|
| color			| 标签字体颜色，默认为空字符串，即不处理				| String				| -			| -									|
| borderColor	| 标签的边框颜色								| String				| -			| -									|
| closeColor	| 关闭按钮图标的颜色									| String				| -			| -									|
| name			| 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了	| String &#124; Number	| -			| -									|
| plainFill		| 镂空时是否填充背景色								| Boolean				| false		| true								|
| plain			| 是否镂空											| Boolean				| false		| true								|
| closable		| 是否可关闭，设置为`true`，文字右边会出现一个关闭图标	| Boolean				| false		| true								|
| show			| 标签显示与否										| Boolean				| true		| false								|
| icon			| 内置图标，或绝对路径的图片							| String				| -			| -									|

### Event

|事件名	|说明											|回调参数					|版本	|
|:-		|:-												|:-							|:-		|
| click	| 点击标签触发									| index: 传递的`index`参数值	| -		|
| close	| `closable`为`true`时，点击标签关闭按钮触发		| index: 传递的`index`参数值	| -		|
