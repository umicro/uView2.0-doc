## Divider 分割线 <to-api/>

<demo-model url="/pages/componentsA/divider/divider"></demo-model>


区隔内容的分割线，一般用于页面底部"没有更多"的提示。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

文字内容通过`text`传入

```html
<u-divider text="分割线"></u-divider>
```

### 设置虚线
可以通过`dashed`指定虚线
```html
<u-divider text="分割线" :dashed="true"></u-divider>
```

### 设置细线
可以通过`hairline`指定细线
```html
<u-divider text="分割线" :hairline="true"></u-divider>
```

### 设置以点代替文字
可以通过`dot`指定以点代替文字
```html
<u-divider text="分割线" :dot="true"></u-divider>
```

### 设置文本靠左靠右
可以通过`textPosition`指定文字靠左靠右
```html
<u-divider text="靠左" textPosition="left"></u-divider>
<u-divider text="靠右" textPosition="right"></u-divider>
```

### 设置文本颜色和线条颜色
可以通过`textColor`和`lineColor`指定文字刚线条颜色
```html
<u-divider
        text="分割线"
        textColor="#2979ff"
        lineColor="#ff0000"
></u-divider>
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsA/divider/divider.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsA/divider/divider.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数			| 说明									| 类型					|默认值		| 可选值			|
|:-				|:-										|:-						|:-			|:-				|
| dashed		| 是否虚线								| Boolean				| false		| true			|
| hairline		| 是否细线								| Boolean				| true		| false			|
| dot			| 是否以点替代文字，优先于text字段起作用	| Boolean				| false		| true			|
| textPosition	| 内容文本的位置							| String				| center	| left、right	|
| text			| 文本内容								| String &#124; Number	| -			| -				|
| textSize		| 文本大小								| String &#124; Number	| 14		| -				|
| textColor		| 文本颜色								| String				| #909399	| -				|
| lineColor		| 线条颜色								| String				| #dcdfe6	| -				|


### Events

|事件名	|说明						|回调参数	|版本	|
|:-		|:-							|:-			|:-		|
| click	| divider组件被点击时触发		| -			| -		|
