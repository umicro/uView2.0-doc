## CustomIcon 扩展自定义图标库

<!-- <demo-model url="/pages/componentsA/icon/index"></demo-model> -->


uView已通过大量的实践中，收集了用户最有可能需要用到的图标，见[Icon 图标](/components/icon.html)，但我们也相信，它肯定无法覆盖所有的场景和需求。  

用户也可以使用标签的方式，自行引入字体图标，为何要通过扩展的方式集成呢？  
这是因为uView有统一的字体图标组件，使用方便，配置灵活，且风格统一。

:::tip 说明
以下说明和演示，均针对[阿里字体图标库](https://www.iconfont.cn)，其他字体库源同理
:::

总的来说，我们要实现的效果如下：

```css
@font-face {
	/* 声明"custom-icon"字体 */
	font-family: "custom-icon";
	src: url('data:application/x-font-woff2;charset=utf-8;base64,xxxxxxxx') format('woff2');
}

.custom-icon {
	/* 引用上面声明的"custom-icon"字体 */
	font-family: "custom-icon" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* 字体图标的前缀为"custom-icon-" */
.custom-icon-copy:before {
  content: "\e641";
}
```

通过如下方式引用：  

通过`custom-prefix`指定类名为`custom-icon`

```html
<u-icon name="copy" custom-prefix="custom-icon"></u-icon>
```

### 基础说明

我们假定您一个项目中，需要扩展多个图标，所以您应该把各个图标收集进一个阿里图标库的项目中，即使您后面不断的扩展图标，也能让它们在同一个库中。

一般情况下，我们建议您在收藏的项目中，使用"下载至本地"的功能，而后解压，复制文件夹中的"iconfont.css"至uni-app目中(其余的文件可忽略)

下面的操作默认您已进入阿里图标库的"图标管理"栏目中

1. 我们建议，您应该修改这个图标的前缀，这样以后有新图标加入的时候，不用每次频繁修改前缀，在右上角的"更多操作"中，进入"编辑项目"：

<img src="/custom_icon/custom_icon_3.png" />


2. 修改"FontClass/Symbol 前缀"项为"custom-icon-"，修改"Font Family"为"custom-icon"，如下图：

<img src="/custom_icon/custom_icon_4.png" />


3. 下载项目至本地

<img src="/custom_icon/custom_icon_1.png" />

4. 复制"iconfont.css"至项目，一般放在根目录的`static`文件夹下

<img src="/custom_icon/custom_icon_2.png" />

5. 复制"iconfont.css"文件到uni-app目根目录的`static`目录后(也可以为其他目录)，打开"iconfont.css"，内部如下：

删掉下图圈出的部分，记得把"src: url('data:application/x-font-woff2......"最后的逗号`,`改成分号`;`。

<img src="/custom_icon/custom_icon_8.png" />

6. 最终如下图：

<img src="/custom_icon/custom_icon_9.png" />


7. 在项目根目录的"App.vue"中，引入上述的"iconfont.css"，注意自己存放的路径，且通过"@import"引入的外部样式，为了兼容性建议使用相对路径，
且引入的样式，需要写在`style`标签有效内容中的最前面，如下：

```css
/* App.vue */
<style>
/* 此处为style标签内容的最前面 */
@import "./static/iconfont.css";

.view {
	......
}

/* 下面为错误示例，因为这里不是style标签内容的最前面，前面还有个".view"的样式 */
/* @import "./static/iconfont.css"; */
</style>
```

8. 在页面通过uView的[Icon](/components/icon.html)组件使用图标，图标名称为您在阿里图标库中点击"编辑图标"时的"Font Class / Symbol"(该值可修改，每次修改都需重新下载"iconfont.css"放到uni-app目中，
覆盖原来的"iconfont.css")

<img src="/custom_icon/custom_icon_7.png" />

如上图，我们得到"backspace"值，使用如下：

```html
<u-icon name="backspace" custom-prefix="custom-icon" size="30" color="#888888"></u-icon>
```

从上可以看出，相比uView内置的图标使用，多了一句固定的`custom-prefix="custom-icon"`，其余使用方法完全相同
<br><br><br><br>

**注意**：执行完上面的操作后，您就可以随心所欲的扩展自己的图标了，最重要的是第二步，修改了它，就免了以后每次都要修改"iconfont.css"的多处细节。
当然，每次新增图标，当您把"iconfont.css"复制至项目中覆盖原来的"iconfont.css"后，都需要执行一遍第5步删掉多余的内容，别忘了修改最后的`,`为`;`。 

最后提一下，为了多平台兼容性，您应该仅把单色图标添加到阿里图标库的项目中，即使添加了多色的图标，在使用中，也会被转成单色。

祝您使用愉快！