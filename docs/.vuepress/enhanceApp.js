import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CustomDemoBlock from './CustomDemoBlock.vue'

// 使用异步函数也是可以的
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
    // 配置element
    Vue.use(ElementUI)
    //使用自定义渲染md
    Vue.component('CustomDemoBlock', CustomDemoBlock);
    // ...做一些其他的应用级别的优化
    Vue.mixin({
		data() {
			return {
				// showV2Tips: false,
				showV2Tips: true,
			}
		},
        mounted() {
			// 是否展示顶部跳转1.x文档的条幅
			// this.showV2Tips = !localStorage.getItem("showV2Tips")
            // 判断某一个页面是否需要添加右边预览的右内边距，通过一个类名实现，
            // 此for-simulator-padding类名定义于/docs/.vuepress/styles/index.styl
            if (this.$page && this.$page.path) {
                let pageRoot = this.$page.path.split(".")[0];
                if (this.$themeConfig.simulatorUrl.indexOf(pageRoot) >= 0) {
                    try {
                        document.getElementsByClassName('page')[0].classList.add("for-simulator-padding");
                    } catch (e) {
                        //TODO handle the exception
                    }
                } else {
                    try {
                        document.getElementsByClassName('page')[0].classList.remove("for-simulator-padding");
                    } catch (e) {
                        //TODO handle the exception
                    }
                }
            }
        }
    })
}
