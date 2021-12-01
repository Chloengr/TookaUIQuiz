import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { jwtInterceptor } from '@/axios';

jwtInterceptor();

createApp({
  render: () => h(App),
})
  .use(router)
  .mount('#app')
