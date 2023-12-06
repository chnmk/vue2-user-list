<template>
  <div class="user-albums">
    <div class="album" v-for="album in albums" :key="album.id">
      <div class="album__title">
        {{ album.title }}
      </div>
      <!-- 
        Карусель из библиотеки vue-carousel 
        https://ssense.github.io/vue-carousel/
        per-page, mouse-drag - стандартные настройки
        paginationActiveAtColor - цвет активной точки
      -->
      <carousel class="photos-carousel" 
        :per-page="1" :mouse-drag="false" 
        paginationActiveColor=#34495D>
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
  name: 'AlbumsList',
  components: {
    Carousel,
    Slide
  },

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
        albums(state) {
            // Ищем нужные альбомы:
            const albumTitles = state.userData.userAlbums.filter(x => x.userId == this.currentUser)
            // Добавляем в объекты соответствующие картинки и берем первые 5:
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
