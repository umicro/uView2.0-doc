## tabs 标签 <to-api/>

该组件，是一个tabs标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 
该组件的一个特点是配置为滚动模式时，激活的tab会自动移动到组件的中间位置。
<br>

<demo-model url="/pages/componentsC/tabs/tabs"></demo-model>


### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

:::warning 说明
目前`tabs`在`vue`页面下存在一些问题，在我们处理好之前，建议在`nvue`页面下使用此组件。
:::

### 基本使用

- 通过设置`scrollable`(默认为`true`)，配置tabs组件的内容是否可以左右拖动，一般4个标签以下时，无需拖动，设置为`false`，5个标签以上，建议可以左右拖动。  
- tabs标签的切换，需要绑定`current`值，在`change`事件回调中可以得到`index`，将其赋值给`current`即可。

具体的标签，通过`list`参数配置，该参数要求为数组，元素为对象，对象要有`name`属性，见示例：

:::tip 说明
`scrollable`参数很重要，如果您的tabs项只有几个，且不想tabs导航栏可以被左右滑动的话，请一定要设置`scrollable`为`false`，因为它默认为`true`。
:::


```html
<template>
    <u-tabs :list="list1" @click="click"></u-tabs>
</template>

<script>
	export default {
		data() {
			return {
                list1: [{
                    name: '关注',
                }, {
                    name: '推荐',
                }, {
                    name: '电影'
                }, {
                    name: '科技'
                }, {
                    name: '音乐'
                }, {
                    name: '美食'
                }, {
                    name: '文化'
                }, {
                    name: '财经'
                }, {
                    name: '手工'
                }]
			}
		},
		methods: {
            click(item) {
                console.log('item', item);
            }
		}
	}
</script>
```


### 粘性布局

通过加上`u-sticky`来使tabs滑动浮动在最顶部。

```html
<template>
  <u-sticky bgColor="#fff">
    <u-tabs :list="list1"></u-tabs>
  </u-sticky>
</template>

<script>
    export default {
        data() {
            return {
                list1: [{
                    name: '关注',
                }, {
                    name: '推荐',
                }, {
                    name: '电影'
                }, {
                    name: '科技'
                }, {
                    name: '音乐'
                }, {
                    name: '美食'
                }, {
                    name: '文化'
                }, {
                    name: '财经'
                }, {
                    name: '手工'
                }]
            }
        }
    }
</script>
```


### 显示徽标

可以通过在列表对象中加入`badge`来设置徽标。

```html
<template>
    <u-tabs :list="list2"></u-tabs>
</template>

<script>
    export default {
        data() {
            return {
                list2: [{
                    name: '关注'
                }, {
                    name: '推荐',
                    badge: {
                        isDot: true
                    }
                }, {
                    name: '电影',
                    badge: {
                        value: 5,
                    }
                }, {
                    name: '科技'
                }, {
                    name: '音乐'
                }, {
                    name: '美食'
                }, {
                    name: '文化'
                }, {
                    name: '财经'
                }, {
                    name: '手工'
                }]
            }
        }
    }
</script>
```


### 自定义样式

通过使用`activeStyle`、`inactiveStyle`、`itemStyle`来设置tabs的样式。

```html
<template>
    <u-tabs
            :list="list4"
            lineWidth="30"
            lineColor="#f56c6c"
            :activeStyle="{
						color: '#303133',
						fontWeight: 'bold',
						transform: 'scale(1.05)'
					}"
            :inactiveStyle="{
						color: '#606266',
						transform: 'scale(1)'
					}"
            itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
    >
    </u-tabs>
</template>

<script>
    export default {
        data() {
            return {
                list4: [{
                    name: '关注'
                }, {
                    name: '推荐',
                    badge: {
                        isDot: true
                    }
                }, {
                    name: '电影',
                }, {
                    name: '科技'
                }, {
                    name: '音乐'
                }, {
                    name: '美食'
                }, {
                    name: '文化'
                }, {
                    name: '财经'
                }, {
                    name: '手工'
                }],
            }
        }
    }
</script>
```


### 右侧自定义插槽


```html
<template>
    <u-tabs :list="list1">
        <view
                slot="right"
                style="padding-left: 4px;"
                @tap="$u.toast('插槽被点击')"
        >
            <u-icon
                    name="list"
                    size="21"
                    bold
            ></u-icon>
        </view>
    </u-tabs>
</template>

<script>
    export default {
        data() {
            return {
                list1: [{
                    name: '关注',
                }, {
                    name: '推荐',
                }, {
                    name: '电影'
                }, {
                    name: '科技'
                }, {
                    name: '音乐'
                }, {
                    name: '美食'
                }, {
                    name: '文化'
                }, {
                    name: '财经'
                }, {
                    name: '手工'
                }]
            }
        }
    }
</script>
```


### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsC/tabs/tabs.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsC/tabs/tabs.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数								| 说明																		| 类型					| 默认值					|  可选值	|
|:-									|:-																			|:-						|:-						|:-			|
| duration							| 滑块移动一次所需的时间，单位**ms**											| String &#124; Number	| 300					| -			|
| list								| 标签数组，元素为对象，如[{name: '推荐'}]										| Array					| -						| -			|
| lineColor							| 滑块颜色                              									| String					| #3c9cff						| -			|
| activeStyle						| 菜单选择中时的样式														| String &#124; Object		| { color: '#303133' }				| -			|
| inactiveStyle						| 菜单非选中时的样式														| String &#124; Object		| { color: '#606266' }				| -			|
| lineWidth							| 滑块长度      															| String &#124; Number	| 20					| -			|
| lineHeight						| 滑块高度      															| String &#124; Number	| 3						| -			|
| itemStyle					    	| 菜单item的样式      													| String &#124; Object	| { height: '44px' }					| -			|
| scrollable						| 菜单是否可滚动						        							| Boolean				| true					| false		|
| current							| 当前选中标签的索引      															| String &#124; Number	| 0					| -			|
| keyName							| 从`list`元素对象中读取的键名											| String	| name					| -			|

### Events

|事件名	|说明			|回调参数							|版本	|
|:-		|:-				|:-									|:-		|
|click	|点击标签时触发	| index: 标签索引值，item: 传入的其他值	|-		|
|change	|标签索引改变时触发(`disalbed`时不会触发)	| index: 标签索引值，item: 传入的其他值	|-		|
