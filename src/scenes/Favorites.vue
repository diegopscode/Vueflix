<template>
  <section class="content favorites">
    <div class="container">
    
    <div class="film-container">
      <Film :data="film" v-for="film in films" :key="film.show_id"></Film>

      <div class="film-notfound" v-if="films.length == 0">You still have no favorite movies! <i class="fa fa-frown-o"></i></div>
    </div>

    </div>
  </section>
</template>

<script>
  import Film from "../components/Film"

  export default {
    name: "favorites",
    components: {
      Film
    },
    computed: {
      films() {
        return this.$store.getters.favorites;
      }
    }
  }
</script>