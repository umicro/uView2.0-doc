### 对象操作


<br>

:::tip 注意
由于JS对象包括的范围非常广，加上ES6又有众多的新特性，很难、也没必要做到囊括所有的类型和情况，这里说的"对象"，指的是普通的对象，不包括修改对象原型链，
或者为"Function"，"Promise"等的情况，请留意。
:::

<br>

### 对象深度克隆

场景：  

- 我们平时可能会遇到需要通过`console.log`打印一个对象，至执行打印的时刻，此对象为空，后面的逻辑中对此对象进行了修改赋值，但是我们在控制台直接看到的打印结果
却是修改后的值，这让人匪夷所思，虽然我们可以通过`console.log(JSON.parse(JSON.stringify(object)))`的形式处理，但是需要写这长长的一串，难免让人心生抵触。

- 当我们将一个对象(变量A)赋值给另一个变量(变量B)时，修改变量B，因为对象引用的特性，导致A也同时被修改，所以有时候我们需要将A克隆给B，这样修改B的时候，就不会
导致A也被修改。

#### deepClone(object = {})

- `object` <Object\> 需要被克隆的对象

```js
let a = {
	name: 'mary'
};

// 直接赋值，为对象引用，即修改b等于修改a，因为a和b为同一个值
let b = a;

b.name = 'juli';
console.log(b); // 结果为 {name: 'juli'}
console.log(a); // 结果为 {name: 'juli'}


// 深度克隆
let b = this.$u.deepClone(a);

b.name = 'juli';
console.log(b); // 结果为 {name: 'juli'}
console.log(a); // 结果为 {name: 'mary'}
```


### 对象深度合并

在ES6中，我们可以很方便的使用`Object.assign`进行对象合并，但这只是浅层的合并，如果对象的属性为数组或者对象的时候，会导致属性内部的值丢失。
  
**注意：** 此处合并不同于`Object.assign`，因为`Object.assign(a, b)`会修改`a`的值为最终的结果(这往往不是我们所期望的)，但是`deepMerge(a, b)`并不会修改`a`的值。


#### deepMerge(target = {}, source = {})

- `target` <Object\> 目标对象
- `source` <Object\> 源对象

`Object.assign`浅合并示例：

```js
let a = {
	info: {
		name: 'mary'
	}
}

let b = {
	info: {
		age: '22'
	}
}

// 使用Object.assign进行合并，注意此时a被修改了
let c = Object.assign(a, b);

// 我们期望的结果为：
c = {
	info: {
		name: 'mary',
		age: '22'
	}
}

// 事实上，我们得到的结果却为：
c = {
	info: {
		age: '22'
	}
}
```

深度合并示例：

```js
let a = {
	info: {
		name: 'mary'
	}
}

let b = {
	info: {
		age: '22'
	}
}

let c = this.$u.deepMerge(a, b);

// c为我们期望的结果
c = {
	info: {
		age: '22',
		name: 'mary'
	}
}
```


### 链式读取对象属性

读取属性时，我们需要从一个`对象`中进行操作，否则就会引起报错，因此uView提供了一个链式属性的读取方式。  
当然，我们也可以使用`可选链操作符`的形式去获取，但是此方式在`Vue2`的`template`中不适用。

#### getProperty(object, key)

```js
// 假设有如下一个对象
const object = {
	userInfo: {
		address: {
			province: '深圳'
		}
	}
}

// 可以通过如下写法获取province属性
uni.$u.getProperty(object, 'userInfo.address.province')

// 可选链操作符形式
console.log(object?.userInfo?.address?.province)
```


### 链式设置对象属性

设置属性时，我们需要从一个`对象`中进行操作，否则就会引起报错，因此uView提供了一个链式属性的设置方式。

```js
// 设置一个空对象
const object = {}

// 链式设置属性
uni.$u.setProperty(object, 'userInfo.address.province')

// object将会变成如下对象：
{
	userInfo: {
		address: {
			province: '深圳'
		}
	}
}
```