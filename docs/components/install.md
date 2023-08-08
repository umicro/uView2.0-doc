## 安装

<demo-model url="/"></demo-model>


### Hbuilder X方式

[下载方式配置文档](/components/downloadSetting.html)

如果您是使用`Hbuilder X`开发的用户，您可以在`uni-app`插件市场通过`uni_modules`的形式进行安装，此安装方式可以方便您后续在`uni_modules`对uView进行一键升级。

- 在uni-app插件市场右上角选择`uni_modules版本`下的`使用HBuilderX导入插件`，导入到对应的项目中即可。

**注意：**  此安装方式必须要按照[下载方式安装的配置](/components/downloadSetting.html)中的说明配置了才可用。

<br>
<div @click="downloadPost(2)" class="download-link">
	下载地址：<a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=1593">https://ext.dcloud.net.cn/plugin?id=1593</a>
</div>
<br>
<br>



### NPM方式

[npm方式配置文档](/components/npmSetting.html)

在项目根目录执行如下命令即可：

```js
// 如果您的根目录没有package.json文件的话，请先执行如下命令：
// npm init -y

npm install uview-ui@2.0.36

// 更新
// npm update uview-ui
```

**注意：**  此安装方式必须要按照[npm方式安装的配置](/components/npmSetting.html)中的说明配置了才可用，且项目名称不能有**中文**字符。


### 版本查询

有两种方式可以查询到正在使用的uView的版本：  



```js
// 通过`console.log`打印的形式
console.log(uni.$u.config.v);

// 可以查阅uView的配置文件得知当前版本号，具体位置为：
/uview-ui/libs/config/config.js
```

