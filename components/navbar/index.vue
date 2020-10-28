<template>
  <nav class="dashboard-nav">
    <span class="toggleAside" @click="toggleAside">
      <i :class="['fas fa-bars', showAside ? 'colored-bars' : '']"></i>
    </span>
    <div class="navbar__content">
      <ul>
        <li>
          <languageSwitcher />
        </li>
        <li>
          <themeSwitcher />
        </li>
        <li class="logout" @click="logout">{{$t("home.logout")}}</li>
      </ul>
    </div>
  </nav>
</template>


<script>
import languageSwitcher from "~/components/languageSwitcher";
import themeSwitcher from "~/components/themeSwitcher";
import Cookie from "js-cookie";
export default {
  components: {
    languageSwitcher,
    themeSwitcher,
  },
  methods: {
    toggleAside() {
      this.$store.dispatch("dashboard/aside/toggleAside");
    },
    logout() {
      Cookie.remove("refresh_token");
      Cookie.remove("authorization");
      this.$router.push(this.localePath("/"));
    },
  },
  computed: {
    showAside() {
      return this.$store.getters["dashboard/aside/getAsideStatus"];
    },
  },
};
</script>


<style lang="scss" src="./style.scss" scoped />

