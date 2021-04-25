<template>
  <div class="">
    <article>
      <h1>{{ article.title }}</h1>
      <table class="date">
        <tbody>
          <tr>
            <th>created</th>
            <td>{{ format(article.createdAt) }}</td>
          </tr>
          <tr>
            <th>updated</th>
            <td>{{ format(article.updatedAt) }}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <nuxt-content :document="article" />
    </article>
    <v-btn to="/articles" nuxt color="primary" text>back</v-btn>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug || 'index').fetch();
    return { article };
  },
  methods: {
    format(date) {
      return this.$dayjs(date).format('YYYY/MM/DD-HH:mm');
    },
  },
};
</script>

<style lang="scss" scoped>
.date {
  display: table;

  & > tbody tr td,
  & > tbody tr th {
    border: 1px gray solid;
    padding: 3px;
  }
}
</style>
