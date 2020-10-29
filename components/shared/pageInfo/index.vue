<template>
    <div class="pageInfo">
        <span class="pageInfo--title">{{title}}</span>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    }
}
</script>

<style lang="scss" scoped src="./style.scss"/>