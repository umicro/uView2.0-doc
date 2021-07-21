## 设计理念

#### 导航栏

uniapp可以通过配置`pages.json`生成原生元素的导航栏，简要说明如下：
- 优点是可以快速渲染，配置便捷，还可以带入一部分原生内容(针对App Store)
- 缺点是配置不够灵活，遮罩无法覆盖导航栏等

建议：
- 如果开发者使用nuve，可以直接自定义导航栏，无需使用uniapp自带的
- 如果是普通的vue页面，直接使用uniapp自带导航栏。如果自带的不能满足，条件允许就用`subNVue`绘制，否则就用普通元素绘制

说明：uni官方有关于导航栏的详细说明，请参见[自定义导航栏](https://uniapp.dcloud.io/collocation/pages?id=customnav)


#### 关于nvue

nvue源自于uniapp引入的阿里weex开源原生渲染引擎，单weex来说，是不推荐使用的，因为它没有周边的生态和第三方的功能。  
uniapp引入weex之后，一直在整合，但也没有对weex进行定制开发，在APP端某些需要性能相关的可以使用nvue，以下是我们对nvue的一些见解：
- nvue具有媲美`react native`的性能，uniapp一直在打通vue和nvue的壁垒
- nvue页面中还不能像写vue一样便利，比如对样式的限制，api还不能和vue完全互通等

建议：uniapp一直在强化vue，重心不在nvue，如果不是特别复杂的应用，可以直接使用vue开发，应用的首页(V3版本)使用`nvue`，渲染的速度会有显著的提升，
如果有需要进一步了解，请参见[nvue开发与vue开发的常见区别](https://uniapp.dcloud.io/use-weex?id=nvue开发与vue开发的常见区别)


#### 关于单位

我们在web中，常用的是`px`，`rem`等单位，`rem`在uniapp中不推荐使用，我们分别做如下阐述：  

web中：
可以使用`px`，它属于静态单位，它的最终呈现尺寸不会和屏幕尺寸有关系  

uniapp中(vue和nvue)：  
`px`属于静态单位，uni中还有`upx`和`rpx`单位，`upx`为uniapp成立之初的动态单位，后来各家小程序跟随微信小程序，都使用
`rpx`单位，使它成为了既定的事实标准，uniapp也就提倡并官宣使用`rpx`单位，但是`upx`也一样能使用，和`rpx`效果相同。  
另外：uniapp，vh和vw也完全可以使用的，一般我们需要让某个元素高度铺满整个屏幕时，可以设置高度为`100vh`。  

weex中：
这里说的是阿里的weex，而不是uniapp改良后的nvue版本中的weex，它的`px`单位和uniapp中的`rpx`或者`upx`是一样的，也属于
动态单位，它自创了个`wx`单位，和web中的`px`一样，属于静态单位。  
说明：uniapp的nvue版本中，虽然也是引入weex，但是改良后，没有了`wx`，`nvue`的`rpx`(`upx`)与`px`和uniapp的vue版本单位效果一致。  

建议：开发中，只需谨记两个单位，`px`和`rpx`，一般情况下，我们推荐字体和宽高等，都使用`rpx`单位，如果真的需要固定尺寸，就是用`px`。
如果关于各单位和他们的由来历史，还需要进一步了解，可以参见[尺寸单位](https://uniapp.dcloud.io/frame?id=尺寸单位)


#### 布局

为兼容多端运行，我们建议开发者使用`flex`，不要使用`float`布局。移动端使用`flex`是没有顾虑的，而`flex`布局，可以达到事半功倍的效果。  
如果不熟悉`flex`，可以参考[阮一峰的flex教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)


#### 简要介绍Vue.use的原理 

uView的引用，用到了`Vue.use`的，我们想借此机会，向您解释一下`Vue.use`的原理，详见[简要介绍Vue.use的原理](/components/vueuse.html)
