## Collapse 折叠面板 <to-api/>

<demo-model url="/pages/componentsB/collapse/collapse"></demo-model>


通过折叠面板收纳内容区域

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

```html
<template>
  <u-collapse
    @change="change"
    @close="close"
    @open="open"
  >
    <u-collapse-item
      title="文档指南"
      name="Docs guide"
    >
      <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
    </u-collapse-item>
    <u-collapse-item
      title="组件全面"
      name="Variety components"
    >
      <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
    </u-collapse-item>
    <u-collapse-item
      title="众多利器"
      name="Numerous tools"
    >
      <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
    </u-collapse-item>
  </u-collapse>
</template>

<script>
	export default {
		methods: {
            open(e) {
              // console.log('open', e)
            },
            close(e) {
              // console.log('close', e)
            },
            change(e) {
              // console.log('change', e)
            }
        }
	}
</script>
```

### 控制面板的初始状态，以及是否可以操作

- 设置`u-collapse-item`的`name`参数，并在`u-collapse`中指定数组`value`可以让面板初始化时为打开状态
- 如果设置`u-collapse-item`的`disabled`参数，那么面板会保持被禁用状态

```html
<template>
  <u-collapse
    :value="['2']"
  >
    <u-collapse-item
      title="文档指南"
    >
      <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
    </u-collapse-item>
    <u-collapse-item
      disabled
      title="组件全面"
    >
      <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
    </u-collapse-item>
    <u-collapse-item
      name="2"
      title="众多利器"
    >
      <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
    </u-collapse-item>
  </u-collapse>
</template>

<script>
  export default {
    methods: {
      open(e) {
        // console.log('open', e)
      },
      close(e) {
        // console.log('close', e)
      },
      change(e) {
        // console.log('change', e)
      }
    }
  }
</script>
```

### 手风琴模式

- 将`u-collapse`的`accordion`设置为`true`，这样可以开启手风琴模式

```html
<template>
    <view class="u-page__item">
        <text class="u-page__item__title">手风琴模式</text>
        <u-collapse
                accordion
        >
            <u-collapse-item
                    title="文档指南"
            >
                <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
            </u-collapse-item>
            <u-collapse-item
                    title="组件全面"
            >
                <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
            </u-collapse-item>
            <u-collapse-item
                    title="众多利器"
            >
                <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
            </u-collapse-item>
        </u-collapse>
    </view>
</template>

<style lang="scss">
    .u-page {
        padding: 0;

        &__item {
    
            &__title {
                 color: $u-tips-color;
                 background-color: $u-bg-color;
                 padding: 15px;
                 font-size: 15px;
        
                &__slot-title {
                     color: $u-primary;
                     font-size: 14px;
                 }
            }
        }
    }

    .u-collapse-content {
        color: $u-tips-color;
        font-size: 14px;
    }
</style>
```

### 自定义标题和内容

- 通过设置`slot`来自定义标题和内容

```html
<template>
    <view class="u-page__item">
        <text class="u-page__item__title">自定义标题和内容</text>
        <u-collapse
                accordion
        >
            <u-collapse-item
            >
                <text slot="title" class="u-page__item__title__slot-title">文档指南</text>
                <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
            </u-collapse-item>
            <u-collapse-item
                    title="组件全面"
            >
                <u-icon name="tags-fill" size="20" slot="icon"></u-icon>
                <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
            </u-collapse-item>
            <u-collapse-item
                    title="众多利器"
            >
                <text slot="value" class="u-page__item__title__slot-title">自定义内容</text>
                <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
            </u-collapse-item>
        </u-collapse>
    </view>
</template>

<style lang="scss">
    .u-page {
        padding: 0;

        &__item {
    
            &__title {
                 color: $u-tips-color;
                 background-color: $u-bg-color;
                 padding: 15px;
                 font-size: 15px;
        
                &__slot-title {
                     color: $u-primary;
                     font-size: 14px;
                 }
            }
        }
    }

    .u-collapse-content {
        color: $u-tips-color;
        font-size: 14px;
    }
</style>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-page__item">
			<text class="u-page__item__title">基础功能</text>
			<u-collapse
				@change="change"
				@close="close"
				@open="open"
			>
				<u-collapse-item
				    title="文档指南"
					name="Docs guide"
				>
					<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
				</u-collapse-item>
				<u-collapse-item
				    title="组件全面"
					name="Variety components"
				>
					<text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
				</u-collapse-item>
				<u-collapse-item
				    title="众多利器"
					name="Numerous tools"
				>
					<text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
				</u-collapse-item>
			</u-collapse>
		</view>
		<view class="u-page__item">
			<text class="u-page__item__title">展开和禁用</text>
			<u-collapse
				:value="['2']"
			>
				<u-collapse-item
				    title="文档指南"
				>
					<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
				</u-collapse-item>
				<u-collapse-item
					disabled
				    title="组件全面"
				>
					<text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
				</u-collapse-item>
				<u-collapse-item
					name="2"
				    title="众多利器"
				>
					<text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
				</u-collapse-item>
			</u-collapse>
		</view>
		<view class="u-page__item">
			<text class="u-page__item__title">手风琴模式</text>
			<u-collapse
				accordion
			>
				<u-collapse-item
				    title="文档指南"
				>
					<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
				</u-collapse-item>
				<u-collapse-item
				    title="组件全面"
				>
					<text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
				</u-collapse-item>
				<u-collapse-item
				    title="众多利器"
				>
					<text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
				</u-collapse-item>
			</u-collapse>
		</view>
		<view class="u-page__item">
			<text class="u-page__item__title">自定义标题和内容</text>
			<u-collapse
				accordion
			>
				<u-collapse-item
				>
					<text slot="title" class="u-page__item__title__slot-title">文档指南</text>
					<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
				</u-collapse-item>
				<!-- <u-collapse-item
					:isLink="false"
				>
					<text slot="title" class="u-page__item__title__slot-title">文档指南</text>
					<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
				</u-collapse-item> -->
				<u-collapse-item
				    title="组件全面"
				>
					<u-icon name="tags-fill" size="20" slot="icon"></u-icon>
					<text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
				</u-collapse-item>
				<u-collapse-item
				    title="众多利器"
				>
					<text slot="value" class="u-page__item__title__slot-title">自定义内容</text>
					<text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
				</u-collapse-item>
			</u-collapse>
		</view>
		<u-gap height="50"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			open(e) {
				console.log('open', e)
			},
			close(e) {
				console.log('close', e)
			},
			change(e) {
				console.log('change', e)
			}
		}
	}
</script>

<style lang="scss">
	.u-page {
		padding: 0;
		
		&__item {
			
			&__title {
				color: $u-tips-color;
				background-color: $u-bg-color;
				padding: 15px;
				font-size: 15px;
				
				&__slot-title {
					color: $u-primary;
					font-size: 14px;
				}
			}
		}
	}

	.u-collapse-content {
		color: $u-tips-color;
		font-size: 14px;
	}
</style>

```
:::

### API

### Collapse Props

| 参数		| 说明																							| 类型								| 默认值	|  可选值	|
|:-			|:-																								|:-									|:-		|:-			|
| value		| 当前展开面板的name，非手风琴模式：\[<String &#124; Number>\]，手风琴模式：String &#124; Number		| String &#124; Number &#124;  Array| -		| -			|
| accordion	| 是否手风琴模式																					| Boolean							| false	| true		|
| border	| 是否显示外边框																					| Boolean							| true	| false		|

### Collapse Item Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| title | 面板标题  | String | - | - |
| value | 标题右侧内容  | String | - | - |
| label | 标题下方的描述信息  | String | - | - |
| disabled | 面板是否可以打开或收起  | Boolean | false | true |
| isLink | 是否展示右侧箭头并开启点击反馈  | Boolean | true | false |
| clickable | 是否开启点击反馈  | Boolean | true | false |
| border | 是否显示内边框  | Boolean | true | false |
| align | 标题的对齐方式  | String | left | - |
| name | 唯一标识符，如不设置，默认用当前`collapse-item`的索引值 | String &#124; Number | - | - |
| icon | 标题左侧图片，可为绝对路径的图片或内置图标 | String | - | - |
| duration | 面板展开收起的过渡时间，单位`ms` | Number | 300 | - |



### Collapse Event

注意：请在`<u-collapse></u-collapse>`上监听此事件

|事件名	|说明																			|回调参数							|
|:-		|:-																				|:-									|
| change| 当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)	| activeNames: String &#124;  Array	|
| open	| 当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)	| activeNames: String &#124;  Array	|
| close	| 当前激活面板关闭时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)	| activeNames: String &#124;  Array	|


### Collapse Methods 

注意：此方法需要通过`ref`调用

| 方法	| 说明																		|
|:-		|:-																			|
| init	| 重新初始化内部高度计算，用于异步获取内容的情形，请结合`this.$nextTick()`使用		|

### Slot

微信小程序不支持`slot`写法

| 名称		| 说明			|
|:-			|:_				|
| -			| 主体部分的内容	|
| title		| 标题内容		|
| icon		| icon			|
| value		| 右侧value		|
| rightIcon	| 右侧icon		|


<style scoped>
h3[id=collapse-props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=collapse-item-props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=collapse-event] + p + table thead tr th:nth-child(2){
	width: 50%;
}

h3[id=collapse-methods] + table thead tr th:nth-child(2){
	width: 50%;
}

h3[id=collapse-item-event] + p + table thead tr th:nth-child(3){
	width: 50%;
}

h3[id=slot] + table thead tr th:nth-child(2){
	width: 50%;
}
</style>
