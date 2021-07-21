import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 使用异步函数也是可以的
export default ({
	Vue, // VuePress 正在使用的 Vue 构造函数
	options, // 附加到根实例的一些选项
	router, // 当前应用的路由实例
	siteData, // 站点元数据
	isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
	// 配置element
	Vue.use(ElementUI);
	// ...做一些其他的应用级别的优化
	Vue.mixin({
		mounted() {
			// 判断某一个页面是否需要添加右边预览的右内边距，通过一个类名实现，
			// 此for-simulator-padding类名定义于/docs/.vuepress/styles/index.styl
			if(this.$page && this.$page.path) {
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
