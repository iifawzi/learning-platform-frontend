<template>
  <nav class="dashboard-nav">
    <span class="toggleAside" v-if="showAside" @click="toggleAside">close aside</span>
    <span class="toggleAside" v-else @click="toggleAside">open aside</span>
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

