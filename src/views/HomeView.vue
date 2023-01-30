<template>
  <div class="home mt-16">
    <v-row>
      <v-col>
        <v-img
          class="home__img mx-auto"
          max-width="1280"
          max-height="500"
          :src="require('@/assets/casamentos/ensaio-1.png')"
          alt="Imagem casal"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h1>Ajude no projeto dos sonhos de Lucas & Julia</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2>Cozinha completa</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6"> ARRECADADO </v-col>

      <v-col cols="12" md="6"> CONTRIBUIR </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style lang="scss">
.home {
  background: #f0efed;

  h1,
  h2 {
    font-size: 35px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #454545;

    @media only screen and (max-width: 720px) {
      font-size: 20px;
    }
  }
}

.home__img {
  width: 100%;
}
</style>
