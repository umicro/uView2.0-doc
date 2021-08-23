## Popup 弹出层 <to-api/>

<demo-model url="/pages/componentsA/popup/popup"></demo-model>

弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

- 弹出层的内容通过`slot`传入，由用户自定义
- 通过`show`绑定一个布尔值的变量控制弹出层的打开和收起

```html
<template>
	<view>
		<u-popup :show="show">
            <view>
                <text>出淤泥而不染，濯清涟而不妖</text>
            </view>
		</u-popup>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				show: false
			}
		}
	}
</script>
```

### 设置弹出层的方向

- 可以通过`mode`参数设置，可以设置为`left`、`top`、`right`、`bottom`、`center`

```html
<template>
	<u-popup :show="show" mode="top">
        <view>
            <text>人生若只如初见，何事秋风悲画扇</text>
        </view>
	</u-popup>
</template>
<script>
    export default {
        data() {
            return {
                show: true
            }
        }
    }
</script>
```

### 设置弹出层的圆角

需要将`round`设置为`ture`，并给`borderRadius`设置一个值来给弹窗增加圆角，单位rpx。

```html
<template>
	<u-popup :show="show" :round="true" mode="top" borderRadius="12">
		<view>
            <text>人生若只如初见，何事秋风悲画扇</text>
		</view>
	</u-popup>
</template>
<script>
    export default {
        data() {
            return {
                show: true
            }
        }
    }
</script>
```

### API

### Props

注意：props中没有控制弹窗打开与收起的参数，因为这是通过v-model绑定变量实现的，见上方说明。

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|------------- |---------------- |---------------|------------------ |-------- |
| show         | 是否展示弹窗 | Boolean | false | true |
| overlay      | 是否显示遮罩 | Boolean | true | false |
| mode         | 弹出方向 | String | left | top / right / bottom / center |
| duration     | 遮罩打开或收起的动画过渡时间，单位ms | String &#124; Number | 3000 | - |
| borderRadius | 弹窗圆角值 | String &#124; Number | 0 | - |
| closeable    | 是否显示关闭图标 | Boolean | false | true |
| overlayStyle | 遮罩自定义样式，一般用于修改遮罩透明度对象形式，如：{background: 'rgba(0, 0, 0, 0.5)'}  | Object | - | - |
| closeOnClickOverly | 点击遮罩是否关闭弹窗 | Boolean | true | false |
| zIndex       | 弹出层的`z-index`值 | Number &#124; String | 10075 | - |
| safeAreaInsetBottom | 是否为留出[底部安全距离](/components/safeAreaInset.html) | Boolean | true | false |
| safeAreaInsetTop | 是否留出[顶部安全距离](/components/safeAreaInset.html)（状态栏高度） | Boolean | false | true |
| closeIconPos | 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角  | String | top-right | top-left / bottom-left / bottom-right |
| round        | 是否显示圆角 | Boolean | false | true |
| zoom         | 当mode=center时 是否开启缩放 | Boolean | true | false |
| customStyle  | 用户自定义样式  | Object | - | - |

### Event

|事件名|说明|回调参数|版本|
|:-|:-|:-|:-|
| open  | 弹出层打开 | - | - |
| close | 弹出层收起 | - | - |
