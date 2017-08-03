<template>
  <section class="content login">
    <div class="container">

      <form class="form-login" @submit.prevent="login(user)">
        <div class="form-group">
            <input type="text" class="form-input text-center login-name" placeholder="What's your name?" v-model="user.name" maxlength="32">
        </div>

        <div class="form-button">
          <button class="btn btn-submit"><i class="fa fa-sign-in"></i> Sign In</button>
        </div>
      </form>

    </div>
  </section>
</template>

<script>
  import local from "../localstorage"

  export default {
    name: 'login',
    data() {
      return {
        user: {
          name: '',
          favorites: []
        }
      }
    },
    methods: {
      login(user) {
        if(user.name) this.$store.dispatch("LOGIN", user).then(response => { this.$router.push({ name: "Home" }) })
      }
    },
    mounted() {
      if(this.$store.getters.user.name) {
        this.$router.push({ name: "Home" })
      }
    }
  }
</script>