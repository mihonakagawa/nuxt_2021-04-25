<template>
  <div>
    <h1>repo</h1>
    <ul v-for="(repo, i) in repositories" :key="repo.id">
      <li>
        {{ i + 1 }}:
        <NuxtLink :to="`${$route.path}/${i + 1}/${repo.name}`">
          {{ repo.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head() {
    return this.$head(this.$route);
  },
  async asyncData({ $axios, error }) {
    const perPage = 10;
    try {
      const repositories = await $axios.$get(
        `https://api.github.com/orgs/vuejs/repos?per_page=${perPage}`
      );
      return { repositories };
    } catch (e) {
      return error(e);
    }
  },
  // false = クライアントサイドでのみ呼び出す場合
  // fetchOnServer: false
};
</script>
