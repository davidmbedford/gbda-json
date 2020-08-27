<template>
  <div id="devApp">
    <v-app>
      <v-content>
        <v-container>
          <!-- selector -->
          <v-row>
            <v-col class="d-flex" sm="4">
              <v-select
                :items="items"
                label="Select album (default: 1)"
              ></v-select>
            </v-col>
            <!-- <div id="selector">
              <select v-model="selected">
                <option v-for="index in 10" :key="index" v-bind:value="index">{{index}}</option>
              </select>
            </div> -->
          </v-row>

          <br />
          <!-- loading icon after call -->
          <v-row>
            <div v-if="loading">Loading ~</div>

            <!-- Api fills this zone -->
            <v-col xs="12" sm="6" md="4" lg="3" v-else v-for="content in albums" :key="content.id">
              <v-card flat class="pa-1 ma-3 text-center">
                <v-responsive class="pt-3">
                  <a target="_blank">
                    <img :src="`${content.thumbnailUrl}`" />
                  </a>
                </v-responsive>
                <v-card-text>
                  <div class="subheading">{{content.title}}</div>
                  <div class="grey-text"></div>
                </v-card-text>

                <!-- <div class="album">
                  <h2>{{content.title}}</h2>
                  <p>id: {{content.id}}</p>
                    <a target="_blank">
                      <img :src="`${content.thumbnailUrl}`"/>
                    </a>
                </div>-->
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store/index.js";

export default {
  computed: mapState(["albums", "loading", "num"]),
  created() {
    store.dispatch("fetchData");
  },
  updated() {
    store.dispatch("updateNum");
  },
  data: () => ({
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }),
};
</script>

<style>


#devApp {
  padding: 5px;
}
</style>