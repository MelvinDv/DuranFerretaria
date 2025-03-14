import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/purchase-summary",
    name: "PurchaseSummary",
    component: () => import("../views/PurchaseSummary.vue"),
  },
  {
    path: "/purchase",
    name: "Purchase",
    component: () => import("../views/Purchase.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
