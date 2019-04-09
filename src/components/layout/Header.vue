<template>
  <div class="j-header">
    <v-toolbar
      dark
      app
      fixed
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
    >
      <v-toolbar-side-icon @click.stop="toggleMenu"></v-toolbar-side-icon>
      <v-toolbar-title>后台管理系统</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu
          transition="slide-y-transition"
          offset-y
          nudge-bottom="10"
        >
          <v-avatar slot="activator" size="30px">
            <img
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              alt="Avatar"
            />
          </v-avatar>
          <v-list>
            <v-list-tile v-for="(item, index) in items" @click="onMenuItemClick" :key="index">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit("toggleSideMenu");
    },
    onMenuItemClick() {
      
    }
  },
  data: () => ({
    items: [
      { title: "个人资料" },
      { title: "退出" }
    ]
  })
};
</script>

<style lang='scss' scoped>
.j-header {
  .header-title-text {
    width: 300px;
  }
}
</style>
