import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// var App = {
//   template: '<div>app</div>'
// }

new Vue({
  // 템플릿 속성을 정의했을 때 내부적으로 render함수가 실행된다
  render: h => h(App),
  // 최신 문법
  // components: {
  //   'app' : App
  // }
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App),
// })