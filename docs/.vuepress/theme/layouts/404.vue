<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-6 col-xs-12 four-0-four">
				<div class="four-img-wrap">
					<img src="/common/404.png" />
				</div>
			</div>
			<div class="col-md-6 col-sm-6 col-xs-12">
				<div class="bullshit">
					<div class="bullshit-oops">抱歉!</div>
					<div class="bullshit-headline">当前页面不存在...</div>
					<div class="bullshit-info">请检查您输入的网址是否正确，或点击下面的按钮返回首页。</div>
					<a href="/" class="bullshit-return-home">返回首页</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	margin-top: 8rem;
}

.four-img-wrap {
	width: 120%;
	overflow: hidden;
}

.bullshit {
	margin-top: 3rem;
}

.four-0-four img {
	width: 100%;
}

.bullshit-oops {
    font-size: 2rem;
    font-weight: bold;
    line-height:  2rem;
    color: #409eff;
    margin-bottom: 1.2rem;
    -webkit-animation-name: slideUp-data-v-6b3aeb0e;
    animation-name: slideUp-data-v-6b3aeb0e;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

.bullshit-headline {
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #222;
    font-weight: bold;
    margin-bottom: 0.7rem;
    -webkit-animation-name: slideUp-data-v-6b3aeb0e;
    animation-name: slideUp-data-v-6b3aeb0e;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

.bullshit-info {
    font-size: 0.8rem;
    line-height: 1.4rem;
    color: #97a8be;
    margin-bottom: 2rem;
    -webkit-animation-name: slideUp-data-v-6b3aeb0e;
    animation-name: slideUp-data-v-6b3aeb0e;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

.bullshit-return-home {
    display: block;
    float: left;
    width: 110px;
    height: 36px;
    background: #409eff;
    border-radius: 100px;
    text-align: center;
    color: #ffffff;
    font-size: 14px;
    line-height: 36px;
    cursor: pointer;
    -webkit-animation-name: slideUp-data-v-6b3aeb0e;
    animation-name: slideUp-data-v-6b3aeb0e;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

@media (max-width: 768px) {
	.four-img-wrap {
		width: 100%;
	}
	
	.bullshit-return-home {
		margin: auto;
		float: none;
	}
}
</style>
