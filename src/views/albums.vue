<template>
    <div class="user-albums">
        <div class="album" v-for="album in albums" :key="album.id">
            <div class="album__title">
                {{ album.title }}
            </div>
            <carousel class="photos-carousel" :per-page="1" :mouse-drag="false" :paginationActiveColor="lightgreen">
                <slide class="photos-carousel__slide" v-for="photo in album.photos" :key="album.photos.id">
                    <img class="photos-carousel__image" :src=photo.url :alt=photo.title>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'PublicLayout',
  components: {
    Carousel,
    Slide
  },
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
    ...mapState({
        albums(state) {
            const albumTitles = state.userData.userAlbums.filter(x => x.userId == this.currentUser)

            albumTitles.forEach(album => {
                album.photos = state.userData.userPhotos.filter(x => x.albumId == album.id).splice(0,5)
            })

            return albumTitles
        },
    })
  },
}
</script>

<style lang="scss">
@import '../assets/userpage.module.scss'
</style>
