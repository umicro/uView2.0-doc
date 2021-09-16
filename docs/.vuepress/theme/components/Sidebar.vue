<template>
	<div>
		<aside class="sidebar">
			<NavLinks />
			<slot name="top" />
			<SidebarLinks :depth="0" :items="items" />
			<slot name="bottom" />
		</aside>
	</div>
</template>

<script>
	import SidebarLinks from '@theme/components/SidebarLinks.vue';
	import NavLinks from '@theme/components/NavLinks.vue';

	export default {
		name: 'Sidebar',

		components: {
			SidebarLinks,
			NavLinks
		},
		data() {
			return {
				// 广告信息
				ad: [
					{
						name: {
							src: 'https://cdn.uviewui.com/uview/resources/7abbfb97681216fd76ed9accc68490e.png',
							url: 'https://cool-js.com'
						},
						chance: 0.33
					},
					{
						name: {
							src: '/customer/contact3.png',
							url: 'https://ext.dcloud.net.cn/plugin?id=1427'
						},
						chance: 0.67
					}
				],
                // 顶部广告图
                url: '/customer/contact1.png'
			}
		},
		props: ['items'],
		created() {
			// 概率计算
			//this.jumpInfo = this.random();
			// 每隔一定时间，执行一次随机概率
			// setInterval(() => {
			// 	this.jumpInfo = this.random();
            // }, 3000);
            // 与广州亿速云的广告合作到期时间为2020-11-22，时间戳为：1608911994000(ms)
            // if (+new Date() > 1606058735000) {
            //     this.url = '/customer/contact1.png'
            // } else {
            //     this.url = 'https://cdn.uviewui.com/uview/friends-link/apipost_350x150px.jpeg';
            // }
		},
		methods: {
			// 根据概率，获得结果
			random() {
				let sum = 0,
					factor = 0,
					random = Math.random();

				for (let i = 0; i < this.ad.length; i++) {
					sum += this.ad[i].chance; // 统计概率总和
				};
				random *= sum; // 生成概率随机数
				for (let i = 0; i < this.ad.length; i++) {
					factor += this.ad[i].chance;
					if (factor > random) return this.ad[i].name;
				};
				return null;
			}
		}
	};
</script>

<style lang="stylus">
.sidebar
	.jump-link
		margin-top 1rem
		margin-right 2rem
		border-radius 4px
		width 170px
		height 80px
		img {
			max-width 100%
			border-radius 4px
		}

	ul
		padding 0
		margin 0
		list-style-type none
	a
		display inline-block
	.nav-links
		display none
		border-bottom 1px solid $borderColor
		padding 0.5rem 0 0.75rem 0
		a
			font-weight 600
		.nav-item, .repo-link
			display block
			line-height 1.25rem
			font-size 1.1em
			padding 0.5rem 0 0.5rem 1.5rem
	& > .sidebar-links
		padding 1.5rem 0
		padding-top 1rem
		& > li > a.sidebar-link
			font-size 1.1em
			line-height 1.7
			font-weight bold
		& > li:not(:first-child)
			margin-top 0.75rem
@media (max-width: $MQMobile)
	.sidebar
		.nav-links
			display block
			.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
				top calc(1rem - 2px)
		& > .sidebar-links
			padding 1rem 0
</style>
