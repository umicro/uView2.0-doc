<template>
	<a :href="'#' + anchor" class="anchor">
		<img src="/u-view2.0-doc/common/to_api.png" />
	</a>
</template>

<script>
	export default {
		props: {
			anchor: {
				type: String,
				default: 'api'
			}
		}
	}
</script>

<style scoped lang="scss">
	.anchor {
		display: inline-block;
		margin-left: 1.2rem;
		transform: translateY(0.5rem);

		img {
			width: 2rem;
		}
	}
</style>
