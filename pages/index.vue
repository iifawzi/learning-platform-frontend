<template>
  <div class="home-page">
    <section class="home-page__header container">
      <div class="left">Logo</div>
      <div class="right">
        <nuxt-link v-if="language === 'ar'" :to="switchLocalePath('en')">
          <img src="~/assets/images/english.png" />
        </nuxt-link>
        <nuxt-link v-else :to="switchLocalePath('ar')">
          <img src="~/assets/images/arabic.png" />
        </nuxt-link>
      </div>
    </section>
    <section class="home-page__content container"></section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home | Learning Platform",
    };
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-flow: column;
  background-image: linear-gradient(to bottom, $white, $sky);
  min-height: 100vh;
  &__header {
    height: 90px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    .left {
      font-size: 36px;
    }
    .right {
      img {
        width: 24px;
      }
    }
  }
  &__content {
    margin-top: 100px;
  }
}
</style>