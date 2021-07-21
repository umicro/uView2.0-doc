<template>
	<div class="picker">
		<div
			class="picker__item"
			:style="{
				backgroundColor: value,
				color: color
			}"
		>
			<div class="picker__item__name">{{ name }}</div>
			<div class="picker__item__value">{{ value }}</div>
		</div>
		<el-row class="picker__tool" type="flex" justify="space-between">
			<el-col :span="15"><el-input class="picker__input" readonly :placeholder="value"></el-input></el-col>
			<el-col :span="9" class="picker__tool__picker"><el-color-picker @change="change" v-model="pickerColor"></el-color-picker></el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: '#ffffff'
		},
		bgColor: {
			type: String,
			default: '#2979ff'
		},
		name: {
			type: String,
			default: ''
		},
		value: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			pickerColor: this.value
		};
	},
	methods: {
		change(e) {
			this.$emit('input', e.toLowerCase())
		},
	}
};
</script>

<style lang="scss" scoped>
.picker {
	margin: 1rem 0;

	&__item {
		border-radius: 5px;
		padding: 1.1rem;

		&__name {
			font-size: 16px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		&__value {
			font-size: 12px;
			margin-top: 8px;
			opacity: 0.8;
		}
	}

	&__tool {
		margin-top: 10px;

		&__picker /deep/ .el-color-picker__trigger {
			height: 35px;
		}

		&__picker {
			text-align: right;
		}
	}

	&__input /deep/ input {
		cursor: pointer;
		height: 35px;
		padding: 0 10px;
	}
}
</style>
