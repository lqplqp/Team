// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import HelloWorld from './components/HelloWorld'
import ModelList from './components/ModelList'
import ModelDetail from './components/ModelDetail'
import router from './router'


Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {HelloWorld, App, ModelList , ModelDetail},
  template: '<ModelDetail/>'
})
