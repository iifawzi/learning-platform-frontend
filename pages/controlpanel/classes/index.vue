<template>
  <div class="classes">
    <div class="classes__content">
      <div class="classes-table">
        <modernTable v-if="!loading">
          <template v-slot:table__head>
            <tr class="table-head">
              <th class="number">
                #
                <i class="fas fa-arrow-up arrow"></i>
              </th>
              <th>{{ $t("cp_classes.name") }}</th>
              <th>{{ $t("cp_classes.desc") }}</th>
              <th>{{ $t("cp_classes.join_using") }}</th>
              <th>{{ $t("cp_classes.code") }}</th>
            </tr>
          </template>
          <template v-slot:table__data>
            <tr class="class-row">
              <td>1</td>
              <td>Math</td>
              <td>The best math's class ever</td>
              <td><span class="join-using red">Code</span></td>
              <td>H498487HJ</td>
              <td class="actions">
                <i class="far fa-edit action-icon edit-icon"></i>
                <i class="fas fa-minus-circle action-icon delete-icon"></i>
              </td>
            </tr>
          </template>
        </modernTable>
        <loading v-if="loading" type="circles" />
      </div>
    </div>
  </div>
</template>


<script>
import loading from "~/components/shared/loading";
import modernTable from "~/components/shared/modernTable";
import Notification from "~/components/shared/Notification";
export default {
  // async fetch() {
  //   this.$api
  //     .post("classes/signin", this.student_info)
  //     .then((respond) => {
  //       this.error = "";
  //       this.loading = false;
  //       const studentData = respond.data.data;
  //       Cookie.set("authorization", studentData.token);
  //       Cookie.set("refresh_token", studentData.refresh_token);
  //       this.$router.push(this.localePath("/dashboard", this.language));
  //     })
  //     .catch((err) => {
  //       this.loading = false;
  //       if (!err.response || !err.response.status) {
  //         this.error = this.$t("errors.500");
  //       } else {
  //         switch (err.response.status) {
  //           case 400:
  //             this.error = this.$t("errors.400");
  //             break;
  //           case 401:
  //             this.error = this.$t("home.login_401");
  //             break;
  //           default:
  //             this.error = this.$t("errors.500");
  //         }
  //       }
  //     });
  // },
  data() {
    return {
      error: "",
      loading: true,
    };
  },
  layout: "controlpanel",
  components: {
    modernTable,
    loading,
    Notification,
  },
};
</script>

<style lang="scss" scoped src="./style.scss"/>