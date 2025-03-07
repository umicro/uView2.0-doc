## Checkbox 复选框 <to-api/>

<demo-model url="/pages/componentsA/checkbox/checkbox"></demo-model>


复选框组件一般用于需要多个选择的场景，该组件功能完整，使用方便

### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

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
	<u-checkbox v-model="checked" shape="circle" label="明月"></u-checkbox>
</u-checkbox-group>
```


### 自定义颜色

此处所指的颜色，为`checkbox`选中时的背景颜色，参数为`activeColor`


```html
<u-checkbox-group v-model="checked">
	<u-checkbox  activeColor="red" label="光影"></u-checkbox>
</u-checkbox-group>
```

### 自定义文字插槽

可以通过默认插槽更改`label`

**注意：** nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式

```html
<u-checkbox-group>
	<u-checkbox v-model="checked" shape="circle">自定义文字</u-checkbox>
</u-checkbox-group>
```


### 横向排列形式

可以通过设置`placement`为`row`或者`column`，将复选框设置为横向排列或者竖向排列

```html
<u-checkbox-group v-model="checked" placement="row">
	<u-checkbox activeColor="red" label="红色"></u-checkbox>
	<u-checkbox activeColor="green" label="绿色"></u-checkbox>
</u-checkbox-group>
```

### 横向两端排列形式

可以通过设置`iconPlacement`为`left`或者`right`，将复选框勾选图标的对齐设置为左对齐或者右对齐


```html
<u-checkbox-group 
    v-model="checked"
    iconPlacement="right" 
    placement="row">
	<u-checkbox activeColor="red" label="红色"></u-checkbox>
	<u-checkbox activeColor="green" label="绿色"></u-checkbox>
</u-checkbox-group>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsA/checkbox/checkbox.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="/common/github.svg" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsA/checkbox/checkbox.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="/common/gitee.svg" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
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


### Checkbox Slot

| 名称		| 说明																	|
| :-		| :-																	|
| 默认插槽	| 自定义`label`内容，注意：在nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式	|
| icon		| 自定义图标		|


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
| placement		| 布局方式，row-横向，column-纵向							| String			| row		| column|
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
