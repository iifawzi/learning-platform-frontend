<template>
    <span v-if="darkMode" class="theme-switcher light" @click="toggleTheme">
        SUN
    </span>
      <span v-else class="theme-switcher light" @click="toggleTheme">
        NIGHT
    </span>
</template>

<script>
export default {
    mounted() {
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem("theme");
    if (theme === 'dark') {
        htmlElement.setAttribute('theme', 'dark')
        this.darkMode = true
    } else {
        htmlElement.setAttribute('theme', 'light');
    }
},
methods: {
    toggleTheme(){
        let htmlElement = document.documentElement;
        htmlElement.setAttribute('theme', this.darkMode ? 'light' : 'dark');
        localStorage.setItem("theme",this.darkMode ? 'light' : 'dark');
        this.darkMode = !this.darkMode;
    }
},

data(){
    return {
        darkMode: false,
    }
}
}
</script>


<style lang="scss" src="./style.scss" scoped />