## Swiper 轮播图 <to-api/>

<demo-model url="/pages/componentsB/swiper/index"></demo-model>



该组件一般用于导航轮播，广告展示等场景,可开箱即用，具有如下特点：
- 自定义指示器模式，可配置指示器样式
- 3D轮播图效果，满足不同的开发需求
- 可配置显示标题，涵盖不同的应用场景
- 具有设置加载状态和嵌入视频的能力，功能齐全丰富


### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基本使用

通过`list`参数传入轮播图列表值，该值为一个数组，键值为图片路径，例如：
```html
<template>
    <u-swiper
            :list="list1"
            @change="change"
            @click="click"
    ></u-swiper>
</template>

<script>
    export default {
        data() {
            return {
                list1: [
                    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                ]
            }
        }
    }
</script>
```

### 带标题

添加`showTitle`属性以展示标题，此时`list`的参数应为一个对象：例如：
<br/>
（请注意：您期望使用对象作为参数时，需要配置`u-swiper`组件的`keyName`参数为`您当前对象的图片key`值）如：`keyName="image"`

```html
<template>
    <u-swiper
            :list="list2"
            keyName="image"
            showTitle
            :autoplay="false"
            circular
    ></u-swiper>
</template>

<script>
    export default {
        data() {
            return {
                list2: [{
                    image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                    title: '昨夜星辰昨夜风，画楼西畔桂堂东',
                },{
                    image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                    title: '身无彩凤双飞翼，心有灵犀一点通'
                },{
                    image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                    title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
                }],
            }
        }
    }
</script>
```
### 带指示器

通过`indicator`属性添加指示器，例如：

```html
<template>
    <u-swiper
            :list="list3"
            indicator
            indicatorMode="line"
            circular
    ></u-swiper>
</template>

<script>
    export default {
        data() {
            return {
                list3: [
                    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                ],
            }
        }
    }
</script>
```
### 加载中

通过添加`loading`属性达到加载中的状态，例如：
<br/>
您也可以动态的来控制加载状态，比如：`:loading='loading'`
```html
<template>
    <u-swiper
            :list="list3"
            loading
    ></u-swiper>
</template>

<script>
    export default {
        data() {
            return {
                list3: [
                    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                ],
            }
        }
    }
</script>
```
### 嵌入视频

我们提供了嵌入视频的能力，为避免资源浪费，在您切换轮播的时候视频会停止播放，你可以设置`poster`指定视频封面，案例如下：

```html
<template>
    <u-swiper
            :list="list4"
            keyName="url"
            :autoplay="false"
    ></u-swiper>
</template>

<script>
    export default {
        data() {
            return {
                list4: [{
                    url: 'https://cdn.uviewui.com/uview/resources/video.mp4',
                    title: '昨夜星辰昨夜风，画楼西畔桂堂东',
                    poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png'
                },{
                    url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                    title: '身无彩凤双飞翼，心有灵犀一点通'
                },{
                    url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                    title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
                }],
            }
        }
    }
</script>
```
### 自定义指示器

如您需要以指示点或数字形式来自定义指示器，请参考如下案例：

```html
<template>
    <view class="u-demo-block">
        <text class="u-demo-block__title">自定义指示器</text>
        <u-swiper
                :list="list5"
                @change="e => current = e.current"
                :autoplay="false"
        >
            <view
                    slot="indicator"
                    class="indicator"
            >
                <view
                        class="indicator__dot"
                        v-for="(item, index) in list5"
                        :key="index"
                        :class="[index === current && 'indicator__dot--active']"
                >
                </view>
            </view>
        </u-swiper>
        <u-gap
                bgColor="transparent"
                height="15"
        ></u-gap>
        <u-swiper
                :list="list6"
                @change="e => currentNum = e.current"
                :autoplay="false"
                indicatorStyle="right: 20px"
        >
            <view
                    slot="indicator"
                    class="indicator-num"
            >
                <text class="indicator-num__text">{{ currentNum + 1 }}/{{ list6.length }}</text>
            </view>
        </u-swiper>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list5: [
                    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                ],
                list6: [
                    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                ]
            }
        }
    }
</script>

<style lang="scss">
    .indicator {
        @include flex(row);
        justify-content: center;

        &__dot {
             height: 6px;
             width: 6px;
             border-radius: 100px;
             background-color: rgba(255, 255, 255, 0.35);
             margin: 0 5px;
             transition: background-color 0.3s;
    
            &--active {
                 background-color: #ffffff;
             }
        }
    }

    .indicator-num {
        padding: 2px 0;
        background-color: rgba(0, 0, 0, 0.35);
        border-radius: 100px;
        width: 35px;
        @include flex;
        justify-content: center;

        &__text {
             color: #FFFFFF;
             font-size: 12px;
         }
    }
</style>
```
### 卡片式轮播

在实际开发中，普通的轮播或许不能满足您的开发需求，`swiper`组件提供了卡片式轮播的api，您可以参考以下案例实现此功能
```html
<template>
    <!-- #ifndef APP-NVUE || MP-TOUTIAO -->
    <view class="u-demo-block">
        <text class="u-demo-block__title">卡片式</text>
        <u-swiper
                :list="list3"
                previousMargin="30"
                nextMargin="30"
                circular
                :autoplay="false"
                radius="5"
                bgColor="#ffffff"
        ></u-swiper>
    </view>
    <!-- #endif -->
</template>

<script>
    export default {
        data() {
            return {
                list3: [
                    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                ],
            }
        }
    }
</script>
```



### 控制轮播效果

- `autoplay`-是否自动轮播，默认为`true`
- `interval`-前后两张图自动轮播的时间间隔
- `duration`-切换一张轮播图所需的时间
- `circular`-是否衔接滑动，即到最后一张时，是否可以直接转到第一张

### API

### Swiper Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| list | 轮播图数据，见上方"基本使用"说明 | Array | - | - |
| indicator | 是否显示面板指示器 | Boolean  | false | true |
| indicatorActiveColor | 指示器非激活颜色 | String | #FFFFFF | - |
| indicatorInactiveColor | 指示器的激活颜色 | String  | rgba(255, 255, 255, 0.35) | - |
| indicatorStyle | 指示器样式，可通过bottom，left，right进行定位 | String \| Object | - | - |
| indicatorMode | 指示器模式 | String | line | dot |
| autoplay | 是否自动切换 | Boolean | true | false |
| current | 当前所在滑块的 index | Number \| String  | 0 | - |
| currentItemId | 当前所在滑块的 item-id ，不能与 current 被同时指定 | String | - | - |
| interval | 滑块自动切换时间间隔（ms） | String \| Number | 3000 | - |
| duration | 滑块切换过程所需时间（ms） | String \| Number | 300 | - |
| circular | 播放到末尾后是否重新回到开头 | Boolean | false | true |
| previousMargin | 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持 | String \| Number | 0 | - |
| nextMargin | 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持 | String \| Number | 0 | - |
| acceleration | 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持 | Boolean | false | true |
| displayMultipleItems | 同时显示的滑块数量，nvue、支付宝小程序不支持 | Number | 1 | - |
| easingFunction | 指定swiper切换缓动动画类型， 只对微信小程序有效 | String | default | linear、easeInCubic、easeOutCubic、easeInOutCubic |
| keyName | list数组中指定对象的目标属性名 | String | url | - |
| imgMode | 图片的裁剪模式 | String | aspectFill | 详见图片裁剪 |
| height | 组件高度 | String \| Number | 130 | - |
| bgColor | 背景颜色 | String | #f3f4f6 | - |
| radius | 组件圆角，数值或带单位的字符串 | String \| Number | 4 | - |
| loading | 是否加载中 | Boolean | false | true |
| showTitle | 是否显示标题，要求数组对象中有title属性 | Boolean | false | - |

### Swiper Events

|事件名|说明|回调参数|
|:-|:-|:-|:-|
| click | 点击轮播图时触发 | index：点击了第几张图片，从0开始 |
| change | 轮播图切换时触发(自动或者手动切换) | index：切换到了第几张图片，从0开始 |

### SwiperIndicator Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| length | 轮播的长度 | String \| Number | 0 | - |
| current | 当前处于活动状态的轮播的索引 | String \| Number  | 0 | - |
| indicatorActiveColor | 指示器非激活颜色 | String | - | - |
| indicatorInactiveColor | 指示器的激活颜色 | String  | - | - |
| indicatorStyle | 指示器的形式 | String | line | dot |

