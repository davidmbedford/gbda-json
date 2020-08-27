<template>
  <div id="devApp">
    <v-app>
      <v-main>
        <v-container>
          <!-- selector -->
          <v-row>
            <v-col class="d-flex" sm="4">
             <!-- <v-btn v-on:click="numChange"> -->
                <v-select
                  v-on:change="selectNewNum"
                  v-model="newNum"
                  v-bind:items="items"
                  value="item"
                ></v-select>
              <!-- </v-btn> -->
            </v-col>
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

              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
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
  methods: {
    selectNewNum(newNum) {
      console.log("clicking away", newNum);
      store.dispatch("changeNum", newNum);
      console.log("method in ex...vue done > changenum in actions.js done > updatenum in mutations done > no it will refetch")
      store.dispatch("fetchData");
    }
  },
  data: () => ({
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    newNum: 1
  }),
};
</script>

<style>
#devApp {
  padding: 5px;
}
</style>