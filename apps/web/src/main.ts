import { createApp } from 'vue';
import { router } from '~/router/router';
import App from './App.vue';
import pinia from '~/store';

// md样式支持
import '~/style/markdown.less';
// 引入windicss
import 'virtual:windi.css';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
