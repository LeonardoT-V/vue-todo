import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import { pathList } from './utils/listOfPath'

// [
//   { path: '/', component: HelloWorld, name:'home' },
//   { path: '/app', component: Cas, name: 'app' }
// ]

const router = createRouter({
  history: createWebHistory(),
  routes: pathList.map(route => Object.create({path: route.path, component: route.component, name: route.name}))
})

createApp(App).use(router).mount('#app')
