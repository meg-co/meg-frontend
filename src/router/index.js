import Vue from 'vue'
import VueRouter from 'vue-router'
import requireAuth from "../controllers/auth";

const ROUTE_LOGIN = '/login';

async function checkAuth(to, from, next) {
  /**
   * Vue specific callback for checking authentication
   */
  if (!await requireAuth()) {
    next({
      path: ROUTE_LOGIN,
      query: { redirect: to.fullPath }
    })
  }
  next();
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
      path: '/messages',
      name: 'Messages',
      beforeEnter: checkAuth,
      component: () => import(/* webpackChunkName: "messages" */ '../views/Messages.vue'),

    }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
