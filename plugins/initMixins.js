import Vue from "vue"
import language from "../mixins/language";

if (!Vue.language_mixin) {
    Vue.language_mixin = true
    Vue.mixin(language);
}