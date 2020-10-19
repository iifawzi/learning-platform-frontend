<template>
  <form class="register-form">
    <div class="input-container">
      <inputField
        type="text"
        :placeholder="$t('shared.student_name')"
        autofocus
        v-model="$v.student_info.student_name.$model"
        @input="checkCorrectance"
      >
        <div class="error" v-if="$v.student_info.student_name.$dirty">
          <span v-if="!$v.student_info.student_name.required">{{$t("errors.required")}}</span>
        </div>
      </inputField>
    </div>
    <div class="input-container">
      <inputField
        type="text"
        :placeholder="$t('shared.phone_number')"
        autofocus
        v-model="$v.student_info.phone_number.$model"
        @input="checkCorrectance"
      >
        <div class="error" v-if="$v.student_info.phone_number.$dirty">
          <span v-if="!$v.student_info.phone_number.required">{{$t("errors.required")}}</span>
          <span v-if="!$v.student_info.phone_number.integer">{{$t("errors.integer")}}</span>
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
          <span v-if="!$v.student_info.password.required">{{$t("errors.required")}}</span>
        </div>
      </inputField>
    </div>
    <div class="button-container">
      <submitButton :title="$t('home.register')" color="login-green" :isDisabled="status" />
    </div>
    <div class="have-account" @click="$emit('show-login', true)">
      {{$t('home.haveAccount')}}
      <span class="login-word">{{$t('home.signin')}}</span>
    </div>
  </form>
</template>

<script>
import { required, integer } from "vuelidate/lib/validators";
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
        student_name: "",
        phone_number: "",
        password: "",
      },
    };
  },
  methods: {
    checkCorrectance() {
      console.log("called");
      if (this.$v.$invalid === false) {
        this.status = false;
      } else {
        this.status = true;
      }
    },
  },
  validations: {
    student_info: {
      student_name: {
        required,
      },
      phone_number: {
        required,
        integer,
      },
      password: {
        required,
      },
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped  />