<template>
    <div class="cp">
      <div class="cp__content">
        <pageInfo title="لوحة التحكم"/>
      </div>
    </div>
</template>


<script>
import pageInfo from "~/components/shared/pageInfo"
export default {
  components: {
    pageInfo,
  },
  layout: "controlpanel"
};
</script>

<style lang="scss" scoped src="./style.scss"/>