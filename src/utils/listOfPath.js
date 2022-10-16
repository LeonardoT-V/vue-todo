import HelloWorld from '../components/HelloWorld.vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
// import Cas from '../components/Casa.vue'

// import {Home, Login} from '../pages/index'

import { HomeIcon, CalendarIcon } from '@heroicons/vue/24/outline'




export const pathList = [
  { icon: HomeIcon, name: 'Home', path: '/', component: Home },
  { icon: CalendarIcon, name: 'Calendar', path: '/calendar', component: HelloWorld },
  { name: 'Login', path: '/login', component: Login },
]

