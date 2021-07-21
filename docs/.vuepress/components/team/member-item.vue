<template>
	<div class="member-item">
		<div class="member-item__avatar"><img :src="list.avatar" /></div>
		<div class="member-item__info">
			<div class="member-item__name">{{ list.name }}</div>
			<div class="member-item__tag">
				<div class="member-item__tag__item" v-if="list.job">{{ list.job }}</div>
				<div class="member-item__tag__split" v-if="list.addr">·</div>
				<div class="member-item__tag__item" v-if="list.addr">{{ list.addr }}</div>
				<div class="member-item__tag__split" v-if="list.github">·</div>
				<div class="member-item__tag__item" v-if="list.github">
					<a :href="list.github" target="_blank"><span class="iconfont">&#xe64a;</span></a>
				</div>
				<div class="member-item__tag__split" v-if="list.uniapp">·</div>
				<div class="member-item__tag__item" v-if="list.uniapp">
					<a :href="list.uniapp" target="_blank"><span class="iconfont">&#xe609;</span></a>
				</div>
				<div class="member-item__tag__split" v-if="list.gitee">·</div>
				<div class="member-item__tag__item" v-if="list.gitee">
					<a :href="list.gitee" target="_blank"><span class="iconfont">&#xe600;</span></a>
				</div>
				<div class="member-item__tag__split" v-if="list.csdn">·</div>
				<div class="member-item__tag__item" v-if="list.csdn">
					<a :href="list.csdn" target="_blank"><span class="iconfont">&#xe601;</span></a>
				</div>
				<div class="member-item__tag__split" v-if="list.link">·</div>
				<div class="member-item__tag__item" v-if="list.link">
					<a :href="list.link" target="_blank"><span class="iconfont">&#xe67b;</span></a>
				</div>
			</div>
			<div class="member-item__job">职责：{{ list.duty }}</div>
			<div class="member-item__intro">介绍：{{ list.intro }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		list: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>

<style scoped lang="scss">
@font-face {
	font-family: 'doc-iconfont'; /* project id 1839347 */
	src: url('//at.alicdn.com/t/font_1839347_q72yio5zage.ttf') format('truetype');
}

.iconfont {
	font-family: 'doc-iconfont' !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.member-item {
	background-color: rgb(242, 242, 242);
	display: flex;
	padding: 20px;
	border-radius: 5px;
	margin-top: 25px;
	max-width: 1200px;

	&__avatar {
		height: 100px;
		flex: 0 0 100px;
		width: 100px;

		img {
			width: 100%;
			border-radius: 4px;
		}
	}

	&__info {
		margin-left: 20px;
	}

	&__name {
		color: #333;
		font-weight: bold;
		font-size: 16px;
		margin-top: 5px;
	}

	&__tag {
		display: flex;
		color: #999;
		font-size: 15px;
		margin-top: 5px;
		align-items: center;

		&__split {
			font-size: 20px;
			margin: 0 7px;
			color: #000;
		}
	}

	&__job {
		color: #555;
		font-size: 15px;
		margin-top: 7px;
	}

	&__intro {
		color: #666;
		font-size: 14px;
		margin-top: 7px;
	}
}

@media screen and (max-width: 768px) {
	.member-item {
		&__avatar {
			width: 50px;
			height: 50px;
			flex: 0 0 50px;
		}

		&__info {
			margin-left: 10px;
		}

		&__name {
			margin-top: 0;
		}

		&__intro,
		&__job {
			font-size: 13px;
			line-height: 1.7;
		}
	}
}
</style>
