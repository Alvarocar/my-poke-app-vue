import { createApp } from 'vue'
import App from '@src/App.vue'
import { store } from '@src/store'
import Router from '@src/router'

createApp(App)
.use(store)
.use(Router)
.mount('#app')