import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createGtm } from '@gtm-support/vue-gtm';

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(
  createGtm({
    id: "GTM-T3BRZPM",
    vueRouter: router
  })
)
app.mount('#app')
