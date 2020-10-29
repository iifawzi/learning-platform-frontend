<template>
  <aside class="dashboard-aside">
    <div class="aside__content">
      <div class="aside__content--top">LOGO</div>
      <div class="aside__content--bottom">
        <ul class="bottom__list">
          <li>
            <nuxt-link to="/dashboard" exact class="list-item-link">
              <span class="list-item__icon">
                <i class="fas fa-columns"></i>
              </span>
              <span class="list-item__name"> {{$t("navbar.dashboard")}} </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/sections" class="list-item-link">
              <span class="list-item__icon">
                <i class="fab fa-microblog"></i>
              </span>
              <span class="list-item__name"> {{$t("navbar.announcements")}} </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/groups" class="list-item-link">
              <span class="list-item__icon">
                <i class="fas fa-users"></i>
              </span>
              <span class="list-item__name"> {{$t("navbar.groups")}} </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/sections" class="list-item-link">
              <span class="list-item__icon">
                <i class="fas fa-pencil-ruler"></i>
              </span>
              <span class="list-item__name"> {{$t("navbar.assignments")}} </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/rooms" class="list-item-link">
              <span class="list-item__icon">
                <i class="fas fa-print"></i>
              </span>
              <span class="list-item__name"> {{$t("navbar.exams")}} </span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/sections" class="list-item-link">
              <span class="list-item__icon">
                <i class="fas fa-cogs"></i>
              </span>
              <span class="list-item__name"> {{$t("navbar.settings")}} </span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>



<script>
export default {};
</script>

<style lang="scss" scoped src="./style.scss" />