<template>
  <div class="film">
    <div class="film-image">
        <img :src="data.poster" alt="Capa do Filme">
    </div>
    <div class="film-content">
        <div class="flex-duo">
            <h2 class="title">{{ data.show_title }}</h2>
            <div class="rate"><b>Netflix Rating:</b> {{ data.rating }}</div>
        </div>

        <div class="summary"><b>Summary:</b> {{ data.summary }}</div>
        
        <div class="director"> <b>Director:</b> {{ data.director }} </div>

        <div class="cast"><b>Cast:</b> {{ data.show_cast }}</div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'film',
    props: {
        data: {
            type: Object,
            required: true
        },
    }
  }
</script>