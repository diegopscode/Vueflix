<template>
  <header class="header">
    <div class="container">
    
      <router-link :to="{ name: 'Login' }" class="logo-link">
        <div class="logo">
          <img src="../assets/images/logo.png">
        </div>
        <h1 class="logo-title">ueflix</h1>
      </router-link>

      <div class="user-menu" v-if="user.name">
        <div class="logout" @click.prevent="logout()"><i class="fa fa-sign-out"></i> Logout</div>
        <router-link :to="{ name: 'Favorites' }" class="user-link">{{ user.name }} <i class="fa fa-user"></i></router-link>
      </div>
    
    </div>
  </header>
</template>

<script>
  import local from "../localstorage"

  export default {
    name: 'header',
    computed: {
      user() {
        return this.$store.getters.user
      }
    },
    methods: {
      logout() {
        console.log("Logout");
        this.$store.dispatch("LOGOUT").then(response => { this.$router.push({ name: "Login" }) })
      }
    }
  }
</script>
