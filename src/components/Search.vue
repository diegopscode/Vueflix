<template>
  <div class="search">
    <div class="search-content">
            
        <form class="form-search" @click.prevent="searchFilm()">
            <div class="form-group search-input">
                <input type="text" class="form-input" placeholder="Title">
            </div>

            <div class="form-group search-input">
                <input type="text" class="form-input"  placeholder="Director">
            </div>

            <div class="form-group search-input">
                <input type="text" class="form-input"  placeholder="Actor">
            </div>

            <div class="form-button">
                <button class="btn btn-submit">Search</button>
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
            search: {}
        }
    },
    methods: {
        searchFilm() {
            console.log(this.search);
        }
    }
  }
</script>