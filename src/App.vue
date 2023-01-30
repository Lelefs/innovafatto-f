<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-container class="pa-7">
      <HeaderComponent />
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'App',

  components: { HeaderComponent },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
};
</script>

<style lang="scss">
@import './css/base.scss';
</style>
