<template>
    <div class="user-posts">
        <div class="user-posts__post" v-for="post in posts" :key="posts.id">
            <div class="user-posts__title">
                {{ post.title }}
            </div>
            <hr class="user-posts__sep">
            <div class="user-posts__text">
                {{ post.body }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PostsList',

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
        currentUser: this.$route.params.id
    }
  },
  computed: {
    ...mapState({
        posts(state) {
            return state.userData.userPosts.filter(x => x.userId == this.currentUser)
        },
    }),
  },
}
</script>

<style lang="scss">
@import '../assets/userpage.module.scss'
</style>
