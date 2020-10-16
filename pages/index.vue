<template>
    <div>
        test {{this.language}}

      <nuxt-link :to="localePath('/','ar')">change to arabic</nuxt-link>
        <nuxt-link :to="localePath('/','en')">change to english</nuxt-link>
    </div>
</template>

<script>
export default {
    layout:"defualt"
}
</script>