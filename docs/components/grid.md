## Grid 宫格布局 <to-api/>

<demo-model url="/pages/componentsA/grid/grid"></demo-model>


宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件([badge](/components/badge.html))，或者图标等，也可以扩展为左右滑动的轮播形式。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 该组件外层为`u-grid`组件包裹，通过`col`设置内部宫格的列数
- 内部通过`ugrid-item`组件的`slot`设置宫格的内容
- 如果不需要宫格的边框，可以设置`border`为`false`

```html
<template>
    <view>
        <u-grid
                :border="false"
                @click="click"
        >
            <u-grid-item
                    v-for="(baseListItem,baseListIndex) in baseList"
                    :key="baseListIndex"
            >
                <u-icon
                        :customStyle="{paddingTop:20+'rpx'}"
                        :name="baseListItem.name"
                        :size="22"
                ></u-icon>
                <text class="grid-text">{{baseListItem.title}}</text>
            </u-grid-item>
        </u-grid>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                baseList: [{
                    name: 'photo',
                    title: '图片'
                    },
                    {
                        name: 'lock',
                        title: '锁头'
                    },
                    {
                        name: 'star',
                        title: '星星'
                    },
                ]
            }
        },
        methods: {
            click(name) {
                this.$refs.uToast.success(`点击了第${name}个`)
            }
        }
    }
</script>

<style lang="scss">
    .grid-text {
        font-size: 14px;
        color: #909399;
        padding: 10rpx 0 20rpx 0rpx;
        /* #ifndef APP-PLUS */
        box-sizing: border-box;
        /* #endif */
    }
</style>
```

### 绑定点击事件&自定义列数


```html
<template>
    <view>
        <u-grid
                :border="false"
                col="4"
        >
            <u-grid-item
                    v-for="(listItem,listIndex) in list"
                    :key="listIndex"
            >
                <u-icon
                        :customStyle="{paddingTop:20+'rpx'}"
                        :name="listItem.name"
                        :size="22"
                ></u-icon>
                <text class="grid-text">{{listItem.title}}</text>
            </u-grid-item>
        </u-grid>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                    name: 'photo',
                    title: '图片'
                    },
                    {
                        name: 'lock',
                        title: '锁头'
                    },
                    {
                        name: 'star',
                        title: '星星'
                    },
                    {
                        name: 'hourglass',
                        title: '沙漏'
                    },
                    {
                        name: 'home',
                        title: '首页'
                    },
                    {
                        name: 'star',
                        title: '音量'
                    },
                ],
            }
        },
        methods: {
            click(name) {
                this.$refs.uToast.success(`点击了第${name}个`)
            }
        }
    }
</script>

<style lang="scss">
    .grid-text {
        font-size: 14px;
        color: #909399;
        padding: 10rpx 0 20rpx 0rpx;
        /* #ifndef APP-PLUS */
        box-sizing: border-box;
        /* #endif */
    }
</style>
```

### 实现宫格的左右滑动

结合uni的swiper组件可以实现宫格的左右滑动，因为`swiper`特性的关系，请指定`swiper`的高度 ，否则`swiper`的高度不会被内容撑开，可以自定义`swiper`的指示器，达到更高的灵活度

```html
<template>
    <view>
        <swiper
                :indicator-dots="true"
                class="swiper"
        >
            <swiper-item>
                <u-grid :border="true">
                    <u-grid-item
                            :customStyle="{width:220+'rpx',height:220+'rpx'}"
                            v-for="(item, index) in swiperList"
                            :index="index"
                            :key="index"
                    >
                        <u-icon
                                :customStyle="{paddingTop:20+'rpx'}"
                                :name="item"
                                :size="22"
                        ></u-icon>
                        <text class="grid-text">{{ '宫格' + (index + 1) }}</text>
                    </u-grid-item>
                </u-grid>
            </swiper-item>
            <swiper-item>
                <u-grid :border="true">
                    <u-grid-item
                            :customStyle="{width:220+'rpx',height:220+'rpx'}"
                            v-for="(item, index) in swiperList"
                            :index="index + 9"
                            :key="index"
                    >
                        <u-icon
                                :customStyle="{paddingTop:20+'rpx'}"
                                :name="item"
                                :size="22"
                        ></u-icon>
                        <text class="grid-text">{{ '宫格' + (index + 1) }}</text>
                    </u-grid-item>
                </u-grid>
            </swiper-item>
            <swiper-item>
                <u-grid :border="true">
                    <u-grid-item
                            :customStyle="{width:220+'rpx',height:220+'rpx'}"
                            v-for="(item, index) in swiperList"
                            :index="index + 18"
                            :key="index"
                    >
                        <u-icon
                                :customStyle="{paddingTop:20+'rpx'}"
                                :name="item"
                                :size="22"
                        ></u-icon>
                        <text class="grid-text">{{ "宫格" + (index + 1) }}</text>
                    </u-grid-item>
                </u-grid>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
	export default {
		data() {
			return {
                swiperList: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle', 'wifi', 'email', 'list'],
			};
		}
	};
</script>

<style lang="scss">
    .swiper {
        height: 720rpx;
    }

    .grid-text {
        font-size: 14px;
        color: #909399;
        padding: 10rpx 0 20rpx 0rpx;
        /* #ifndef APP-PLUS */
        box-sizing: border-box;
        /* #endif */
    }
</style>
```

### API

### Grid Props

| 参数	| 说明											| 类型					| 默认值	| 可选值			|
|:-		|:-												|:-						|:-		|:-				|
| col	| 宫格的列数										| String &#124; Number	| 3		| -				|
| border| 是否显示宫格的边框								| Boolean				| true	| false			|
| align	| 宫格的对齐方式，用于控制只有一两个宫格时的对齐场景	| String				| left	| center / right|

### Grid-item Props

| 参数		| 说明			| 类型					| 默认值					|  可选值	|
|:-			|:-				|:-						|:-						|:-			|
| name		| 宫格的name		| String &#124; Number	| -						| -			|
| bgColor	| 宫格的背景颜色	| String				| transparent(背景透明)	| -			|

### Grid Event

注意：请在`<u-grid></u-grid>`上监听此事件

|事件名	|说明			|回调参数	|
|:-		|:-				|:-			|
|click	|点击宫格触发		|name		|


### Grid-item Event

注意：请在`<u-grid-item></u-grid-item>`上监听此事件

|事件名	|说明			|回调参数	|
|:-		|:-				|:-			|
|click	|点击宫格触发		|name		|


<style scoped>
h3[id=grid-props] + table thead tr th:nth-child(2){
	width: 40%;
}
</style>
