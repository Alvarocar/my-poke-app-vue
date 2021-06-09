import { createApp } from 'vue'
import App from '@src/App.vue'
import { store } from '@src/store'

createApp(App)
.use(store)
.mount('#app')