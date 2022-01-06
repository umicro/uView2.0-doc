## Notify 消息提示 <to-api/>

<demo-model url="/pages/componentsB/notify/notify"></demo-model>


该组件一般用于页面顶部向下滑出一个提示，尔后自动收起的场景。

### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

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

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsB/notify/notify.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsB/notify/notify.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

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
