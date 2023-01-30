<template>
  <div class="home mt-16 d-flex flex-column gap-5">
    <v-img class="home__img" :src="require('@/assets/casamentos/ensaio-1.png')" alt="Imagem casal" aspect-ratio="1" />

    <h1>Ajude no projeto dos sonhos de Lucas & Julia</h1>

    <h2>Cozinha completa</h2>

    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style lang="scss">
.home {
  h1,
  h2 {
    font-size: 35px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #454545;
  }
}

.home__img {
  width: 100%;
  height: 100%;
  max-height: 250px;
}
</style>
