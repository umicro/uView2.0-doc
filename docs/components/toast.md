## Toast 消息提示 <to-api/>

<demo-model url="/pages/componentsA/toast/index"></demo-model>


Toast 组件主要用于消息通知、加载提示、操作结果提示等醒目提示效果，我们为其提供了七种丰富的API。

:::warning 注意：
由于uni中无法通过js创建元素，所以需要在页面中调用`<toast />`组件，再通过`ref`开启
:::

### 基本使用

以下为不同能力的toast的具体表现

``` html
<template>
	<view>
		<u-toast ref="uToast"></u-toast>
		<u-cell-group title-bg-color="rgb(243, 244, 246)">
			<u-cell
				:titleStyle="{fontWeight: 500}"
				:title="item.title"
				v-for="(item, index) in list"
				:key="index"
				isLink
				:icon="item.iconUrl"
				@click="showToast(item)"
			>
			</u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				list: [{
						type: 'default',
						title: '默认主题',
						message: "锦瑟无端五十弦",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/default.png'
					},
					{
						type: 'error',
						icon: false,
						title: '失败主题',
						message: "一弦一柱思华年",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
					},
					{
						type: 'success',
						title: '成功主题(带图标)',
						message: "庄生晓梦迷蝴蝶",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
					},
					{
						type: 'warning',
						position: "top",
						title: '位置偏移上方',
						message: "望帝春心托杜鹃",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/top.png'
					},
					{
						type: 'loading',
						title: '正在加载',
						message: "正在加载",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/loading.png'
					},
					{
						type: 'default',
						title: '结束后跳转标签页',
						message: "此情可待成追忆",
						url: '/pages/componentsB/tag/tag',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/jump.png'
					},
					{
						title: '禁止触摸穿透',
						overlay: true,
						message: "只是当时已惘然",
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/overlay.png'
					},
				],
			}
		},
		computed: {
			getIcon() {
				return path => {
					return 'https://cdn.uviewui.com/uview/example/' + path + '.png';
				}
			},
		},
		methods: {
			showToast(params) {
				this.$refs.uToast.show({
					...params,
					complete() {
						params.url && uni.navigateTo({
							url: params.url
						})
					}
				})
			}

		}
	}
</script>
<style lang="scss">
	.u-page {
		padding: 0;
	}

	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}

	.u-cell-group__title__text {
		font-weight: bold;
	}
</style>

```

### API

### Props

| 参数      | 说明        | 类型     |  默认值  |  可选值   |
|-----------|-----------|----------|----------|---------|
| z-index | toast展示时的`z-index`值  | String \| Number | 10090 | - |

### Params

这些参数为通过`ref`调用`<toast/>`组件内部的`show`方法时，需要传递参数

| 参数      | 说明        | 类型     |  默认值  |  可选值   |
|-----------|-----------|----------|----------|---------|
| message | 显示的文本  | String | - | - |
| type | 主题类型，不填默认为`default` | String  | default | primary / success / error / warning / info |
| duration | toast的持续时间，单位ms | Nubmer  | 2000 | - |
| url | toast结束跳转的url，不填不跳转，优先级高于`back`参数 | String  | - | - |
| icon | 是否显示显示`type`对应的图标，为`false`不显示图标 | Boolean  | true | false |
| position | toast出现的位置 | String  | center | top / bottom |
| callback <Badge text="1.3.6" /> | toast结束后执行的回调方法 | Function  | - | - |
| isTab | toast结束后，跳转tab页面时需要配置为`true` | Boolean  | false | true |
| back <Badge text="1.4.0" /> | toast结束后，是否返回上一页，优先级低于`url`参数 | Boolean  | false | true |

### Methods

方法是通过`ref`调用的，参见上方说明
注意：所有有关`ref`的调用，都不能在页面的`onLoad`生命周期调用，因为此时组件尚未创建完毕，会报错，应该在`onReady`生命周期调用。

|方法名|说明|参数|版本|
|:-|:-|:-|:-|
| show | 显示toast，如需一进入页面就显示toast，请在`onReady`生命周期调用 | 见上方说明 |  -  |
