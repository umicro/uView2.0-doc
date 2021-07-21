## 一、准备  
#### 1.1. 区别实例对象和函数对象  
#### 1.2 两种类型的回调函数  

- 1.2.1 同步回调  
- 1.2.2 异步回调  


#### 1.3 JS的Error错误处理  
- 1.3.1 错误的类型  
- 1.3.2 错误处理  
- 1.3.3 error对象的结构  

	
## 二、Promise的理解与使用  
#### 2.1 Promise是什么  
- 2.1.1 理解promise  
- 2.1.2 promise的状态改变  
- 2.1.3 promise执行的流程  
- 2.1.4 promise的使用  

#### 2.2 为什么要用Promsie  
- 2.2.1 指定回调函数的方式更加灵活  
- 2.2.2 支持链式调用, 与回调地狱的对比  

#### 2.3 如何使用 Promise?  
- 2.3.1 Promise的API  
- 2.3.2 Promise 的几个关键问题  
	- 2.3.2.1 如何改变promise的状态?  
	- 2.3.2.1 一个promise指定多个成功/失败回调函数, 都会调用吗?  
	- 2.3.2.1 改变promise状态和指定回调函数谁先谁后?  
	- 2.3.2.1 promise.then()返回的新promise的结果状态由什么决定?  
	- 2.3.2.1 promise 如何串连多个操作任务?  
	- 2.3.2.1 promise异常传透的原理?  
	- 2.3.2.1 如何中断promise链?  

## 三、async与await  
- 3.1 async函数  
- 3.2 await 表达式  
- 3.3 使用注意事项  

## 四、使用Promise封装uni-app的节点查询  
- 4.1 原始uni-app的uni.createSelectorQuery()详解  
- 4.2 使用Promise和async/await封装uni.createSelectorQuery进行节点查询  

```js
getRect(selector) {
	return new Promise((resolve, reject) => {
		const query = uni.createSelectorQuery().in(this);
		query.select(selector).boundingClientRect(res => {
			if(res) {
				resolve(res);
			} else {
				reject('查询不到节点信息');
			}
		}).exec();
	})
}
```

## 五、使用Promise封装uni-app的请求  

- 5.1 详解uni.request()用法  
- 5.2 使用Promise和和async/await封装对请求进行封装  
- 5.3 对比封装前后的区别  

```js
export default {
	async onReady() {
		this.request('https://api.youzixy.com/ebapi/store_api/hot_search').then(res => {
			console.log(res);
		})
	},
	methods: {
		request(url, data, header) {
			return new Promise((resolve, reject) => {
				uni.request({
					url: url, 
					data: data ? data : {},
					header: header ? header : {},
					complete: (res) => {
						if(res.statusCode == 200) {
							resolve(res.data);
						} else {
							reject(res);
						}
					}
				});
			})
		}
	}
}
```

## 六、4道面试题详解(JS异步之宏队列与微队列)

#### 面试题一
```js
setTimeout(() => {
	console.log(1)
}, 0)
Promise.resolve().then(() => {
	console.log(2)
})
Promise.resolve().then(() => {
	console.log(4)
})
console.log(3)
```

#### 面试题二
```js
setTimeout(() => {
	console.log(1)
}, 0)
new Promise((resolve) => {
	console.log(2)
	resolve()
}).then(() => {
	console.log(3)
}).then(() => {
	console.log(4)
})
console.log(5)
```


#### 面试题三
```js
const first = () => (new Promise((resolve, reject) => {
	console.log(3)
	let p = new Promise((resolve, reject) => {
		console.log(7)
		setTimeout(() => {
			console.log(5)
			resolve(6)
		}, 0)
		resolve(1)
	})
	resolve(2)
	p.then((arg) => {
		console.log(arg)
	})

}))

first().then((arg) => {
	console.log(arg)
})
console.log(4)
```


#### 面试题四
```js
setTimeout(() => {
	console.log("0")
}, 0)
new Promise((resolve, reject) => {
	console.log("1")
	resolve()
}).then(() => {
	console.log("2")
	new Promise((resolve, reject) => {
		console.log("3")
		resolve()
	}).then(() => {
		console.log("4")
	}).then(() => {
		console.log("5")
	})
}).then(() => {
	console.log("6")
})

new Promise((resolve, reject) => {
	console.log("7")
	resolve()
}).then(() => {
	console.log("8")
})
```
 


