<template>
  <div class="user-page">
      <nav class="user-nav">
        <!-- Данные о текущем пользователе: -->
        <div class="user-nav__username" v-if="current_user != undefined">
          {{ current_user.username }}
        </div>
        <div class="user-nav__email" v-if="current_user != undefined">
          {{ current_user.email }}
        </div>
        <!-- 
          Кнопки-ссылки
          Через v-if кнопки posts и albums отключаются на своих страницах:
        -->
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
        <!-- Тут отображается либо страница альбомов, либо страница постов: -->
        <router-view></router-view>
      </div>
  </div>
</template>


<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'UserPage',

  // Methods и mounted нужны на каждой странице, 
  // чтобы данные сразу загружались при её перезагрузке.
  methods: {
      ...mapActions({
      fetch: 'fetchData'
    })
  },
  mounted() {
    this.fetch()
  },

  // Более читаемый вариант через mapState вместо mapGetters, 
  // чтобы не пришлось передавать текущий id в vuex и фильтровать его там:
  data() {
    return {
        currentUser: this.$route.params.id,
    }
  },
  computed: {
    ...mapState({
        current_user(state) {
          // [0] - потому что это массив из одного объекта
          return state.userData.users.filter(x => x.id == this.currentUser)[0]
        },
    }),
  },
}
</script>

<style lang="scss">
@import '../assets/userpage.module.scss'
</style>
