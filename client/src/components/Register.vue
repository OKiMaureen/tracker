<template>
  <div>
<h1>
  Register
</h1>
<input v-model="email" type="email" name="email" placeholder="Email">
<br/>
<input v-model="password" type="password" name="password" placeholder="PassWord">
<br/>
<button @click="register">Register</button>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return { email: '', password: '' }
  },
  // call register endpoint on node server
  methods: {
    async register () {
      const response = await authenticationService.register({email: this.email, password: this.password})
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
