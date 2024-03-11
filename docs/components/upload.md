## Upload 上传 <to-api/>

<demo-model url="/pages/componentsB/upload/upload"></demo-model>


该组件用于上传图片场景
### 平台差异说明

|App（vue）|App（nvue）|H5|小程序|
|:-:|:-:|:-:|:-:|
|√|√|√|√|

### 基础用法

- 可以通过设置`fileList`参数(数组，元素为对象)，显示预置的图片。其中元素的`url`属性为图片路径

```html
<template>
	<u-upload
		:fileList="fileList1"
		@afterRead="afterRead"
		@delete="deletePic"
		name="1"
		multiple
		:maxCount="10"
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
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
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
					const result = await this.uploadFilePromise(lists[i].url)
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
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
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
<!-- data 方法请参考 基本用法 -->
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
<!-- data 方法请参考 基本用法 -->
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
<!-- data 方法请参考 基本用法 -->
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
<!-- data 方法请参考 基本用法 -->
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
	<image src="https://cdn.uviewui.com/uview/demo/upload/positive.png" 
	mode="widthFix" style="width: 250px;height: 150px;"></image>
</u-upload>
<!-- data 方法请参考 基本用法 -->
data(){
	return{
		fileList6: [],
	}
}
```

### 此页面源代码地址

:::tip 页面源码地址
<br/>

<a href="https://github.com/umicro/uView2.0/blob/master/pages/componentsB/upload/upload.nvue" target="_blank" style="display: flex;align-items: center">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30"/>&nbsp;github
</a>

<a href="https://gitee.com/umicro/uView2.0/blob/master/pages/componentsB/upload/upload.nvue" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
   <img height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30"/>&nbsp;gitee
</a>

<br/>
:::

### API

### Props

| 参数				| 说明																				                                  | 类型					| 默认值						|  可选值					|
|:-					|:--------------------------------------------------------|:-						|:-							|:-							|
| accept			| 接受的文件类型，`file`只支持`H5`（只有微信小程序才支持把accept配置为all、media）			 | String				| image						| all &#124; media &#124; image &#124; file &#124; video|
| capture			| 图片或视频拾取模式，当accept为image类型时，设置capture为camera可以直接调起摄像头		  | String &#124; Array	| ['album', 'camera']		| -							|
| compressed		| 当accept为video时生效，是否压缩视频，默认为true										               | Boolean				| true						| false						|
| camera			| 当accept为video时生效，可选值为back或front											              | String				| back						| -							|
| maxDuration		| 当accept为video时生效，拍摄视频最长拍摄时间，单位秒						    			            | Number				| 60						| true						|
| uploadIcon		| 上传区域的图标，只能内置图标															                           | String				| camera-fill				| -							|
| uploadIconColor	| 上传区域的图标的颜色            														                    | String				| #D3D4D6   				| -							|
| useBeforeRead		| 是否启用(显示/隐藏)组件																                           | Boolean				| false						| true						|
| previewFullImage	| previewFullImage																	                       | Boolean				| true						| false						|
| maxCount			| 最大选择图片的数量																	                              | String &#124; Number	| 52						| -							|
| disabled			| 是否启用(显示/隐藏)组件																                           | Boolean				| false						| true						|
| imageMode			| 预览上传的图片时的裁剪模式，和image组件mode属性一致									                 | String				| aspectFill				| -							|
| name				| 标识符，可以在回调函数的第二项参数中获取												                        | String				| file						| -							|
| sizeType			| original 原图，compressed 压缩图，默认二者都有，H5无效								          | Array\<String\>		| ['original', 'compressed']| -							|
| multiple			| 是否开启图片多选，部分安卓机型不支持													                         | Boolean				| false						| true						|
| deletable			| 是否显示删除图片的按钮																                             | Boolean				| true						| false						|
| maxSize			| 选择单个文件的最大大小，单位B(byte)，默认不限制										                   | String &#124; Number	| Number.MAX_VALUE			| -							|
| fileList			| 显示已上传的文件列表																                              | Array					| -							| -							|
| uploadText		| 上传区域的提示文字																	                              | String				| -							| -							|
| width				| 内部预览图片区域和选择图片按钮的区域宽度，单位rpx，不能是百分比，或者`auto`				          | String &#124; Number	| 80						| -							|
| height			| 内部预览图片区域和选择图片按钮的区域高度，单位rpx，不能是百分比，或者`auto`				          | String &#124; Number	| 80						| -							|
| previewImage		| 是否在上传完成后展示预览图													                              | Boolean				| true						| false						|


### Methods

此方法如要通过ref手动调用

| 名称          | 说明            |
|-------------  |---------------- |
| afterRead | 读取后的处理函数  |
| beforeRead | 读取前的处理函数  |

### Slot

slot中您可以内置任何您所需要的样式。

|名称|说明|
|:-|:-|
| -(default) | 自定义上传样式 |



### Events

回调参数中的`event`参数，为当前删除元素的所有信息，`index`为当前操作的图片的索引，`name`为删除名称，`file`包含删除的url信息

|事件名|说明|回调参数|
|:-|:-|:-|:-|
| afterRead  | 读取后的处理函数 | (file, lists, name)，错误信息 | 
| beforeRead  | 读取前的处理函数 | (file, lists, name)，错误信息 | 
| oversize | 图片大小超出最大允许大小 | (file, lists, name), name为通过`props`传递的`index`参数 |
| clickPreview | 全屏预览图片时触发 | (url, lists, name)，url为当前选中的图片地址，index为通过`props`传递的`index`参数 |
| delete | 删除图片 | (event), 回调event中包含`index，file，name` |
<!-- 
| on-preview | 全屏预览图片时触发 | (url, lists, name)，url为当前选中的图片地址，index为通过`props`传递的`index`参数 |
| on-remove | 移除图片时触发 | (index, lists, name)，name为通过`props`传递的`index`参数 |
| on-success | 图片上传成功时触发 | (data, index, lists, name)，data为服务器返回的数据，name为通过`props`传递的`index`参数 |
| on-change | 图片上传后，无论成功或者失败都会触发 | (res, index, lists, name)，res为服务器返回的信息，name为通过`props`传递的`index`参数 |
| on-error | 图片上传失败时触发 | (res, index, lists, name)，res为服务器返回的信息，name为通过`props`传递的`index`参数 |
| on-progress | 图片上传过程中的进度变化过程触发 | (res, index, lists, name)，res为服务器返回的信息，具体参数请打印查看，name为通过`props`传递的`index`参数 |
| on-uploaded | 所有图片上传完毕触发 | (lists, name)，可以通过此事件，将lists参数获取，提交给后端使用，name为通过`props`传递的`index`参数 |
| on-choose-complete | 每次选择图片后触发，只是让外部可以得知每次选择后，内部的文件列表 | (lists, name)，内部当前的文件列表，name为通过`props`传递的`index`参数 |
| on-list-change | 当内部文件列表被加入文件、移除文件，或手动调用`clear`方法时触发 | (lists, name)，内部文件变化之后的列表，name为通过`props`传递的`index`参数 |
| on-choose-fail  | 选择文件出错时触发，比如选择文件时取消了操作，只在微信和APP有效 | (error)，错误信息 | -->

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
