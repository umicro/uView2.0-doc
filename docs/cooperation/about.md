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

以下为部分对uView2.0有特出贡献的研发组成员，排名不分先后：

<team-member-item v-for="(item, index) in memberList" :key="index" :list="item"></team-member-item>

### 活跃开发者

<activeDeveloper :activeDeveloperList="activeDeveloperList"></activeDeveloper>

<br>

### Github贡献名单

<br>
<github-contribution-list repo="uView2.0"></github-contribution-list>


### 文档

uView的文档，力求不留死角，把所有可能需要注意的地方，都详细列出。uView的文档经得起推敲，受得住考验。  
在这背后： 既有uview研发小伙伴的不辞辛苦，通宵达旦，也有全国各地的uview爱好者的不倦协调。 在这个8月，我们顶着万众期待的压力艰难的敲出了文档的一字一句,幸好，它虽老骥伏枥，却志在千里，使得uView成为一份良心的文档。

::: tip 鸣谢
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

uView拥有众多用户，且文档详尽，经得起推敲，受得住考验，官方网站每天有数万IP访问量，如果您认为这些有助于您公司的业务推广，可以成为uView的赞助商， 我们会在适当的位置展示您的推广内容。

赞助请联系QQ(注明赞助)：1416956117



<script>
	export default {
		data() {
			return {
				memberList: [
					{
						avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=604322871&spec=640&img_type=jpg',
						name: '北桥',
						job: '全栈开发',
						csdn: 'https://me.csdn.net/qq_33162604',
						duty: '负责uView核心组件研发，维护与升级，社区管理、宣传等工作',
						intro: '多个项目开发经验，技术栈：原生安卓，java，前端，服务器等',
                        github: 'https://github.com/BeiQiaoT',
                        gitee: 'https://gitee.com/beiqiao'
					},
					{
						avatar: 'https://cdn.uviewui.com/uview/team/546BC1A58D6EA.jpg',
						name: 'TtTao',
						job: '全栈开发',
						addr: '贵阳创业',
						duty: '负责uView核心组件、API工具开发，测试、兼容处理、文档管理等相关工作',
						intro: '项目经验丰富，喜欢挑战新兴技术，对微服务、虚拟化容器有自己独到的见解，主要技术栈：Golang、Vue',
                        gitee: 'https://gitee.com/tttao7'
					},
					{
						avatar: 'https://cdn.uviewui.com/uview/team/15915681648132.jpg',
						name: '黄河浪',
						job: '前端开发',
						addr: '长沙',
						csdn: 'https://blog.csdn.net/u013350495',
						link: 'https://www.jq22.com/mem395541',
						uniapp: 'https://ext.dcloud.net.cn/publisher?id=110853',
						duty: '负责uView模板开发，社区管理等工作',
						intro: '脾气不好的暴躁老哥。丰富的前端开发经验，对代码有洁癖，CSS能力出众'
					}
				],
                activeDeveloperList:[
                    {
                        avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=1256262401&spec=640&img_type=jpg",
                        name:"千珏",
                        job: '前端开发',
                        addr: '郑州',
                        csdn: 'https://blog.csdn.net/qq_42543244',
			intro: '使用uni开发过多个移动端项目，热爱编程，喜欢钻研。'
                    },
                    {
                        avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=591714093&spec=640&img_type=jpg",
                        name:"yatoku",
                        job: '前端开发',
                        addr: '宁波',
			intro: '熟悉并热爱ES6+新语法，且能够在项目开发中加以运用，提高项目的开发效率以及编写代码的质量。'
                    },
	            {
                        avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=1592826708&spec=100&img_type=jpg",
                        name:"小飞",
                        job: '前端开发',
                        addr: '宁波',
			intro: '熟悉uni-app多端适配，开发过多个uni-app项目'
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

