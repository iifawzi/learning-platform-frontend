<template>
  <button :class="['submitButton', color+'-btn']" :disabled="isDisabled" @click.prevent="$emit('click')" v-bind="$attrs">{{title}}</button>
</template>


<script>
export default {
  inheritAttrs: false,
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