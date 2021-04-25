<template>
  <header class="header">
    <NuxtLink to="/" class="header-link">
      <img src="@/assets/img/logo/nuxt-emoji.png" alt="nuxt_logo" />
    </NuxtLink>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &-link {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    transition: 0.3s;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.2);
      transform: translateY(1px);
    }
  }
}
</style>
