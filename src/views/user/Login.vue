<template>
  <v-layout class="with-bg align-center justify-center">
    <v-flex xs10 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>后台管理系统</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="person"
              name="username"
              label="用户名"
              type="text"
            ></v-text-field>
            <v-text-field
              id="password"
              prepend-icon="lock"
              name="password"
              label="密码"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">登录</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>

<style lang="scss" scoped>
.with-bg {
  background-image: url("/bg.jpg");
  background-size: 100% 100%;
}
</style>
