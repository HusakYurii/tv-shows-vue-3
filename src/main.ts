import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/items-carousel.css";
import "./assets/navigation-bar.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// import "bootstrap/dist/js/bootstrap.js";
