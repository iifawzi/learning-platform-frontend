<template>
  <div class="dashboard-layout">
    <div :class="['aside', language ,getAnimationClass]">
      <dashAside />
    </div>
    <div class="dashboard__content">
      <dashNav />
      <nuxt />
    </div>
  </div>
</template>
<script>
import dashAside from "~/components/aside";
import dashNav from "~/components/navbar";
export default {
  components: {
    dashAside,
    dashNav,
  },
  computed: {
    getAnimationClass() {
      return this.$store.getters["dashboard/aside/getAnimationClass"];
    },
  },
};
</script>


<style lang="scss" scoped>
.dashboard-layout {
  display: flex;
  flex-flow: row;
  background-image: linear-gradient(to bottom, var(--white), var(--sky));
}
.aside {
  width: 230px;
  position: relative;
}
.dashboard__content {
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  height: 100vh;
}
.en.openAnimation {
  animation: showAside 0.4s ease-in-out forwards;
}
.en.closeAnimation {
  animation: closeAside 0.4s ease-in-out forwards;
}

.ar.openAnimation {
  animation: showAside-ar 0.4s ease-in-out forwards;
}
.ar.closeAnimation {
  animation: closeAside-ar 0.4s ease-in-out forwards;
}


@keyframes showAside {
  0% {
    left: -230px;
    width: 0%;
    display: none;
  }
  100% {
    left: 0px;
    width: 230px;
    display: block;
  }
}

@keyframes closeAside {
  0% {
    left: 0px;
    width: 230px;
    display: block;
  }
  100% {
    left: -230px;
    width: 0%;
    display: none;
  }
}

@keyframes showAside-ar {
  0% {
    right: -230px;
    width: 0%;
    display: none;
  }
  100% {
    right: 0px;
    width: 230px;
    display: block;
  }
}

@keyframes closeAside-ar {
  0% {
    right: 0px;
    width: 230px;
    display: block;
  }
  100% {
    right: -230px;
    width: 0%;
    display: none;
  }
}


@media (max-width: $small-devices){
    .aside {
  width: 0%;
  max-width: 250px;
  position: absolute;
  left: 0px; 
  top: 0px;
    }
}
</style>

