<template>
    <div class="user-page">
        <nav class="user-nav">
          <div class="user-nav__username" v-if="current_user != undefined">
            {{ current_user.username }}
          </div>
          <div class="user-nav__email" v-if="current_user != undefined">
            {{ current_user.email }}
          </div>
          <router-link
            class="user-nav__home-button"
            to="/"
            tag="button">
              Home
          </router-link>
          <router-link
            v-if="$route.name != 'posts'"
            class="user-nav__posts-button"
            :to="{ name: 'posts' }"
            tag="button">
              Posts
          </router-link>
          <router-link 
            v-if="$route.name != 'albums'"
            class="user-nav__albums-button"
            :to="{ name: 'albums' }"
            tag="button">
              Albums
          </router-link>
        </nav>
        <div class="display-content">
          <router-view></router-view>
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
  data() {
    return {
        currentUser: this.$route.params.id,
    }
  },
  computed: {
    //Более читаемый вариант через mapState вместо mapGetters, чтобы не пришлось передавать аргумент в store:
    ...mapState({
        current_user(state) {
          return state.userData.users.filter(x => x.id == this.currentUser)[0]
        },
    }),
  },
}
</script>

<style lang="scss">
@import '../assets/userpage.module.scss'
</style>
