<template>
  <section class="content home">
    <div class="container">

      <Search @search="loadFilme"></Search>

      <div class="filme-container">
        <Film :data="film" v-for="film in films" :key="film.show_id"></Film>

        <div class="film-notfound" v-if="!films && searched">Sorry! We couldn't find a movie with that title!</div>
        <div class="film-notfound" v-if="films.length == 0 && !searched">Search for an amazing movie!</div>
      </div>
      
    </div>
  </section>
</template>

<script>
  import Film from "../components/Film"
  import Search from "../components/Search"

  export default {
    name: 'home',
    components: {
      Film,
      Search
    },
    data() {
      return {
        films: [],
        searched: false
      }
    },
    methods: {
      loadFilme(film) {
        this.films = film
        this.searched = true;
      }
    }
  }
</script>