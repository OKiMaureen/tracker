<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <panel title='Login'>
      <form name="tracker" autocomplete="off">
      <v-text-field label="Email" v-model="email"></v-text-field>
      <br>
       <v-text-field label="Password" type ="password" v-model="password"></v-text-field>
      <br>
      <div class="danger-alert" v-html="error"/>
      <br>
      <v-btn class ="purple lighten-2" dark @click="login">Login</v-btn>
      </form>
    </panel>
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
        this.$router.push({name: 'songs'})
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
