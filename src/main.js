import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";
import "./index.css";

//const socket = io(process.env.SERVERURL || "http://localhost:3000");
const socket = io("https://little-night-5607.fly.dev/");

createApp(App)
  .use(VueSocketIOExt, socket, {
    store, // vuex store instance
    actionPrefix: "SOCKET_", // keep prefix in uppercase
    eventToActionTransformer: (actionName) => actionName, // cancel camel case
  })
  .use(store)
  .use(router)
  .mount("#app");
