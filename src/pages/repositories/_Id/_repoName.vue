<template>
  <div>
    <h1>{{ repository.name }}</h1>
    <a :href="repository.html_url" target="_black">repo</a>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios, error }) {
    try {
      const repository = await $axios.$get(
        `https://api.github.com/repos/vuejs/${params.repoName}`,
      );

      return { repository }
    } catch (e) {
      return error(e);
    }
  },
}
</script>

<style>

</style>
