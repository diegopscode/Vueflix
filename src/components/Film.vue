<template>  
    <div class="film">

      <div class="film-image">
        <img :src="data.poster" alt="Capa do Filme">
      </div>

      <div class="film-content">

        <div class="title-container">
          <h2 class="title">{{ data.show_title }}</h2>
          <div class="favorite" :class="{active: favorited}" @click="setFavorite()">
            <span class="label-icon">favorite</span>
            <i class="fa fa-star-o"></i>
          </div>
        </div>
        <div class="rate"><b>Netflix Rating:</b> {{ data.rating }}</div>
        <div class="summary"><b>Summary:</b> {{ data.summary }}</div>
        <div class="director"> <b>Director:</b> {{ data.director }} </div>
        <div class="cast"><b>Cast:</b> {{ data.show_cast }}</div>

      </div>

    </div>
</template>

<script>
  import local from "../localstorage"
  
  export default {
    name: 'film',
    props: [ 'data' ],
    data() {
      return {
        favorited: false
      }
    },
    methods: {
      setFavorite(bool) {
        this.$store.dispatch("SET_FAVORITES", this.data);
        this.favorited = !this.favorited;
      },
      loadFavorite(data) {
        let films = local.get('Favorites')

        this.$store.dispatch("GET_FAVORITES", data).then(response => {
          if(response != -1) {
            this.favorited = true;
          } else {
            this.favorited = false;
          }
        });
      }
    },
    mounted() {
      this.loadFavorite(this.data);
    }
  }
</script>