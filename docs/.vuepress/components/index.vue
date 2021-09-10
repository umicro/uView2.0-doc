<template>
  <div>
    <div class="main-content container">
      <div class="banner">
        <div class="desc">
          <h1>
            多平台快速开发的UI框架
          </h1>
          <h2 class="desc-text">
            uView UI，是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具宛如您手上的一把利剑
            <br>
            我们的宗旨是：利剑出鞘，一统江湖！
          </h2>
          <div class="banner-img">
            <img src="/index/banner_1920x1080.png"/>
          </div>
        </div>
      </div>
      <div class="card-box components">
        <p class="card-title">四大利器，为您保驾护航</p>
        <ul class="row">
          <li class="col-md-3 col-sm-12 ">
            <div class="card-item">
              <img src="/index/guide.png"/>
              <h3>
                指南
              </h3>
              <p>
                涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川
              </p>
            </div>
          </li>
          <li class="col-md-3 col-sm-12">
            <div class="card-item">
              <img src="/index/components.png"/>
              <h3>
                组件
              </h3>
              <p>
                众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用
              </p>
            </div>
          </li>
          <li class="col-md-3 col-sm-12">
            <div class="card-item">
              <img src="/index/js.png"/>
              <h3>
                工具库
              </h3>
              <p>
                众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨
              </p>
            </div>
          </li>
          <li class="col-md-3 col-sm-12">
            <div class="card-item">
              <img src="/index/layout.png"/>
              <h3>
                布局
              </h3>
              <p>
                收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="card-box support">
        <p class="card-title">一次编写，多端发布</p>
        <ul class="row">
          <li class="col-md-3 col-sm-6 col-xs-6">
            <div class="card-item">
              <img src="/index/android.png"/>
              <h3>
                安卓
              </h3>
              <span class="alias">Android</span>
            </div>
          </li>
          <li class="col-md-3 col-sm-6 col-xs-6">
            <div class="card-item">
              <img src="/index/ios.png"/>
              <h3>
                Apple
              </h3>
              <span class="alias">IOS</span>
            </div>
          </li>
          <li class="col-md-3 col-sm-6 col-xs-6">
            <div class="card-item">
              <img src="/index/weixin.png"/>
              <h3>
                微信小程序
              </h3>
              <span class="alias">Mini Program</span>
            </div>
          </li>
          <li class="col-md-3 col-sm-6 col-xs-6">
            <div class="card-item">
              <img src="/index/h5.png"/>
              <h3>
                H5
              </h3>
              <span class="alias">Mobile Web</span>
            </div>
          </li>
        </ul>
        <ul class="row">
          <li class="col-md-3 col-sm-6 col-xs-6">
            <div class="card-item">
              <img src="/index/qq.png"/>
              <h3>
                QQ小程序
              </h3>
              <span class="alias">QQ Miniprogram</span>
            </div>
          </li>
          <li class="col-md-3 col-sm-6 col-xs-6">
            <div class="card-item">
              <img src="/index/baidu.png"/>
              <h3>
                百度小程序
              </h3>
              <span class="alias">Smart Program</span>
            </div>
          </li>
          <li class="col-md-3 col-sm-6 col-xs-6">
            <div class="card-item">
              <img src="/index/alipay.png"/>
              <h3>
                支付宝小程序
              </h3>
              <span class="alias">Alipay MiniProgram</span>
            </div>
          </li>
          <li class="col-md-3 col-sm-6 col-xs-6">
            <div class="card-item">
              <img src="/index/toutiao.png"/>
              <h3>
                头条小程序
              </h3>
              <span class="alias">Toutiao MiniProgram</span>
            </div>
          </li>
        </ul>
      </div>
<!--      <div class="card-box friend-link">-->
<!--        <p class="card-title">友情链接</p>-->
<!--        &lt;!&ndash;        内测期间去掉友情链接&ndash;&gt;-->
<!--        <friend-link></friend-link>-->
<!--      </div>-->
    </div>
    <div class="foot">
      Copyright 2020 uView UI | <a target="_blank" href="http://www.beian.miit.gov.cn">粤ICP备19025822号</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    // this.$alert('深圳宝安区高薪招聘前端开发岗位，加入我们，和uView UI核心研发团队一起工作和成长，快来看看吧！联系QQ：1416956117，查看岗位：http://zpurl.cn/Y3SzR', '高薪招聘前端开发', {
    // 	confirmButtonText: '确定',
    // 	callback: action => {
    // 		if(action == 'confirm') window.open("http://zpurl.cn/YnBDC");
    // 	}
    // });
  }
}
</script>

<style scoped>
ul,
ol {
  padding-left: 0;
}

.foot {
  padding: 30px 0;
  /* background-color: rgb(40, 44, 52); */
  color: #606266;
  text-align: center;
  font-size: 14px;
}

.foot a {
  color: #606266;
}

.banner {
  text-align: center;
  margin-top: 4rem;
}

.banner .desc h1 {
  font-weight: 700;
  color: #303133;
  font-size: 2rem;
}

.banner .desc-text {
  color: #606266;
  font-size: 1.1rem;
  border: none;
  line-height: 1.7;
}

li {
  list-style: none;
}

.card-box {
  text-align: center;
  margin-top: 3.5em;
}

.card-box .card-item {
  margin-bottom: 30px;
}

.card-box .card-title {
  color: #303133;
  font-size: 24px;
  margin-bottom: 50px;
}

.card-box li {
  padding: 0 20px;
  box-sizing: border-box;
}

.card-box.components div:hover {
  bottom: 6px;
  box-shadow: 0 6px 18px 0 rgba(232, 237, 250, .5);
}

.card-box.components div {
  border: 1px solid #eaeefb;
  border-radius: 5px;
  transition: bottom 0.4s;
  position: relative;
  bottom: 0;
}

.card-box img {
  width: 160px;
  margin: 40px auto 20px;
}

.card-box h3 {
  color: #606266;
  font-size: 18px;
}

.card-box p {
  font-size: 14px;
  color: #909399;
  padding: 0 25px;
  margin-bottom: 40px;
}

.card-box.support img {
  width: 100px;
  transform: scale(1);
  transition: all 0.4s;
  margin-bottom: 0;
}

.card-box.support h3 {
  margin-bottom: 5px;
}

.card-box.support .card-item span {
  color: #909399;
  font-size: 14px;
  color: #99a9bf;
}

.card-box.support img:hover {
  transform: scale(1.2);
}

@media (max-width: 992px) {
  .banner {
    margin-top: 2rem;
  }

  .banner .desc h1 {
    font-size: 24px;
  }

  .banner .desc-text {
    font-size: 15px;
  }

  .card-box .card-title {
    font-size: 20px;
    margin-bottom: 25px;
  }
}
</style>
