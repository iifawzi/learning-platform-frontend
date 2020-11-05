<template>
            <img v-if="language === 'ar'" @click="changeLang('en')" src="~/assets/images/english.png" />
            <img v-else @click="changeLang('ar')" src="~/assets/images/arabic.png" />
</template>

<script>
export default {
    methods: {
        changeLang(newLanguage){
            this.$i18n.locale = newLanguage;
            const test = newLanguage === 'ar' ? 'rtl' : 'ltr';
            try {
   document.documentElement.setAttribute("dir",newLanguage === 'ar' ? 'rtl' : 'ltr');
            }catch(err){
                console.log(err);
            }
        }
    }
}
</script>


<style lang="scss" src="./style.scss" scoped />