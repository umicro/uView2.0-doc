## Tooltip 操作菜单 <to-api/>

<demo-model url="/pages/componentsC/tooltip/tooltip"></demo-model>

Tooltip组件主要用于长按操作，类似微信的长按气泡

### 基本使用
```html
<template>
    <u-tooltip text="复制" overlay></u-tooltip>
</template>
```

### 下方显示
```html
<template>
    <u-tooltip text="下方显示" direction="bottom"></u-tooltip>
</template>
```

### 扩展按钮
```html
<template>
    <u-tooltip text="扩展显示" :buttons="['扩展']"></u-tooltip>
</template>
```

### 高亮选中文本背景色
```html
<template>
    <u-tooltip text="高亮选中文本背景色" :buttons="['扩展']" bgColor="#e3e4e6"></u-tooltip>
</template>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
    <view class="u-page">
        <view class="u-demo-block">
            <text class="u-demo-block__title">基础使用</text>
            <view class="u-demo-block__content">
                <u-tooltip
                        :text="text1"
                        overlay
                ></u-tooltip>
            </view>
        </view>
        <view class="u-demo-block">
            <text class="u-demo-block__title">下方显示</text>
            <view class="u-demo-block__content" style="padding-bottom: 30px;">
                <u-tooltip
                        :text="text2"
                        direction="bottom"
                ></u-tooltip>
            </view>
        </view>
        <view class="u-demo-block">
            <text class="u-demo-block__title">扩展按钮</text>
            <view class="u-demo-block__content">
                <u-tooltip
                        :text="text3"
                        :buttons="buttons1"
                ></u-tooltip>
            </view>
        </view>
        <view class="u-demo-block">
            <text class="u-demo-block__title">自动调整位置</text>
            <view class="u-demo-block__content">
                <u-tooltip
                        :text="text4"
                        :buttons="buttons2"
                ></u-tooltip>
            </view>
        </view>
        <view class="u-demo-block">
            <text class="u-demo-block__title">高亮选中文本背景色</text>
            <view class="u-demo-block__content">
                <u-tooltip
                        :text="text5"
                        :buttons="buttons3"
                        bgColor="#e3e4e6"
                ></u-tooltip>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                text1: '长按文本，上方提示',
                text2: '长按文本，下方提示',
                text3: '显示多个扩展按钮',
                text4: '自动调整气泡位置',
                text5: '长按文本，显示背景色',
                buttons1: ['扩展'],
                buttons2: ['扩展', '搜索', '翻译'],
                buttons3: ['扩展', '搜索', '翻译']
            }
        },
        onLoad() {
            uni.$u.sleep(3000).then(() => {
                this.buttons3 = ['扩展']
            })
        }
    }
</script>

<style lang="scss">
    .u-page {

    }

    .u-demo-block__content {
        padding-top: 10px;
    }
</style>


```
:::

### API

### Tooltip Props

| 参数		| 说明																					| 类型									| 默认值		|  可选值				|
|:-			|:-																						|:-										|:-			|:-						|
| text		| 需要显示的提示文字																		| String &#124; Number					| -			| -						|
| copyText	| 点击复制按钮时，复制的文本，为空则使用text值													| String &#124; Number					| - 		| - 					|
| size		| 文本大小																				| String &#124; Number					| 14		| -						|
| color     | 字体颜色																				| String								| #606266	| -						|
| bgColor   | 弹出提示框时，文本的背景色																| String								| transparent | -					|
| direction	| 弹出提示的方向，top-上方，bottom-下方                                                  	| String								| top		| bottom				|
| zIndex	| 弹出提示的z-index，nvue无效																| String &#124; Number					| 10071		| -						|
| showCopy	| 是否显示复制按钮																			| Boolean               				| true		| false					|
| buttons	| 扩展的按钮组                    														| Array 								| - 		| - 					|
| overlay	| 是否显示透明遮罩以防止触摸穿透                           									| Boolean								| true		| false					|
| showToast	| 是否显示复制成功或者失败的`toast`                           									| Boolean								| true		| false					|


### Tooltip Events

|事件名	|说明			|回调参数	|
|:-		|:-				|:-			|
| click	| 点击触发事件	| index，被点击按钮的索引		|

