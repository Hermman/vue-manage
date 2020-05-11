import Vue from "vue";
import VueRouter from "vue-router";
// import App from "../App";
import Login from "../views/login/login";
import Home from "../views/home";
import VTable from "../views/table";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "/table",
        name: "v-table",
        component: VTable,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
