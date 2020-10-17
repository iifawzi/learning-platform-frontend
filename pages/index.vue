<template>
  <div class="home-page">
    <section class="home-page__header container">
      <div class="left">Logo</div>
      <div class="right">
        <div class="languages">
          <nuxt-link v-if="language === 'ar'" :to="switchLocalePath('en')">
            <img src="~/assets/images/english.png" />
          </nuxt-link>
          <nuxt-link v-else :to="switchLocalePath('ar')">
            <img src="~/assets/images/arabic.png" />
          </nuxt-link>
        </div>
        <div class="themes">
          <themeSwitcher />
        </div>
      </div>
    </section>
    <section class="home-page__content container">
      <div class="left">
        <span class="text">{{$t("home.title")}}</span>
        <img class="learning-image" src="~/assets/images/home/learning.png" />
      </div>
      <div class="right">
        <div class="login-form">
          <LoginForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoginForm from "~/components/forms/login";
import themeSwitcher from "~/components/themeSwitcher";
export default {
  head() {
    return {
      title: "Home | Learning Platform",
    };
  },
  components: {
    LoginForm,
    themeSwitcher,
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-flow: column;
  background-image: linear-gradient(to bottom, var(--white), var(--sky));
  min-height: 100vh;
  &__header {
    height: 90px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    .left {
      font-size: 3.6rem;
    }
    .right {
      display: flex;
      flex-flow: row;
      align-items: center;
      .languages {
        margin-inline-end: 40px;
        img {
          width: 2.4rem;
        }
      }
    }
  }
  &__content {
    margin-top: 100px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    .left {
      width: 50%;
      .text {
        font-size: 4rem;
        width: 100%;
        display: inline-block;
      }
      .learning-image {
        margin-top: 50px;
        width: 450px;
      }
    }
    .right {
      width: 50%;
      display: flex;
      justify-content: center;
      .login-form {
        width: 300px;
      }
    }
  }
}
</style>