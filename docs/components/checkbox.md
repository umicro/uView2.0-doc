## Checkbox 复选框 <to-api/>

<demo-model url="/pages/componentsA/checkbox/checkbox"></demo-model>


复选框组件一般用于需要多个选择的场景，该组件功能完整，使用方便

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:| :-:		|:-:			| :-:		| :-:		| :-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用


```html
<template>
    <view>
        <u-checkbox-group
            v-model="checkboxValue1"
            placement="column"
            @change="checkboxChange"
        >
            <u-checkbox
                :customStyle="{marginBottom: '8px'}"
                v-for="(item, index) in checkboxList1"
                :key="index"
                :label="item.name"
                :name="item.name"
            >
            </u-checkbox>
        </u-checkbox-group>
    </view>
</template>
<script>
export default {
    data() {
        return {
            checkboxValue1:[],
            // 基本案列数据
            checkboxList1: [{
                    name: '苹果',
                    disabled: false
                },
                {
                    name: '香蕉',
                    disabled: false
                },
                {
                    name: '橙子',
                    disabled: false
                }
            ],
        }

    },
    methods: {
        checkboxChange(n) {
            console.log('change', n);
        }
    }
}
</script>
```
### 自定义形状

- 通过`shape`可以设置选择形状


```html
<template>
    <view>
        <u-checkbox-group
            v-model="checkboxValue1"
            placement="column"
            @change="checkboxChange"
        >
            <u-checkbox
                :customStyle="{marginBottom: '8px'}"
                v-for="(item, index) in checkboxList1"
                :key="index"
                :label="item.name"
                :name="item.name"
            >
            </u-checkbox>
        </u-checkbox-group>
    </view>
</template>
<script>
export default {
    data() {
        return {
            checkboxValue1:[],
            // 基本案列数据
            checkboxList1: [{
                    name: '苹果',
                    disabled: false
                },
                {
                    name: '香蕉',
                    disabled: false
                },
                {
                    name: '橙子',
                    disabled: false
                }
            ],
        }

    },
    methods: {
        checkboxChange(n) {
            console.log('change', n);
        }
    }
}
</script>
```

### 禁用checkbox

设置`disabled`为`true`，即可禁用某个组件，让用户无法点击，禁用分为两种状态，一是未勾选前禁用，这时只显示一个灰色的区域。二是已勾选后
再禁用，会有灰色的已勾选的图标，但此时依然是不可操作的。

```html
<template>
    <view>
        <u-checkbox-group
            v-model="checkboxValue1"
            placement="column"
            @change="checkboxChange"
        >
            <u-checkbox
                :customStyle="{marginBottom: '8px'}"
                v-for="(item, index) in checkboxList1"
                :key="index"
                :label="item.name"
                :name="item.name"
                :disabled="item.disabled"
            >
            </u-checkbox>
        </u-checkbox-group>
    </view>
</template>
<script>
export default {
    data() {
        return {
            checkboxValue1:[],
            // 基本案列数据
            checkboxList1: [{
                    name: '苹果',
                    disabled: false
                },
                {
                    name: '香蕉',
                    disabled: false
                },
                {
                    name: '橙子',
                    disabled: true
                }
            ],
        }

    },
    methods: {
        checkboxChange(n) {
            console.log('change', n);
        }
    }
}
</script>
```

### 自定义形状

可以通过设置`shape`为`square`或者`circle`，将复选框设置为方形或者圆形


```html
<u-checkbox-group>
	<u-checkbox v-model="checked" shape="circle">明月</u-checkbox>
</u-checkbox-group>
```


### 自定义颜色

此处所指的颜色，为`checkbox`选中时的背景颜色，参数为`activeColor`


```html
<u-checkbox-group v-model="checked">
	<u-checkbox  activeColor="red">光影</u-checkbox>
</u-checkbox-group>
```

### 横向排列形式

可以通过设置`placement`为`row`或者`column`，将复选框设置为横向排列或者竖向排列


```html
<u-checkbox-group v-model="checked" placement="row">
	<u-checkbox activeColor="red">红色</u-checkbox>
	<u-checkbox activeColor="green">绿色</u-checkbox>
</u-checkbox-group>
```

### 横向两端排列形式

可以通过设置`iconPlacement`为`left`或者`right`，将复选框勾选图标的对齐设置为左对齐或者右对齐


```html
<u-checkbox-group 
    v-model="checked"
    iconPlacement="right" 
    placement="row">
	<u-checkbox activeColor="red">红色</u-checkbox>
	<u-checkbox activeColor="green">绿色</u-checkbox>
</u-checkbox-group>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<view class="u-demo-block">
			<text class="u-demo-block__title">基本案例</text>
			<text class="u-block__title">苹果、香蕉和橙子那个最甜？</text>
			<view class="u-demo-block__content">
				<view class="u-page__checkbox-item">
					<u-checkbox-group
						v-model="checkboxValue1"
						placement="column"
						@change="checkboxChange"
					>
						<u-checkbox
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in checkboxList1"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义形状</text>
			<text class="u-block__title">中国四大名著是？</text>
			<view class="u-demo-block__content">
				<view class="u-page__checkbox-item">
					<u-checkbox-group
						v-model="checkboxValue2"
						placement="column"
						@change="checkboxChange"
						shape="square"
					>
						<u-checkbox
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in checkboxList2"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否禁用</text>
			<text class="u-block__title">下面什么东西不能吃？</text>
			<view class="u-demo-block__content">
				<view class="u-page__checkbox-item">
					<u-checkbox-group
						v-model="checkboxValue3"
						placement="column"
						@change="checkboxChange"
					>
						<u-checkbox
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in checkboxList3"
							:key="index"
							:label="item.name"
							:name="item.name"
							:disabled="index===0"
						>
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">是否禁止点击提示语选中复选框</text>
			<text class="u-block__title">北宋四大家是谁？</text>
			<view class="u-demo-block__content">
				<view class="u-page__checkbox-item">
					<u-checkbox-group
						v-model="checkboxValue4"
						placement="column"
						@change="checkboxChange"
						:labelDisabled="true"
					>
						<u-checkbox
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in checkboxList4"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">自定义颜色</text>
			<text class="u-block__title">那个颜色最好看？</text>
			<view class="u-demo-block__content">
				<view class="u-page__checkbox-item">
					<u-checkbox-group
						v-model="checkboxValue5"
						placement="column"
						@change="checkboxChange"
						activeColor="#19be6b"
					>
						<u-checkbox
							:customStyle="{marginBottom: '8px'}"
							v-for="(item, index) in checkboxList5"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">横向排列形式</text>
			<text class="u-block__title">什么东西不能飞？</text>
			<view class="u-demo-block__content">
				<view class="u-page__checkbox-item">
					<u-checkbox-group
						v-model="checkboxValue6"
						@change="checkboxChange"
					>
						<u-checkbox
							:customStyle="{marginRight: '16px'}"
							v-for="(item, index) in checkboxList6"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</view>
		</view>
		<view class="u-demo-block">
			<text class="u-demo-block__title">横向两端排列形式</text>
			<text class="u-block__title">什么东西不能吃？</text>
			<view>
				<view class="u-page__checkbox-item">
					<u-checkbox-group
						v-model="checkboxValue7"
						@change="checkboxChange"
						:borderBottom="true"
						placement="column"
						iconPlacement="right"
					>
						<u-checkbox
							:customStyle="{marginBottom: '16px'}"
							v-for="(item, index) in checkboxList7"
							:key="index"
							:label="item.name"
							:name="item.name"
						>
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 基本案列数据
				checkboxList1: [{
						name: '苹果',
						disabled: false
					},
					{
						name: '香蕉',
						disabled: false
					},
					{
						name: '橙子',
						disabled: false
					}
				],
				// u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
				checkboxValue1: ['苹果', '橙子'],

				// 自定义形状数据
				checkboxList2: [{
						name: '西游记',
						disabled: false
					},
					{
						name: '红楼梦',
						disabled: false
					},
					{
						name: '三国演义',
						disabled: false
					},
					{
						name: '水浒传',
						disabled: false
					}
				],
				// u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
				checkboxValue2: ['西游记', '红楼梦', '三国演义', '水浒传'],

				// 是否禁用数据
				checkboxList3: [{
						name: '冬瓜',
						disabled: false
					},
					{
						name: '西瓜',
						disabled: false
					},
					{
						name: '黄瓜',
						disabled: false
					},
					{
						name: '傻瓜',
						disabled: false
					}
				],
				// u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
				checkboxValue3: ['傻瓜'],

				// 是否禁止点击提示语选中复选框数据
				checkboxList4: [{
						name: '黄庭坚',
						disabled: false
					},
					{
						name: '欧阳修',
						disabled: false
					},
					{
						name: '苏小宝',
						disabled: false
					},
					{
						name: '王安石',
						disabled: false
					}
				],
				// u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
				checkboxValue4: ['黄庭坚', '欧阳修', '王安石'],

				//自定义颜色数据
				checkboxList5: [{
						name: '红色',
						disabled: false
					},
					{
						name: '黄色',
						disabled: false
					},
					{
						name: '绿色',
						disabled: false
					},
					{
						name: '蓝色',
						disabled: false
					}
				],
				// u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
				checkboxValue5: ['绿色'],

				//横向排列形式数据
				checkboxList6: [{
						name: '小鸟',
						disabled: false
					},
					{
						name: '游艇',
						disabled: false
					},
					{
						name: '轮船',
						disabled: false
					},
					{
						name: '飞机',
						disabled: false
					}
				],
				// u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
				checkboxValue6: ['游艇', '轮船'],

				//横向两端排列形式
				checkboxList7: [{
						name: '汽车',
						disabled: false
					},
					{
						name: '蒸汽机',
						disabled: false
					},
					{
						name: '猪肉',
						disabled: false
					},
					{
						name: '抄手',
						disabled: false
					}
				],
				// u-checkbox-group的v-model绑定的值如果设置为某个checkbox的name，就会被默认选中
				checkboxValue7: ['汽车', '蒸汽机'],
			}

		},
		watch: {
			checkboxValue1(newValue, oldValue) {
				console.log('v-model', newValue);
			}
		},
		onLoad() {

		},
		methods: {
			checkboxChange(n) {
				console.log('change', n);
			}
		}
	}
</script>

<style lang="scss">
	.u-page {}
</style>

```
:::

### API

### Checkbox Props


| 参数			| 说明																	| 类型						| 默认值	| 可选值	|
| :-			| :-																	| :-						| :-	| :-	|
| name			| checkbox的名称															| String \ Number \ Boolean	| -		| -		|
| shape			| 形状，square为方形，circle为圆型										| String					| square| circle|
| size			| 整体的大小																| String \ Number			| -		| -		|
| checked		| 是否默认选中															| Boolean					| false	| true	|
| disabled		| 是否禁用																| String \ Boolean			| -		| -		|
| activeColor	| 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值				| String					| -		| -		|
| inactiveColor	| 未选中的颜色															| String					| -		| -		|
| iconSize		| 图标的大小，单位px														| String \ Number			| -		| -		|
| iconColor		| 图标颜色																| String					| -		| -		|
| label			| label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式	| String \ Number			| -		| -		|
| labelSize		| label的字体大小，px单位													| String \ Number			| -		| -		|
| labelColor	| label的颜色															| String					| -		| -		|
| labelDisabled	| 是否禁止点击提示语选中复选框												| String \ Boolean			| -		| -		|



### CheckboxGroup Props

| 参数			| 说明													| 类型				| 默认值		| 可选值	|
| :-			| :-													| :-				| :-		| :-	|
| name			| 标识符													| String			| -			| -		|
| value			| 绑定的值												| Array				| []		| -		|
| shape			| 形状，circle-圆形，square-方形							| String			| square	| circle|
| disabled		| 是否禁用全部checkbox									| Boolean			| false		| true	|
| activeColor	| 选中状态下的颜色，如子`Checkbox`组件设置此值，将会覆盖本值	| String			| #2979ff	| -		|
| inactiveColor	| 未选中的颜色											| String			| #c8c9cc	| -		|
| size			| 整个组件的尺寸，默认px									| String			| 18		| -		|
| placement		| 布局方式，row-横向，column-纵向							| Boolean			| row		| column|
| labelSize		| label的字体大小，px单位									| String \ Number	| 14		| -		|
| labelColor	| label的字体颜色										| String			| #303133	| -		|
| labelDisabled	| 是否禁止点击文本操作									| Boolean			| false		| true	|
| iconColor		| 图标颜色												| String			| #ffffff	| -		|
| iconSize		| 图标的大小，单位px										| String \ Number	| 12		| -		|
| iconPlacement	| 勾选图标的对齐方式，left-左边，right-右边					| String			| left		| right	|
| borderBottom	| 竖向配列时，是否显示下划线								| Boolean			| false		| true	|


### CheckboxGroup Event

| 事件名	| 说明												| 回调参数												| 版本	|
| :-	| :-												| :-													| -		|
| change| 任一个`checkbox`状态发生变化时触发，回调为一个对象		| detail = array( [元素为被选中的`checkbox`的`name`] )	| -		|



<style scoped>
h3[id=checkbox-props] + p + table thead tr th:nth-child(2){
	width: 35%;
}
</style>
