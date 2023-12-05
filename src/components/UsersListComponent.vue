<template>
  <div class="users-wrapper">
    <h1 class="users-wrapper__page-title">User List</h1>
    <div class="users-list">
      <div class="users-list__post" v-for="user in users" :key="users.id">
        <div class="users-list__text">
          <p class="users-list__username">
             {{ user.username }}
          </p>
          <p class="users-list__email">
            {{ user.email }}
          </p>
          <p class="users-list__name">
            {{ user.name }}
          </p>
        </div>
        <router-link class="users-list__posts-button" 
          :to="{ name: 'posts', params: { id: user.id }}"
          tag="button">
            Posts
        </router-link>
        <router-link class="users-list__albums-button" 
          :to="{ name: 'albums', params: { id: user.id }}"
          tag="button">
            Albums
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'PublicLayout',
  methods: {
      ...mapActions({
      fetch: 'fetchData'
    })
  },
  mounted() {
    this.fetch()
  },
  computed: {
    ...mapGetters([
      'getAlbums',
      'getPostsTitle',
      'getPostsbody'
    ]),
    ...mapState({
        users: state => state.userData.users,
    })
  },
}
</script>

<style lang="scss">
@import '../assets/userslist.module.scss'
</style>
