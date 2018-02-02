<template>
<v-toolbar fixed class="purple lighten-2" dark>
<v-toolbar-title mr-4><span class="home" @click="navigateTo({name:'root'})">Tracker</span></v-toolbar-title>
<v-toolbar-items>
  <!--<v-btn flat dark>
    Browse
  </v-btn>-->
</v-toolbar-items>
<v-spacer/>
<v-toolbar-items>
  <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name:'login'})">Login </v-btn>
  <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name:'register'})">Sign Up </v-btn>
</v-toolbar-items>
</v-toolbar>
</template>
<script>
export default {
  methods: {navigateTo (route) {
    this.$router.push(route)
  }
  }
}
</script>
<style scoped>
.home{
  cursor: pointer;
}
.home:hover{
  color:brown;
}
</style>
