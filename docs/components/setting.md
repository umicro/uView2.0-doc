## 配置

### 安装配置

由于uView支持`npm`和`下载`的方式安装，二者配置几乎一致，因为某些平台的兼容性，在配置easycom稍有不同，为了不造成混淆，这里将两种
方式分开说明：

- [NPM方式安装的配置](/components/npmSetting.html)
- [下载方式安装的配置](/components/downloadSetting.html)


<!-- ### 原理
您可能会好奇为什么需要这样配置，详见：[配置说明](/components/settingDesc.html) -->


### 默认单位配置

在uView1.x中，组件参数如果为数值的话，默认为`rpx`单位，但是`rpx`在平板上会导致尺寸超大，为了更高的可用性，所以uView2.x将单位默认改为`px`，如果您出于
某些需求，需要将单位改为`rpx`，可以在`main.js`中进行如下配置即可：

```js
......
// main.js，注意要在use方法之后执行
import uView from 'uview-ui'
Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'
......
```