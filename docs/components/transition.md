## Transition 动画 <to-api/>

<demo-model url="/pages/componentsA/transition/transition"></demo-model>

该组件用于组件的动画过渡效果。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用
通过slot传入内容，默认使用的是`fade`效果
```html
<template>
    <u-transition :show="show">
        <view class="transition"></view>
    </u-transition>
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

### 动画模式

通过`mode`传入效果模式，目前支持：
- `fade` 淡入
- `fade-up` 上滑淡入
- `fade-down` 下滑淡入
- `fade-left` 左滑淡入
- `fade-right` 右滑淡入
- `slide-up` 上滑进入
- `slide-down` 下滑进入
- `slide-left` 左滑进入
- `slide-right` 右滑进入
- `zoom-in` 缩放
- `zoom-out` 缩放

```html
<template>
    <u-transition :show="show" mode="zoom-in">
        <view class="transition"></view>
    </u-transition>
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

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
    <view class="u-page">
        <u-gap height="20" bgColor="#fff"></u-gap>
        <u-cell-group border>
            <u-cell
                :titleStyle="{ fontWeight: 500 }"
                @click="openTransition(item.mode)"
                :title="item.title"
                v-for="(item, index) in list"
                :key="index"
                clickable
            >
                <image
                    slot="icon"
                    class="u-cell-icon"
                    :src="item.iconUrl"
                    mode="widthFix"
                ></image>
            </u-cell>
            <u-transition
                :mode="mode"
                :show="show"
                :custom-style="style"
                @click="click"
                @beforeEnter="beforeEnter"
                @enter="enter"
                @afterEnter="afterEnter"
                @beforeLeave="beforeLeave"
                @leave="leave"
                @afterLeave="afterLeave"
            >
                <view class="transition"></view>
            </u-transition>
        </u-cell-group>
    </view>
</template>

<script>
export default {
    data() {
        return {
            mode: "",
            show: false,
            style: {
                position: "fixed",
                top: `${uni.$u.sys().windowHeight / 2 - 50}px`,
                left: `${uni.$u.sys().windowWidth / 2 - 50}px`,
                width: "120px",
                height: "120px",
                backgroundColor: "#1989fa",
            },
            list: [
                {
                    mode: "fade",
                    title: "淡入",
                    iconUrl:
                        "https://cdn.uviewui.com/uview/demo/transition/fade.png",
                },
                {
                    mode: "fade-up",
                    title: "上滑淡入",
                    iconUrl:
                        "https://cdn.uviewui.com/uview/demo/transition/fadeUp.png",
                },
                {
                    mode: "zoom",
                    title: "缩放",
                    iconUrl:
                        "https://cdn.uviewui.com/uview/demo/transition/zoom.png",
                },
                {
                    mode: "fade-zoom",
                    title: "缩放淡入",
                    iconUrl:
                        "https://cdn.uviewui.com/uview/demo/transition/fadeZoom.png",
                },
                {
                    mode: "fade-down",
                    title: "下滑淡入",
                    iconUrl:
                        "https://cdn.uviewui.com/uview/demo/transition/fadeDown.png",
                },
                {
                    mode: "fade-left",
                    title: "左滑淡入",
                    iconUrl:
                        "https://cdn.uviewui.com/uview/demo/transition/fadeLeft.png",
                },
                {
                    mode: "fade-right",
                    title: "右滑淡入",
                    iconUrl:
                        "https://cdn.uviewui.com/uview/demo/transition/fadeRight.png",
                },
                {
                    mode: "slide-up",
                    title: "上滑进入",
                    iconUrl:
                        "https://cdn.uviewui.com/uview/demo/transition/slideUp.png",
                },
                {
                    mode: "slide-down",
                    title: "下滑进入",
                    iconUrl:
                        "https://cdn.uviewui.com/uview/demo/transition/slideDown.png",
                },
                {
                    mode: "slide-left",
                    title: "左滑进入",
                    iconUrl:
                        "https://cdn.uviewui.com/uview/demo/transition/slideLeft.png",
                },
                {
                    mode: "slide-right",
                    title: "右滑进入",
                    iconUrl:
                        "https://cdn.uviewui.com/uview/demo/transition/slideRight.png",
                },
            ],
        };
    },
    // 复制后解开下面注释
    // mixins: [uni.$u.mixin],
    methods: {
        openTransition(mode) {
            this.mode = mode;
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, 1500);
        },
        click() {
            // console.log("click");
        },
        beforeEnter() {
            // console.log("beforeEnter");
        },
        enter() {
            // console.log("enter");
        },
        afterEnter() {
            // console.log("afterEnter");
        },
        beforeLeave() {
            // console.log("beforeLeave");
        },
        leave() {
            // console.log("leave");
        },
        afterLeave() {
            // console.log("afterLeave");
        },
    },
};
</script>

<style lang="scss">
.u-page {
    padding: 0;
}

.transition {
    background-color: $u-primary;
}
</style>

```
:::

### API

### Props

| 参数			| 说明							| 类型					| 默认值		|  可选值	|
|:-				|:-								|:-						|:-			|:-			|
| show			| 是否展示组件					| Boolean				| false		| true		|
| mode			| 使用的动画模式					| String				| fade		| true		|
| duration		| 动画的执行时间，单位ms			| String &#124; Number	| 300		| -			|
| timingFunction| 使用的动画过渡函数，见上方说明	| String				| ease-out	| -			|
| customStyle	| 自定义样式						| Object				| -			| -			|

### Events

| 事件名			| 说明		| 回调参数	|
| :-			| :-		| :-		|
| before-enter	| 进入前触发	| -			|
| enter			| 进入中触发	| -			|
| after-enter	| 进入后触发	| -			|
| before-leave	| 离开前触发	| -			|
| leave			| 离开中触发	| -			|
| after-leave	| 离开后触发	| -			|


<style scoped>
h3[id=events] + table thead tr th:nth-child(2){
	width: 33.3%;
}

h3[id=methods] + p + table thead tr th:nth-child(2){
	width: 70%;
}
</style>
