import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home-Page";
import Billing from "@/views/Billing-Page";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "Billing",
    component: Billing,
    path: "/billing",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact",
});

export default router;
