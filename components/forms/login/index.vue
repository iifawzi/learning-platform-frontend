<template>
  <form class="login-form">
    <div class="input-container">
      <inputField
        type="text"
        :placeholder="$t('shared.phone_number')"
        autofocus
        v-model="$v.student_info.phone_number.$model"
        @input="checkCorrectance"
      >
        <div class="error" v-if="$v.student_info.phone_number.$dirty">
          <span v-if="!$v.student_info.phone_number.required">{{$t("errors.required", {field: $t("shared.phone_number")})}}</span>
           <span v-if="!$v.student_info.phone_number.integer">{{$t("errors.integer", {field: $t("shared.phone_number")})}}</span>
        </div>
      </inputField>
    </div>
    <div class="input-container">
      <inputField
        type="password"
        :placeholder="$t('shared.password')"
        autocomplete
        v-model="$v.student_info.password.$model"
        @input="checkCorrectance"
      >
        <div class="error" v-if="$v.student_info.password.$dirty">
          <span v-if="!$v.student_info.password.required">{{$t("errors.required", {field: $t("shared.password")})}}</span>
        </div>
      </inputField>
    </div>
    <div class="button-container">
      <submitButton :title="$t('home.signin')" color="login-blue" :isDisabled="status" />
    </div>
    <div class="no-account" @click="$emit('show-register', true)">
      {{$t('home.noAccount')}}
      <span class="register-word">{{$t('home.register')}}</span>
    </div>
  </form>
</template>

<script>
import { required, integer} from "vuelidate/lib/validators";
import inputField from "~/components/shared/inputField";
import submitButton from "~/components/shared/submitButton";
export default {
  components: {
    inputField,
    submitButton,
  },
  data() {
    return {
      status: true,
      student_info: {
        phone_number: "",
        password: "",
      },
    };
  },
  methods: {
    checkCorrectance() {
      if (this.$v.$invalid === false) {
        this.status = false;
      } else {
        this.status = true;
      }
    },
  },
  validations: {
    student_info: {
      phone_number: {
        required,
        integer
      },
      password: {
        required,
      },
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped  />