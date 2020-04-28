import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";
import Login from "../views/login/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: App,
    children: [
      {
        path: "/",
        component: Login,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
