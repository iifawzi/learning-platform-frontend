<template>
  <div class="inputField">
    <input @input="$emit('input', $event.target.value)" v-bind="$attrs" class="input" />
    <div class="input__error">
     <slot/>
    </div>
  </div>
</template>


<script>
export default {
  inheritAttrs: false,
};
</script>


<style src="./style.scss" lang="scss" scoped />