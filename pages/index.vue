<template>
  <div class="home-page">
    <section class="home-page__header container">
      <div class="left"><nuxt-link to="/"></nuxt-link><span class="logo-name">Logo</span></div>
      <div class="right">
        <div class="languages">
          <languageSwitcher />
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
        <div class="login-form" v-if="!showRegisterForm">
          <LoginForm @show-register="showRegisterForm = true"/>
        </div>
        <div v-else class="register-form">
           <RegisterForm @show-login="showRegisterForm = false"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoginForm from "~/components/forms/login";
import RegisterForm from "~/components/forms/register";
import themeSwitcher from "~/components/themeSwitcher";
import languageSwitcher from "~/components/languageSwitcher";
export default {
  layout: "default",
  head() {
    return {
      title: "Home | Learning Platform",
    };
  },
  data(){
    return {
      showRegisterForm: false,
    }
  },
  components: {
    LoginForm,
    RegisterForm,
    themeSwitcher,
    languageSwitcher
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
      .logo-name {
        cursor: pointer;
      }
    }
    .right {
      display: flex;
      flex-flow: row;
      align-items: center;
      .languages {
        margin-inline-end: 40px;
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
      .login-form, .register-form {
        width: 300px;
        max-width: 300px;
      }
      
    }
  }
}

@media (max-width: $small-devices){
  .home-page {
  &__content {
    margin-top: 30px;
    flex-flow: column;
    .left {
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      .text {
        font-size: 3rem;
        text-align: center;
        width: 100%;
      }
      .learning-image {
        display: none;
      }
    }
    .right {
      padding: 50px 0px;
      width: 100%;
      .login-form,.register-form {
        width: 300px;
      }
    }
  }
}
}

@media (min-width: $small-devices) and (max-width: $medium-devices){
  .home-page {
  &__content {
    margin-top: 100px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    .left {
      width: 50%;
      .text {
        font-size: 3rem;
        width: 100%;
        display: inline-block;
      }
      .learning-image {
        margin-top: 50px;
        width: 350px;
      }
    }
    .right {
      width: 40%;
      display: flex;
      justify-content: center;
      .login-form,.register-form {
        width: 100%;
      }
    }
  }
}
}
</style>