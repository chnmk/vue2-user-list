<template>
  <div class="users-list">
    <div class="users-list__post" v-for="user, id in users">
      <p class="users-list__text">
        <div class="users-list__text-name">
          {{ user.name }}
        </div>
      </p>
      <router-link class="users-list__posts-button" 
        :to="{ name: 'posts', params: { id: id }}"
        tag="button">
          Posts
      </router-link>
      <router-link class="users-list__albums-button" 
        :to="{ name: 'albums', params: { id: id }}"
        tag="button">
          Albums
      </router-link>
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
