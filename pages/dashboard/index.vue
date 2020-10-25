<template>
    <div class="reddd">
      <nuxt-link to="/">Home</nuxt-link>
    </div>
</template>


<script>
export default {
  middleware: ['is-auth'],
  layout: "dashboard"
};
</script>

<style lang="scss" scoped>
.reddd {
    color: red;
}
</style>