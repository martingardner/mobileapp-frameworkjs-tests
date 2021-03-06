import Vue from "vue";
//import VueRouter from "vue-router";
import { IonicVueRouter } from "@ionic/vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Encryption from "@/views/Encryption.vue";

//Vue.use(VueRouter);
Vue.use(IonicVueRouter); //added line

export default new IonicVueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/encryption",
      name: "encryption",
      component: Encryption
    }
  ]
});
