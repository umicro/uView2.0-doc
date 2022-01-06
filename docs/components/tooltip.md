## Tooltip 长按提示 <to-api/>

<demo-model url="/pages/componentsC/tooltip/tooltip"></demo-model>

Tooltip组件主要用于长按操作，类似微信的长按气泡

### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

### 基本使用.

:::warning 说明
由于安卓`nvue`下，`overflow`属性不支持`visible`值，故此组件暂不支持安卓`nvue`环境。
:::

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

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsC/tooltip/tooltip.vue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsC/tooltip/tooltip.vue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
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

