<template>
<v-toolbar fixed class="purple lighten-2" dark>
<v-toolbar-title mr-4><router-link class="home" tag="span" :to="{name:'root'}">Tracker</router-link></v-toolbar-title>
<v-toolbar-items>
  <!--<v-btn flat dark>
    Browse
  </v-btn>-->
</v-toolbar-items>
<v-spacer/>
<v-toolbar-items>
   <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name:'songs'}">Browse </v-btn>
  <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name:'login'}">Sign In </v-btn>
  <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{name:'register'}">Sign Up </v-btn>
   <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">Sign Out</v-btn>
</v-toolbar-items>
</v-toolbar>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'root'})
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
