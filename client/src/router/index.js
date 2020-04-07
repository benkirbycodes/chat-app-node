import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import convo from "../views/Convo.vue";
// @ts-ignore
import convos from "../views/Convos.vue";
// @ts-ignore
import login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "convos",
    component: convos
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/convos/:convoId",
    name: "convo",
    component: convo
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
