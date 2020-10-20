<template>
<div class="registeration-forms">
  <form class="register-form" v-show="!showOTPForm">
    <div class="input-container">
      <inputField
        type="text"
        :placeholder="$t('shared.student_name')"
        autofocus
        v-model="$v.student_info.student_name.$model"
        @input="checkCorrectance"
      >
        <div class="error" v-if="$v.student_info.student_name.$dirty">
          <span v-if="!$v.student_info.student_name.required">{{$t("errors.required", {field: $t("shared.student_name")})}}</span>
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
          <span v-if="!$v.student_info.phone_number.required">{{$t("errors.required", {field: $t("shared.phone_number")})}}</span>
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
      <submitButton id="send-code-Button" :title="$t('shared.active')" color="login-green" :isDisabled="status" @click="submitRegisterForm" />
    </div>
    <div class="have-account" @click="$emit('show-login', true)">
      {{$t('home.haveAccount')}}
      <span class="login-word">{{$t('home.signin')}}</span>
    </div>
  </form>
  <!-- OTP Form -->
  <form class="otp-form" v-show="showOTPForm">
     <div class="input-container">
      <inputField
        type="text"
        :placeholder="$t('home.otp')"
        autofocus
        v-model="$v.otp.$model"
      >
        <div class="error" v-if="$v.otp.$dirty">
          <span v-if="!$v.otp.required">{{$t("errors.required", {field: $t("home.otp")})}}</span>
          <span v-if="!$v.otp.integer">{{$t("errors.integer", {field: $t("home.otp")})}}</span>
        </div>
      </inputField>
    </div>
    <div class="button-container">
      <submitButton :title="$t('home.register')" color="login-orange" :isDisabled="status" @click="submitOTPForm" />
    </div>
     <div class="help">
      <span class="resend-otp">{{$t('home.resend_otp')}}</span>
      <span @click="showOTPForm = false" class="edit-number">{{$t('home.edit_info')}}</span>
    </div>
  </form>
</div>

</template>

<script>
import { required, integer } from "vuelidate/lib/validators";
import inputField from "~/components/shared/inputField";
import submitButton from "~/components/shared/submitButton";
import firebase from "~/helpers/firebase.js"
export default {
  mounted(){
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('send-code-Button', {
  'size': 'invisible',
  'callback': function(response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
  console.log("heloo");
  
  }
});
  },
  components: {
    inputField,
    submitButton,
  },
  data() {
    return {
      status: true,
      showOTPForm: false,
      otp: "",
      student_info: {
        student_name: "",
        phone_number: "",
        password: "",
      },
    };
  },
  methods: {
    checkCorrectance() {
      if (this.$v.student_info.$invalid === false) {
        this.status = false;
      } else {
        this.status = true;
      }
    },
    submitRegisterForm(){
     var phoneNumber = this.student_info.phone_number;
var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult)=> {
      this.showOTPForm = true;
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
      console.log(error);
    });
    },
    submitOTPForm(){
      var code = this.otp;
confirmationResult.confirm(code).then(function (result) {
  // User signed in successfully.
 console.log("login successfully");
  // ...
}).catch(function (error) {
  console.log("errorororo");
});
    },
  },
  validations: {
    otp: {
      required,
      integer,
    },
    student_info: {
      student_name: {
        required,
      },
      phone_number: {
        required,
      },
      password: {
        required,
      },
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped  />