## ReadMore 展开阅读更多 <to-api/>

<demo-model url="/pages/componentsC/readMore/readMore"></demo-model>

该组件一般用于内容较长，预先收起一部分，点击展开全部内容的场景。

### 平台差异说明

|App|H5	|微信小程序	|支付宝小程序		|百度小程序	|头条小程序	|QQ小程序	|
|:-:|:-:|:-:		|:-:			|:-:		|:-:		|:-:		|
|√	|√	|√			|√				|√			|√			|√			|

### 基本使用

通过slot传入正文内容

```html
<template>
	<u-read-more>
		<rich-text :nodes="content"></rich-text>
	</u-read-more>
</template>

<script> 
	export default {
		data() {
			return {
				// 这是一段很长的文字，也可能包含有HTML标签等内容
				content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
				苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
				无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
			}
		}
	}
</script>
```

### 兼容性

由于一些微信小程序平台的渲染能力的问题，在解析[u-parse](/components/parse.html)组件内容时会比较耗时，导致`read-more`组件内部无法准确得知
内容的高度，而出现计算错误，这种情况下，我们需要借助`u-parse`组件的`@load`(内容多为文字时)或者`@ready`(内容多为图片时，可能会有较大延时)事件，通过`ref`
重新初始化`read-more`组件的高度，如下：

```html
<template>
	<u-read-more ref="uReadMore">
		<u-parse :content="content" @load="load"></u-parse>
	</u-read-more>
</template>

<script> 
	export default {
		data() {
			return {
				// 这是一段很长的文字，也可能包含有HTML标签等内容
				content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
				苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
				无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
			}
		},
		methods: {
            load() {
                this.$refs.uReadMore.init();
            }
		}
	}
</script>
```


### 展开收起

配置`toggle`为`true`，展开后可以收起，否则展开后没有收起的按钮

```html
<u-read-more :toggle="true">
    <rich-text :nodes="content"></rich-text>
</u-read-more>
```

### 配置展开高度

可以配置一个高度，单位rpx，只有slot传入的内容高度超出这个值，才会出现"展开阅读全文"字样的按钮

```html
<u-read-more showHeight="600">
    <rich-text :nodes="content"></rich-text>
</u-read-more>
```

### 异步初始化

有时候需要展示的内容是从后端获取的，组件内部的`mounted`生命周期初始化时，请求尚未回来，会导致
内容的高度在初始化有误差。可以在请求完毕渲染后(指的是this.$nextTick)，通过`ref`调用组件的`init`方法，重新初始化

```html
<template>
	<u-read-more ref="uReadMore">
        <rich-text :nodes="content"></rich-text>
	</u-read-more>
</template>

<script> 
	export default {
		data() {
			return {
				content: '',
			}
		},
		onLoad() {
			// 模拟后端请求
			setTimeout(() => {
				this.content = `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
				苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
				无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
				// 请注意上方已在组件中添加ref-uReadMore
				this.$nextTick(() => {
					this.$refs.uReadMore.init();
				})
			}, 2000);
		}
	}
</script>
```

### 自定义样式

此组件上边部分有一个白色虚化的阴影，用以将点击区域与文字内容进行融合，如果您不想要这个阴影，可以调整`shadowStyle`对象，此对象内部如下：

```json
{
    // #ifndef APP-NVUE
    backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
    // #endif
    // #ifdef APP-NVUE
    // nvue上不支持设置复杂的backgroundImage属性
    backgroundImage: "linear-gradient(to top, #fff, rgba(255, 255, 255, 0.5))",
    // #endif
    paddingTop: "100px",
    marginTop: "-100px",
}
```

如果您不想要阴影，将`backgroundImage`设置为`none`即可，关于`paddingTop`和`marginTop`自行调整至合适数值即可。

```html
<template>
	<u-read-more ref="uReadMore" :shadowStyle="shadowStyle" :showHeight="200">
		<rich-text :nodes="content"></rich-text>
	</u-read-more>
</template>

<script> 
	export default {
		data() {
			return {
				content: '',
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "0",
					marginTop: "20rpx"
				}
			}
		}
	}
</script>
```

### 演示项目完整代码
:::demo 演示项目完整代码
```html
<template>
	<view class="u-page">
		<u-read-more
		    ref="uReadMore"
		    :showHeight="showHeight"
			toggle
			@open="open"
			@close="close"
		>
			<u-parse
			    :content="content"
			    @load="load"
				:tag-style="tagStyle"
			></u-parse>
		</u-read-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: `<p>浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月。
					忽闻水上琵琶声，主人忘归客不发。寻声暗问弹者谁，琵琶声停欲语迟。移船相近邀相见，添酒回灯重开宴。千呼万唤始出来，犹抱琵琶半遮面。转轴拨弦三两声，未成曲调先有情。弦弦掩抑声声思，似诉平生不得志。低眉信手续续弹，说尽心中无限事。轻拢慢捻抹复挑，初为《霓裳》后《六幺》。大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。间关莺语花底滑，幽咽泉流冰下难。冰泉冷涩弦凝绝，凝绝不通声暂歇。别有幽愁暗恨生，此时无声胜有声。银瓶乍破水浆迸，铁骑突出刀枪鸣。曲终收拨当心画，四弦一声如裂帛。东船西舫悄无言，唯见江心秋月白。
					沉吟放拨插弦中，整顿衣裳起敛容。自言本是京城女，家在虾蟆陵下住。十三学得琵琶成，名属教坊第一部。曲罢曾教善才服，妆成每被秋娘妒。五陵年少争缠头，一曲红绡不知数。钿头银篦击节碎，血色罗裙翻酒污。今年欢笑复明年，秋月春风等闲度。弟走从军阿姨死，暮去朝来颜色故。门前冷落鞍马稀，老大嫁作商人妇。商人重利轻别离，前月浮梁买茶去。去来江口守空船，绕船月明江水寒。夜深忽梦少年事，梦啼妆泪红阑干。
					我闻琵琶已叹息，又闻此语重唧唧。同是天涯沦落人，相逢何必曾相识！我从去年辞帝京，谪居卧病浔阳城。浔阳地僻无音乐，终岁不闻丝竹声。住近湓江地低湿，黄芦苦竹绕宅生。其间旦暮闻何物？杜鹃啼血猿哀鸣。春江花朝秋月夜，往往取酒还独倾。岂无山歌与村笛？呕哑嘲哳难为听。今夜闻君琵琶语，如听仙乐耳暂明。莫辞更坐弹一曲，为君翻作《琵琶行》。感我此言良久立，却坐促弦弦转急。凄凄不似向前声，满座重闻皆掩泣。座中泣下谁最多？江州司马青衫湿。</p>`,
				showHeight: 200,
				tagStyle: {
					p: 'color: #606266; line-height: 24px;'
				}
			}
		},
		methods: {
			load() {
				this.$refs.uReadMore.init()
			},
			open(name) {
				console.log('open', name);
			},
			close(name) {
				console.log('close', name);
			}
		},
	}
</script>

<style lang="scss">

</style>

```
:::

### API

### Props

| 参数			| 说明										| 类型					| 默认值			|  可选值	|
|:-				|:-											|:-						|:-				|:-			|
| showHeight	| 内容超出此高度才会显示展开全文按钮，单位rpx	| String &#124; Number	| 400			| -			|
| toggle		| 展开后是否显示收起按钮						| Boolean				| false			| true		|
| closeText		| 关闭时的提示文字							| String				| 展开阅读全文	| -			|
| openText		| 展开时的提示文字							| String				| 收起			| -			|
| color			| 提示文字的颜色								| String				| #2979ff		| -			|
| fontSize		| 提示文字的大小，默认单位px					| String &#124; Number	| 14			| -			|
| shadowStyle	| 对阴影的自定义处理，对象形式					| Object				| 见上方说明		| -			|
| textIndent	| 段落首行缩进的字符个数						| String				| 2em			| -			|
| name			| 用于在`open`和`close`事件中当作回调参数返回	| String &#124; Number	| -				| -			|

### Methods

此方法如要通过ref手动调用

| 名称	| 说明																							|
|:-		|:-																								|
| init	| 重新初始化组件内部高度计算过程，如果内嵌[u-parse](/components/parse.html)组件时可能需要用到			|

### Events

| 事件名| 说明				| 回调参数							|
| :-	| :-				| :-								|
| open	| 内容被展开时触发	| name - props中传入的`name`参数值	|
| close	| 内容被收起时触发	| name - props中传入的`name`参数值	|


<style scoped>
h3[id=events] + table thead tr th:nth-child(2){
	width: 33.3%;
}

h3[id=methods] + p + table thead tr th:nth-child(2){
	width: 70%;
}
</style>
