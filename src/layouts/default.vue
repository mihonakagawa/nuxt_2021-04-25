<template>
  <div>
    <v-app>
      <AppHeader />
      <v-main class="wrapper">
        <Nuxt />
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  width: 800px;
  margin: 0 auto;
}
</style>
