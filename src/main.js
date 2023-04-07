import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";

import "normalize.css";
import "./scss/main.scss";

createApp(App).use(store).use(router).mount("#app");

import Vue from "vue";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;

// import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

// Vue.use(VueMaterial);

// new Vue({
//   el: "#app",
//   components: { App },
//   template: "<App/>",
// });
