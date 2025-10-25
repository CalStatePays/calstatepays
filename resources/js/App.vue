<template>
  <v-app>
    <navigation />
    <main class="contentWrapper">
      <error-alert />
      <router-view />
    </main>
    <csu-footer />
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import navigation from "./components/global/navigation.vue";
import csuFooter from "./components/global/csu-footer.vue";
import errorAlert from "./components/global/error-alert.vue";

export default {
  components: {
    navigation,
    csuFooter,
    errorAlert
  },
  computed: {
    ...mapGetters(["selectedUniversity"])
  },
  mounted() {
    this.bootstrapApplication();
  },
  methods: {
    bootstrapApplication() {
      const sessionUniversity = sessionStorage.getItem("selectedUniversity");
      const sessionTableauValue = sessionStorage.getItem("tableauValue");
      if (sessionUniversity) {
        this.$store.dispatch("setUniversity", sessionUniversity);
      }
      if (sessionTableauValue) {
        this.$store.dispatch("setTableauValue", sessionTableauValue);
      }
      const targetUniversity = sessionUniversity || this.selectedUniversity;
      this.$store.dispatch("fetchFieldOfStudies", targetUniversity);
      this.$store.dispatch("fetchUniversities");
      this.$store.dispatch("fetchOptInValues");
      this.$store.dispatch("fetchMajors", targetUniversity);
    }
  }
};
</script>
