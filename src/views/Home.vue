<template>
  <v-container>
    <v-flex>
      <about></about>
      <works></works>
      <Skills></Skills>
      <contacts></contacts>
    </v-flex>
  </v-container>
</template>

<script>
// @ is an alias to /src


import Works from "./works/Works";
import About from "./About";
import Contacts from "./Contacts";
import Skills from "./Skills";
export default {
  name: 'home',
  components: {
    Skills,
    Contacts,
    Works,
    About
  }
}
</script>
