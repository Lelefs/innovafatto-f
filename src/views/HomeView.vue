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
        <h1 class="gray1--text">Ajude no projeto dos sonhos de Lucas & Julia</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2 class="gray1--text">Cozinha completa</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <ArrecadadoComponent />

      <v-col cols="12" md="6" class="px-5 d-flex justify-center align-end flex-column">
        <v-btn color="primary" width="329" height="50" class="font-weight-bold mb-3"> Contribuir </v-btn>
        <v-btn color="primary" outlined width="329" height="50" class="font-weight-bold"> Compartilhar </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row class="row-info-divs">
      <v-col cols="12" md="4">
        <h4 class="gray2--text">Recados</h4>
        <span class="gray3--text">45 recados</span>
      </v-col>

      <v-col cols="12" md="4">
        <h4 class="gray2--text">Casal</h4>
        <span class="gray3--text">Lucas & Julia</span>
      </v-col>

      <v-col cols="12" md="4">
        <h4 class="gray2--text">Projeto</h4>
        <span class="gray3--text">Cozinha completa</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-img class="mx-auto mt-6" max-width="780" :src="require('@/assets/projeto.png')" alt="Imagem projeto"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'HomeView',

  components: {
    ArrecadadoComponent: () => import('@/components/ArrecadadoComponent.vue'),
  },
};
</script>

<style lang="scss">
.home {
  background: #f0efed;

  h1,
  h2 {
    font-size: 2.1875rem;
    text-align: center;
    letter-spacing: 0.02em;

    @media only screen and (max-width: 720px) {
      font-size: 1.25rem;
    }
  }
}

.home__img {
  width: 100%;
}

.row-info-divs {
  padding: 0 16px;

  h4 {
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.02em;
  }

  span {
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0.02em;
  }
}
</style>
