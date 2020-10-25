<template>
    <div class="reddd">
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