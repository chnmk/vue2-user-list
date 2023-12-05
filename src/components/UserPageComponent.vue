<template>
    <div class="user-page">
        <!--{{ $route.params.id }}-->
        <nav class="user-nav">
          <router-link
            class="user-nav__home-button"
            to="/"
            tag="button">
              Home
          </router-link>
          <router-link 
            class="user-nav__posts-button"
            :to="{ name: 'posts' }"
            tag="button">
              Posts
          </router-link>
          <router-link 
            class="user-nav__albums-button"
            :to="{ name: 'albums' }"
            tag="button">
              Albums
          </router-link>
          <hr class="user-nav__split">
        </nav>
        <div class="display-content">
          <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/userpage.module.scss'
</style>
