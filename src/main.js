import { createApp } from "vue";
import Main from "./App.vue";

import UserApp from '../apps/user/App.vue';
import AdminApp from '../apps/admin/App.vue';

const main = createApp(Main);

main.component("UserApp", UserApp);
main.component("AdminApp", AdminApp);

main.mount("#main");