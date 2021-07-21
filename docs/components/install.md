## 安装

<demo-model url="/"></demo-model>


:::tip 说明
1. 由于uView使用`easycom`模式，让您无需引入组件即可直接使用，但是此功能需要Hbuilder X 2.5.5及以上版本才支持，详见[配置easycom组件模式](/components/quickstart.html#_3-配置easycom组件模式)。
`easycom`打包的时候是**按需引入**的，您可以放心引入uView的整个组件库，发布打包时会自动剔除您没有使用的组件(注意：调试时仍然是全部引入的)

2. 请确保您下载的[Hbuilder X](https://www.dcloud.io/hbuilderx.html)为`APP开发版`，而非`标准版`，并且在"工具-插件安装"中安装了"scss/sass编译"插件
:::


### 下载安装

使用下载的方式安装，能更方便阅读源码，但是每次升级都需要重新下载并覆盖`uview-ui`文件夹。

- 在uni-app插件市场右上角选择`使用HBuilder X 导入插件`或者`下载插件ZIP`
- 如果您的项目是由HBuilder X创建的标准uni-app项目，将下载后的`uview-ui`文件夹，复制到项目根目录。
- 如果您的项目是由[vue-cli](https://uniapp.dcloud.io/quickstart?id=_2-%e9%80%9a%e8%bf%87vue-cli%e5%91%bd%e4%bb%a4%e8%a1%8c)模式创建的，
请将下载后的`uview-ui`文件夹放到项目的`src`文件夹中即可。


**注意：**  此安装方式必须要按照[下载方式安装的配置](/components/downloadSetting.html)中的说明配置了才可用。

<br>
<div @click="downloadPost(2)" class="download-link">
	<!-- 下载地址：<a href="https://download.uviewui.com/uView_1.3.6.zip">uView_1.3.6.zip</a> -->
	下载地址：<a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=1593">https://ext.dcloud.net.cn/plugin?id=1593</a>
</div>
<br>
<br>



### 示例项目

此方式为整个uView演示项目，里面有uView核心，组件演示，模板等，建议用户可以下载
此项目运行用于查看UI演示效果，复制模板案例，通过里面的示例，可以快速掌握某一个组件的用法。 

- 途径一：uView示例项目已内置到`HBuilder X`中，在`文件 -> 新建 -> 项目 -> uni-app`中，找到`uView UI`下载运行即可。

- 途径二：在uni-app插件市场右上角选择`使用 HBuilderX 导入示例项目`或者`下载示例项目ZIP`，然后在HBuilder X中运行即可。

<br>
<div @click="downloadPost(3)" class="download-link">
	<!-- 下载地址：<a href="https://download.uviewui.com/uView_1.3.6_demo.zip">uView_1.3.6_demo.zip</a> -->
	uni-app插件市场地址：<a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=1593">https://ext.dcloud.net.cn/plugin?id=1593</a>
</div>
<br>
<br>


:::tip 注意
演示项目不适用于直接开发中，它只是演示用的，可以直接运行并查看效果。  
如果在微信开发工具真机预览时，提示分包太大运行的问题，请在`HBuilder X`进行设置：菜单栏  运行 -> 运行到小程序模拟器，在下拉菜单中**勾选**"运行时是否压缩代码"
:::

<br>
<br>

### 空白项目

此方式为一个完整的uni-app示例工程(使用Hbuilder X创建，非[vue-cli](https://uniapp.dcloud.io/quickstart?id=_2-%e9%80%9a%e8%bf%87vue-cli%e5%91%bd%e4%bb%a4%e8%a1%8c)模式创建)，
它适用于新启动的项目，其中已包含了uView，并且做好了所有配置，让您无需任何配置，开箱即用。

**使用方法：** 在资源下载页中找到"脚手架空白工程"下载解压，并在`Hbuilder X`中运行即可。


<br>
<div @click="downloadPost(1)" class="download-link">
	<!-- 下载地址：<a href="https://download.uviewui.com/uView_1.4.0_default.zip">uView_1.4.0_default.zip</a> -->
	下载地址：<a target="_blank" href="http://uviewui.com/components/resource.html">http://uviewui.com/components/resource</a>
</div>
<br>
<br>



<br>
<br>


### npm安装
使用npm的方式安装，能更方便进行升级。  

- 如果您的项目是通过[vue-cli](https://uniapp.dcloud.io/quickstart?id=_2-%e9%80%9a%e8%bf%87vue-cli%e5%91%bd%e4%bb%a4%e8%a1%8c)模式创建的，
无需手动npm安装`scss`，因为已内置`scss`。


**注意：**  此安装方式必须要按照[npm方式安装的配置](/components/npmSetting.html)中的说明配置了才可用，且项目名称不能有**中文**字符。

:::danger 注意！
由于HX编译错误的原因的，目前(2020-05-06)不支持通过**cnpm**安装uView，这意味着您只能通过**npm**安装uView，如果您的网络无法使用**npm**，
那就使用下载的方式安装，等HX修复此问题，可以使用**cnpm**的时候，我们会撤销此通告。
:::

```js
// 如果您的项目是HX创建的，根目录又没有package.json文件的话，请先执行如下命令：
// npm init -y

// 安装
npm install uview-ui

// 更新
npm update uview-ui
```


### 版本查询

有两种方式可以查询到正在使用的uView的版本：  

- 通过`console.log`打印的形式

```js
console.log(this.$u.config.v);

// 或者(二者等价)
console.log(this.$u.config.version);
```


- 通过源码查看的形式

可以查阅uView的配置文件得知当前版本号，具体位置为"/uview-ui/libs/config/config.js"。


<script>
import axios from "axios";
export default {
	data() {
		return {
			
		}
	},
	methods: {
		downloadPost(type) {
			let url = this.$themeConfig.baseUrl + '/index/index/download';
			axios.post(url, {
			    type: type,
			})
			.then(function (response) {
			    // console.log(response);
			})
			.catch(function (error) {
			   // console.log(error);
			});
		}
	}
}
</script>


<style scoped>
.download-link {
	font-size: 14px;
	color: #5e6d82;
}
</style>