<template>
    <div class="dashboard">
      <div class="dashboard__content">
          <div class="welcome-box">
            <img class="welcome-img" src="~/assets/images/dashboard/welcome.png"/>
            <div class="texts">
  <span class="main-text">{{$t("dashboardMain.welcome")}}</span>
            <span class="sub-text">{{$t("dashboardMain.beginLearn")}}</span>
            </div>
          
          </div>
      </div>
    </div>
</template>


<script>
import pageInfo from "~/components/shared/pageInfo"
export default {
  components: {
    pageInfo,
  },
  middleware: ['is-admin'],
  layout: "dashboard"
};
</script>

<style lang="scss" scoped src="./style.scss"/>