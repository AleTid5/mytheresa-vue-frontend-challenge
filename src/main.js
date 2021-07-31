import { createApp } from "vue";
import App from "./App";
import Router from "./router";
import VuexStore from "./stores";

createApp(App).use(Router).use(VuexStore).mount("#app");
