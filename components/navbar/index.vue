<template>
  <nav class="dashboard-nav">
    <span class="toggleAside" @click="toggleAside"><i class="fas fa-bars"></i></span>
    <div class="navbar__content">
      <ul>
        <li>Link here</li>
        <li>Link here</li>
        <li>Link here</li>
        <li>Link here</li>
        <li>Link here</li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  methods: {
    toggleAside() {
      this.$store.dispatch("dashboard/aside/toggleAside");
    },
  },
  computed: {
         showAside() {
      return this.$store.getters["dashboard/aside/getAsideStatus"];
    },
  }
};
</script>


<style lang="scss" src="./style.scss" scoped />

