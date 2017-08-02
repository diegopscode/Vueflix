<template>
  <section class="content">
    <div class="container">

      <Film :data="film"></Film>
      
    </div>
  </section>
</template>

<script>
  import Film from "../components/Film"

  export default {
    name: 'home',
    components: {
      Film
    },
    data() {
      return {
        title: 'Attack on Titan',
        search: '',
        film: {}
      }
    },
    methods: {
      searchFilm(title) {
        this.$store.dispatch('SEARCH_FILM', title).then(data => { this.film = data; console.log(data) })
      }
    },
    mounted() {
      this.searchFilm(this.title)
    }
  }
</script>