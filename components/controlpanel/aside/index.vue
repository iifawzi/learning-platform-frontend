<template>
  <aside class="dashboard-aside">
    <div class="aside__content">
      <div class="aside__content--top">LOGO</div>
      <div class="aside__content--bottom">
        <ul class="bottom__list">
          <li>
            <nuxt-link :to="'/'+language+'/controlpanel/main'" :class="['list-item-link', currentRoute().includes('controlpanel/main') ?  'nuxt-link-active' : '']">
              <span class="list-item__icon">
                <i class="fas fa-columns"></i>
              </span>
              <span class="list-item__name">
                {{ $t("navbar.dashboard") }}
              </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/'+language+'/controlpanel/groups'" :class="['list-item-link', currentRoute().includes('controlpanel/groups') ?  'nuxt-link-active' : '']">
              <span class="list-item__icon">
                <i class="fas fa-users"></i>
              </span>
              <span class="list-item__name"> {{ $t("navbar.groups") }} </span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>



<script>
export default {
  methods: {
    currentRoute(){
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss" scoped src="./style.scss" />