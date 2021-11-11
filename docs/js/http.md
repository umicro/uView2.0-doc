## Http请求


该插件适用于普遍的请求场景，支持`post`、`get`、`put`和`delete`，以及上传下载等请求，有如下特点：
- 基于`Promise`对象实现更简单的`request`使用方式，支持请求和响应拦截
- 支持全局挂载
- 支持多个全局配置实例
- 支持自定义验证器
- 支持文件上传/下载
- 支持task 操作
- 支持自定义参数
- 支持多拦截器
- 对参数的处理比`uni.request`更强

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

:::tip 说明
此插件集成自优秀的开源请求库：[luch-request](https://www.quanzhan.co/luch-request/)。uView对其进行了简单封装以及说明，如有不全之处，
可参考[luch-request](https://www.quanzhan.co/luch-request/)官方文档。
:::

### 基本使用

```js
uni.$u.http.middleware(config)
uni.$u.http.request(config)
uni.$u.http.get(url[, config])
uni.$u.http.upload(url[, config])
uni.$u.http.delete(url[, data[, config]])
uni.$u.http.head(url[, data[, config]])
uni.$u.http.post(url[, data[, config]])
uni.$u.http.put(url[, data[, config]])
uni.$u.http.connect(url[, data[, config]])
uni.$u.http.options(url[, data[, config]])
uni.$u.http.trace(url[, data[, config]])
```

### 全局配置
可选的配置项有如下：
```js
{
    baseURL: '',
    header: {},
    method: 'GET',
    dataType: 'json',
    // #ifndef MP-ALIPAY
    responseType: 'text',
    // #endif
    // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
    custom: {}, // 全局自定义参数默认值
    // #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
    timeout: 60000,
    // #endif
    // #ifdef APP-PLUS
    sslVerify: true,
    // #endif
    // #ifdef H5
    // 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
    withCredentials: false,
    // #endif
    // #ifdef APP-PLUS
    firstIpv4: false, // DNS解析时优先使用ipv4 仅 App-Android 支持 (HBuilderX 2.8.0+)
    // #endif
    // 局部优先级高于全局，返回当前请求的task,options。请勿在此处修改options。非必填
    // getTask: (task, options) => {
    // 相当于设置了请求超时时间500ms
    //   setTimeout(() => {
    //     task.abort()
    //   }, 500)
    // },
    // 全局自定义验证器。参数为statusCode 且必存在，不用判断空情况。
    validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置
        return statusCode >= 200 && statusCode < 300
    }
}
```

可以通过`uni.$u.http.setConfig()`方法进行全局配置，比如配置请求的全局域名`baseUrl`：
```js
uni.$u.http.setConfig((config) => {
    /* config 为默认全局配置*/
    config.baseURL = `https://www.example.com`; /* 根域名 */
    return config
})
```


### GET请求

需要注意的是，`get`请求与`post`请求略有不同，`get`请求所有参数都在方法的第二个参数中，而`post`请求的第二个参数为请求参数`params`，而第三个参数才为配置项。
```js
// 基本用法，注意：get请求的参数以及配置项都在第二个参数中
uni.$u.http.get('/user/login', {params: {userName: 'name', password: '123456'}}).then(res => {

}).catch(err => {

})

// 局部修改配置，局部配置优先级高于全局配置
uni.$u.http.get('/user/login', {
    params: {userName: 'name', password: '123456'}, /* 会加在url上 */
    header: {}, /* 会与全局header合并，如有同名属性，局部覆盖全局 */
    dataType: 'json',
    // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
    custom: {auth: true}, // 可以加一些自定义参数，在拦截器等地方使用。比如这里我加了一个auth，可在拦截器里拿到，如果true就传token
    // #ifndef MP-ALIPAY
    responseType: 'text',
    // #endif
    // #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
    timeout: 60000, // H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
    // #endif
    // #ifdef APP-PLUS
    sslVerify: true, // 验证 ssl 证书 仅5+App安卓端支持（HBuilderX 2.3.3+）
    // #endif
    // #ifdef APP-PLUS
    firstIpv4: false, // DNS解析时优先使用ipv4 仅 App-Android 支持 (HBuilderX 2.8.0+)
    // #endif
    // #ifdef H5
    withCredentials: false, // 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
    // #endif
    // 返回当前请求的task, options。请勿在此处修改options。非必填
    getTask: (task, options) => {
         // 相当于设置超时时间500ms
         // setTimeout(() => {
         //   task.abort()
         // }, 500)
    },
    //validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置。演示，非必填选项
	//	return statusCode >= 200 && statusCode < 300
	//}
}).then(res => {

}).catch(err => {

})
```


### POST请求

需要注意的是，get请求与post请求略有不同，get请求所有参数都在方法的第二个参数中，而post请求的第二个参数为请求参数params，而第三个参数才为配置项。

```js
// 基本用法，注意：post的第三个参数才为配置项
uni.$u.http.post('/user/login', {userName: 'name', password: '123456'} ).then(res => {

}).catch(err => {

})

// 局部修改配置，局部配置优先级高于全局配置
uni.$u.http.post('/user/login', {userName: 'name', password: '123456'}, {
    params: {}, /* 会加在url上 */
    header: {}, /* 会与全局header合并，如有同名属性，局部覆盖全局 */
    dataType: 'json',
    // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
    custom: {auth: true}, // 可以加一些自定义参数，在拦截器等地方使用。比如这里我加了一个auth，可在拦截器里拿到，如果true就传token
    // #ifndef MP-ALIPAY
    responseType: 'text',
    // #endif
    // #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
    timeout: 60000, // H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
    // #endif
    // #ifdef APP-PLUS
    sslVerify: true, // 验证 ssl 证书 仅5+App安卓端支持（HBuilderX 2.3.3+）
    // #endif
   // #ifdef APP-PLUS
    firstIpv4: false, // DNS解析时优先使用ipv4 仅 App-Android 支持 (HBuilderX 2.8.0+)
    // #endif
    // #ifdef H5
    withCredentials: false, // 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
    // #endif
    // 返回当前请求的task, options。请勿在此处修改options。非必填
    getTask: (task, options) => {
         // 相当于设置超时时间500ms
         // setTimeout(() => {
         //   task.abort()
         // }, 500)
    },
    //validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置。演示，非必填选项
  	//	return statusCode >= 200 && statusCode < 300
  	//}
}).then(res => {

}).catch(err => {

})
```


### UPLOAD请求

具体参数说明：[uni.uploadFile](https://uniapp.dcloud.io/api/request/network-file)

```js
uni.$u.http.upload('api/upload/img', {
    params: {}, /* 会加在url上 */
    // #ifdef APP-PLUS || H5
    files: [], // 需要上传的文件列表。使用 files 时，filePath 和 name 不生效。App、H5（ 2.6.15+）
    // #endif
    // #ifdef MP-ALIPAY
    fileType: 'image/video/audio', // 仅支付宝小程序，且必填。
    // #endif
    filePath: '', // 要上传文件资源的路径。
    // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
    custom: {auth: true}, // 可以加一些自定义参数，在拦截器等地方使用。比如这里我加了一个auth，可在拦截器里拿到，如果true就传token
    name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
    // #ifdef H5 || APP-PLUS
    timeout: 60000, // H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)
    // #endif
    header: {},  /* 会与全局header合并，如有同名属性，局部覆盖全局 */
    formData: {}, // HTTP 请求中其他额外的 form data
    // 返回当前请求的task, options。请勿在此处修改options。非必填
    getTask: (task, options) => {
      // task.onProgressUpdate((res) => {
      //   console.log('上传进度' + res.progress);
      //   console.log('已经上传的数据长度' + res.totalBytesSent);
      //   console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
      //
      //   // 测试条件，取消上传任务。
      //   if (res.progress > 50) {
      //     uploadTask.abort();
      //   }
      // });
    },
    //validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置。演示，非必填选项
    //	return statusCode >= 200 && statusCode < 300
    //}
}).then(res => {
	// 返回的res.data 已经进行JSON.parse
}).catch(err => {

})
```


### DOWNLOAD请求

具体参数说明：[uni.downloadFile](https://uniapp.dcloud.io/api/request/network-file?id=downloadfile)

```js
uni.$u.http.download('api/download', {
    params: {}, /* 会加在url上 */
    // #ifdef H5 || APP-PLUS
    timeout: 3000, // H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)
    // #endif
    header: {}, /* 会与全局header合并，如有同名属性，局部覆盖全局 */
    custom: {}, // 自定义参数
    // 返回当前请求的task, options。非必填
    getTask: (task, options) => {
		// setTimeout(() => {
		//   task.abort()
		// }, 500)
    },
    //validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置。演示，非必填选项
   	//	return statusCode >= 200 && statusCode < 300
   	//}
}).then(res => {

}).catch(err => {

})
```


### 请求拦截器

```js
uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	config.header = {
		...config.header,
		a: 1 // 演示拦截器header加参
	}
	// 演示custom 用处
	// if (config.custom.auth) {
	//   config.header.token = 'token'
	// }
	// if (config.custom.loading) {
	//  uni.showLoading()
	// }
	// 演示
	// if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
	// 	return Promise.reject(config)
	// }
	return config
}, config => { // 可使用async await 做异步操作
	return Promise.reject(config)
})
```

### 响应拦截器

```js
uni.$u.http.interceptors.response.use((response) => {
	/* 对响应成功做点什么 可使用async await 做异步操作*/
	// if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
	//    	return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
	// if (response.config.custom.verification) { // 演示自定义参数的作用
	//   	return response.data
	// }
	console.log(response)
	return response
}, (response) => {
	/*  对响应错误做点什么 （statusCode !== 200）*/
	console.log(response)
	return Promise.reject(response)
})
```


### 实践

假设我们项目中需要用到请求和响应拦截器，并且在请求拦截器中需要调用`vuex`中的变量，可按如下步骤进行操作(仅供参考)：

#### 1. 全局配置，以及请求，响应拦截器定义

在`/config/request.js`中，写入如下内容：
```js
// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
    // 初始化请求配置
    uni.$u.http.setConfig((config) => {
        /* config 为默认全局配置*/
        config.baseURL = 'https://www.example.com'; /* 根域名 */
        return config
    })
	
	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	    // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
	    config.data = config.data || {}
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		if(config?.custom?.auth) {
			// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
			config.header.token = vm.$store.state.userInfo.token
		}
	    return config 
	}, config => { // 可使用async await 做异步操作
	    return Promise.reject(config)
	})
	
	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
		const data = response.data

		// 自定义参数
		const custom = response.config?.custom
		if (data.code !== 200) { 
			// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
			if (custom.toast !== false) {
				uni.$u.toast(data.message)
			}

			// 如果需要catch返回，则进行reject
			if (custom?.catch) {
				return Promise.reject(data)
			} else {
				// 否则返回一个pending中的promise，请求不会进入catch中
				return new Promise(() => { })
			}
		}
		return data.data === undefined ? {} : data.data
	}, (response) => { 
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject(response)
	})
}
```


#### 2. 引用配置

我们可以在`main.js`中引用`/config/request.js`，注意引用的位置，需要在`new Vue`得到`Vue`实例之后，如下：

```js
import Vue from 'vue'
import App from './App'

// 假设您项目中已使用VueX
import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

import mixin from './common/mixin'
Vue.mixin(mixin)

const app = new Vue({
	store,
	...App
})

// 引入请求封装，将app参数传递到配置中
require('/config/request.js')(app)

app.$mount()
```

#### 3. Api集中管理

在`/config/api.js`中编写请求接口：

```js
const http = uni.$u.http

// post请求，获取菜单
export const postMenu = (params, config = {}) => http.post('/ebapi/public_api/index', params, config)

// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export const getMenu = (data) => http.get('/ebapi/public_api/index', data)
```

#### 4. 发送请求

```js
import { postMenu, getMenu } from '/config/api.js';

// 发出post，假设需要带上token
postMenu({ custome: { auth: true }}).then(() => {
	
}).catch(() =>{
	
})

// await等待，注意与async结合使用
await postMenu({ custome: { auth: true }})

// 假设不需要在响应拦截器中自动弹出的toast，以及不想写catch(如果promise中进行reject，但是却没有catch的话会报错)
postMenu({ custome: { auth: true, toast: false, catch: false }}).then(() => {
	
})

// get请求
getMenu({ custome: { auth: true }}).then(() => {
	
}).catch(() =>{
	
})

// 也可以直接通过uni.$u.post发出请求，注意此处需要写上接口地址
uni.$u.http.post('/common/menu', { custome: { auth: true }}).then(() => {
	
}).catch(() =>{
	
})
```