## CountDown 倒计时 <to-api/>

<demo-model url="/pages/componentsB/countDown/countDown"></demo-model>


该组件一般使用于某个活动的截止时间上，通过数字的变化，给用户明确的时间感受，提示用户进行某一个行为操作。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过`time`参数设置倒计时间，单位为`ms`

```html
<template>
	<u-count-down :time="30 * 60 * 60 * 1000" format="HH:mm:ss"></u-count-down>
</template>
```

### 自定义格式

- 说明：通过绑定`change`回调的值，进行自定义格式

```html
<template>
    <u-count-down
        :time="30 * 60 * 60 * 1000"
        format="DD:HH:mm:ss"
        autoStart
        millisecond
        @change="onChange"
    >
        <view class="time">
            <text class="time__item">{{ timeData.days }}&nbsp;天</text>
            <text class="time__item">{{ timeData.hours>10?timeData.hours:'0'+timeData.hours}}&nbsp;时</text>
            <text class="time__item">{{ timeData.minutes }}&nbsp;分</text>
            <text class="time__item">{{ timeData.seconds }}&nbsp;秒</text>
        </view>
    </u-count-down>
</template>

<script>
    export default {
        data() {
            return {
                timeData: {},
            }
        },
        methods: {
            onChange(e) {
                this.timeData = e
            }
        }
    }
</script>

<style lang="scss">
.time {
    @include flex;
    align-items: center;

    &__item {
         color: #fff;
         font-size: 12px;
         text-align: center;
     }
}
</style>
```

### 毫秒级渲染

- 通过配置`millisecond`来开启毫秒级倒计时

```html
<u-count-down :time="30 * 60 * 60 * 1000" format="HH:mm:ss:SSS" autoStart millisecond></u-count-down>
```

### 自定义样式

- 说明：通过绑定`change`回调的值，进行自定义格式

```html
<template>
    <u-count-down
            :time="30 * 60 * 60 * 1000"
            format="HH:mm:ss"
            autoStart
            millisecond
            @change="onChange"
    >
        <view class="time">
            <view class="time__custom">
                <text class="time__custom__item">{{ timeData.hours>10?timeData.hours:'0'+timeData.hours}}</text>
            </view>
            <text class="time__doc">:</text>
            <view class="time__custom">
                <text class="time__custom__item">{{ timeData.minutes }}</text>
            </view>
            <text class="time__doc">:</text>
            <view class="time__custom">
                <text class="time__custom__item">{{ timeData.seconds }}</text>
            </view>
        </view>
    </u-count-down>
</template>

<script>
    export default {
        data() {
            return {
                timeData: {},
            }
        },
        methods: {
            onChange(e) {
                this.timeData = e
            }
        }
    }
</script>

<style lang="scss">
.time {
    @include flex;
    align-items: center;

    &__custom {
         margin-top: 4px;
         width: 22px;
         height: 22px;
         background-color: $u-primary;
         border-radius: 4px;
         /* #ifndef APP-NVUE */
         display: flex;
         /* #endif */
         justify-content: center;
         align-items: center;
    
        &__item {
             color: #fff;
             font-size: 12px;
             text-align: center;
         }
    }
    
    &__doc {
         color: $u-primary;
         padding: 0px 4px;
     }
    
    &__item {
         color: #606266;
         font-size: 15px;
         margin-right: 4px;
     }
}
</style>
```

### 手动控制

- 说明：通过绑定`ref`进行手动控制重置、开始、暂停

```html
<template>
    <u-count-down
        ref="countDown"
        :time="3* 1000"
        format="ss:SSS"
        :autoStart="false"
        millisecond
        @change="onChange"
    >
    </u-count-down>
    <u-button text="重置" size="normal" type="info" @click="reset"></u-button>
    <u-button text="开始" size="normal" type="success" @click="start"></u-button>
    <u-button text="暂停" size="normal" type="error" @click="pause"></u-button>
</template>

<script>
    export default {
        data() {
            return {
                timeData: {},
            }
        },
        methods: {
            //开始
            start() {
                this.$refs.countDown.start();
            },
            // 暂停
            pause() {
                this.$refs.countDown.pause();
            },
            // 重置
            reset() {
                this.$refs.countDown.reset();
            },
            onChange(e) {
                this.timeData = e
            }
        }
    }
</script>
```

### API

### Props

| 参数			| 说明											| 类型					| 默认值		|  可选值	|
|:-				|:-												|:-						|:-			|:-			|
| time			| 倒计时时长，单位ms					 			| String &#124; Number	| 0			| -			|
| format		| 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒	| String				| HH:mm:ss	| -			|
| autoStart		| 是否自动开始倒计时								| Boolean				| true		| false		|
| millisecond	| 是否展示毫秒倒计时								| Boolean				| false		| true		|

### Events

|事件名	|说明						|回调参数	|
|:-		|:-							|:-			|
|change	|倒计过程中，每秒触发一次		|-			|
|finish	|倒计时结束					|-			|



### Methods

需要通过ref获取倒计时组件才能调用

| 名称	| 说明		|
|:-		|:-			|
| start	| 开始倒计时	|
| pause	| 暂停倒计时	|
| reset	| 重置倒计时	|
