export default {
    computed:{
        language(){
          return this.$store.getters.getLanguage;
        }
      }
};