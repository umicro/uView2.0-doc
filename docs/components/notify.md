## Notify 消息提示 <to-api/>

<demo-model url="/pages/componentsB/notify/notify"></demo-model>


该组件一般用于页面顶部向下滑出一个提示，尔后自动收起的场景。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

```html
<template>
	<u-notify message="Hi uView" :show="show"></u-notify>
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

### ref调用

```html
<template>
	<u-notify ref="uNotify" message="Hi uView"></u-notify>
</template>

<script>
export default {
    onReady(){
	    this.$refs.uNotify.show({
            top: 10,
            type: 'error',
            color: '#000',
            bgColor: '#e8e8e8',
            message: 'Hi uView',
            duration: 1000 * 3,
            fontSize: 20,
            safeAreaInsetTop:true
        })

        // 也可以通过主题形式调用，如：
        // this.$refs.uNotify.primary('Primary主题')
        
        // 关闭 notify
        // this.$refs.uNotify.close()
    }
}
</script>
```

### API

### Methods
| 事件名								| 说明					| 类型		|
| :-								| :-					| :-		|
| show								| 显示并加载配置			| Handler	|
| primary / success / warning /error| 显示当前主题消息提示	| Handler	|
| close								| 关闭消息提示			| Handler	|

### Show Methods Arguments

| 参数				| 说明									| 类型					| 默认值		| 可选值	|
| :-				| :-									| :-					| :-		| :-	|
| top				| 到顶部的距离							| String &#124; Number	| 0			| -		|
| type				| 主题，primary，success，warning，error	| String				| primary	| -		|
| color				| 字体颜色								| String				| #ffffff	| -		|
| bgColor			| 背景颜色								| String				| -			| -		|
| message			| 展示的文字内容							| String				| -			| -		|
| duration			| 展示时长，为0时不消失，单位ms			| String &#124; Number	| 3000		| -		|
| fontSize			| 字体大小，单位rpx						| String &#124; Number	| 15		| -		|
| safeAreaInsetTop	| 是否留出顶部安全距离（状态栏高度）		| Boolean				| false		| true	|


### Slot

| 参数	| 说明		|
| :-	| :-		|
| icon	| 通知内容	|
