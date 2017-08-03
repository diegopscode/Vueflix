<template>
  <div class="search">
  <div class="search-content">

    <form class="form-search" @submit.prevent="searchFilm()">
      <div class="form-group search-input">
        <input type="text" class="form-input" placeholder="Title: Attack on Titan" v-model="search.title">
      </div>

      <div class="form-group search-input">
        <input type="text" class="form-input"  placeholder="Director: Quentin Tarantino" v-model="search.director">
      </div>

      <div class="form-group search-input">
        <input type="text" class="form-input"  placeholder="Actor: Nicolas Cage" v-model="search.actor">
      </div>

      <div class="form-button">
        <button class="btn btn-submit"><i class="fa fa-search"></i> Search</button>
      </div>
    </form>

  </div>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        search: {
          title: "Attack on Titan",
          director: "",
          actor: ""
        }
      }
    },
    methods: {
      searchFilm() {
        this.$store.dispatch('SEARCH_FILM', this.search).then(data => { this.$emit('search', data) })
      }
    }
  }
</script>