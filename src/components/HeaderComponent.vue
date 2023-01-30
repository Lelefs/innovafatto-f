<template>
  <nav class="d-flex justify-space-between align-center gap-4">
    <img alt="Vue logo" src="../assets/logo.png" />

    <v-btn text color="#333333">
      <v-icon left> mdi-currency-usd </v-icon>
      Contribuir
    </v-btn>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style lang="scss">
.header__link {
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #333333 !important;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
    filter: brightness(0.1);
  }
}
</style>
