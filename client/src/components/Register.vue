<template>
  <div>
<h1>
  Register
</h1>
<input v-model="email" type="email" name="email" placeholder="Email">
<br>
<input v-model="password" type="password" name="password" placeholder="PassWord">
<br>
<div class="error" v-html="error"/>
<br>
<button @click="register">Register</button>
</div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return { email: '', password: '', error: null }
  },
  // call register endpoint on node server and catch error
  methods: {
    async register () {
      try {
        await authenticationService.register({
          email: this.email,
          password: this.password
        })
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
