<template>
  <div>
    <div v-for="n in article" :key="n.slug">
      <NuxtLink :to="'/articles/' + n.slug">
        {{ omittingText(n.title) }}
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return this.$head(this.$route);
  },
  async asyncData({ $content }) {
    const query = await $content('articles' || 'index').sortBy(
      'createdAt',
      'desc'
    );
    const article = await query.fetch();
    return { article };
  },
  methods: {
    omittingText(text) {
      const limit = 25;
      return text.length > limit ? `${text.substr(0, limit)}...` : text;
    },
  },
};
</script>
