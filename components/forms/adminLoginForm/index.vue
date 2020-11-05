<template>
  <form class="login-form">
    <div class="input-container">
      <inputField
        type="text"
        :placeholder="$t('shared.phone_number')"
        autofocus
        v-model="$v.teacher_info.teacher_phone_number.$model"
        @input="checkCorrectance"
      >
        <div class="error" v-if="$v.teacher_info.teacher_phone_number.$dirty">
          <span
            v-if="!$v.teacher_info.teacher_phone_number.required"
          >{{$t("errors.required", {field: $t("shared.phone_number")})}}</span>
        </div>
      </inputField>
    </div>
    <div class="input-container">
      <inputField
        type="password"
        :placeholder="$t('shared.password')"
        autocomplete
        v-model="$v.teacher_info.password.$model"
        @input="checkCorrectance"
      >
        <div class="error" v-if="$v.teacher_info.password.$dirty">
          <span
            v-if="!$v.teacher_info.password.required"
          >{{$t("errors.required", {field: $t("shared.password")})}}</span>
        </div>
      </inputField>
    </div>
    <div class="button-container">
      <submitButton
        :title="$t('home.signin')"
        color="login-blue"
        :isDisabled="status"
        @click="loginTeacher"
      />
    </div>
    <loading type="circles" v-if="loading" />
    <Notification v-if="error != ''" :label="error"></Notification>
  </form>
</template>

<script>
import { required, integer } from "vuelidate/lib/validators";
import inputField from "~/components/shared/inputField";
import submitButton from "~/components/shared/submitButton";
import loading from "~/components/shared/loading";
import Notification from "~/components/shared/Notification";
import Cookie from "js-cookie";
export default {
  components: {
    inputField,
    submitButton,
    loading,
    Notification,
  },
  data() {
    return {
      error: "",
      loading: "",
      status: true,
      teacher_info: {
        teacher_phone_number: "",
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
    loginTeacher() {
      this.loading = true;
      this.error = "";
      // api's call:
      this.$api
        .post("/teachers/signin", this.teacher_info)
        .then((respond) => {
          this.error = "";
          this.loading = false;
          const teacherData = respond.data.data;
          Cookie.set("authorization", teacherData.token);
          Cookie.set("refresh_token", teacherData.teacher_refresh_token);
          this.$router.push(this.localePath('/controlpanel/main', this.language));
        })
        .catch((err) => {
          this.loading = false;
          if (!err.response || !err.response.status) {
            this.error = this.$t("errors.500");
          } else {
            switch (err.response.status) {
              case 400:
                this.error = this.$t("errors.400");
                break;
              case 401:
                this.error = this.$t("home.login_401");
                break;
              default:
                this.error = this.$t("errors.500");
            }
          }
        });
    },
  },
  validations: {
    teacher_info: {
      teacher_phone_number: {
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