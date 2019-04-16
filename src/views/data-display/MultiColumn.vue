<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
      <template slot="header">
        <v-toolbar class="mb-1" color="indigo darken-5" dark flat>
          <v-toolbar-title>XX部门员工信息</v-toolbar-title>
        </v-toolbar>
      </template>
      <template slot="item" slot-scope="props">
        <v-flex xs12 sm6 md4 lg3>
          <v-hover>
            <v-card slot-scope="{hover}"
                    :class="`elevation-${hover ? 12 : 2}`">
              <v-card-title
                ><h4>{{ props.item.name }}</h4></v-card-title
              >
              <v-divider></v-divider>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>邮箱:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.email
                  }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>联系方式:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.contact
                  }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>地址:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.address
                  }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>性别:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.gender
                  }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>生日:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.birthday
                  }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>职级</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.title
                  }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>工作年限:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{
                    props.item.workYear
                  }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-hover>
        </v-flex>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { getEmployeeList } from "@/service/demo-service";

export default {
  data: () => ({
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 4
    },
    items: []
  }),
  created() {
    getEmployeeList().then(res => {
      this.items = res;
    });
  }
};
</script>