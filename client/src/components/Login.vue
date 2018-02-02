<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class ="white elevation-12">
      <v-toolbar flat dense class="purple lighten-2" dark>
        <v-toolbar-title >Login</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
      <v-text-field label="Email" v-model="email"></v-text-field>
      <br>
       <v-text-field label="Password" type ="password" v-model="password"></v-text-field>
      <br>
      <div class="error" v-html="error"/>
      <br>
      <v-btn class ="purple lighten-2" dark @click="login">Login</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return { email: '', password: '', error: null }
  },
  // calls login endpoint on node server and catch error(keep track of response from server)
  methods: {
    async login () {
      try {
        const response = await authenticationService.login({
          email: this.email,
          password: this.password
        })
        // calls store setToken method which calls mutation setToken which inturn update state to token
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error{
  color: red;
}
</style>
