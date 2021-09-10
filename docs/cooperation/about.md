### 交流反馈

uView为采用[MIT](https://baike.baidu.com/item/MIT/10772952)许可证的开源项目，使用完全免费。欢迎加QQ群交流反馈，一起学习，共同进步。

<qq-group></qq-group>


### 作者

作者网名"亡灵叙曲"，真名易瑞文，广西人，目前在深圳。  
2016年毕业于[桂林电子科技大学](https://baike.baidu.com/item/%E6%A1%82%E6%9E%97%E7%94%B5%E5%AD%90%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6/750205)，做过安卓，Java，python，php，前端，服务器运维等相关工作。  
大学成立过创业公司，后来在一家上市公司担任技术负责人。  
目前工作为uView的研发、迭代和推广。

<br>

### 研发组

uView的理念是"挣脱束缚，向往自由"，目标是做uni-app生态的标杆，推动uni-app生态和互联网的发展。  
uView免费开源，无需授权，欢迎商用。uView的发展也得到各个小伙伴的支持，我们一起为构建一个更加优秀的UI框架而努力。

以下为部分对uView有特出贡献的研发组成员，排名不分先后：

<team-member-item v-for="(item, index) in memberList" :key="index" :list="item"></team-member-item>

<br>

### 文档

uView的文档，力求不留死角，把所有可能需要注意的地方，都详细列出。uView的文档经得起推敲，受得住考验。  
在这背后： 既有uview研发小伙伴的不辞辛苦，通宵达旦，也有全国各地的uview爱好者的不倦协调。
在这个8月，我们顶着万众期待的压力艰难的敲出了文档的一字一句,幸好，它虽老骥伏枥，却志在千里，使得uView成为一份良心的文档。

::: tip 感谢
截止uview2.0的发布：我们得到了非常大力的支持。感谢所有 `uView UI2.0内测群` 小伙伴们的付出，感谢所有uviewui使用者对uview提出的每一个宝贵意见帮助我们更加完善，更加符合用户需求。
:::

<br>

### 展望未来

uView的目标是做成uniapp生态的标杆，自由且免费开源。  
对此，uView有清晰且明确的计划安排，uView将会全面兼容nvue，适配暗黑模式，整合unicloud，加入更多组件和模板等。   
但是，一个人的力量是不够的：

1. **为了开源，理想和自由**，您可以加入uView的研发工作组，我们一起并肩奋战。  
2. 如果您是做UI开发的同学，uView同样欢迎，因为uView需要内外兼修。  
3. 如果您是个积极活跃的人，那么也欢迎您加入uView的QQ群成为管理员。

所有加入uView贡献的同学，都会在官网声明，并且有自己的个人专属页。 

请加作者QQ(注明加入uView开发组)：1416956117

<br>

### 捐赠uView的研发
		
<donation></donation>

<br>

### 赞助商

uView拥有众多用户，且文档详尽，经得起推敲，受得住考验，官方网站每天有数万IP访问量，如果您认为这些有助于您公司的业务推广，可以成为uView的赞助商，
我们会在适当的位置展示您的推广内容。  

赞助请联系QQ(注明赞助)：1416956117



<script>
	export default {
		data() {
			return {
				memberList: [
					{
						avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1363931801&spec=640&img_type=jpg',
						name: '小恐龙',
						job: '前端开发',
						addr: '深圳',
						duty: '负责uView核心组件研发，各端兼容处理，社区日常管理等工作。',
						intro: `丰富的移动端H5，微信公众号，小程序开发经验，擅长前端优化，有自己独自摸索和实践的优化方案，擅长思考总结，\
								熟悉uniapp多端开发，适配，兼容处理。为人亲切，易相处，致力于互联网开源，在互联网拥有一席之地。`
					},
					{
						avatar: 'https://cdn.uviewui.com/uview/team/9151E1673BCE.jpg',
						name: '北桥',
						job: '全栈开发',
						addr: '在读学生',
						csdn: 'https://me.csdn.net/qq_33162604',
						duty: '负责uView核心组件研发，维护与升级，社区管理、宣传等工作',
						intro: '多个项目开发经验，技术栈：原生安卓，java，前端，服务器等'
					},
					{
						avatar: 'https://cdn.uviewui.com/uview/team/546BC1A58D6EA.jpg',
						name: 'TtTao',
						job: '全栈开发',
						addr: '贵阳创业',
						duty: '负责uView js工具库开发，测试、兼容处理、文档管理、视频教程等相关工作',
						intro: '项目经验丰富，喜欢挑战新兴技术，对微服务、虚拟化容器有自己独到的见解，主要技术栈：Golang、Vue'
					},
					{
						avatar: 'https://cdn.uviewui.com/uview/team/BB145F91D8DA6129897D479C71F63490.jpg',
						name: '陈慧敏',
						job: '前端开发',
						addr: '深圳',
						duty: '负责uView模板维护开发，收集，样式调整，社区管理、宣传等工作',
						intro: '擅长移动端开发，以及对前端交互和性能的优化。善于处理不同端和不同机型的样式适配。有多个线上成熟的实战项目'
					},
					{
						avatar: 'https://cdn.uviewui.com/uview/team/15915681648132.jpg',
						name: '黄河浪',
						job: '前端开发',
						addr: '长沙',
						csdn: 'https://blog.csdn.net/u013350495',
						link: 'http://www.jq22.com/mem395541',
						uniapp: 'https://ext.dcloud.net.cn/publisher?id=110853',
						duty: '负责uView模板开发，社区管理等工作',
						intro: '脾气不好的暴躁老哥。丰富的前端开发经验，对代码有洁癖，CSS能力出众'
					},
					{
						avatar: 'https://cdn.uviewui.com/uview/team/19641856415541.jpg',
						name: 'Pocky',
						job: '前端开发',
						link: 'https://www.yuque.com/pocky',
						duty: '负责uView组件和JS工具库 开发、测试、维护，社区维护等工作',
						intro: '好的代码像粥一样，都是用时间熬出来的。技术栈：前端'
					},
					{
						avatar: 'https://cdn.uviewui.com/uview/team/A6A2AD122A73AB60F0.png',
						name: '刘娇娇',
						job: '前端开发',
						addr: '深圳',
						duty: '负责uView核心组件库研发，参与模板改进，社区管理等工作',
						intro: '热爱编程技术，熟悉前端、Java，数据库等，有多个大型项目实践经验。对自己要求高，不断学习和吸收新技术，进步永无止境'
					},
					{
						avatar: 'https://cdn.uviewui.com/uview/team/20200627204543.png',
						name: '小谢童鞋',
						job: '全栈开发',
						addr: '武汉创业',
						github: 'https://gitee.com/chuxinone',
						duty: '负责uView核心组件库研发，测试改进，社区管理等工作',
						intro: '喜欢挑战新型技术，独立完成过多个大型项目，技术栈：混合app,php,vue等'
					},
					{
						avatar: 'https://cdn.uviewui.com/uview/team/DE94E17F7A1D5F3B1098520C7E51CEB6.jpg',
						name: '陈熙鹏',
						job: '全栈开发',
						addr: '长沙',
						duty: '负责uView组件维护与升级，社区管理、等工作',
						intro: '独立开发过多个项目，学习能力极强，精通Vue，uni-app，Java，Linux，SQL'
					},
					{
						avatar: '',
						name: '莫成尘',
						job: '前端兼产品',
						addr: '北京',
						csdn: 'https://blog.csdn.net/weixin_47821281?spm=1001.2101.3001.5343',
						duty: '负责uView文档维护编写，社区管理、等工作',
						intro: '一名高级前端转型的产品经理，技术栈：uniapp,vue,react，Axure，墨刀等'
					}
				]
			}
		}
	}
</script>


<style scoped>
.page {
	width: 500px;
}

.col-box {
	text-align: center;
}
</style>

