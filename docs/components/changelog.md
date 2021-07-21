## 更新日志

<demo-model url="/"></demo-model>

<div class="doc-update">
	<ul class="u-timeline u-timeline-pending">
        <li class="u-timeline-item">
            <div class="u-timeline-item-tail"></div>
            <div class="u-timeline-item-head u-timeline-item-head-blue"></div>
            <div class="u-timeline-item-content">
                <div class="anchor">
                    <h2>1.8.4</h2>
                </div>
                <p><code>2021-03-15</code></p>
                <ul>
                    <li>
                        <span class="add">交流反馈</span>
                        欢迎加群交流反馈：
                        <a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化test.mobile()方法对手机号的判断规则
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化tabs组件加载时，隐藏滑块的首次滑动效果
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化tabbar组件对角标的判断
                    </li>
                    <li>
                        <span class="fix">修复</span>
                        修复image组件showMenuByLongpress参数无效的问题
                    </li>
                    <li>
                        <span class="fix">修复</span>
                        修复rate组件获取内部尺寸可能不对的问题
                    </li>
                </ul>
            </div>
        </li>
        <li class="u-timeline-item">
            <div class="u-timeline-item-tail"></div>
            <div class="u-timeline-item-head u-timeline-item-head-blue"></div>
            <div class="u-timeline-item-content">
                <div class="anchor">
                    <h2>1.8.3</h2>
                </div>
                <p><code>2020-12-17</code></p>
                <ul>
                    <li>
                        <span class="add">交流反馈</span>
                        欢迎加群交流反馈：
                        <a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        去除演示示例切换时的震动效果
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化多组件组合使用时，在组件卸载生命周期时移除在父组件中的实例，释放资源，避免造成数据混乱
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化$u.timeFormat()和$u.timeFrom()的逻辑，可以接受更多的时间类型
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化tabbar组件在小屏幕中，文字可能会被换行的问题
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化请求中，修改header后，会影响到其他请求的问题
                    </li>
                </ul>
            </div>
        </li>
        <li class="u-timeline-item">
            <div class="u-timeline-item-tail"></div>
            <div class="u-timeline-item-head u-timeline-item-head-blue"></div>
            <div class="u-timeline-item-content">
                <div class="anchor">
                    <h2>1.7.9</h2>
                </div>
                <p><code>2020-11-10</code></p>
                <ul>
                    <li>
                        <span class="add">交流反馈</span>
                        欢迎加群交流反馈：
                        <a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
                    </li>
                    <li>
                        <span class="add">新增</span>
                        新增Sketch设计资源，
                        <a href="/components/resource.html" target="_blank">点击查看</a>
                    </li>
                    <li>
                        <span class="add">新增</span>
                        将$u对象挂载到uni对象下，可以在外部js中通过uni.$u.xxx调用一些工具方法
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化$u.timeFormat方法，可以接受任意合法格式的时间，或时间戳参数
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化$u.timeFrom方法，可以接受任意合法格式的时间，或时间戳参数
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化card组件，某些特殊场景下可能无法占满屏幕的问题
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化upload组件的limitType参数，增加对支付宝小程序的支持
                    </li>
                    <li>
                        <span class="optimize">优化</span>
                        优化grid-item组件的customStyle参数可能在微信小程序无效的问题
                    </li>
                    <li>
                        <span class="fix">修复</span>
                        修复$u.test.url()方法，增加对中文参数的支持
                    </li>
                </ul>
            </div>
        </li>
        <li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.7.8</h2>
				</div>
				<p><code>2020-10-31</code></p>
				<ul>
					<li>
						<span class="add">交流反馈</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="add">新增</span>
						navbar新增title-bold参数，用于加粗标题
					</li>
					<li>
						<span class="add">新增</span>
						number-box新增focus事件
					</li>
					<li>
						<span class="optimize">优化</span>
						升级parse组件，图片和链接的点击事件不冒泡
					</li>
					<li>
						<span class="optimize">优化</span>
						允许row和col组件事件冒泡
					</li>
					<li>
						<span class="fix">修复</span>
						优化$u.test.url()无法校验url中有中文时的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.7.4</h2>
				</div>
				<p><code>2020-10-13</code></p>
				<ul>
					<li>
						<span class="add">交流反馈</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="add">新增</span>
						tabs组件新增count和offset参数，用于角标显示
					</li>
					<li>
						<span class="optimize">优化</span>
						优化image组件图片加载失败时显示的默认图可能为loading状态默认图的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						完善文档对read-more组件内嵌parse组件时，可能产生的兼容性解决办法
					</li>
					<li>
						<span class="fix">修复</span>
						修复readmore组件textIndent参数引用错误的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复numberbox组件可能会导致自动变化数值的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复rate组件颜色可能显示不对的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.7.0</h2>
				</div>
				<p><code>2020-09-16</code></p>
				<ul>
					<li>
						<span class="add">交流反馈</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="add">新增</span>
						upload组件新增on-choose-fail事件
					</li>
					<li>
						<span class="add">新增</span>
						select组件新增cancel事件
					</li>
					<li>
						<span class="optimize">优化</span>
						优化dropdown组件内部100%高度的问题，dropdown-item组件新增height参数
					</li>
					<li>
						<span class="optimize">优化</span>
						处理number-box某些情况下，无法通过外部修改内部值的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化loadmore组件，结合line组件，无需再配置bg-color参数
					</li>
					<li>
						<span class="optimize">优化</span>
						优化avatar组件方形时加载图片出错，显示的默认头像却为圆型的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化count-down组件在微信小程序上"天"部分可能显示有误的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化radio组件演示，无法通过配置修改效果的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化grid组件演示，无法通过配置修改border是否显示的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化toast组件无法显示多行的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化search组件maxlength参数在微信小程序上的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化键盘组件车牌号模式样式错乱的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化form-item组件在没有label和图标时依然占用空间的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复checkbox的change事件返回value值相反的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复radio组件change事件不触发的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.6.8</h2>
				</div>
				<p><code>2020-09-08</code></p>
				<ul>
					<li>
						<span class="add">交流反馈</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="add">新增</span>
						grid-item组件新增custom-style参数
					</li>
					<li>
						<span class="add">新增</span>
						action-sheet组件新增subText描述信息参数
					</li>
					<li>
						<span class="add">新增</span>
						upload组件新增before-remove钩子
					</li>
					<li>
						<span class="optimize">优化</span>
						优化badge组件的层级问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复form组件label-style参数无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复message-input组件box模式下，active-color参数无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复form组件label-style参数无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复radio组件的默认值无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复notice-bar组件左侧喇叭图标不显示的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.6.6</h2>
				</div>
				<p><code>2020-09-03</code></p>
				<ul>
					<li>
						<span class="add">交流反馈</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="add">说明</span>
						本次更新主要针对头条系小程序，实现全面兼容头条，抖音，西瓜小程序等
					</li>
					<li>
						<span class="optimize">优化</span>
						优化empty演示在头条小程序上的兼容性
					</li>
					<li>
						<span class="optimize">优化</span>
						优化tabs组件在头条小程序的表现问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化tag组件在支付宝小程序上不支持行内样式加"!important"的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化toast组件多次调用，可能会造成配置混乱的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化link组件在头条小程序上复制链接后，toast弹出瞬间被关闭的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化line组件在头条小程序上的兼容性
					</li>
					<li>
						<span class="fix">修复</span>
						修复在nvue下样式的警告和报错问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复grid组件在头条小程序的报错的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复index-list组件在头条小程序上的兼容性
					</li>
					<li>
						<span class="fix">修复</span>
						修复layout组件在头条小程序上的兼容性
					</li>
					<li>
						<span class="fix">修复</span>
						修复table组件在头条小程序上的兼容性
					</li>
					<li>
						<span class="fix">修复</span>
						修复checkbox组件在头条小程序上的兼容性
					</li>
					<li>
						<span class="fix">修复</span>
						修复radio组件在头条小程序上的兼容性
					</li>
					<li>
						<span class="fix">修复</span>
						修复form和form-item在头条小程序上的兼容性
					</li>
					<li>
						<span class="fix">修复</span>
						修复popup在头条小程序上底部有缺失的问题，同时连带修复使用了popup的keyborad和picker，calendar等组件的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复rate组件在微信，头条小程序上滑动选择可能不正确的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复message-input组件在头条小程序上的兼容性
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.6.4</h2>
				</div>
				<p><code>2020-08-21</code></p>
				<ul>
					<li>
						<span class="add">交流反馈</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="add">新增</span>
						upload组件新增height参数，可以设置预览缩略图的高度
					</li>
					<li>
						<span class="optimize">优化</span>
						优化tabs组件在微信小程序开发控制台报选择器警告的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化某些sass版本无法支持/deep/的问题，改为使用::v-deep穿透写法
					</li>
					<li>
						<span class="fix">修复</span>
						修复dropdown在微信小程序菜单第一项无法高亮，以及title无法双向绑定的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复select组件的extra属性为0时，内部判断无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复swiper组件title-style参数缺失的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复1.6.3引起的按钮水波纹会溢出的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复由于hx2.8.x引出的field和input点击右侧清除图标，在微信小程序上报错的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复tabbar在某些机型中，图标不居中的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.6.3</h2>
				</div>
				<p><code>2020-08-18</code></p>
				<ul>
					<li>
						<span class="add">交流反馈</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增u-reset-button样式类，用于清除button自带的样式，同时具备button在小程序上的各项能力，详见
						<a href="/components/common.html#重置按钮样式" target="_blank">重置按钮样式</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增轻巧精致的dropdown下拉菜单组件，详见
						<a href="/components/dropdown.html" target="_blank">下拉菜单</a>
					</li>
					<li>
						<span class="add">新增</span>
						upload组件新增index参数，在每个回调事件的最后一个参数中返回，用于区别当前的回调属于第几个upload组件产生
					</li>
					<li>
						<span class="add">新增</span>
						新增$u.test.code(value, length)判断是否验证码
					</li>
					<li>
						<span class="optimize">优化</span>
						移除http请求中，出错时弹出的modal
					</li>
					<li>
						<span class="optimize">优化</span>
						优化button组件在某些场景下，某个边框可能会被裁剪的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化radio和checkbox的icon在QQ小程序上，位置偏下的兼容性
					</li>
					<li>
						<span class="fix">修复</span>
						修复number-box的blur事件无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复slider的max值大于100时，滑动按钮可能会溢出边界的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复picker组件设置默认值无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复card组件的box-shadow参数类型定义错误的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.6.2</h2>
				</div>
				<p><code>2020-08-13</code></p>
				<ul>
					<li>
						<span class="add">交流反馈</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="add">新增</span>
						swiper组件新增current参数，可以初始化时指定激活项的索引
					</li>
					<li>
						<span class="add">新增</span>
						card组件新增box-shadow参数，用于设置卡片外围阴影
					</li>
					<li>
						<span class="add">新增</span>
						upload组件新增index参数，在每个回调事件的最后一个参数中返回，用于区别当前的回调属于第几个upload组件产生
					</li>
					<li>
						<span class="optimize">优化</span>
						优化count-down倒计时组件，避免多个组件同时使用可能会出现串扰的情况
					</li>
					<li>
						<span class="optimize">优化</span>
						头像裁剪组件文档添加npm引入方式对组件页面特殊处理的说明
					</li>
					<li>
						<span class="optimize">优化</span>
						压缩picker组件的地区数据文件，减少整体包体积100K左右
					</li>
					<li>
						<span class="optimize">优化</span>
						优化radio和checkbox的icon在QQ小程序上，位置偏下的兼容性
					</li>
					<li>
						<span class="fix">修复</span>
						修复演示项目中，无法切换rate组件演示选择数量，以及微信演示中，timeFrom函数演示异常的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复tabswiper组件演示中，点击菜单可能报错的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复由于HX2.8.5版本v-if导致的自定义tabbar报错的问题的
					</li>
					<li>
						<span class="fix">修复</span>
						修复row，col组件在QQ小程序上的兼容性
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.5.8</h2>
				</div>
				<p><code>2020-08-03</code></p>
				<ul>
					<li>
						<span class="add">交流反馈</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="fix">重要调整</span>
						【调整】调整this.$u.sys和this.$u.os，通过this.$u.sys()和this.$u.os()调用，详见
						<a href="https://uviewui.com/components/changeGuide.html" target="_blank">升级指南</a>
					</li>
					<li>
						<span class="add">新增</span>
						readMore组件新增index参数和close，open事件
					</li>
					<li>
						<span class="add">新增</span>
						新增man，woman，level三个图标
					</li>
					<li>
						<span class="add">新增</span>
						新增"注意事项"专题，记录一些踩坑知识点，让同学们少走弯路，详见
						<a href="https://uviewui.com/components/feature.html" target="_blank">注意事项</a>
					</li>
					<li>
						<span class="add">新增</span>
						alertTips组件新增icon、title-style、desc-style、icon-style参数
					</li>
					<li>
						<span class="add">新增</span>
						新增节流和防抖方法，通过this.$u.debounce()和this.$u.throttle()调用，详见
						<a href="https://uviewui.com/js/debounce.html" target="_blank">节流防抖</a>
					</li>
					<li>
						<span class="add">新增</span>
						button组件新增节流功能，以及配置间隔时间的throttle-time参数
					</li>
					<li>
						<span class="add">新增</span>
						field和input组件新增trim参数，默认为true，可以去除输入内容两端的空格
					</li>
					<li>
						<span class="optimize">优化</span>
						优化form-item组件的label设置为空内容时，依然显示左边的占位的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化lazy-load组件修改图片路径后，无法再次加载的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化navbar，upload，tabbar等组件由于各小程序props参数类型为Function，组件内执行父组件方法时this上下文丢失的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化numberbox组件无法阻止事件冒泡的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化timeFormat组件由于使用es7的padStart方法，导致在电脑版微信小程序无法识别的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复无法通过手动设置popup的v-model为false来关闭popup的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复骨架屏组件在微信小程序平台的组件中使用无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复section组件showLine参数无法隐藏左边竖条的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.5.6</h2>
				</div>
				<p><code>2020-07-28</code></p>
				<ul>
					<li>
						<span class="add">交流反馈</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增$u.sys用于获取设备的信息，相当于uni.getSystemInfoSync()的效果
					</li>
					<li>
						<span class="add">新增</span>
						新增$u.os用于返回平台名称，结果为小写的"ios"或者"android"
					</li>
					<li>
						<span class="add">新增</span>
						popup和mask新增hover-stop-propagation属性，阻止父节点出现点击状态
					</li>
					<li>
						<span class="add">新增</span>
						layout组件的col新增text-align属性，用于控制内部的水平对齐方式
					</li>
					<li>
						<span class="add">新增</span>
						upload新增limit-type参数，用于控制允许选择的图片后缀
					</li>
					<li>
						<span class="add">新增</span>
						input组件新增selection-start和selection-end参数
					</li>
					<li>
						<span class="add">新增</span>
						number-box组件新增只能属于正整数的positive-integer参数
					</li>
					<li>
						<span class="add">新增</span>
						picker、select和keyboard组件新增cancel-text和confirm-text参数
					</li>
					<li>
						<span class="add">新增</span>
						tabs组件新增item-width参数，用于控制标签的宽度，超出用过省略号表示，默认auto
					</li>
					<li>
						<span class="add">新增</span>
						avatar头像新增性别和等级展示角标
					</li>
					<li>
						<span class="add">新增</span>
						sticky新增unfixed取消吸顶事件
					</li>
					<li>
						<span class="add">新增</span>
						action-sheet组件新增disabled属性，用于禁止某些条目的可选性
					</li>
					<li>
						<span class="add">新增</span>
						最新版hx2.8.2中，waterfall组件支持支付宝小程序
					</li>
					<li>
						<span class="add">新增</span>
						button组件返回的click事件中新增返回事件源参数
					</li>
					<li>
						<span class="add">新增</span>
						icon组件新增用于控制图标的width和height参数，以及控制垂直方向偏移的top参数
					</li>
					<li>
						<span class="optimize">优化</span>
						调整navbar的返回图标为nav-back，大小调整为44
					</li>
					<li>
						<span class="optimize">优化</span>
						重构section组件，类名使用BEM规范，左侧竖线使用字体图标，新增控制竖线颜色的line-color参数
					</li>
					<li>
						<span class="fix">修复</span>
						改正radio和checkbox组件的label-disabled判断不严格的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复popup组件关闭时触发两次close事件的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复slider滑块组件block-color参数无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复http请求中拦截器中返回false报错的问题，优化响应拦截器返回false报找不到catch()的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复layout的col子组件text-align参数无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复image组件的error-icon和loadingicon参数传图片地址时无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复number-box动态设置输入值不生效的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
					<div class="anchor">
						<h2>1.5.4</h2>
					</div>
					<p><code>2020-07-21</code></p>
					<ul>
						<li>
							<span class="add">交流反馈</span>
							欢迎加群交流反馈：
							<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
						</li>
						<li>
							<span class="fix">重要说明</span>
							本次升级主要针对支付宝小程序的兼容性，需要开启支付宝的"component2"模式，另外废弃了table组件的单元格合并模式，详见：							
							<a href="/components/changeGuide.html" target="_blank">升级指南</a>
						</li>
						<li>
							<span class="fix">其他说明</span>
							由于支付宝小程序不支持uni的swiper组件的transition事件的dx回调参数，所以目前uView的tabsSwiper组件不支持支付宝小程序，其中由于uniapp的问题，
							waterfall组件需要hx2.8.2以上才支持
						</li>
						<li>
							<span class="add">新增</span>
							新增parse富文本解析器组件，详见：
							<a href="/components/parse.html" target="_blank">富文本解析器</a>
						</li>
						<li>
							<span class="add">新增</span>
							新增$u.test.object()方法用于判断是否对象
						</li>
						<li>
							<span class="add">新增</span>
							新增$u.test.jsonString()方法用于判断是否json字符串
						</li>
						<li>
							<span class="add">新增</span>
							line-progress线性进度条新增默认slot，可传入自定义内容
						</li>
						<li>
							<span class="add">新增</span>
							popup弹窗组件新增mask-custom-style参数，用于修改遮罩的透明度等样式
						</li>
						<li>
							<span class="add">新增</span>
							新增判断固定电话规则$u.test.landline()
						</li>
						<li>
							<span class="add">新增</span>
							u-image新增bg-color参数，可以设置加载中阶段的背景颜色
						</li>
						<li>
							<span class="add">新增</span>
							u-search在disabled为true时，点击可以发出click事件，用于跳转
						</li>
						<li>
							<span class="add">新增</span>
							新增$u.test.array()方法用于判断是否数组
						</li>
						<li>
							<span class="optimize">优化</span>
							同步升级parse到最新版本
						</li>
						<li>
							<span class="optimize">优化</span>
							优化field组件使用right插槽时内容和清除图标距离太近的问题
						</li>
						<li>
							<span class="fix">修复</span>
							修复picker和select点击确定时，收起动画无效的问题
						</li>
						<li>
							<span class="fix">修复</span>
							修复number-box步进器组件连续输入多个数值，可能会导致内存溢出的问题
						</li>
						<li>
							<span class="fix">修复</span>
							修复支付宝小程序上tabs组件无效的问题
						</li>
						<li>
							<span class="fix">修复</span>
							修复swipeAction组件在支付宝小程序无效的问题
						</li>
						<li>
							<span class="fix">修复</span>
							修复table对支付宝的兼容问题，废弃table的单元格合并模式，详见官网升级指南
						</li>
						<li>
							<span class="fix">修复</span>
							修复index-list组件，全面兼容支付宝小程序
						</li>
						<li>
							<span class="fix">修复</span>
							修复keyboard组件z-index参数无效的问题
						</li>
						<li>
							<span class="fix">修复</span>
							修复readmore组件示例在支付宝小程序无效的问题
						</li>
						<li>
							<span class="fix">修复</span>
							修复picker组件start-year和end-year传递字符串类型无效的问题
						</li>
						<li>
							<span class="fix">修复</span>
							修复瀑布流组件的modify方法可能会导致数据错乱的问题
						</li>
						<li>
							<span class="fix">修复</span>
							修复H5端popup等弹出组件层级比uni.showToast()的层级高的问题
						</li>
						<li>
							<span class="fix">修复</span>
							修复modal组件异步关闭模式，可能无法清除loading的问题
						</li>
					</ul>
				</div>
			</li>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.5.2</h2>
				</div>
				<p><code>2020-07-15</code></p>
				<ul>
					<li>
						<span class="add">交流反馈</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="optimize">优化</span>
						配置popup组件的外层元素z-index可动态调整
					</li>
					<li>
						<span class="optimize">优化</span>
						select和picker组件在微信小程序上第二次打开，直接点确定返回可能不对的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						添加u-col的click事件
					</li>
					<li>
						<span class="optimize">优化</span>
						优化table组件在支付宝小程序上报错的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						重构steps组件，支持竖向模式，同时兼容了支付宝小程序
					</li>
					<li>
						<span class="optimize">优化</span>
						优化checkbox组件，兼容支付宝小程序
					</li>
					<li>
						<span class="optimize">优化</span>
						优化swipeAction组件可能会闪烁的情况
					</li>
					<li>
						<span class="optimize">优化</span>
						调整cell组件的高度
					</li>
					<li>
						<span class="optimize">优化</span>
						重构优化radio组件，全面兼容支付宝小程序，修复每次点击都触发change事件的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化avatar-cropper头像裁剪组件，全面兼容支付宝小程序
					</li>
					<li>
						<span class="optimize">优化</span>
						优化circle-progress组件，全面兼容支付宝小程序
					</li>
					<li>
						<span class="fix">修复</span>
						修复image组件无需淡入效果时png图片能看到底色的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复checkbox的lable-disabled参数无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复form-item的label-align无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复alert-tips的border-color和bg-color作用对象颠倒的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复picker组件时间模式timestamp在iOS上可能返回不正确的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复input组件在微信小程序第一次获得焦点时无法清空内容的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复cell组件在1.5.0版本导致变成了password模式的情况
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.4.8</h2>
				</div>
				<p><code>2020-07-08</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						欢迎加群交流反馈：
						<a href="/components/addQQGroup.html" target="_blank">点击跳转</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增精致，可配置性强，带凸起按钮的tabbar组件，详见：
						<a href="/components/tabbar.html" target="_blank">底部导航栏</a>
					</li>
					<li>
						<span class="add">新增</span>
						modal和popup的中部弹出模式新增negative-top参数，可以将弹出区域往上移，避免与弹出的键盘重合。
					</li>
					<li>
						<span class="add">新增</span>
						countdown组件新增hide-zero-day参数，当"天"为0时自动隐藏该字段
					</li>
					<li>
						<span class="add">新增</span>
						field组件新增icon-style，border-top参数，无需强制结合cell-group即可使用，废弃cell组件的border-gap参数
					</li>
					<li>
						<span class="add">新增</span>
						input组件添加cursor-spacing参数
					</li>
					<li>
						<span class="add">新增</span>
						rate评分组件新增v-model双向绑定的形式
					</li>
					<li>
						<span class="add">新增</span>
						numberBox步进器组件新增step支持小数加减，另外新增long-press和press-time用于长按连续加减
					</li>
					<li>
						<span class="add">新增</span>
						icon组件的lable新增在图标左边和上放的参数lebel-pos=left | top
					</li>
					<li>
						<span class="add">新增</span>
						演示项目和空白项目新增.eslintignore、.editorconfig配置文件
					</li>
					<li>
						<span class="optimize">优化</span>
						image组件允许事件冒泡到外层
					</li>
					<li>
						<span class="optimize">优化</span>
						优化cell组件的label数字不会换行的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化navbar的title为英文时，可能会发生部分字母被竖向截断的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						empty组件图标改由字体图标提供，减少整体包体积1/5，详见：
						<a href="/components/empty.html" target="_blank">Empty 内容为空</a>
					</li>
					<li>
						<span class="optimize">优化</span>
						优化picker和select滑动顶部区域，可能会产生报错的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化popup的弹出逻辑，让keyboard，select，picker等与popup弹出有关的组件可以在页面初始化时data中设置show为true也能弹出组件
					</li>
					<li>
						<span class="optimize">优化</span>
						avatar头像组件二次加载图片时无效的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						row组件允许flex换行
					</li>
					<li>
						<span class="optimize">优化</span>
						image组件图片加载完成时移除背景色，避免png图片能看到底色
					</li>
					<li>
						<span class="optimize">优化</span>
						优化line线条组件的length参数单位问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化upload组件的on-list-change事件逻辑
					</li>
					<li>
						<span class="optimize">优化</span>
						优化avatar-cropper组件没有选择图片也能点击确定进行裁剪的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						重构checkbox组件，加强兼各段兼容性，修复在u-checkbox上size参数无效的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						将表单域的设置参数label-position、label-width、label-align等放到u-form组件中
					</li>
					<li>
						<span class="optimize">优化</span>
						移除在微信小程序开发工具console中对非法选择器的警告提示
					</li>
					<li>
						<span class="optimize">优化</span>
						处理u-input的input-align等于right时，文字可能与清除图标重合的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修正image组件的border-radius无法接受带单位的值的问题
					</li>
					<li>
						<span class="fix">修复</span>
						由于deepClone导致null结果为{}而导致http的loading无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复u-collapse-item的change事件无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修正$u.test.amount()在某些特殊场景可能无法正确识别小数的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修正input和field数值为0时，获得焦点无法显示清除图标的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修正icon组件的label-pos左和右方向颠倒的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复cell-item组件无法同时显示右箭头和right-icon的slot的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修正radio的shape参数默认为square的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.4.0</h2>
				</div>
				<p><code>2020-06-28</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						自定义主题功能，详见：
						<a href="/guide/theme.html" target="_blank">自定义主题</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增精致，小巧而实用的image组件，有淡入，懒加载，加载中，加载失败提示等效果，详见：
						<a href="/components/image.html" target="_blank">Image 图片</a>
					</li>
					<li>
						<span class="add">新增</span>
						toast新增back参数用于toast结束后自动返回上一页
					</li>
					<li>
						<span class="add">新增</span>
						cell组件新增icon-style，border-top参数，无需强制结合cell-group即可使用
					</li>
					<li>
						<span class="add">新增</span>
						field组件新增icon-style，border-top参数，无需强制结合cell-group即可使用，废弃cell组件的border-gap参数
					</li>
					<li>
						<span class="add">新增</span>
						button组件新增data-name参数
					</li>
					<li>
						<span class="add">新增</span>
						icon组件color参数可以接受primary,sucees,error,info,warning主题色值
					</li>
					<li>
						<span class="add">新增</span>
						collapse组件新增用于异步获取数据重新初始化的init()方法
					</li>
					<li>
						<span class="optimize">优化</span>
						阻止radio和checkbox组件的事件冒泡
					</li>
					<li>
						<span class="optimize">优化</span>
						优化row组件可能存在边距错误的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化演示项目的样式表现
					</li>
					<li>
						<span class="optimize">优化</span>
						调整input组件右侧的图标对齐效果
					</li>
					<li>
						<span class="fix">修复</span>
						修复upload组件初始化绑定对象文件列表后，修改外部文件列表导致内部数据错乱的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复form组件设置toast报错提示时，没有错误也会弹出toast问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.3.7</h2>
				</div>
				<p><code>2020-06-22</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						upload新增上传前钩子before-upload，可返回布尔值或者Promise，to-json参数可配置是否将返回结果转为json格式
					</li>
					<li>
						<span class="add">新增</span>
						select，form，input，calendar组件的HX代码提示
					</li>
					<li>
						<span class="add">新增</span>
						select新增child-name和title参数，picker组件新增title参数
					</li>
					<li>
						<span class="add">新增</span>
						popup组件新增width和height参数，如果内容超出容器，自动垂直滚动
					</li>
					<li>
						<span class="add">新增</span>
						Line线条组件新增border-style参数，可以设置实线，方形虚线，圆点虚线
					</li>
					<li>
						<span class="optimize">优化</span>
						select和picker组件在微信小程序滑动过快，快速点击确定按钮时选择值可能不对的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						废弃color.js文件，颜色值全部改由css提供，为自定义主题做准备
					</li>
					<li>
						<span class="optimize">优化</span>
						form表单综合演示中，switch没有垂直居中的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复fullScreen演示无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复input组件设置password-icon可能导致错乱的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复verificationCode验证码倒计时组件设置保持验证码时可能导致错乱的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.3.6</h2>
				</div>
				<p><code>2020-06-18</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						select组件新增自定义value和label属性名的value-name和label-name，以及额外参数extra
					</li>
					<li>
						<span class="add">新增</span>
						toast组件新增callback回调参数
					</li>
					<li>
						<span class="add">新增</span>
						swiper新增轮播切换时的change事件
					</li>
					<li>
						<span class="optimize">优化</span>
						优化mask组件缩放效果时，传入的slot被一直停留在1.2倍放大的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化modal组件同时去除确定和取消按钮时，底部有占用空间的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化switch组件切换的控件可能会受父组件字体大小影响的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						去除请求插件中的默认header请求头的content-type字段，避免某些特殊情况下造成影响
					</li>
					<li>
						<span class="fix">修复</span>
						修复由于deepClone方法缺陷导致select组件报错的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复slider在演示中无法显示拖动滑块的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.3.5</h2>
				</div>
				<p><code>2020-06-15</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						form表单验证新增toast的错误提示方式，配置erroryType=['toast']即可
					</li>
					<li>
						<span class="add">新增</span>
						search搜索框组件新增search-icon参数，可自定义左侧的图标
					</li>
					<li>
						<span class="add">新增</span>
						card组件新增可控制头部和尾部显示与否的show-head和show-foot参数
					</li>
					<li>
						<span class="add">新增</span>
						collapse组件新增控制头部的slot参数title和title-all
					</li>
					<li>
						<span class="optimize">优化</span>
						form-item组件左侧红色星标通过required参数配置，仅起展示作用，如需校验是否填写请配置rules规则
					</li>
					<li>
						<span class="optimize">优化</span>
						改正section组件的show-line默认为false的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复popup组件在低性能安卓设备上可能存在弹出动画无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复line线条组件可能在小程序上无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复upload组件在H5上可能弹出两次选择文件窗口的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复verificationCode验证码倒计时设置保持倒计时模式时多次切换页面倒计时可能混乱的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复calendar日历组件的关闭按钮在支付宝小程序上位置不对的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复numberBox组件渲染完成时自动触发一次change事件的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.3.4</h2>
				</div>
				<p><code>2020-06-11</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						文档和示例新增表单验证的异步自定义函数
					</li>
					<li>
						<span class="add">新增</span>
						navbar组件新增左侧图标自定义回调方法参数custom-back
					</li>
					<li>
						<span class="add">新增</span>
						search组件新增input-style自定样式参数
					</li>
					<li>
						<span class="add">新增</span>
						verificationCode组件新增unique-key参数，用于继续倒计时区分多个组件的变量名
					</li>
					<li>
						<span class="optimize">优化</span>
						优化this.$u.test.url()验证方法对URL中存在大写字母时判断无效的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						form-item的label-width可以设置auto值
					</li>
					<li>
						<span class="fix">修复</span>
						修复表单验证的form-item，可能无法显示左侧的必填"*"号的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复readMore阅读更多的组件可能出现高度单位混淆的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.3.3</h2>
				</div>
				<p><code>2020-06-10</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						1.3.3起，numberBox步进器推荐使用v-model双向绑定数值，无需在change回调中重新赋值，详见文档：
						<a href="/components/numberBox.html" target="_blank">numberBox 步进器</a>
					</li>
					<li>
						<span class="add">新增</span>
						search组件新增clear清除内容事件
					</li>
					<li>
						<span class="add">新增</span>
						section组件新增可控制左边竖条的show-line参数
					</li>
					<li>
						<span class="optimize">优化</span>
						优化城市选择模板在微信小程序上的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化countTo组件可能由于传入字符串数值而报错的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						由于form表单验证在某些表单域没有验证规则导致不会触发验证回调的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化验证码倒计时组件可能会触发多次的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.3.2</h2>
				</div>
				<p><code>2020-06-09</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						新增双箭头图标arrow-left-double和arrow-right-double
					</li>
					<li>
						<span class="optimize">优化</span>
						优化this.$u.test.url()URL检测方法正则无法识别"127.0.0.1"的缺陷
					</li>
					<li>
						<span class="optimize">优化</span>
						优化Swiper轮播图组件动态修改list长度时，重置内部current值
					</li>
					<li>
						<span class="optimize">优化</span>
						移除Slider滑块组件的use-slot参数，改由组件内部判断，原功能不受影响
					</li>
					<li>
						<span class="optimize">优化</span>
						完善文档Select组件关于回调参数的说明，完善日历组件的演示效果
					</li>
					<li>
						<span class="optimize">优化</span>
						由于加载问题，阿里，头条，百度小程序的图标改用线上资源
					</li>
					<li>
						<span class="optimize">优化</span>
						扩大Search搜索组件右边清除按钮的可点击区域
					</li>
					<li>
						<span class="fix">修复</span>
						修复http请求可能存在导致跨域的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复navBar返回按钮可能会触发两次的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.3.0</h2>
				</div>
				<p><code>2020-06-08</code></p>
				<ul>
					<li>
						<span class="add">说明</span>
						说明：从1.3.0起，不推荐使用Picker的单列和多列模式，推荐使用更好的Select组件：详见
						<a href="/components/select.html" target="_blank">Select 列选择器</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增uni-app生态最强表单验证Form、Form-item，Input组件
						<a href="/components/form.html" target="_blank">Form 表单及验证</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增Select列选择器，可以单列，多列，多列联动选择，详见
						<a href="/components/select.html" target="_blank">Select 列选择器</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增Calendar日历组件，可以单选，范围选择日期等：详见
						<a href="/components/calendar.html" target="_blank">Calendar 日历</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增BackTop返回顶部组件：详见
						<a href="/components/backtop.html" target="_blank">Backtop 返回顶部</a>
					</li>
					<li>
						<span class="add">新增</span>
						Icon组件新增支持图片模式，新增custom-style参数
					</li>
					<li>
						<span class="add">新增</span>
						Collapse折叠面板新增item-style参数，修复head-style，body-style可能无效的问题
					</li>
					<li>
						<span class="add">新增</span>
						Swiper组件新增bg-color设置背景颜色的参数
					</li>
					<li>
						<span class="add">新增</span>
						新增对象深度克隆JS工具库方法，使用方式为"this.$u.deepClone(object)"，详见
						<a href="/js/deepClone.html" target="_blank">deepClone 对象深度克隆</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增对象深度合并JS工具库方法，使用方式为"this.$u.deepMerge(target, source)"，详见
						<a href="/js/deepMerge.html" target="_blank">deepMerge 对象深度合并</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增仿微信个人中心首页模板，详见
						<a href="/layout/wxCenter.html" target="_blank">wxCenter 仿微信个人中心</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增结合自定义键盘及验证码输入框组件的支付模板，详见
						<a href="/layout/keyboardPay.html" target="_blank">keyboardPay 自定义键盘支付模板</a>
					</li>
					<li>
						<span class="optimize">优化</span>
						优化城市选择模板的逻辑和动画
					</li>
					<li>
						<span class="optimize">优化</span>
						优化Radio单选框点击图标部分可能不灵敏的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化Checkbox单选框点击图标部分可能不灵敏的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化ActionSheet的取消按钮提示，由cancel-text提供
					</li>
					<li>
						<span class="optimize">优化</span>
						优化SwipeAction组件按钮可能闪一下的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化Http请求头信息可能由于浅合并导致的问题，修复响应拦截返回false依然进入then回调的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化Checkbox组件，可以无需搭配Checkbox-group而独立使用
					</li>
					<li>
						<span class="optimize">优化</span>
						优化u-border基础类的边框特殊场景可能会有边框缺失的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						移除Model组件的content-slot组件，改由组件内部判断，原功能不受影响
					</li>
					<li>
						<span class="optimize">优化</span>
						优化Tabs组件动态修改list参数长度对内部Current索引的判断和修改
					</li>
					<li>
						<span class="optimize">优化</span>
						优化文档右侧演示在1366*768分辨率显示器上，预览部分可能显示不全的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化Timeline组件左边图标的z-index层级的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						移除演示项目根目录/static中的无用图片资源，转用线上CDN资源
					</li>
					<li>
						<span class="fix">修复</span>
						修复Icon图标在头条，百度小程序上无法显示的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复MessageInput验证码输入框组件可能会在左边显示输入内容的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复NoNetwork组件会导致状态栏文字颜色变化的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.2.9</h2>
				</div>
				<p><code>2020-05-26</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						新增城市选择模板，详见：
						<a href="/layout/citySelect.html" target="_blank">城市选择模板</a>
					</li>
					<li>
						<span class="optimize">优化</span>
						重构Grid宫格组件，各校小程序使用float布局，H5和APP使用flex布局
					</li>
					<li>
						<span class="optimize">优化</span>
						优化CircleProgress圆形进度条卡顿的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						优化tabsSwiper全屏选项卡滑块位置可能错乱的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						修改Field组件的名为button的slot为right
					</li>
					<li>
						<span class="fix">修复</span>
						修复mask组件演示无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复Th组件的width参数带单位时无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复Picker单列和多列在微信小程序上可能存在的问题
					</li>
					<li>
						<span class="fix">修复</span>
						处理npm安装方式，mixin.js中条件编译无效，getRect方法带来的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.2.8</h2>
				</div>
				<p><code>2020-05-22</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						Picker选择器组件新增单列和多列模式，详见：
						<a href="/components/picker.html" target="_blank">Picker 选择器</a>
					</li>
					<li>
						<span class="add">新增</span>
						Waterfall瀑布流组件新增清空和移除数据的组件方法，本次升级需要修改原来的:flow-list为v-model，详见：
						<a href="/components/changeGuide.html" target="_blank">升级指南</a>
					</li>
					<li>
						<span class="add">新增</span>
						给popup弹窗组件添加控制关闭的图标
					</li>
					<li>
						<span class="add">新增</span>
						新增Keyboard键盘组件无遮罩时，可以点击透明层关闭键盘的特性
					</li>
					<li>
						<span class="add">新增</span>
						 MessageInput验证码输入框组件新增disabled-keyboard参数，用于禁止原生键盘
					</li>
					<li>
						<span class="optimize">优化</span>
						重构圆型进度条组件，解决微信小程序可能报错的问题，新增动态减少百分比的功能
					</li>
					<li>
						<span class="optimize">优化</span>
						优化Tabs组件初次加载时的动画问题以及动态修改标签长度时重置current值
					</li>
					<li>
						<span class="optimize">优化</span>
						优化Tag标签组件的内部逻辑
					</li>
					<li>
						<span class="optimize">优化</span>
						优化NoticeBar横线滚动通知的事件问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复Navbar自定义导航栏title-size参数无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复slider滑块无法触发moving事件的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.2.7</h2>
				</div>
				<p><code>2020-05-18</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						瀑布流新增清空列表的clear方法和移除某条数据的remove方法
					</li>
					<li>
						<span class="add">新增</span>
						给Modal弹窗添加clearLoading方法，可以在异步回调中清除loading状态
					</li>
					<li>
						<span class="add">新增</span>
						给popup弹窗组件添加控制关闭的图标
					</li>
					<li>
						<span class="add">新增</span>
						line线条组件增加margin参数
					</li>
					<li>
						<span class="add">新增</span>
						search搜索框组件添加控制图标和字体颜色的参数
					</li>
					<li>
						<span class="optimize">优化</span>
						优化card卡片组件的内部样式
					</li>
					<li>
						<span class="fix">修复</span>
						修复http请求loading第二次以后无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复微信小程序Link链接组件mp-tips参数无效的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.2.6</h2>
				</div>
				<p><code>2020-05-16</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						新增Line线条组件，详见：
						<a href="/components/line.html" target="_blank">Line 线条</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增Card卡片组件，详见：
						<a href="/components/card.html" target="_blank">Card 卡片</a>
					</li>
					<li>
						<span class="add">新增</span>
						添加Upload上传组件控制右上角删除图标的样式参数，可以定义颜色，背景等
					</li>
					<li>
						<span class="add">新增</span>
						给NumberBox步进器组件添加disabled-input组件，控制输入框是否可输入内容
					</li>
					<li>
						<span class="add">新增</span>
						Icon图标组件新增label功能，支持右边和下方插入描述文字
					</li>
					<li>
						<span class="add">新增</span>
						添加搜索组件的maxlength参数
					</li>
					<li>
						<span class="optimize">优化</span>
						优化LazyLoad懒加载实现的方法
					</li>
					<li>
						<span class="optimize">优化</span>
						优化$u.getRect()方法，使其支持支付宝小程序
					</li>
					<li>
						<span class="optimize">优化</span>
						优化按钮点击事件，阻止冒泡
					</li>
					<li>
						<span class="optimize">优化</span>
						优化NoNetwork无网络提示组件，使其垂直居中
					</li>
					<li>
						<span class="optimize">优化</span>
						优化Swiper组件在App上滑动时圆角无效的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						给$u.test.empty改名$u.test.isEmpty，同时保留$u.test.empty，二者功能一致
					</li>
					<li>
						<span class="optimize">优化</span>
						修改Rate评分组件对支付宝小程序的支持
					</li>
					<li>
						<span class="fix">修复</span>
						修复Empty组件的历史记录图标显示不全的问题，同时使该组件垂直居中
					</li>
					<li>
						<span class="fix">修复</span>
						改正Switch开关选择器参数unActionColor与文档inActionColor不一致的错误
					</li>
					<li>
						<span class="fix">修复</span>
						修改README.md使用示例button的拼写错误
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.2.5</h2>
				</div>
				<p><code>2020-05-12</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						给Modal弹窗添加异步关闭控制参数async-close和点击遮罩关闭参数mask-close-able
					</li>
					<li>
						<span class="add">新增</span>
						给Navbar添加右侧的slot，名为right
					</li>
					<li>
						<span class="add">新增</span>
						给Switch组件添加active-value和inactive-value
					</li>
					<li>
						<span class="add">新增</span>
						添加基础类u-relative(u-rela)和u-absolute(u-abso)
					</li>
					<li>
						<span class="fix">修复</span>
						修复$u.route方法type=back时，delta参数无法设置的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复Button按钮水波纹在支付宝小程序无效的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.2.4</h2>
				</div>
				<p><code>2020-05-10</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						noticeBar滚动通知组件增加控制喇叭大小的参数volume-size
					</li>
					<li>
						<span class="add">新增</span>
						picker组件新增show-time-tag参数控制是否显示年月日的中文提示
					</li>
					<li>
						<span class="fix">修复</span>
						修复navbar自定义导航栏组件height参数为字符串时可能出错的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.2.3</h2>
				</div>
				<p><code>2020-05-08</code></p>
				<ul>
					<li>
						<span class="fix">修复</span>
						修复field组件设置为textarea类型是样式有误的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复支付宝小程序图标无法显示的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.2.2</h2>
				</div>
				<p><code>2020-05-08</code></p>
				<ul>
					<li>
						<span class="fix">修复</span>
						修复微信小程序upload组件演示中，无法修改上传按钮样式的问题
					</li>
					<li>
						<span class="fix">修复</span>
						解决微信小程序开发工具上按钮组件的选择器警告问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.2.1</h2>
				</div>
				<p><code>2020-05-08</code></p>
				<ul>
					<li>
						<span class="fix">修复</span>
						解决waterfall瀑布流示例多次快速上拉，导致数据加载失败的问题
					</li>
					<li>
						<span class="fix">修复</span>
						解决indexList索引列表和checkbox组件在微信小程序报错的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.2.0</h2>
				</div>
				<p><code>2020-05-07</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						field组件增加field-style和clear-size参数
					</li>
					<li>
						<span class="optimize">优化</span>
						优化swipeAction滑动单元格组件的内部逻辑，新增content-click事件
					</li>
					<li>
						<span class="fix">修复</span>
						修复部分安卓手机下载demo中样式错乱的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复picker组件的按钮颜色参数无效的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.1.9</h2>
				</div>
				<p><code>2020-05-06</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						增加swipeAction滑动单元格按钮数量配置，如有使用此组件，本次升级，必须修改此组件的参数方可正常使用，详见：
						<a href="/components/changeGuide.html" target="_blank">1.1.9升级指导</a>
					</li>
					<li>
						<span class="add">新增</span>
						给checkbox和radio组件添加label-size控制描述文字大小的参数
					</li>
					<li>
						<span class="optimize">优化</span>
						将switch和swipAction组件的震动参数设置为可选，且默认关闭
					</li>
					<li>
						<span class="fix">修复</span>
						修复rate评分组件setTimeout的参数错误
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.1.7</h2>
				</div>
				<p><code>2020-05-05</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						uView本次更新支持npm方式安装，同时对下载方式的解压包更改名称，本次升级，您需要对此做一些小改动方能正常使用，详见：
						<a href="/components/changeGuide.html" target="_blank">1.1.7升级指导</a>
					</li>
					<li>
						<span class="add">新增</span>
						增加API集中管理的示例教程，详见：<a href="/js/apimanage.html" target="_blank">API集中管理</a>
					</li>
					<li>
						<span class="add">新增</span>
						timeFrom方法，增加可选参数，可返回"xx年之前"的格式
					</li>
					<li>
						<span class="add">新增</span>
						演示项目工具栏中新增对全局guid和多久之前的演示
					</li>
					<li>
						<span class="optimize">优化</span>
						优化icon组件size参数的内部处理
					</li>
					<li>
						<span class="optimize">优化</span>
						重构cell组件，其中hover、border参数，slot名称做出了变动
					</li>
					<li>
						<span class="fix">修复</span>
						修复section组件左边竖线不会跟随字体变大的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.1.5</h2>
				</div>
				<p><code>2020-04-30</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						给verificationCode验证码倒计时组件新增倒计时防刷新和返回功能
					</li>
					<li>
						<span class="optimize">优化</span>
						优化navbar自定义导航栏嵌入的搜索框示例
					</li>
					<li>
						<span class="optimize">优化</span>
						修改基础，让其更加简单明了，易用
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.1.4</h2>
				</div>
				<p><code>2020-04-29</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						新增uView特色的基础样式类，涵盖内外边距，字体大小，颜色，flex布局等，让您化繁为简，游刃有余。本次升级，需要做变更(2行代码)，详见：<a target="_blank" href="/components/changeGuide.html">升级指导</a>
					</li>
					<li>
						<span class="add">新增</span>
						增加countDown倒计时组件获取当前剩余时间的事件和说明
					</li>
					<li>
						<span class="add">新增</span>
						给upload上传组件添加"on-list-change"、"reUplad"、"clear"事件和方法
					</li>
					<li>
						<span class="optimize">优化</span>
						将gap间隔槽默认背景改为透明色"transparent"
					</li>
					<li>
						<span class="fix">修复</span>
						修复1.1.3在uni.scss中引入基础样式导致微信小程序打包变大的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.1.3</h2>
				</div>
				<p><code>2020-04-28</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						新增uView特色的基础样式类，涵盖内外边距，字体大小，颜色，flex布局等，让您化繁为简，游刃有余。详见：<a target="_blank" href="/components/common.html">内置样式</a>
					</li>
					<li>
						<span class="optimize">优化</span>
						优化tabs组件标签的居中问题
					</li>
					<li>
						<span class="optimize">优化</span>
						将collapse的标题按压效果设置为自定义可选形式
					</li>
					<li>
						<span class="optimize">优化</span>
						改进rate组件的示例效果
					</li>
					<li>
						<span class="optimize">优化</span>
						优化grid宫格组件的hover-class按下效果
					</li>
					<li>
						<span class="optimize">优化</span>
						给empty组件添加margin-top参数
					</li>
					<li>
						<span class="fix">修复</span>
						修正toast组件的position参数拼写错误的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复http请求头某些情况下可能无效的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.1.2</h2>
				</div>
				<p><code>2020-04-27</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						新增slider滑动选择器组件，详见<a target="_blank" href="/components/slider.html">Slider滑动选择器</a>
					</li>
					<li>
						<span class="optimize">优化</span>
						为了解决某些mac电脑无法解压rar压缩包的问题，以后下载改为zip形式的压缩包
					</li>
					<li>
						<span class="optimize">优化</span>
						添加search搜索组件的blur和focus事件
					</li>
					<li>
						<span class="optimize">优化</span>
						增加section查看更多右侧的点击区域
					</li>
					<li>
						<span class="fix">修复</span>
						修复1.1.1版本swiper指示器无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复popup组件触摸穿透的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复商城左右联动模板右侧无法滑动的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.1.1</h2>
				</div>
				<p><code>2020-04-25</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						新增对vue-cli的支持，文档有详细介绍针对vue-cli创建的项目使用uView的教程
					</li>
					<li>
						<span class="fix">修复</span>
						修复宫格组件在某些安卓机型可能会错乱的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复modal组件按钮错乱的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复swiper轮播图组件在安卓上后台运行一段时间后会卡顿的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复瀑布流组件出错的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复keyboard键盘组件顶部文字提示类型有误的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.1.0</h2>
				</div>
				<p><code>2020-04-24</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						<strong>重磅推出！</strong>uView新增对HbuilderX的提示代码提示功能，用户可以在HX中通过快捷键调出组件，查看参数，事件说明等，还可以一键跳转对应组件的官方文档。
						详见<a target="_blank" href="/components/codeHint.html">uView在HX的提示代码</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增Modal模态框组件，详见<a target="_blank" href="/components/modal.html">模态框</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增压窗屏组件，可以在APP上以弹窗的形式遮盖导航栏和底部tabbar，详见<a target="_blank" href="/components/fullScreen.html">压窗屏</a>
					</li>
					<li>
						<span class="add">新增</span>
						新增内容为空的判断规则，在"$u.test.empty"中，可对各种“空”类型进行判断，详见<a target="_blank" href="/js/test.html#是否为空">empty方法</a>
					</li>
					<li>
						<span class="add">新增</span>
						http请求库新增"put"和"delete"请求
					</li>
					<li>
						<span class="add">新增</span>
						给MessageInput验证码输入组件添加width参数，可以控制输入框的大小
					</li>
					<li>
						<span class="add">新增</span>
						给upload增加width参数，可控制预览图片的大小
					</li>
					<li>
						<span class="add">新增</span>
						给noticebar组件增加圆角，内边距，为空隐藏等参数
					</li>
					<li>
						<span class="add">新增</span>
						tabs和tabsSwiper组件添加控制滑块和活动item样式的参数
					</li>
					<li>
						<span class="optimize">优化</span>
						移除divider组件的默认高度，添加上下边距控制参数
					</li>
					<li>
						<span class="optimize">优化</span>
						移除loadmore组件的默认高度，添加上下边距控制参数
					</li>
					<li>
						<span class="optimize">优化</span>
						优化请求库同时多个请求loading无法关闭的问题，将App.vue的拦截器移动到独立的js文件，并交给用户多种在js文件中读取vue的this实例的方法。
						详见<a target="_blank" href="/js/http.html">Http请求</a>
					</li>
					<li>
						<span class="optimize">优化</span>
						优化countDown倒计时组件不显示天的时候小时该显示的值
					</li>
					<li>
						<span class="optimize">优化</span>
						调整小程序分享方法为手动调用
					</li>
					<li>
						<span class="optimize">优化</span>
						优化navbar自定义导航栏组件在小程序的适配
					</li>
					<li>
						<span class="fix">修复</span>
						修复badge组件的size参数无效问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复键盘组件在微信小程序上遮罩无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复商城分类模板(左右联动)某些特情况下左边菜单点击无效的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.9</h2>
				</div>
				<p><code>2020-04-21</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						新增红包，订单图标
					</li>
					<li>
						<span class="add">新增</span>
						给empty加入slot插槽
					</li>
					<li>
						<span class="add">新增</span>
						放开grid宫格组件对列数的限制，最大可为12列
					</li>
					<li>
						<span class="optimize">优化</span>
						优化popup弹出可能会导致底层内容会滑动的问题
					</li>
					<li>
						<span class="optimize">优化</span>
						顶层设计处理组件fixed定位可能会互相覆盖的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复自定义导航栏在安卓小程序上可能会出现的高度误差
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.8</h2>
				</div>
				<p><code>2020-04-20 凌晨1点20分</code></p>
				<h2>uView已趋于稳定，进入新增和优化阶段</h2>
				<ul>
					<li>
						<span class="add">新增</span>
						给noticeBar组件新增end事件和disable-touch参数
					</li>
					<li>
						<span class="add">新增</span>
						给collapse-item手风琴组件添加change事件
					</li>
					<li>
						<span class="add">新增</span>
						给keyboard键盘组件新增可控制遮罩是否显示的参数
					</li>
					<li>
						<span class="add">新增</span>
						给popup弹窗的length参数添加百分比控制单位
					</li>
					<li>
						<span class="add">新增</span>
						给grid-item组件添加单独的事件
					</li>
					<li>
						<span class="optimize">优化</span>
						优化field组件的`error-message`参数，加入Boolean类型
					</li>
					<li>
						<span class="optimize">优化</span>
						优化popup弹窗中部弹出时的逻辑，减少用户额外的工作量
					</li>
					<li>
						<span class="optimize">优化</span>
						增大自定义导航栏返回按钮的点击区域
					</li>
					<li>
						<span class="optimize">优化</span>
						自定导航栏演示完善功能
					</li>
					<li>
						<span class="fix">修复</span>
						修复badge组件逻辑，"点"类型时，为0不显示的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.7</h2>
				</div>
				<p><code>2020-04-19</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						给badge组件添加"is-center"参数，让badge中心点与父组件右上角重合，详见<a target="_blank" href="/components/badge.html#如何让组件中心点与父组件右上角重合">说明</a>
					</li>
					<li>
						<span class="add">新增</span>
						JS工具对象转Get参数方法新增对数组属性的多种解析模式，详见<a target="_blank" href="/js/queryParams.html#arrayformat参数说明">说明</a>
					</li>
					<li>
						<span class="optimize">优化</span>
						在"manifest.json"添加声明对自定义组件的支持
					</li>
					<li>
						<span class="fix">修复</span>
						修复picker确认按钮向下滑可能报错的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.6</h2>
				</div>
				<p><code>2020-04-18</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						增加top-tips组件对自定义导航栏适配的说明，详见<a target="_blank" href="/components/topTips.html#自定义导航栏使用本组件的问题">自定义导航栏使用本组件的问题</a>
					</li>
					<li>
						<span class="add">新增</span>
						增加文档对引入scss变量的提示，详见<a target="_blank" href="/components/common.html#说明">说明</a>
					</li>
					<li>
						<span class="optimize">优化</span>
						优化easycom的引入规则，减少和其他组件库冲突的可能性，提供和"uParse"插件名称冲突的解决方案，详见<a target="_blank" href="/components/quickstart.html#_3-配置easycom组件模式">说明</a>
					</li>
					<li>
						<span class="fix">修复</span>
						修复tabs组件延后赋值，组件无效果的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复picker组件时间模式只显示部分参数时，默认值不对的问题
					</li>
					<li>
						<span class="fix">修复</span>
						改正navbar组件的title-size参数无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复search组件文档关于disabled的描述错误
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.5</h2>
				</div>
				<p><code>2020-04-17</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						重磅推出自定义导航栏组件，详见<a target="_blank" href="/components/navbar.html">Navbar 自定义导航栏</a>
					</li>
					<li>
						<span class="add">新增</span>
						增加控制弹窗组件圆角的参数
					</li>
					<li>
						<span class="add">新增</span>
						upload上传组件新增每次选择完图片后抛出on-choose-complte事件
					</li>
					<li>
						<span class="optimize">优化</span>
						为更强的自定义性，collapse组件的头部和主体样式改为用对象形式传入，请留意
					</li>
					<li>
						<span class="optimize">优化</span>
						给tabsSwiper组件添加加载更多的示例，同时修复一些问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复collapse的props参数类型问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复tabsSwiper组件延后赋值list参数报错的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复Picker在小程序上默认值可能无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						修复collapse的active-style参数报错的问题
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.4</h2>
				</div>
				<p><code>2020-04-15</code></p>
				<ul>
					<li>
						<span class="add">新增</span>
						badge组件可以自定义字体和背景颜色
					</li>
					<li>
						<span class="add">新增</span>
						新增<a target="_blank" href="/components/divider.html">Divider 分割线</a>组件
					</li>
					<li>
						<span class="add">新增</span>
						添加参数控制<a target="_blank" href="/js/http.html#何谓响应拦截？">Http请求</a>响应拦截器的返回数据格式
					</li>
					<li>
						<span class="add">新增</span>
						车牌号键盘新增"挂"字按键
					</li>
					<li>
						<span class="optimize">优化</span>
						修改演示中的图片引用为https资源
					</li>
					<li>
						<span class="optimize">优化</span>
						调整actionSheet组件的开关通过v-model绑定，方便使用
					</li>
					<li>
						<span class="optimize">优化</span>
						调整keyboard组件的开关通过v-model绑定，方便使用
					</li>
					<li>
						<span class="optimize">优化</span>
						调整popup弹出组件的开关通过v-model绑定，方便使用
					</li>
					<li>
						<span class="optimize">优化</span>
						调整picker选择组件的开关通过v-model绑定，方便使用
					</li>
					<li>
						<span class="fix">修复</span>
						条件编译抵消tabs组件在微信小程序上watch初始化时自动触发的bug
					</li>
					<li>
						<span class="fix">修复</span>
						修复keyboard键盘组件数字模式时点按钮配置无效的问题
					</li>
					<li>
						<span class="fix">修复</span>
						改正文档关于自定义图标库中截图的错误
					</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.3</h2>
				</div>
				<p><code>2020-04-14</code></p>
				<ul>
					<li>新增u-button组件对uni-appbutton组件开放能力的对接</li>
					<li>新增允许field组件的maxlength参数为字符串数值形式</li>
					<li>
						修复文档关于upload组件的参数错误
					</li>
					<li>修复cell组件右箭头方向参数无效的问题</li>
					<li>调整icon图标的使用，防止图标可能存在不垂直居中的情况</li>
					<li>文档添加右侧的tabs组件演示</li>
					<li>修复tabs组件演示可能会产生混乱的问题</li>
					<li>修复HX2.6.11版报"@/store/$u.mixin.js"不存在的警告</li>
					<li>其他多项修复和特性的更新</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.2</h2>
				</div>
				<p><code>2020-04-13</code></p>
				<!-- <h2>修复Bug，整理文档的多处友好提示</h2> -->
				<ul>
					<li>修复文档对section组件右侧内容点击事件的遗漏</li>
					<li>修复tabs组件文档参数描述错误</li>
					<li>
						快速上手中示例有误
					</li>
					<li>swiper的show-title参数改为title，增加3d模式对两边边距的控制参数</li>
					<li>验证规则对手机号的正则有误</li>
					<li>修复文档演示中swiper无法鼠标滑动的问题</li>
					<li>调整cell-group对标题样式的定义方式</li>
					<li>增加参数可以控制radio和checkbox的大小</li>
					<li>增加文档演示区域在宽屏下的尺寸</li>
					<li>调整原tabs组件为tabsSwiper组件，新增简洁版tabs组件</li>
					<li>其他多项修复和特性的更新</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.1</h2>
				</div>
				<p><code>2020-04-12</code></p>
				<!-- <h2>修复Bug，整理文档的多处友好提示</h2> -->
				<ul>
					<li>修复swipeAction演示可能由于操作引起的错误</li>
					<li>完善文档对checkbox，radio的描述</li>
					<li>
						添加文档对演示效果的友好提示，详见<a target="_blank" href="/components/sticky.html">Sticky 吸顶</a>(电脑端查看)
					</li>
					<li>修改某些图标名，把中划线改成下划线，统一风格</li>
					<li>修复宫格组件在某些特定机型可能会混乱的问题</li>
					<li>改正文档的多处错别字，感谢同学们的细心观察</li>
					<li>其他多项修复和特性的更新</li>
				</ul>
			</div>
		</li>
		<li class="u-timeline-item">
			<div class="u-timeline-item-tail"></div>
			<div class="u-timeline-item-head u-timeline-item-head-blue"></div>
			<div class="u-timeline-item-content">
				<div class="anchor">
					<h2>1.0.0</h2>
				</div>
				<p><code>2020-04-11</code></p>
				<h2>正式发布，进入公测阶段，如需交流反馈，请加QQ群：1042987248</h2>
				<ul>
					<li>包含50+组件</li>
					<li>众多JS工具库</li>
					<li>精致模板，众多模板正在加入中</li>
				</ul>
			</div>
		</li>
	</ul>
</div>


<style>
	.doc-update {
		padding: 10px 5px;
		position: relative;
		line-height: 1.5;
		color: #515a6e;
	}
	
	.u-timeline {
		padding-left: 0;
	}

	.u-timeline-item-tail {
		height: 100%;
		border-left: 1px solid #e8eaec;
		position: absolute;
		left: 7px;
		top: 0;
	}

	.u-timeline-item-head {
		width: 13px;
		height: 13px;
		background-color: #fff;
		border-radius: 50%;
		border: 1px solid transparent;
		position: absolute;
	}

	.u-timeline-item-head-blue {
		border-color: #2d8cf0;
		color: #2d8cf0;
	}

	.doc-update .u-timeline .u-timeline-item-content {
		top: -4px;
	}

	.u-timeline-item-content {
		padding: 1px 1px 10px 28px;
		font-size: 14px;
		position: relative;
		top: -3px;
	}

	.doc-update h2 {
		font-size: 18px;
		font-weight: 400;
		display: inline-block;
		margin: 0;
		border: none;
		color: #515a6e;
	}

	.page .doc-update p {
		margin: 5px 0!important;
		font-size: 14px;
	}

	.doc-update code {
		margin: 8px 0!important;
		font-size: 85%;
		background-color: #fff5f5!important;
		border-radius: 3px;
		font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
		color: #fa795e!important;
		padding: 2px 4px;
	}

	.doc-update ol ul:not([class^=u-]),
	.doc-update ul ul:not([class^=u-]) {
		list-style-type: circle;
	}

	.doc-update li:not([class^=u-]) {
		margin-bottom: 5px;
		font-size: 14px;
	}

	a {
		color: #2d8cf0;
		background: 0 0;
		text-decoration: none;
		outline: 0;
		cursor: pointer;
		transition: color .2s ease;
	}

	.u-timeline-item {
		margin: 0 !important;
		padding: 0 0 12px;
		list-style: none;
		position: relative;
	}
	
	.u-timeline-item span {
		display: inline-block;
		padding: 4px 8px;
		border-radius: 4px;
		color: #fff;
		font-size: 12px;
		border-width: 1px;
		border-style: solid;
		line-height: 1;
		margin-right: 5px;
	}
	
	.u-timeline-item span.fix {
		color: rgb(255, 153, 0);
		background-color: rgb(253, 246, 236);
		border-color: rgb(252, 189, 113);
	}
	
	.u-timeline-item span.add {
		color: rgb(25, 190, 107);
		background-color: rgb(219, 241, 225);
		border-color: rgb(113, 213, 161);
	}
	
	.u-timeline-item span.optimize {
		color: rgb(41, 121, 255);
		background-color: rgb(236, 245, 255);
		border-color: rgb(160, 207, 255);
	}
</style>
