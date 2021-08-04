## Transition 动画 <to-api/>

<demo-model url="/pages/componentsA/transition/transition"></demo-model>

该组件用于组件的动画过渡效果。

### 平台差异说明

|App|H5|微信小程序|支付宝小程序|百度小程序|头条小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|


### API

### Props

| 参数          | 说明            | 类型            | 默认值             |  可选值   |
|------------- |---------------- |---------------|------------------ |-------- |
| show         | 是否展示组件 | Boolean | true | false |
| mode         | 使用的动画模式 | String | fade | true |
| duration     | 动画的执行时间，单位ms | String \| Number  | 300 | - |
| timingFunction  | 使用的动画过渡函数，见上方说明 | String  | ease-out | - |
| customStyle  | 自定义样式 | Object  | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
| :- | :- | :- |
| before-enter | 进入前触发 | - |
| enter        | 进入中触发 | - |
| after-enter  | 进入后触发 | - |
| before-leave | 离开前触发 | - |
| leave        | 离开中触发 | - |
| after-leave  | 离开后触发 | - |


<style scoped>
h3[id=events] + table thead tr th:nth-child(2){
	width: 33.3%;
}

h3[id=methods] + p + table thead tr th:nth-child(2){
	width: 70%;
}
</style>
