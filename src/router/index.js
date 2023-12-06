import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersListView from '../views/UsersList.vue'
import posts from '../views/PostsList.vue'
import albums from '../views/AlbumsList.vue'

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
      component: () => import('../views/UserPage.vue'),
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
