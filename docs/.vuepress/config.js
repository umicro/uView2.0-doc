module.exports = {
    title: 'uView 2.0 - 全面兼容nvue的uni-app生态框架 - uni-app UI框架', // 设置网站标题
    description: 'uView UI，是uni-app生态最优秀的UI框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水',
    base: '/u-view2.0-doc/',
    markdown: {
        //lineNumbers: true
    },
    evergreen: true, // 只适配现代浏览器
    // <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    configureWebpack: (config, isServer) => {
        // 只有在发布(isServer=true)的时候才进行此修改操作，否则在本地预览时出问题
        if (isServer) {
            // 修改客户端的 webpack 配置
            // 加入一个时间戳，让每次编译时，文件都不一样，也即每次发版本，都强行更新所有文件
            return {
                output: {
                    filename: `assets/js/[name].${+ new Date()}.[chunkhash].js`,
                }
            }
        }
    },
    head: [
        ['meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        }],
        ['meta', {
            name: 'keywords',
            content: 'uview,uView,uviewui,uview ui,uviewUI,uViewui,uViewUI,uView UI,uni ui,uni UI,uni-app ui框架,uni-app UI框架,uniapp ui,ui,UI框架,uniapp ui框架,uniapp UI'
        }],
    ],

    themeConfig: {
        baseUrl: 'https://api.uviewui.com',
        search: true, // 是否显示顶部搜索框
        searchPlaceholder: '搜索文档关键字',
        sidebarDepth: 0,
        // lastUpdated: '上次更新时间',
        nav: [{
            text: '指南',
            link: '/guide/demo'
        }, {
            text: '组件',
            link: '/components/intro'
        }, {
            text: 'JS',
            link: '/js/intro'
        }, {
            text: '模板',
            link: '/layout/intro'
        },
            // {
            // 	text: '课程',
            // 	link: '/course/promise'
            // },
            {
                text: '资源',
                link: '/components/resource'
            },
            {
                text: '关于我们',
                link: '/cooperation/about'
            }, {
                text: 'GitHub',
                link: 'https://github.com/YanxinNet/uView'
            }, {
                text: 'Gitee',
                link: 'https://gitee.com/xuqu/uView'
            }],
        sidebar: {
            '/components/': [{
                title: '起步',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/components/addQQGroup', '加QQ群交流反馈'],
                    ['/components/intro', '介绍'],
                    ['/components/install', '安装'],
                    ['/components/setting', '配置'],
                    ['/components/quickstart', '快速上手'],
                    ['/components/common', '内置样式'],
                    ['/components/feature', '注意事项'],
                    ['/components/nvue', 'Nvue排错指南'],
                    ['/components/changelog', '更新日志'],
                    ['/components/changeGuide', '升级指南'],
                ]
            },
                {
                    title: '组件',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [{
                        title: '基础组件',
                        collapsable: false,
                        sidebarDepth: 0,
                        children: [
                            '/components/color',
                            '/components/icon',
                            '/components/image',
                            '/components/button',
                            '/components/text',
                            '/components/layout',
                            '/components/cell',
                            '/components/badge',
                            '/components/tag',
                            '/components/loadingIcon',
                            '/components/loadingPage',
                        ]
                    },
                        {
                            title: '表单组件',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                '/components/form',
                                '/components/calendar',
                                '/components/keyboard',
                                '/components/picker',
                                '/components/datetimePicker',
                                '/components/rate',
                                '/components/search',
                                '/components/numberBox',
                                '/components/upload',
                                '/components/code',
                                '/components/input',
                                '/components/textarea',
                                '/components/checkbox',
                                '/components/radio',
                                '/components/switch',
                                '/components/slider',
                                '/components/album',
                            ]
                        },
                        {
                            title: '数据组件',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                '/components/list',
                                '/components/circleProgress',
                                '/components/lineProgress',
                                '/components/table',
                                '/components/countDown',
                                '/components/countTo',
                            ]
                        },
                        {
                            title: '反馈组件',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                '/components/tooltip',
                                '/components/actionSheet',
                                '/components/alert',
                                '/components/toast',
                                '/components/noticeBar',
                                '/components/notify',
                                '/components/swipeAction',
                                '/components/collapse',
                                '/components/popup',
                                '/components/modal',
                            ]
                        },
                        {
                            title: '布局组件',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                '/components/scrollList',
                                '/components/line',
                                '/components/overlay',
                                '/components/noNetwork',
                                '/components/grid',
                                '/components/swiper',
                                '/components/skeleton',
                                '/components/sticky',
                                '/components/divider',
                            ]
                        },
                        {
                            title: '导航组件',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                // '/components/dropdown',
                                '/components/tabbar',
                                '/components/backTop',
                                '/components/navbar',
                                '/components/tabs',
                                // '/components/tabsSwiper',
                                '/components/subsection',
                                '/components/indexList',
                                '/components/steps',
                                '/components/empty',
                            ]
                        },
                        {
                            title: '其他组件',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                '/components/parse',
                                '/components/codeInput',
                                // '/components/avatarCropper',
                                '/components/loadMore',
                                '/components/readMore',
                                // '/components/lazyLoad',
                                '/components/gap',
                                '/components/avatar',
                                '/components/link',
                                '/components/transition',
                            ]
                        },
                    ]
                },
            ],
            '/guide': [{
                title: '开发指南',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/guide/demo', '效果演示'],
                    //	['/guide/addQQGroup', '加QQ群交流反馈'],
                    ['/guide/customIcon', '扩展自定义图标库'],
                    ['/guide/theme', '自定义主题'],
                    ['/guide/i18n', '多语言切换'],
                    ['/guide/globalVariable', '全局变量的实现'],
                    ['/guide/codeHint', 'HBuilder X代码提示'],
                    ['/guide/design', '设计理念'],
                    ['/guide/note', '注意事项'],
                ]
            }],
            '/layout': [{
                title: '起步',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/layout/intro', '介绍'],
                ]
            }, {
                title: '部件',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/layout/coupon', 'Coupon 优惠券'],
                ]
            }, {
                title: '页面',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/layout/wxCenter', '微信个人中心页'],
                    ['/layout/keyboardPay', '自定义键盘支付'],
                    ['/layout/menu', '垂直分类'],
                    ['/layout/SubmitBar', '提交订单栏'],
                    ['/layout/comment', '评论列表'],
                    ['/layout/order', '订单列表'],
                    ['/layout/login', '登录界面'],
                    ['/layout/address', '收货地址'],
                    ['/layout/citySelect', '城市选择'],
                ]
            }],
            '/js': [{
                title: '开发指南',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/js/intro', '介绍'],
                    ['/js/fastUse', '便捷工具'],
                ]
            }, {
                title: '网络',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/js/http', 'Http请求'],
                    ['/js/apiManage', 'API集中管理']
                ]
            }, {
                title: '工具库',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/js/debounce', '节流防抖'],
                    ['/js/deepClone', '对象深度克隆'],
                    ['/js/deepMerge', '对象深度合并'],
                    ['/js/time', '时间格式化'],
                    ['/js/route', '路由跳转'],
                    ['/js/randomArray', '数组乱序'],
                    ['/js/guid', '全局唯一标识符'],
                    ['/js/colorSwitch', '颜色转换'],
                    ['/js/color', '颜色值'],
                    ['/js/queryParams', '对象转URL参数'],
                    ['/js/test', '规则校验'],
                    ['/js/md5', 'md5加密'],
                    ['/js/random', '随机数值'],
                    ['/js/trim', '去除空格'],
                    ['/js/getRect', '节点布局信息'],
                    ['/js/mpShare', '小程序分享'],
                ]
            }],
            '/course': [{
                title: '系列课程',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/course/promise', 'Promise入门到精通'],
                ]
            }]
        },
        logo: '/common/logo.png',
        // 需要显示H5预览的地址集合
        simulatorUrl: [
            '/components/intro',
            '/components/install',
            '/components/quickstart',
            '/components/common',
            '/components/changelog',
            '/components/line',
            '/components/color',
            '/components/icon',
            '/components/button',
            '/components/text',
            '/components/layout',
            '/components/cell',
            '/components/tabbar',
            '/components/badge',
            '/components/divider',
            '/components/tag',
            '/components/loadingIcon',
            '/components/loadingPage',
            '/components/slider',
            '/components/album',
            '/components/keyboard',
            '/components/picker',
            '/components/datetimePicker',
            '/components/rate',
            '/components/search',
            '/components/numberBox',
            '/components/upload',
            '/components/code',
            '/components/input',
            '/components/tabsSwiper',
            '/components/checkbox',
            '/components/textarea',
            '/components/radio',
            '/components/switch',
            '/components/modal',
            '/components/list',
            '/components/circleProgress',
            '/components/lineProgress',
            '/components/table',
            '/components/countDown',
            '/components/countTo',
            '/components/tooltip',
            '/components/actionSheet',
            '/components/alert',
            '/components/toast',
            '/components/noticeBar',
            '/components/notify',
            '/components/collapse',
            '/components/popup',
            '/components/swipeAction',
            '/components/overlay',
            '/components/noNetwork',
            '/components/grid',
            '/components/swiper',
            '/components/skeleton',
            '/components/sticky',
            '/components/tabs',
            '/components/indexList',
            '/components/subsection',
            '/components/steps',
            '/components/empty',
            '/js/apiManage',
            '/components/codeInput',
            '/components/changeGuide',
            '/components/avatarCropper',
            '/components/loadMore',
            '/components/readMore',
            '/components/scrollList',
            '/components/link',
            '/components/transition',
            '/components/lazyLoad',
            '/components/gap',
            '/components/avatar',
            '/components/loading',
            '/layout/menu',
            '/components/image',
            '/layout/coupon',
            '/layout/SubmitBar',
            '/layout/comment',
            '/layout/order',
            '/layout/intro',
            '/layout/wxCenter',
            '/layout/keyboardPay',
            '/layout/login',
            '/layout/address',
            '/js/time',
            '/js/intro',
            '/js/fastUse',
            '/js/http',
            '/js/route',
            '/js/randomArray',
            '/js/guid',
            '/js/colorSwitch',
            '/js/color',
            '/js/queryParams',
            '/js/test',
            '/js/md5',
            '/js/random',
            '/js/trim',
            '/js/getRect',
            '/js/mpShare',
            '/components/navbar',
            '/components/calendar',
            '/components/form',
            '/components/backTop',
            '/js/deepMerge',
            '/js/deepClone',
            '/layout/citySelect',
            '/guide/theme',
            '/components/parse',
            '/js/debounce',
            '/guide/i18n',
            '/components/dropdown',
            '/course/promise'
        ],
    }
}
