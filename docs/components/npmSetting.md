## npm安装方式配置 <to-api/>

### 关于SCSS

uView依赖SCSS，您必须要安装此插件，否则无法正常运行。

- 如果您的项目是由`HBuilder X`创建的，相信已经安装scss插件，如果没有，请在HX菜单的 工具->插件安装中找到"scss/sass编译"插件进行安装，
如不生效，重启HX即可
- 如果您的项目是由vue-cli创建的，请通过以下命令安装对sass(scss)的支持，如果已安装，请略过。

```js
// 安装node-sass
npm i node-sass -D

// 安装sass-loader
npm i sass-loader -D
```

### 准备工作

在进行配置之前，请确保您已经根据[安装](/components/install.html)中的步骤对uView进行了npm安装，如果没有，请先执行安装：

```js
// 如果您的项目是HX创建的，根目录又没有package.json文件的话，请先执行如下命令：
// npm init -y

// 安装
npm install uview-ui
```

### 配置步骤

#### 1. 引入uView主JS库

在项目根目录中的`main.js`中，引入并使用uView的JS库，注意这两行要放在`import Vue`之后。

```js
// main.js
import uView from "uview-ui";
Vue.use(uView);
```


#### 2. 在引入uView的全局SCSS主题文件

在项目根目录的`uni.scss`中引入此文件。

```css
/* uni.scss */
@import 'uview-ui/theme.scss';
```


#### 3. 引入uView基础样式

:::danger 注意！
在`App.vue`中**首行**的位置引入，注意给style标签加入lang="scss"属性
:::

```css
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
```


#### 4. 配置easycom组件模式

此配置需要在项目根目录的`pages.json`中进行。

:::tip 温馨提示
1. uni-app为了调试性能的原因，修改`easycom`规则不会实时生效，配置完后，您需要重启HX或者重新编译项目才能正常使用uView的功能。
2. 请确保您的`pages.json`中只有一个`easycom`字段，否则请自行合并多个引入规则。
:::

```json
// pages.json
{
	"easycom": {
		"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
	},
	
	// 此为本身已有的内容
	"pages": [
		// ......
	]
}
```