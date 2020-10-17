<template>
  <button :class="['submitButton', color+'-btn',disabledClass]" :disabled="isDisabled" @click.prevent="$emit('click')">{{title}}</button>
</template>


<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    title: {
      type:String,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  }
};
</script>

<style src="./style.scss" lang="scss" scoped />