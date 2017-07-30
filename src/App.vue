<template>
  <main id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/app.scss";
</style>
