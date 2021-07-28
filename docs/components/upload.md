## Upload 上传 <to-api/>

<demo-model url="/pages/componentsB/upload/index"></demo-model>


该组件用于上传图片场景
<!-- https://api.aeshanvip.com/upload -->
### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### 基础用法

- 可以通过设置`fileList`参数(数组，元素为对象)，显示预置的图片。其中元素的`url`属性为图片路径
- 设置`action`参数为后端服务器地址，注意H5在浏览器可能会有跨域限制，让后端允许域即可

```html
<template>
	<u-upload
		:fileList="fileList1"
		@afterRead="afterRead"
		@delete="deletePic"
		name="1"
		multiple
		:maxCount="10"
		action='链接地址'
	></u-upload>
</template>

<script>
	export default {
		data() {
			return {
				fileList1: [],
			}
		},
		methods:{
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				console.log(event)
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].thumb)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							console.log(res)
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						},
						fail:(err)=>{
							console.log(err)
						}
					});
				})
			},
		}

	}
</script>
```

### 上传视频

- 通过设置`accept='video'`属性，将上传改为视频上传。
```html
<u-upload
	:fileList="fileList2"
	@afterRead="afterRead"
	@delete="deletePic"
	name="2"
	multiple
	:maxCount="10"
	accept="video"
></u-upload>
<!-- data -->
data(){
	return{
		fileList2: [],
	}
}
```

### 文件预览

- 通过设置`:previewFullImage="true"'`属性，达到文件预览的目的。
```html
<u-upload
	:fileList="fileList3"
	@afterRead="afterRead"
	@delete="deletePic"
	name="3"
	multiple
	:maxCount="10"
	:previewFullImage="true"
></u-upload>
<!-- data -->
data(){
	return{
		fileList3: [{
			url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
		}],
	}
}
```

### 隐藏上传按钮

- 上传数量等于`maxCount`所规定的数据时，隐藏上传按钮。
```html
<u-upload
	:fileList="fileList4"
	@afterRead="afterRead"
	@delete="deletePic"
	name="4"
	multiple
	:maxCount="2"
></u-upload>
<!-- data -->
data(){
	return{
		fileList4: [{
				url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
			},
			{
				url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
			}
		],
	}
}
```

### 限制上传数量

- 同上，规定`maxCount`的数据时。
```html
<u-upload
	:fileList="fileList5"
	@afterRead="afterRead"
	@delete="deletePic"
	name="5"
	multiple
	:maxCount="3"
></u-upload>
<!-- data -->
data(){
	return{
		fileList5: [],
	}
}
```

### 自定义上传样式

- 添加`image`以自定义上传样式，达到身份证，银行卡等不同场景需求。
```html
<u-upload
	:fileList="fileList6"
	@afterRead="afterRead"
	@delete="deletePic"
	name="6"
	multiple
	:maxCount="1"
	width="250"
	height="150"
>
	<image src="https://cdn.uviewui.com/uview/demo/upload/positive.png" mode="widthFix" style="width: 250px;height: 150px;"></image>
</u-upload>
<!-- data -->
data(){
	return{
		fileList6: [],
	}
}
```


### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|-------------  |---------------- |---------------|------------------ |-------- |
| action | 服务器上传地址  | String | - | - |
| max-count | 最大选择图片的数量 | String \| Number | 99 | - |
| width | 图片预览区域和添加图片按钮的宽度，单位rpx，不能是百分比，或者`auto` | String \| Number | 200 | - |
| height <Badge text="1.6.4" /> | 图片预览区域和添加图片按钮的高度，单位rpx，不能是百分比，或者`auto` | String \| Number | 200 | - |
| custom-btn | 如果需要自定义选择图片的按钮，设置为`true` | Boolean | false | true |
| show-progress | 是否显示进度条 | Boolean  | true | false |
| disabled | 是否启用(显示/隐藏)组件 | Boolean  | false | true |
| image-mode | 预览图片等显示模式，可选值为uni的image的`mode`属性值 | String  | aspectFill | - |
| header | 上传携带的头信息，对象形式 | Object | {} | - |
| form-data | 上传额外携带的参数 | Object | {} | - |
| name | 上传文件的字段名，供后端获取使用 | String  | file | - |
| size-type | original 原图，compressed 压缩图，默认二者都有，H5无效 | Array\<String\>  | ['original', 'compressed'] | - |
| source-type | 选择图片的来源，album-从相册选图，camera-使用相机，默认二者都有 | Array\<String\>  | ['album', 'camera'] | - |
| preview-full-image | 是否可以通过`uni.previewImage`预览已选择的图片 | Boolean  | true | false |
| multiple | 是否开启图片多选，部分安卓机型不支持  | Boolean  | true | false |
| deletable | 是否显示删除图片的按钮 | Boolean  | true | false |
| max-size | 选择单个文件的最大大小，单位B(byte)，默认不限制 | String \| Number  | Number.MAX_VALUE | - |
| fileList | 默认显示的图片列表，数组元素为对象，必须提供`url`属性 | Array\<Object\>  | - | - |
| upload-text | 选择图片按钮的提示文字 | String  | 选择图片 | - |
| auto-upload | 选择完图片是否自动上传，见上方说明 | Boolean  | true | false |
| show-tips | 特殊情况下是否自动提示toast，见上方说明 | Boolean  | true | false |
| show-upload-list | 是否显示组件内部的图片预览 | Boolean  | true | false |
| del-icon | 右上角删除图标名称，只能为uView内置图标 | String  | close | - |
| del-bg-color | 右上角关闭按钮的背景颜色 | String  | #fa3534 | - |
| del-color | 右上角关闭按钮图标的颜色 | String  | #ffffff | - |
| to-json <Badge text="1.3.7" /> | 如果上传后服务端返回的值为`json`字符串的话，是否自动转为`json` | Boolean | true  | false |
| before-upload <Badge text="1.3.7" /> | 每个文件上传前触发的钩子回调函数，见上方说明，注意不要加括号 | Function | - | - |
| limitType <Badge text="1.5.5" /> | 允许的图片后缀 | Array | ['png', 'jpg', 'jpeg', 'webp', 'gif'] | - |
| index  <Badge text="1.6.1" /> | 在各个回调事件中的最后一个参数返回，用于区别是哪一个组件的事件 | String \| Number  | - | - |


### Methods

此方法如要通过ref手动调用

| 名称          | 说明            |
|-------------  |---------------- |
| upload | 调用此方法，手动上传图片  |
| clear | 调用此方法，清空内部文件列表  |
| reUpload | 调用此方法，重新上传内部上传失败或者尚未上传的图片  |
| remove(index) | 手动移除列表的某一个图片，`index`为`lists`数组的索引  |


### Slot

|名称|说明|
|:-|:-|
| addBtn | 自定义的选择图片按钮 |



### Events

回调参数中的`lists`参数，为目前组件内的所有图片数组，`index`为当前操作的图片的索引，`name`为通过`props`传递的`index`参数(1.6.1加入)

|事件名|说明|回调参数|
|:-|:-|:-|:-|
| on-oversize | 图片大小超出最大允许大小 | (file, lists, name), name为通过`props`传递的`index`参数 |
| on-preview | 全屏预览图片时触发 | (url, lists, name)，url为当前选中的图片地址，index为通过`props`传递的`index`参数 |
| on-remove | 移除图片时触发 | (index, lists, name)，name为通过`props`传递的`index`参数 |
| on-success | 图片上传成功时触发 | (data, index, lists, name)，data为服务器返回的数据，name为通过`props`传递的`index`参数 |
| on-change | 图片上传后，无论成功或者失败都会触发 | (res, index, lists, name)，res为服务器返回的信息，name为通过`props`传递的`index`参数 |
| on-error | 图片上传失败时触发 | (res, index, lists, name)，res为服务器返回的信息，name为通过`props`传递的`index`参数 |
| on-progress | 图片上传过程中的进度变化过程触发 | (res, index, lists, name)，res为服务器返回的信息，具体参数请打印查看，name为通过`props`传递的`index`参数 |
| on-uploaded | 所有图片上传完毕触发 | (lists, name)，可以通过此事件，将lists参数获取，提交给后端使用，name为通过`props`传递的`index`参数 |
| on-choose-complete | 每次选择图片后触发，只是让外部可以得知每次选择后，内部的文件列表 | (lists, name)，内部当前的文件列表，name为通过`props`传递的`index`参数 |
| on-list-change | 当内部文件列表被加入文件、移除文件，或手动调用`clear`方法时触发 | (lists, name)，内部文件变化之后的列表，name为通过`props`传递的`index`参数 |
| on-choose-fail <Badge text="1.7.0" /> | 选择文件出错时触发，比如选择文件时取消了操作，只在微信和APP有效 | (error)，错误信息 |


<style scoped>
h3[id=props] + table thead tr th:nth-child(2){
	width: 40%;
}

h3[id=events] + p + table thead tr th:nth-child(3){
	width: 45%;
}

h3[id=methods] + p + table thead tr th:nth-child(2){
	width: 50%;
}
</style>