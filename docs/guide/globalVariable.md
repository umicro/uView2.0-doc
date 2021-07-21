## 全局变量的实现方式

<!-- <demo-model url="/pages/library/globalVariable/index"></demo-model> -->


我们这里说的全局变量，着重指的是能够**全局动态响应**的情况。

说到全局变量，我们首先想到的可能就是`vuex`，确实，这是最好的实现方式。在uni-app中，我们还可以有其他的实现方式，这里我们做一个抛砖引玉的讨论，当然，我们
推荐的，还是使用uView封装后的`vuex`的实现方式，它具有配置简单，使用方便的特点。  

整体来说，在uni-app中，可以有如下实现全局变量的方式：

1. 本地存储
2. 配置文件
3. 挂载Vue.prototype
4. globalData
5. Vuex

下面分别对这几个实现方式进行讲解，由于1到4点由于各种原因，与我们要讨论的**全局动态响应**不是很切合，实现起来也较简单，所以不着重讨论。


### 本地存储

这是一种持久存储的方式，类似于`web`中的`Local Storage`，当我们需要将一个变量保存很长一段时间，比如用户的登录状态(Token)，才会使用这种方式，
同时，频繁对这种方式进行存和取，是有性能消耗的，应用生命周期(应用从启动到关闭)内使用的变量，不应该使用此方式操作。

此种存储方式，有同步和异步之分：

- 同步的意思是，下一步的操作要等获取存储的内容之后才能进行，一般获取变量的时候，都使用此种方式。

```js
// 同步存储
uni.setStorageSync('key', 'value');

// 同步获取
let key = uni.getStorageSync('key');
// 这一句要等从本地存储中获取了key之后，才执行
let val = 1; 
```

- 异步的意思是，执行取或存的过程中，先执行后面的代码，而另一边在回调中得到存储的结果。

```js
// 异步存储
uni.setStorage({
    key: 'key',
    data: 'value',
    success: function () {
        // 存储成功的回调
    }
});
// 下面这行会比存储成功的回调先执行
let val = 1;


// 异步获取
uni.getStorage({
    key: 'key',
    success: function (res) {
        // 获取成功的回调
    }
});
// 下面这行会比获取成功的回调先执行
let val = 1; 
```


### 配置文件

配置文件，顾名思义，就是把一些变量写入到`js`文件中，再通过`export default`的形式导出，一般什么情况会使用这种方式呢，是我们要从用户尚未开始安装
APP之前，直到用户卸载APP，都需要存在的这样一些变量或者配置。比如我们可以把向后端请求的域名写到配置文件中，其他情况不适用这种存储变量的方式。

```js
// config.js，根目录的common文件夹中
export default {
	domain: 'http://www.example.com',
}
```

需要使用的时候，我们通过`import`引入即可，这种方式，缺点是每次都需要引入文件，我们无法将挂载在到Vue.prototype上。

```js
import config from "./uview-ui/libs/config/config.js"

export default {
	onLoad() {
		console.log(config.domain);
	}
}
```

我们可以在`main.js`中将从`config.js`中获取的值挂载到Vue.prototype，再在页面通过`this.xxx`形式获取。

**注意：** 这种挂载的方式，在**微信小程序**中，无法在模板中直接读取`xxx`值(结果为undefined)，只能在js中读取(HX 2.6.11，当前最新稳定版)。

```js
// main.js
import config from "./uview-ui/libs/config/config.js"

Vue.prototype.domain = config.domain;
```

```html
// demo.vue

<template>
	<!-- 微信小程序中值为undefined，其他端有效 -->
	<view>
		值为：{{this.domain}}
	</view>
</template>

<script>
	export default {
		onLoad() {
			console.log(this.domain)
		}
	}
</script>
```


### 挂载到Vue.prototype

使用挂载到Vue.prototype的方式，需要在根目录的`main.js`中进行，在页面中，我们可以使用`this.xxx`的形式获取变量，注意上面说的，在微信小程序模板
无法读取挂在的值，只能在js中使用。

具体使用，见上方的`配置文件`中的介绍



### globalData

这个方式，最早是微信小程序特有的，它无法使用`vuex`进行全局状态的管理，就造了这个方式。  

可能您会问，为什么uni-app有了`vuex`还需要有这个呢？

globalData是微信小程序的特性，uni-app对微信小程序的另一个实现，顺理成章的就有了globalData，另外的原因也是因为globalData使用简单，也有它存在的理由。
当然，globalData也不是动态响应的，也就是说，您在`A.vue`修改了globalData中的某个值`username`，在`B.vue`中对这个值的引用是无法自动更新的，`vuex`却是可以做到的。

由上，因为无法自动更新，为了做到这一点，所以我们需要在页面的`onShow`生命周期中获取globalData的值，或许您会问，为什么一定是`onShow`呢，`onLoad`不行吗？
`onLoad`获取值是没问题的，但是当我们从`A.vue`进入`B.vue`中(假设A和B页面都通过globalData引用了某个`userName`)，在`B.vue`中修改了globalData的
`userName`，当我们返回`A.vue`页面时，`onLoad`不会再次触发，但是`onShow`就如它的字面意思，是会再次触发的，所以我们需要把对globalData的获取放在`onShow`生命周期。

下面为使用globalData的示范：

1. 对globalData的定义，需要在App.vue中进行

```js
// App.vue
export default {
	globalData: {
		userName: '白居易'
	},
	// 这里需要注意的是，如果我们需要在App.vue中使用userName
	// 使用getApp().globalData.userName是不行，因为此时getApp()尚未生成
	// 1. 非V3模式，可以通过this.$scope.globalData获取
	// 2. V3模式，可以通过getApp({allowDefault: true}).globalData获取
	// 详见uni-app文档：https://uniapp.dcloud.io/collocation/frame/window?id=getapp
	onLaunch() {
		console.log(this.$scope.globalData.userName);
	}
}
```

2. 定义好了globalData，我们进入`A.vue`，并使用`userName`值

```html
<!-- A.vue -->

<template>
	<view>
		<!-- 注意，不能在模板中直接使用 getApp().globalData.userName -->
		<<琵琶行>>的作者是：{{author}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				author: ''
			}
		},
		onShow() {
			// 每次A.vue出现在屏幕上时，都会触发onShow，从而更新author值
			this.author = getApp().globalData.userName;
		}
	}
</script>
```

3. 当我们从`A.vue`进入`B.vue`时，引用并修改`userName`的值

```html
<!-- B.vue -->

<template>
	<view>
		<view>
			<!-- 注意，不能在模板中直接使用 getApp().globalData.userName -->
			<<卖炭翁>>的作者是：{{author}}
		</view>
		<view>
			<u-button @click="modifyUserName">修改userName值</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				author: ''
			}
		},
		onShow() {
			// 每次B.vue出现在屏幕上时，都会触发onShow，从而更新author值
			this.author = getApp().globalData.userName;
		},
		methods: {
			modifyUserName() {
				getApp().globalData.userName = "诗圣"；
				// 修改userName后，本页的author依然不会自动刷新，因为globalData不是响应式的
				// 我们仍然需要手动刷新本页的author值，由此可见globalData的弊端
				this.author = getApp().globalData.userName;
			}
		}
	}
</script>
```

4. 假设我们从`B.vue`返回`A.vue`，这时`A.vue`出现在屏幕上，触发了它的`onShow`生命周期，执行了`this.author = getApp().globalData.userName;`，
因而我们可以看到`A.vue`的值由`白居易`变成了在`B.vue`中修改后的`诗圣`。


### Vuex的实现方式

我们希望您使用`vuex`方式，但是也希望您对其他的实现方式有所了解，知己知彼，才能闲庭信步，了然于胸，所以把`vuex`的讲解放在最后。  

这里介绍两个写法，一是传统的写法，类似于`web`中对`vuex`的使用，这里默认大家都会，只是举例，不进行过多解读。二是uView进行一定封装优化后的写法，
新项目可以使用这个形式，它具体有简单易用的特点，当然它不是全能的，您依然可以补充自己的内容进去，它和传统的写法是不冲突的。

#### (一) 传统实现方式

1. 在uni-app目根目录新建`store`文件夹，并在其中创建`index.js`，内容如下：

为了避免和页面`data`变量混淆，可以给`state`中的变量添加一个特定的前缀，比如"vuex_"

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		vuex_token: '123654789'
	},
	mutations: {
		// payload为用户传递的值，可以是单一值或者对象
		modifyToken(state, payload) {
			state.vuex_token = payload.token;
		}
	}
})

export default store
```

2. 在uni-app目根目录的`main.js`中，引入`vuex`

```js
// main.js

import store from '@/store';

// 将store放入Vue对象创建中
const app = new Vue({
	store,
	...App
})
```

3. 在`demo.vue`页面中使用并修改`state`中的`vuex_token`变量

```html
<template>
	<view>
		<view>
			Token值为{{vuex_token}}
		</view>
		<u-button @click="btnClick">修改vuex_token</u-button>
	</view>
</template>

<script>
import {mapState, mapMutations} from 'vuex'; 
export default {
	computed: {  
		...mapState(['vuex_token'])  
	},  
	methods: {  
		...mapMutations(['modifyToken']),
		
		btnClick() {
			// 这里第二个参数可以普通变量或者对象，自定义的，根据mutations需求处理
			this.$store.commit('modifyToken', {token: 'xxxyyyzzz'})
		}
	}  
}
</script>
```


(二) uView进行一定改进后写法

上面(一)中介绍的传统写法简单，但是也很繁琐：

1. 我们需要在`vuex`中定义`state`和`mutations`
2. 我们需要在每个用到`vuex`变量的地方，都引入`mapState`，同时还要解构到`computed`中去
3. 修改`vuex`变量的时候，还需要通过`commit`提交
4. 由于`vuex`变量是保存在运行内存中的，H5中刷新浏览器`vuex`变量会消失，还需要通过其他手段实现变量的存续

我们相信大家都会上面的用法，也肯定会想，有没有更简单的做法呢，答案是肯定的，uView专门对这个问题进行了优化，解决您一般情况下的苦恼。
这个实现的方式，不是万能的，如果您需要自己的逻辑，可以融入传统的写法，是不冲突的。

说明：确保您是新项目的情况下，或者您对这个实现方法很清楚，才使用这个方法。

我们把实现的基本原理放到了另一个独立的专题，如果您感兴趣，可以点击这里查看：[uView优化Vuex的写法的基本原理](/components/vuexDetail.html)



#### **具体实现**

1. uni-app目根目录新建'/store/index.js'，并复制如下内容到其中

注意：如果某个变量需要保存到APP的下一次启动中，或者需要H5刷新之后不消失，在`state`中声明后，还需要写入到`saveStateKeys`数组中，
同时，在`state`中也需要写上`lifeData.xxx ? lifeData.xxx : yyy`的形式，保证应用启动时能把从存储中获取的值赋值给变量，见如下：

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let lifeData = {};

try{
	// 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
	lifeData = uni.getStorageSync('lifeData');
}catch(e){
	
}

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['vuex_user', 'vuex_token'];

// 保存变量到本地存储中
const saveLifeData = function(key, value){
	// 判断变量名是否在需要存储的数组中
	if(saveStateKeys.indexOf(key) != -1) {
		// 获取本地存储的lifeData对象，将变量添加到对象中
		let tmp = uni.getStorageSync('lifeData');
		// 第一次打开APP，不存在lifeData变量，故放一个{}空对象
		tmp = tmp ? tmp : {};
		tmp[key] = value;
		// 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
		uni.setStorageSync('lifeData', tmp);
	}
}
const store = new Vuex.Store({
	// 下面这些值仅为示例，使用过程中请删除
	state: {
		// 如果上面从本地获取的lifeData对象下有对应的属性，就赋值给state中对应的变量
		// 加上vuex_前缀，是防止变量名冲突，也让人一目了然
		vuex_user: lifeData.vuex_user ? lifeData.vuex_user : {name: '明月'},
		vuex_token: lifeData.vuex_token ? lifeData.vuex_token : '',
		// 如果vuex_version无需保存到本地永久存储，无需lifeData.vuex_version方式
		vuex_version: '1.0.1',
	},
	mutations: {
		$uStore(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			let nameArr = payload.name.split('.');
			let saveKey = '';
			let len = nameArr.length;
			if(nameArr.length >= 2) {
				let obj = state[nameArr[0]];
				for(let i = 1; i < len - 1; i ++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[len - 1]] = payload.value;
				saveKey = nameArr[0];
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value;
				saveKey = payload.name;
			}
			// 保存变量到本地，见顶部函数定义
			saveLifeData(saveKey, state[saveKey])
		}
	}
})

export default store
```

2. uni-app目根目录新建'/store/$u.mixin.js'，并复制如下内容到其中，由于HX某些版本的限制，我们无法帮您自动引入"$u.mixin.js"，您需要在`main.js`
中手动引入，并mixin处理。

以下为"main.js"文件：

```js
// main.js

let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);

```

以下为"$u.mixin.js"文件：

```js
// $u.mixin.js

import { mapState } from 'vuex'
import store from "@/store"

// 尝试将用户在根目录中的store/index.js的vuex的state变量，全部加载到全局变量中
let $uStoreKey = [];
try{
	$uStoreKey = store.state ? Object.keys(store.state) : [];
}catch(e){
	
}

module.exports = {
	created() {
		// 将vuex方法挂在到$u中
		// 使用方法为：如果要修改vuex的state中的user.name变量为"史诗" => this.$u.vuex('user.name', '史诗')
		// 如果要修改vuex的state的version变量为1.0.1 => this.$u.vuex('version', '1.0.1')
		this.$u.vuex = (name, value) => {
			this.$store.commit('$uStore', {
				name,value
			})
		}
	},
	computed: {
		// 将vuex的state中的所有变量，解构到全局混入的mixin中
		...mapState($uStoreKey)
	}
}
```

3. 在项目根目录的`main.js`中，引入"/store/index.js"，并放到Vue示例中

```js
// main.js

import store from '@/store';

// 将store放入Vue对象创建中
const app = new Vue({
	store,
	...App
})
```

4. 在页面使用`vuex`变量

假设我们在`vuex`的`state`中定义了`vuex_version`变量和`vuex_user`对象

```js
state: {
	vuex_version: '1.0.0',
	vuex_user: {
		name: '白居易'
	}
}
```

在`demo.vue`页面使用和修改这些变量，他们是动态全局响应的。  

这里用的修改方式为：this.$u.vuex(key, value)：  
1) 如果要修改`state`中的`vuex_version`变量为`1.0.3`，则：this.$u.vuex('vuex_version', '1.0.3')。  
2) 如果要修改`state`中的`vuex_user`对象的`name`属性为`青柠`，则：this.$u.vuex('vuex_user.name', '青柠')，与1中不同的是，对象的话，
需要用点"."分隔开。

```html
<!-- demo.vue -->

<template>
	<view>
		<view>
			版本号为：{{vuex_version}}
		</view>
		<view>
			<<琵琶行>>的作者为{{vuex_user.name}}
		</view>
		<u-button @click="modifyVuex">修改变量</u-button>
	</view>
</template>

<script>
	export default {
		methods: {
			modifyVuex() {
				this.$u.vuex('vuex_version', '1.0.1');
				// 修改对象的形式，中间用"."分隔
				this.$u.vuex('vuex_user.name', '诗圣');
			}
		}
	}
</script>
```

