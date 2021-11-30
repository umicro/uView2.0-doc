## Album 相册 <to-api/>

<demo-model url="/pages/componentsC/album/album"></demo-model>

本组件提供一个类似相册的功能，让开发者开发起来更加得心应手。减少重复的模板代码

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用


- 通过`urls`设置相册的图片地址，搭配image等做出更棒的效果！

```html
<template>
    <view class="u-page">
        <view class="u-demo-block">
            <text class="u-demo-block__title">多图模式</text>
            <view class="u-demo-block__content">
                <view class="album">
                    <view class="album__avatar">
                        <image
                                src="/static/uview/common/logo.png"
                                mode=""
                                style="width: 32px;height: 32px;"
                        ></image>
                    </view>
                    <view class="album__content">
                        <u--text
                                text="uView UI"
                                type="primary"
                                bold
                                size="17"
                        ></u--text>
                        <u--text
                                margin="0 0 8px 0"
                                text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
                        ></u--text>
                        <u-album :urls="urls2"></u-album>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                albumWidth: 0,
                urls1: [{
                    src: 'https://cdn.uviewui.com/uview/album/1.jpg',
                }]
            }
        }
    }
</script>

<style lang="scss">
    .album {
        @include flex;
        align-items: flex-start;

        &__avatar {
             background-color: $u-bg-color;
             padding: 5px;
             border-radius: 3px;
         }
    
        &__content {
             margin-left: 10px;
             flex: 1;
         }
    }
</style>
```

### 多图模式

- 通过`urls`传入更多的图片地址形成图片列表

```html
<template>
    <view class="u-page">
        <view class="u-demo-block">
            <text class="u-demo-block__title">基础使用</text>
            <view class="u-demo-block__content">
                <view class="album">
                    <view class="album__avatar">
                        <image
                                src="/static/uview/common/logo.png"
                                mode=""
                                style="width: 32px;height: 32px;"
                        ></image>
                    </view>
                    <view class="album__content">
                        <u--text
                                text="uView UI"
                                type="primary"
                                bold
                                size="17"
                        ></u--text>
                        <u--text
                                margin="0 0 8px 0"
                                text="全面的组件和便捷的工具会让您信手拈来，如鱼得水"
                        ></u--text>
                        <u-album
                                :urls="urls1"
                                keys="src"
                        ></u-album>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                albumWidth: 0,
                urls2: [
                    'https://cdn.uviewui.com/uview/album/1.jpg',
                    'https://cdn.uviewui.com/uview/album/2.jpg',
                    'https://cdn.uviewui.com/uview/album/3.jpg',
                    'https://cdn.uviewui.com/uview/album/4.jpg',
                    'https://cdn.uviewui.com/uview/album/5.jpg',
                    'https://cdn.uviewui.com/uview/album/6.jpg',
                    'https://cdn.uviewui.com/uview/album/7.jpg',
                    'https://cdn.uviewui.com/uview/album/8.jpg',
                    'https://cdn.uviewui.com/uview/album/9.jpg',
                    'https://cdn.uviewui.com/uview/album/10.jpg',
                ],
            }
        }
    }
</script>

<style lang="scss">
    .album {
        @include flex;
        align-items: flex-start;

        &__avatar {
             background-color: $u-bg-color;
             padding: 5px;
             border-radius: 3px;
         }
    
        &__content {
             margin-left: 10px;
             flex: 1;
         }
    }
</style>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsC/album/album.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsC/album/album.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数				| 说明															| 类型					|	 默认值		|  可选值	|
|:-					|:-																|:-						|:-				|:-			|
| urls				| 图片地址列表 支持 Array\<String\> &#124; Array\<Object\>形式	| Array					| -				| -			|
| keyName			| 指定从数组的对象元素中读取哪个属性作为图片地址						| String				| -				| -			|
| singleSize		| 单图时，图片长边的长度											| String &#124; Number	| 180			| -			|
| multipleSize		| 多图时，图片边长												| String &#124; Number	| 70			| -			|
| space				| 多图时，图片水平和垂直之间的间隔									| String &#124; Number	| 6				| -			|
| singleMode		| 单图时，图片缩放裁剪的模式										| String				| scaleToFill	| -			|
| multipleMode		| 多图时，图片缩放裁剪的模式										| String				| aspectFill	| -			|
| maxCount			| 取消按钮的提示文字												| String &#124; Number	| 9				| -			|
| previewFullImage	| 是否可以预览图片												| Boolean				| true			| false		|
| rowCount			| 每行展示图片数量，如设置，singleSize和multipleSize将会无效		| String &#124; Number	| 3				| -			|
| showMore			| 超出maxCount时是否显示查看更多的提示								| Boolean				| true			| false		|


### Event

|事件名		|说明															| 回调参数	|
|:-			|:-																|:-			|
|albumWidth	|某些特殊的情况下，需要让文字与相册的宽度相等，这里事件的形式对外发送	| width		|
