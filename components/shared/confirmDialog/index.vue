<template>
  <div class="confirmDialog" @click="emitClose($event)">
    <div class="dialog-container">
      <p class="close-container">
        <i class="far fa-times-circle closeIcon" @click="emitClose($event)"></i>
      </p>
      <div class="dialog__content">
        <slot />
        <div class="dialog__content__buttons">
          <div class="cancel">
            <submitButton
              title="Cancel"
              color="cancel"
              @click='$emit("callToCloseDialog")'
            />
          </div>
          <div class="confirm">
            <submitButton
              title="Confirm"
              color="confirm"
              @click="$emit('callToConfirm')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import submitButton from "~/components/shared/submitButton";
export default {
  methods: {
    emitClose(e) {
      if (e.target === e.currentTarget) {
        this.$emit("callToCloseDialog");
      }
    },
  },
  components: {
    submitButton,
  },
};
</script>
<style src="./style.scss" lang="scss" scoped />