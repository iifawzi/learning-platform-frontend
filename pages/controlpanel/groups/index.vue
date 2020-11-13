<template>
  <div class="groups">
    <div class="groups__content">
      <div class="groups-table">
        <modernTable>
          <template v-slot:table__head>
            <tr class="table-head">
              <th class="number">
                #
                <i class="fas fa-arrow-up arrow"></i>
              </th>
              <th>{{ $t("cp_groups.name") }}</th>
              <th>{{ $t("cp_groups.desc") }}</th>
              <th>{{ $t("cp_groups.join_using") }}</th>
              <th>{{ $t("cp_groups.code") }}</th>
            </tr>
          </template>
          <template v-slot:table__data>

            <tr class="group-row">
              <td>1</td>
              <td>Math</td>
              <td>The best math's group ever</td>
              <td><span class="join-using red">Code</span></td>
              <td>H498487HJ</td>
              <td class="actions">
                <i class="far fa-edit action-icon edit-icon"></i>
                <i class="fas fa-minus-circle action-icon delete-icon"></i>
              </td>
            </tr>


            <tr class="group-row">
              <td>1</td>
              <td>Math</td>
              <td>The best math's group ever</td>
              <td><span class="join-using red">Code</span></td>
              <td>H498487HJ</td>
              <td class="actions">
                <i class="far fa-edit action-icon edit-icon"></i>
                <i class="fas fa-minus-circle action-icon delete-icon"></i>
              </td>
            </tr>



            <tr class="group-row">
              <td>1</td>
              <td>Math</td>
              <td>The best math's group ever</td>
              <td><span class="join-using red">Code</span></td>
              <td>H498487HJ</td>
              <td class="actions">
                <i class="far fa-edit action-icon edit-icon"></i>
                <i class="fas fa-minus-circle action-icon delete-icon"></i>
              </td>
            </tr>



            <tr class="group-row">
              <td>1</td>
              <td>Math</td>
              <td>The best math's group ever</td>
              <td><span class="join-using red">Code</span></td>
              <td>H498487HJ</td>
              <td class="actions">
                <i class="far fa-edit action-icon edit-icon"></i>
                <i class="fas fa-minus-circle action-icon delete-icon"></i>
              </td>
            </tr>



            <tr class="group-row">
              <td>1</td>
              <td>Math</td>
              <td>The best math's group ever</td>
              <td><span class="join-using red">Code</span></td>
              <td>H498487HJ</td>
              <td class="actions">
                <i class="far fa-edit action-icon edit-icon"></i>
                <i class="fas fa-minus-circle action-icon delete-icon"></i>
              </td>
            </tr>

            <tr class="group-row">
              <td>2</td>
              <td>Math</td>
              <td>The best math's group ever</td>
              <td><span class="join-using blue">Invite</span></td>
              <td>H498487HJ</td>
              <td class="actions">
                <i class="far fa-edit action-icon edit-icon"></i>
                <i class="fas fa-minus-circle action-icon delete-icon"></i>
              </td>
            </tr>

            <tr class="group-row">
              <td>3</td>
              <td>Math</td>
              <td>The best math's group ever</td>
              <td><span class="join-using red">Code</span></td>
              <td>H498487HJ</td>
              <td class="actions">
                <i class="far fa-edit action-icon edit-icon"></i>
                <i class="fas fa-minus-circle action-icon delete-icon"></i>
              </td>
            </tr>
          </template>
        </modernTable>
      </div>
    </div>
  </div>
</template>


<script>
import modernTable from "~/components/shared/modernTable";
export default {
  layout: "controlpanel",
  components: {
    modernTable,
  },
};
</script>

<style lang="scss" scoped src="./style.scss"/>