<template>
    <div class="user-albums">
        <div class="user-albums__placeholder" v-if="albums.length == 0">
            No albums yet!
        </div>
        <div class="album" v-for="album in albums">
            <div class="album__title">
                <span class="album_title-header">
                    Album Title: 
                </span>
                <span class="album__title-body">
                    {{ album.title }}
                </span>
            </div>
            <div class="photos-list" v-for="photo in album.photos">
                <div class="photos-list__inner">
                    <!--
                    <div class="photos-list__title">
                        <span class="photos-list__title-header">
                            Photo Title: 
                        </span>
                        <span class="photos-list__title-body">
                            {{ photo.title }}
                        </span>
                    </div>
                    -->
                    <div class="photos-list__scroll">
                        <img class="photos-list__img" :src=photo.url :alt=album.title>
                    </div>
                </div>
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
