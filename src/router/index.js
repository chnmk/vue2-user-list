import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersListView from '../views/UsersListView.vue'
import posts from '../views/posts.vue'
import albums from '../views/albums.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: UsersListView
    },
    {
      path: '/users/:id',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UserPageView.vue'),
      children: [
        {
          path: '/users/:id/posts',
          name: 'posts',
          component: posts
        },
        {
          path: '/users/:id/albums',
          name: 'albums',
          component: albums
        }
      ]
    }
  ]
})

export default router
