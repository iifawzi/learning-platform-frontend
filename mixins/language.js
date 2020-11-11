export default {
    computed:{
        language(){
          return this.$i18n.locale;
        }
      },
      methods: {
        theRouteLanguage() {
          // this will be used in the aside items in `to` property, since we want to keep the language fixed as same as the route to keep active (methods will not change when language change)
          return this.$i18n.locale;
        },
      }
};