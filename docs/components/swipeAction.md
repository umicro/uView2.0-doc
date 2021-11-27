## SwipeAction 滑动单元格 <to-api/>

<demo-model url="/pages/componentsA/swipeAction/swipeAction"></demo-model>


该组件一般用于左滑唤出操作菜单的场景，用的最多的是左滑删除操作。


::: warning 注意
如果把该组件通过v-for用于左滑删除的列表，请保证循环的`:key`是一个唯一值，可以用数据的id或者title替代。
不能是数组循环的index，否则删除的时候，可能会出现数据错乱
:::

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

- 通过slot传入内部内容即可，可以将`v-for`的"index"索引值传递给`index`参数，用于点击时，在回调方法中对某一个数据进行操作(点击回调时第一个参数会返回此索引值)  
- 内部的按钮通过`options`参数配置，此参数为一个数组，元素为对象，可以配置按钮的文字，背景颜色(建议只配置此两个参数即可)，**请勿配置宽高等属性**。


```html
<template>
	<view>
      <u-swipe-action>
        <u-swipe-action-item
          :options="options1"
        >
          <view class="swipe-action u-border-top u-border-bottom">
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">基础使用</text>
            </view>
          </view>
        </u-swipe-action-item>
      </u-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                options1: [{
                    text: '删除'
                }]
			};
		},
	};
</script>

<style lang="scss">
    .u-page {
        padding: 0;
    }

    .u-demo-block__title {
        padding: 10px 0 2px 15px;
    }

    .swipe-action {
        &__content {
             padding: 25rpx 0;
    
            &__text {
                 font-size: 15px;
                 color: $u-main-color;
                 padding-left: 30rpx;
             }
        }
    }
</style>
```

### 多个按钮并列

- 通过添加`options`的值，达到多个并列的效果


```html
<template>
	<view>
      <u-swipe-action>
        <u-swipe-action-item :options="options2">
          <view class="swipe-action u-border-top u-border-bottom">
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">两个按钮并列</text>
            </view>
          </view>
        </u-swipe-action-item>
      </u-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                options2: [{
                    text: '收藏',
                    style: {
                        backgroundColor: '#3c9cff'
                    }
                }, {
                    text: '删除',
                    style: {
                        backgroundColor: '#f56c6c'
                    }
                }],
			};
		},
	};
</script>

<style lang="scss">
    .u-page {
        padding: 0;
    }

    .u-demo-block__title {
        padding: 10px 0 2px 15px;
    }

    .swipe-action {
        &__content {
             padding: 25rpx 0;
    
            &__text {
                 font-size: 15px;
                 color: $u-main-color;
                 padding-left: 30rpx;
             }
        }
    }
</style>
```

### 组合使用

- 通过增设`options`的`options`达成组合效果


```html
<template>
	<view>
      <u-swipe-action>
        <u-swipe-action-item
          :options="item.options"
          v-for="(item, index) in options4"
          :disabled="item.disabled"
          :key="index"
        >
          <view
            class="swipe-action u-border-top"
            :class="[index === options4.length - 1 && 'u-border-bottom']"
          >
            <view class="swipe-action__content">
              <text class="swipe-action__content__text">{{ item.text }}</text>
            </view>
          </view>
        </u-swipe-action-item>
      </u-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                options4: [{
                    text: '禁用状态',
                    disabled: true,
                    options: [{
                        text: '置顶',
                        style: {
                            backgroundColor: '#3c9cff',
                        }
                    },
                        {
                            text: '取消',
                            style: {
                                backgroundColor: '#f9ae3d',
                            }
                        },
                    ],
                }, {
                    text: '正常状态',
                    disabled: false,
                    options: [{
                        text: '置顶',
                        style: {
                            backgroundColor: '#3c9cff',
                        }
                    },
                        {
                            text: '取消',
                            style: {
                                backgroundColor: '#f9ae3d',
                            }
                        },
                    ],
                }, {
                    text: '自动关闭',
                    disabled: false,
                    options: [{
                        text: '置顶',
                        style: {
                            backgroundColor: '#3c9cff',
                        }
                    },
                        {
                            text: '取消',
                            style: {
                                backgroundColor: '#f9ae3d',
                            }
                        },
                    ],
                }],
			};
		},
	};
</script>

<style lang="scss">
    .u-page {
        padding: 0;
    }

    .u-demo-block__title {
        padding: 10px 0 2px 15px;
    }

    .swipe-action {
        &__content {
             padding: 25rpx 0;
    
            &__text {
                 font-size: 15px;
                 color: $u-main-color;
                 padding-left: 30rpx;
             }
        }
    }
</style>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsA/swipeAction/swipeAction.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsA/swipeAction/swipeAction.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### SwipeAction Props

| 参数		| 说明							| 类型		| 默认值	|  可选值	|
|:-			|:-								|:-			|:-		|:-			|
| autoClose	| 是否自动关闭其他swipe按钮组		| Boolean	| true	| false		|

### SwipeAction Event

|事件名	|说明			|回调参数	|
|:-		|:-				|:-			|
| click	| 点击组件时触发	| (index)	|

### SwipeActionItem Props

| 参数			| 说明											| 类型					| 默认值	|  可选值	|
|:-				|:-												|:-						|:-		|:-			|
| show			| 控制打开或者关闭							    	| Boolean				| false	| true		|
| index			| 标识符，如果是v-for，可用index索引				| String &#124; Number	| -		| -			|
| disabled		| 是否禁用										| Boolean				| false	| true		|
| autoClose		| 是否自动关闭其他swipe按钮组						| Boolean				| true	| false		|
| threshold		| 滑动距离阈值，只有大于此值，才被认为是要打开菜单		| Number				| 20	| - 		|
| options		| 右侧按钮内容									| Array					| []	| -			|
| duration		| 动画过渡时间，单位ms							    | String &#124; Number	| 300	| -			|
| name		| 标识符，如果是v-for，可用index索引值						    | String &#124; Number	| -	| -			|

### SwipeActionItem Event

|事件名	|说明			|回调参数	|
|:-		|:-				|:-			|
| click	| 按钮被点击时触发	| name: props参数`name`的值，index: 第几个按钮被点击	|
