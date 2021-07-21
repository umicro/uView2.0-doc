<template>
	<div class="custom-block custom-block-for-no-api">
		<div class="custom-block tip">
			<p class="custom-block-title">提示</p>
			<p>
				{{text}}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: `由于右侧的演示是通过iframe标签引入的，缺少了手机端运行的相关API，或者因为演示区域太小，或者电脑分别率不够高
				，导致演示可能会有问题，手机端有不会这些问题，请在右上角的"演示"中用手机扫码查看对应的效果。`
			}
		}
	}
</script>

<style scoped>
	.custom-block.tip {
	    background-color: #f3f5f7;
	    border-color: #42b983;
	}
	
	.custom-block .custom-block-title {
	    margin-bottom: -0.5rem !important;
	}
	
	.custom-block .custom-block-title {
	    font-weight: 600;
	    margin-bottom: -0.4rem;
	}
	
	
</style>
