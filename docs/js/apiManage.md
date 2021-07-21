## API集中管理

这里说的集中管理，是指把各个请求，统一放到一个文件中进行管理，这样的好处是不用每次调用`this.$u.get`时都需要传入`url`参数，一些固定的
请求参数也可以不用显式的传入，如下为配置后的使用示例：

```
this.$u.api.getSearch().then(res => {
	console.log(res);
})
```

### 前言

在进行这个配置之前，建议先配置请求的拦截器，本示例和和拦截器是一脉相承的，请移步：[Http拦截器](/js/http.html)


### 准备工作

在根目录新建`/common/http.api.js`，如已有`common`目录，创建`http.api.js`即可。


### 说明

本文件的内部大体结构，和请求拦截器的内部结构基本一致，都是通过在	`main.js`中引入创建的`app`(也即页面的`this`)对象，实现在内部
对各个参数的处理，在请求拦截器部分有关于内部各个参数的详细介绍，详见：[Http拦截器](/js/http.html)

以下为`/common/http.api.js`的内部内容，说明都在注释中，请举一反三，灵活配置即可：

```js
// /common/http.api.js

// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
let hotSearchUrl = '/ebapi/store_api/hot_search';
let indexUrl = '/ebapi/public_api/index';

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 此处没有使用传入的params参数
	let getSearch = (params = {}) => vm.$u.get(hotSearchUrl, {
		id: 2
	});
	
	// 此处使用了传入的params参数，一切自定义即可
	let getInfo = (params = {}) => vm.$u.post(indexUrl, params);
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {getSearch, getInfo};
}

export default {
	install
}
```

### 引入

我们上面是创建和配置了`http.api.js`，接下来需要在`main.js`中进行挂载，如果您配置了拦截器，这部分的引入代码，需要写在拦截器引入的后面：

```js
// 其他已有内容
const app = new Vue({
  ...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

app.$mount()
```


### 使用

经过以上配置后，我们可以在各个页面的js中方便的调用各个接口，如下示例：

```js
// 调用getSearch接口
this.$u.api.getSearch().then(res => {
	console.log(res);
})

// 调用getInfo接口
this.$u.api.getInfo({id: 3}).then(res => {
	console.log(res);
})
```