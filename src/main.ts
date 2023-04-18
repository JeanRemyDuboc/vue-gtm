import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createGtm } from '@gtm-support/vue-gtm';

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
router.beforeEach((to, from, next) => {
  // Get the page title from the route's 'name' attribute (if it exists)
  if(typeof to.name === "string"){
    const title = to.name
    // If the route has a title, set it as the page title of the document/page
    if (title) {
      document.title =  title
    }
  }
  // Continue resolving the route
  next()
})

app.use(createPinia())
app.use(router)
app.use(
  createGtm({
    id: "GTM-T3BRZPM",
    vueRouter: router,
  })
)
app.mount('#app')
