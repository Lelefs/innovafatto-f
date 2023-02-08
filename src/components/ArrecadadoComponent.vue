<template>
  <v-col cols="12" md="6" class="arrecadado px-6">
    <h4 class="gray2--text">Arrecadado</h4>

    <h3 class="primary--text">R$ 11.000,00</h3>

    <v-progress-linear v-model="power" class="my-4" rounded color="primary" height="10"></v-progress-linear>

    <p class="text--secondary">Meta R$ 45.000,00</p>
  </v-col>
</template>

<script>
export default {
  name: 'ArrecadadoComponent',

  data: () => ({
    power: 50,
  }),
};
</script>

<style lang="scss">
.arrecadado {
  h4 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.02em;
  }

  h3 {
    font-size: 2.1875rem;
    line-height: 2.5rem;
    letter-spacing: 0.02em;
  }

  p.text--secondary {
    font-size: 1.25rem;
    line-height: 2.5rem;
    letter-spacing: 0.02em;
  }
}
</style>
