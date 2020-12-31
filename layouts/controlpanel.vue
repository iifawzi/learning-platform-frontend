<template>
  <div class="controlpanel-layout">
    <div :class="['aside', language, getAnimationClass]">
      <cpAside />
    </div>
    <div class="controlpanel__content">
      <cpNav />
      <div class="content">
        <div class="backdorp" v-if="getAsideStatus" @click="hideAside"></div>
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import cpAside from "~/components/controlpanel/aside";
import cpNav from "~/components/controlpanel/navbar";
export default {
    head: {
    title: 'Control Panel',
    },
  middleware: ["is-admin"],
  components: {
    cpAside,
    cpNav,
  },
  methods: {
    hideAside() {
      this.$store.dispatch("controlpanel/aside/toggleAside");
    },
  },
  computed: {
    getAnimationClass() {
      return this.$store.getters["controlpanel/aside/getAnimationClass"];
    },
    getAsideStatus() {
      return this.$store.getters["controlpanel/aside/getAsideStatus"];
    },
  },
};
</script>


<style lang="scss" scoped>
.controlpanel-layout {
  display: flex;
  flex-flow: row;
  background-color: var(--white-3);
}
.aside {
  width: 0px;
  min-width: 0px;
  position: relative;
}
.controlpanel__content {
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
    left: -200px;
    width: 0px;
    min-width: 0px;
    display: none;
  }
  100% {
    left: 0px;
    width: 200px;
    min-width: 200px;
    display: block;
  }
}

@keyframes closeAside {
  0% {
    left: 0px;
    width: 200px;
    min-width: 200px;
    display: block;
  }
  100% {
    left: -230px;
    width: 0px;
    min-width: 0px;
    display: none;
  }
}

@keyframes showAside-ar {
  0% {
    right: -200px;
    width: 0px;
    min-width: 0px;
    display: none;
  }
  100% {
    right: 0px;
    width: 200px;
    min-width: 200px;
    display: block;
  }
}

@keyframes closeAside-ar {
  0% {
    right: 0px;
    width: 200px;
    min-width: 200px;
    display: block;
  }
  100% {
    right: -200px;
    width: 0px;
    min-width: 0px;
    display: none;
  }
}

@media (max-width: $small-devices) {
  .aside {
    width: 250px;
    min-width: 250px;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: $z-aside;
  }
  .content {
    position: relative;
  }
  .backdorp {
    z-index: 1;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    display: block;
    width: 100%;
    height: 100vh;
    background-color: #2324255b;
  }
}
</style>

