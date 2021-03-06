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
            <tr
              class="class-row"
              v-for="(classData, i) of classesData"
              :key="classData.class_id"
            >
              <td>{{ i + 1 }}</td>
              <td>{{ classData.class_name }}</td>
              <td>
                {{ classData.class_description.substr(0, 10)
                }}{{ classData.class_description.length > 10 ? "..." : "" }}
              </td>
              <td>
                <span :class="['join-using', classData.join_using]">{{
                  classData.join_using === "code"
                    ? $t("cp_classes.join_code")
                    : $t("cp_classes.join_request")
                }}</span>
              </td>
              <td>{{ classData.class_code }}</td>
              <td class="actions">
                <i class="far fa-edit action-icon edit-icon"></i>
                <i
                  class="fas fa-minus-circle action-icon delete-icon"
                  @click="switchDialog(classData.class_id)"
                ></i>
              </td>
            </tr>
          </template>
        </modernTable>
        <loading v-if="loading" type="circles" />
      </div>
    </div>
    <confirmDialog
      v-if="confirmationDialogStatus && !loading"
      @callToConfirm="deleteClass"
      @callToCloseDialog="switchDialog"
    >
      Are you sure you wanna delete this class?
    </confirmDialog>
  </div>
</template>


<script>
import loading from "~/components/shared/loading";
import modernTable from "~/components/shared/modernTable";
import confirmDialog from "~/components/shared/confirmDialog";
export default {
  async created() {
    this.$api
      .get("classes/")
      .then((respond) => {
        this.error = "";
        this.loading = false;
        this.classesData = respond.data.data;
      })
      .catch((err) => {
        this.loading = false;
        if (!err.response || !err.response.status) {
          this.error = this.$t("errors.500");
        } else {
          switch (err.response.status) {
            case 401:
              this.error = this.$t("errors.401");
              break;
            case 403:
              this.error = this.$t("errors.403", {
                resource: this.$t("cp_classes.classes"),
              });
              break;
            default:
              this.error = this.$t("errors.500");
          }
        }
      });
  },
  data() {
    return {
      error: "",
      loading: true,
      classesData: "",
      confirmationDialogStatus: false,
      class_id_to_delete: -1,
    };
  },
  methods: {
    switchDialog(class_id) {
      this.confirmationDialogStatus = !this.confirmationDialogStatus;
      if (class_id) {
        this.class_id_to_delete = class_id;
      }
    },
    deleteClass() {
      this.loading = true;
      this.$api({
        method: "DELETE",
        url: "classes/",
        data: { class_id: this.class_id_to_delete },
      })
        .then((respond) => {
          this.error = "";
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          if (!err.response || !err.response.status) {
            this.error = this.$t("errors.500");
          } else {
            switch (err.response.status) {
              case 401:
                this.error = this.$t("errors.401");
                break;
              case 403:
                this.error = this.$t("errors.403", {
                  resource: this.$t("cp_classes.classes"),
                });
                break;
              default:
                this.error = this.$t("errors.500");
            }
          }
        });
    },
  },
  layout: "controlpanel",
  components: {
    modernTable,
    loading,
    confirmDialog,
  },
};
</script>

<style lang="scss" scoped src="./style.scss"/>