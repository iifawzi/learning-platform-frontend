<template>
  <nav class="dashboard-nav">
    <span :class="['toggleAside',  showAside ? 'colored-bars' : '']" @click="toggleAside">
      <i class='fas fa-bars'></i>
    </span>
    <div class="navbar__content">
      <ul>
        <li>
          <languageSwitcher />
        </li>
        <li>
          <themeSwitcher />
        </li>
        <li class="logout" @click="logout"><i :class="['fas fa-sign-in-alt logout-icon', language]"></i></li>
      </ul>
    </div>
  </nav>
</template>


<script>
import languageSwitcher from "~/components/shared/languageSwitcher";
import themeSwitcher from "~/components/shared/themeSwitcher";
import Cookie from "js-cookie";
export default {
  components: {
    languageSwitcher,
    themeSwitcher,
  },
  methods: {
    toggleAside() {
      this.$store.dispatch("main/dashboard/aside/toggleAside");
    },
    logout() {
      Cookie.remove("refresh_token");
      Cookie.remove("authorization");
      this.$router.push(this.localePath("/"));
    },
  },
  computed: {
    showAside() {
      return this.$store.getters["main/dashboard/aside/getAsideStatus"];
    },
  },
};
</script>


<style lang="scss" src="./style.scss" scoped />

