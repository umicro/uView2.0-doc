<template>
	<div class="demo-model">
		<div class="model-content">
			<iframe id="demo-modal" class="iframe" scrolling="auto" frameborder="0" :src="href"></iframe>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			url: {
				type: String,
				default: '/'
			}
		},
		data() {
			return {
				baseUrl: 'https://v2-h5.uviewui.com/index.html#'
			}
		},
		computed: {
			href() {
				return this.url.indexOf('http') == 0 ? this.url : `${this.baseUrl}${this.url}`;
			}
		},
		created() {
			// this.$notify({
			// 	title: '高薪招聘前端开发',
			// 	message: '深圳宝安区高薪招聘前端开发岗位，加入我们，和uView UI核心研发团队一起工作和成长，快来看看吧！联系QQ：1416956117，查看岗位：http://zpurl.cn/Y3SzR',
			// 	duration: 10000,
			// 	offset: 100
			// });
		}
	}
</script>

<style scoped>
	.demo-model {
		font-size: 16px;
		background-color: #fff;
		width: 330px;
		position: fixed;
		z-index: 10;
		margin: 0;
		/* top: calc(3.6em + 3px); */
		top: calc((100vh - 560px - 3.6rem) / 2 + 3.6rem);
		box-sizing: border-box;
		overflow-y: auto;
		/* background-image: url(/iPhone_model.png); */
		background-image: url(/common/iPhone13.png);
        background-repeat: no-repeat;
		background-size: 100%;
		/* box-shadow: 0 4px 25px 0 rgba(4, 40, 60, 0.18); */
		border-radius: 30px;
		padding: 48px 13px 25px 13px;
	}

	.model-content {
		box-sizing: border-box;
		height: 100%;
		border-bottom-left-radius: 30px;
	}

	.iframe {
		height: 100%;
		width: 100%;
		border-radius: 30px;
	}

	@media screen and (min-width: 1200px) {
		.demo-model {
			width: 310px;
			height: calc(310px * 143.6 / 70.9);
		}

		.demo-model {
			top: calc((100vh - 310px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
		}
	}

	@media (max-width: 1200px) {
		.demo-model {
			display: none;
		}
	}

	@media screen and (min-width: 1366px) {
		.demo-model {
			width: 270px;
			height: calc(270px * 143.6 / 70.9);
			top: calc((100vh - 270px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
		}
	}

	@media screen and (min-width: 1500px) {
		.demo-model {
			width: 310px;
			height: calc(310px * 143.6 / 70.9);
			top: calc((100vh - 310px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
		}
	}

	@media screen and (min-width: 1920px) {
		.demo-model {
			width: 360px;
			height: calc(360px * 143.6 / 70.9);
			top: calc((100vh - 350px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
		}
	}
</style>
