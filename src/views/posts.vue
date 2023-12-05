<template>
    <div class="user-posts">
        <div class="user-posts__placeholder" v-if="posts.length == 0">
            No posts yet!
        </div>
        <div class="user-posts__post" v-for="post, id in posts">
            <div class="user-posts__title">
                <span class="user-posts__title-header">
                    title: 
                </span>
                <span class="user-posts__title-body">
                    {{ post.title }}
                </span>
            </div>
            <div class="user-posts__text">
                <span class="user-posts__text-header">
                    text:
                </span>
                <span class="user-posts__text-body">
                    {{ post.body }}
                </span>
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
  data() {
    return {
        currentUser: this.$route.params.id
    }
  },
  computed: {
    //Более читаемый вариант через mapState вместо mapGetters, чтобы не пришлось передавать аргумент в store:
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
