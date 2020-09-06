import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
//import EventShow from "../views/EventShow.vue";
///import EventCreate from "../views/EventCreate.vue";
//import  User from "../views/User.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-show',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EventShow.vue'),
    props: true
  },
  {
    path: '/event/create',
    name: 'event-create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EventCreate.vue')
  },
  {
    path: '/user/:username',
    name: 'user-detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/User.vue'),
    props: true
  },
  {
    name: '404',
    path: '/404',
    component: () =>
      import(/*webpackChunkName: "about" */ '../views/NotFound.vue'),
    props: true
  },
  {
    name: 'network-issue',
    path: '/network-issue',
    component: () =>
      import(/*webpackChunkName: "about" */ '../views/NetworkIssue.vue')
  },
  {
    path: '*',
    redirect: { name: '404', params: { resource: 'page' } }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
