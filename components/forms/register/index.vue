<template>
  <div class="registeration-forms">
    <!-- Register form -->
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
      v-show="showOTPForm && !loading_status.sendVerif && !loading_status.confirmVerifAndBackend"
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
            <!-- Notifi for confirm code call -->
      <Notification v-if="errors.confirmVerif != ''" :label="errors.confirmVerif"></Notification>
    </form>

    <!-- Loading indicator while (confirm otp and add to back). -->
    <loading
      type="circles"
      v-if="loading_status.sendVerif || loading_status.confirmVerifAndBackend"
    />
      <!-- Notifi for adding to backend api-->
    <Notification v-if="errors.addStudent != ''" :label="errors.addStudent"></Notification>
  </div>
</template>

<script>
import { required, integer } from "vuelidate/lib/validators";
import inputField from "~/components/shared/inputField";
import loading from "~/components/shared/loading";
import Notification from "~/components/shared/Notification";
import submitButton from "~/components/shared/submitButton";
import firebase from "~/helpers/firebase.js";
import Cookie from "js-cookie";
export default {
  // this is used for recaptcha (invisable )
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
      status: true, // status of adding student to the backend.
      showOTPForm: false,
      otp: "", // used to store the code.
      student_info: {
        student_name: "",
        phone_number: "",
        password: "",
      },
      loading_status: {
        sendVerif: false,
        confirmVerifAndBackend: false,
      },
      errors: {
        sendVerif: "",
        confirmVerif: "",
        addStudent: "",
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
      this.errors.sendVerif = "";
      this.loading_status.sendVerif = true;
      // Send the code to the entered phone_number: 
      let phoneNumber = this.student_info.phone_number;
      let appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
      // if code sent successfully show to otp form: 
          this.loading_status.sendVerif = false;
          this.errors.sendVerif = "";
          this.showOTPForm = true;
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
      // if error while sending the code, show notifi.
          this.loading_status.sendVerif = false;
          this.errors.sendVerif = this.$t("errors.sendOTP");
        });
    },

    submitOTPForm() {
      this.errors.confirmVerif = "";
      this.loading_status.confirmVerifAndBackend = true;
      // check if the entered code is correct: 
      let code = this.otp;
      confirmationResult
        .confirm(code)
        .then((result) => {
          this.errors.confirmVerif = "";
          // code is confirmed, add to backend:
          this.addStudentToBackend();
        })
        .catch((error) => {
          // if code is incorrect, show notfi.
          this.loading_status.confirmVerifAndBackend = false;
          this.errors.confirmVerif = this.$t("errors.confirmOTP");
        });
    },

    addStudentToBackend() {
      this.errors.addStudent = "";

      // api's call:
      this.$api
        .post("students/signup", this.student_info)
        .then((respond) => {
          this.errors.addStudent = "";
          const studentData = respond.data.data;
          Cookie.set("authorization", studentData.token);
          this.$router.push(this.localePath("/dashboard"));
        })
        .catch((err) => {
          this.loading_status.confirmVerifAndBackend = false;
          if (!err.response || !err.response.status) {
            this.errors.addStudent = this.$t("errors.500");
          } else {
            switch (err.response.status) {
              case 400:
                this.errors.addStudent = this.$t("errors.400");
                break;
              case 409:
                this.errors.addStudent = this.$t("errors.409", {
                  resource: this.$t("shared.phone_number"),
                });
                break;
              default:
                this.errors.addStudent = this.$t("errors.500");
            }
          }
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