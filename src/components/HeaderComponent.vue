<template>
  <nav class="d-flex justify-space-between align-center gap-4">
    <img alt="Logo Innovafatto" class="logo-img" src="../assets/logo.png" />

    <v-btn text color="gray2" class="header-button__icon font-weight-bold">
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
.logo-img {
  @media only screen and (max-width: 720px) {
    max-width: 150px;
  }
}

.header-button__icon {
  .v-icon {
    height: 30px !important;
    width: 30px !important;
    font-size: 20px !important;
    border-radius: 50%;
    background: #f1ddc9;
  }
}
</style>
