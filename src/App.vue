<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h5>GBDA</h5>

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://wordpress-371295-1164415.cloudwaysapps.com/dev-exercise/"
        target="_blank"
        text
      >
        <span class="mr-2">Original Prompt</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
      <Exercise/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Exercise from './components/exercise';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Exercise
  },

  data: () => ({
    //
  }),
};
</script>
