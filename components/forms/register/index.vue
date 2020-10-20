<template>
  <div class="registeration-forms">
    <form class="register-form" v-show="!showOTPForm && !loading_status.sendVerif">
      <div class="input-container">
        <inputField
          type="text"
          :placeholder="$t('shared.student_name')"
          autofocus
          v-model="$v.student_info.student_name.$model"
          @input="checkCorrectance"
        >
          <div class="error" v-if="$v.student_info.student_name.$dirty">
            <span
              v-if="!$v.student_info.student_name.required"
            >{{$t("errors.required", {field: $t("shared.student_name")})}}</span>
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
            <span
              v-if="!$v.student_info.phone_number.required"
            >{{$t("errors.required", {field: $t("shared.phone_number")})}}</span>
          </div>
          <template v-slot:info>
            <h1>{{$t("messages.verif_number")}}</h1>
          </template>
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
            <span
              v-if="!$v.student_info.password.required"
            >{{$t("errors.required", {field: $t("shared.password")})}}</span>
          </div>
        </inputField>
      </div>
      <div class="button-container">
        <submitButton
          id="send-code-Button"
          :title="$t('shared.active')"
          color="login-green"
          :isDisabled="status"
          @click="submitRegisterForm"
        />
      </div>
      <div class="have-account" @click="$emit('show-login', true)">
        {{$t('home.haveAccount')}}
        <span class="login-word">{{$t('home.signin')}}</span>
      </div>
      <Notification v-if="errors.sendVerif != ''" :label="errors.sendVerif"></Notification>
    </form>
    <!-- OTP Form -->
    <form
      class="otp-form"
      v-show="showOTPForm && !loading_status.sendVerif && !loading_status.confirmVerif"
    >
      <div class="input-container">
        <inputField type="text" :placeholder="$t('home.otp')" autofocus v-model="$v.otp.$model">
          <div class="error" v-if="$v.otp.$dirty">
            <span v-if="!$v.otp.required">{{$t("errors.required", {field: $t("home.otp")})}}</span>
            <span v-if="!$v.otp.integer">{{$t("errors.integer", {field: $t("home.otp")})}}</span>
          </div>
        </inputField>
      </div>
      <div class="button-container">
        <submitButton
          :title="$t('home.register')"
          color="login-orange"
          :isDisabled="status"
          @click="submitOTPForm"
        />
      </div>
      <div class="help">
        <span class="resend-otp">{{$t('home.resend_otp')}}</span>
        <span @click="showOTPForm = false" class="edit-number">{{$t('home.edit_info')}}</span>
      </div>
      <Notification v-if="errors.confirmVerif != ''" :label="errors.confirmVerif"></Notification>
    </form>
    <loading type="circles" v-if="loading_status.sendVerif || loading_status.confirmVerif" />
  </div>
</template>

<script>
import { required, integer } from "vuelidate/lib/validators";
import inputField from "~/components/shared/inputField";
import loading from "~/components/shared/loading";
import Notification from "~/components/shared/Notification";
import submitButton from "~/components/shared/submitButton";
import firebase from "~/helpers/firebase.js";
export default {
  mounted() {
    // check if real user:
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "send-code-Button",
      {
        size: "invisible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      }
    );
  },
  components: {
    inputField,
    submitButton,
    loading,
    Notification,
  },
  data() {
    return {
      status: true,
      showOTPForm: true,
      otp: "",
      student_info: {
        student_name: "",
        phone_number: "",
        password: "",
      },
      loading_status: {
        sendVerif: false,
        confirmVerif: false,
      },
      errors: {
        sendVerif: "",
        confirmVerif: "",
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
    submitRegisterForm() {
      this.loading_status.sendVerif = true;
      this.errors.sendVerif = "";
      let phoneNumber = this.student_info.phone_number;
      let appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          this.loading_status.sendVerif = false;
          this.showOTPForm = true;
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          this.loading_status.sendVerif = false;
          this.errors.sendVerif = this.$t("errors.sendOTP");
        });
    },
    submitOTPForm() {
      this.errors.confirmVerif = "";
      this.loading_status.confirmVerif = true;
      let code = this.otp;
      confirmationResult
        .confirm(code)
        .then((result) => {
          // code is confirmed:
          this.loading_status.confirmVerif = false;
          // add to backend:
        })
        .catch((error) => {
          this.loading_status.confirmVerif = false;
          this.errors.confirmVerif = this.$t("errors.confirmOTP");
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