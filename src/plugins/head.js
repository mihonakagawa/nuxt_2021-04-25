
export const head = (route) => {
  return {
    title: `${route.name} | `,
    meta: [
      {
        hid: route.name,
      }
    ]
  };
};

// https://ja.nuxtjs.org/docs/2.x/directory-structure/plugins/#root-%E3%81%A8%E3%82%B3%E3%83%B3%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%81%AE%E6%8C%BF%E5%85%A5
export default ({ app }, inject) => {
  inject('head', head);
}
