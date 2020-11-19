import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout";
const routes = [
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },

  {
    path: "/index",
    name: "index",
    component: Layout,
    children: [
      {
        path: "home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home.vue")
      },
      {
        path: "vab",
        name: "vab",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Form.vue"),
        children: [
          {
            path: "form",
            name: "form",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/Form.vue")
          }
        ]
      },
      {
        path: "403",
        name: "403",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/403.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
