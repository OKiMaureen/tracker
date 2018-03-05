<template>
<v-layout column>
  <v-flex xs12 offset-xs1>
    <div class ="white elevation-12">
      <v-toolbar flat dense class="purple lighten-2" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name ="action"></slot>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <slot>slot content goes in here</slot>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
export default{
  props: [
    'title'
  ]
}

</script>

<style scoped>
</style>
