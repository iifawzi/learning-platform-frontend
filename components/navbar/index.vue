<template>
  <nav class="dashboard-nav">
    <span class="toggleAside" @click="toggleAside">
      <i class="fas fa-bars"></i>
    </span>
    <div class="navbar__content">
      <ul>
        <li>
          <languageSwitcher />
        </li>
        <li>
          <themeSwitcher />
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
import languageSwitcher from "~/components/languageSwitcher";
import themeSwitcher from "~/components/themeSwitcher";
export default {
  components: {
    languageSwitcher,
    themeSwitcher,
  },
  methods: {
    toggleAside() {
      this.$store.dispatch("dashboard/aside/toggleAside");
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

