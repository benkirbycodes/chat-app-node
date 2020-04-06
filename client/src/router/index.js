import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Convo from "../views/Convo.vue";
// @ts-ignore
import Convos from "../views/Convos.vue";
// @ts-ignore
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "convos",
    component: Convos
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/convo/:convoId",
    name: "convo",
    component: Convo
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
