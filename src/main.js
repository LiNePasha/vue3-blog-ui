import { createApp } from 'vue';
import App from '@/views/App';
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/styles/main.css';
import { router } from './router';

createApp(App)
  .use(router)
  .mount('#app');
