(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{318:function(t,a,e){},408:function(t,a,e){"use strict";e(318)},527:function(t,a,e){"use strict";e.r(a);e(408);var s=e(22),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"input-输入框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-输入框"}},[t._v("#")]),t._v(" Input 输入框 "),e("to-api")],1),t._v(" "),e("demo-model",{attrs:{url:"/pages/componentsC/input/input"}}),t._v(" "),e("p",[t._v("去除"),e("code",[t._v("fixed")]),t._v("、"),e("code",[t._v("showWordLimit")]),t._v("、"),e("code",[t._v("showConfirmBar")]),t._v("、"),e("code",[t._v("disableDefaultPadding")]),t._v("、"),e("code",[t._v("autosize")]),t._v("字段")]),t._v(" "),e("p",[t._v("此组件为一个输入框，默认没有边框和样式，是专门为配合表单组件"),e("RouterLink",{attrs:{to:"/components/form.html"}},[t._v("u-form")]),t._v("而设计的，利用它可以快速实现表单验证，输入内容，下拉选择等功能。")],1),t._v(" "),e("p",[e("strong",[t._v("注意：")]),t._v(" 当您仅是需要一个输入框的话，可以考虑使用"),e("RouterLink",{attrs:{to:"/components/field.html"}},[t._v("u-field")]),t._v("组件，而如果是一个表单组，比如有多个输入框一起，且需要验证功能的时候，\n应该在"),e("code",[t._v("u-form")]),t._v("中嵌套"),e("code",[t._v("u-form-item")]),t._v("，再嵌套"),e("code",[t._v("u-input")]),t._v("去实现。")],1),t._v(" "),e("h3",{attrs:{id:"平台差异说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平台差异说明"}},[t._v("#")]),t._v(" 平台差异说明")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("App")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("H5")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("微信小程序")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("支付宝小程序")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("百度小程序")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("头条小程序")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("QQ小程序")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("√")])])])]),t._v(" "),e("h3",{attrs:{id:"基本使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),e("ul",[e("li",[t._v("通过"),e("code",[t._v("value")]),t._v("绑定输入框的值")]),t._v(" "),e("li",[t._v("通过"),e("code",[t._v("type")]),t._v("设置输入框的类型，默认text")]),t._v(" "),e("li",[t._v("通过"),e("code",[t._v("placeholder")]),t._v("设置输入框为空时的占位符")]),t._v(" "),e("li",[t._v("通过"),e("code",[t._v("border")]),t._v("配置是否显示输入框的边框")]),t._v(" "),e("li",[t._v("绑定"),e("code",[t._v("@change")]),t._v("事件")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u--input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("请输入内容"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("border")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("surround"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("change"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u--input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tvalue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"输入框的类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入框的类型"}},[t._v("#")]),t._v(" 输入框的类型")]),t._v(" "),e("p",[t._v("综述：输入框的类型可通过配置"),e("code",[t._v("type")]),t._v("来设置：")]),t._v(" "),e("ol",[e("li",[t._v("text-文本输入键盘。")]),t._v(" "),e("li",[t._v("number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数。")]),t._v(" "),e("li",[t._v("idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序。")]),t._v(" "),e("li",[t._v("digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序。")])]),t._v(" "),e("h4",{attrs:{id:"text模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#text模式"}},[t._v("#")]),t._v(" Text模式")]),t._v(" "),e("p",[t._v("将"),e("code",[t._v("type")]),t._v("设置为"),e("code",[t._v("text")]),t._v("，此种情况为一个单纯的输入框，但是还可以将其设置为"),e("code",[t._v("number")]),t._v("、"),e("code",[t._v("idcard")]),t._v("、"),e("code",[t._v("digit")]),t._v("等值，需要考虑兼容性，见上方说明。")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":border")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("border"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tvalue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\ttype"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\tborder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'surround'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h4",{attrs:{id:"password模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#password模式"}},[t._v("#")]),t._v(" Password模式")]),t._v(" "),e("p",[t._v("密码设置为独立字段属性"),e("code",[t._v("password")]),t._v("，如果"),e("code",[t._v(":password='true'")]),t._v("此时输入内容将会用点替代：")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":password")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("suffix-icon")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lock-fill"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tvalue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h4",{attrs:{id:"前后图标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前后图标"}},[t._v("#")]),t._v(" 前后图标")]),t._v(" "),e("ul",[e("li",[t._v("全后置图标可自由设置样式信息。")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u--input")]),t._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("前置图标"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("prefixIcon")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("search"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("prefixIconStyle")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("font-size: 22px;color: #909399"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u--input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u--input")]),t._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("后置图标"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("suffixIcon")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("map-fill"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("suffixIconStyle")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("color: #909399"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u--input")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h3",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("h3",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入的值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number | String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入框类型，见上方说明")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("number / idcard / digit")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用输入框")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disabledColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("禁用状态时的背景色")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("#f5f7fa")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("clearable")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示清除控件")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("password")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否密码类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("maxlength")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最大输入长度，设置为 -1 的时候不限制最大长度")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入框为空时的占位符")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("placeholderClass")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("input-placeholder")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("placeholderStyle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('指定placeholder的样式，字符串形式，如"color: red;"')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String | Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("showWordLimit")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效')]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("confirmType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置右下角按钮的文字，兼容性详见uni-app文档")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("done")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("send | search | next | go | done")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("confirmHold")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("点击键盘右下角按钮时是否保持键盘不收起，H5无效")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("holdKeyboard")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("focus时，点击页面的时候不收起键盘，微信小程序有效")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("focus")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("自动获取焦点，在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("autoBlur")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disableDefaultPadding")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cursor")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定focus时光标的位置")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("cursorSpacing")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入框聚焦时底部与键盘的距离")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("30")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("selectionStart")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("光标起始位置，自动聚集时有效，需与selection-end搭配使用")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("selectionEnd")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("光标结束位置，自动聚集时有效，需与selection-start搭配使用")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("adjustPosition")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("键盘弹起时，是否自动上推页面")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("inputAlign")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入框内容对齐方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("left")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("left | center | right")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("autosize")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否自适应内容高度，只对type=textarea有效，可传入对象,如{ maxHeight: 100, minHeight: 50 }")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("fontSize")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入框字体的大小")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("15px")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("color")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入框字体颜色")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("#606266")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("prefixIcon")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入框前置图标")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("prefixIconStyle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("前置图标样式，对象或字符串")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String | Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("suffixIcon")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入框后置图标")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("suffixIconStyle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("后置图标样式，对象或字符串")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String | Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("border")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("边框类型，surround-四周边框，bottom-底部边框，none-无边框")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("surround")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("bottom | none")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("readonly")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("shape")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入框形状，circle-圆形，square-方形")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("square")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("circle")])])])])],1)}),[],!1,null,"33467922",null);a.default=n.exports}}]);