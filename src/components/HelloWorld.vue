<template>
  <v-container>
    <v-row class="text-center">
      <!-- <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col> -->

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Dev Excercise
        </h1>

        <p class="subheading font-weight-regular">
          Following difficulties I had serving the original files via FTP,
            and hassle with my local wordpress environment, I built this app to demonstrate
            most importantly, that I understand the core API concepts with the technology involved. 
            I built this using Vue, Vuetify, Vuex, Router, JS, HTML, and CSS. 
        </p>
        <p class="subheading font-weight-regular">
          I will return to the method initially given in the directions tomorrow.  
        </p>

      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h1 class="headline font-weight-bold mb-3">
          Albums
        </h1>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ]
    })
  }
</script>
