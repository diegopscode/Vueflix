<template>
  <main id="app">
    <HeaderApp></HeaderApp>
    <router-view></router-view>
    <FooterApp></FooterApp>
  </main>
</template>

<script>
import HeaderApp from './components/Header'
import FooterApp from './components/Footer'

export default {
  name: 'app',
  components: {
    HeaderApp,
    FooterApp
  },
  mounted() {
    this.$store.dispatch('AUTH').then( auth => {
      if (!auth)
        this.$router.push({ name: "Login" });
    })
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/app.scss"
</style>
