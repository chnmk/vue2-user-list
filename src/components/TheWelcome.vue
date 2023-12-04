<template>
  <div class="hello">
    Hello Template!
    <br>
    {{ hello_script }}
    <br>
    {{ hello_vuex }}
  </div>
</template>

<script>
export default {
  name: 'PublicLayout',
  data: function () {
    return {
      hello_script: "Hello Script!",
      hello_vuex: this.$store.state.users.message
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style.module.scss'
</style>
