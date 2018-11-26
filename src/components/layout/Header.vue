<template>
  <div class="j-header">
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
      <v-toolbar-title class="ml-0 pl-3 header-title-text">
        <v-toolbar-side-icon @click.stop="toggleMenu"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">后台管理系统</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <v-icon>person</v-icon>
        </v-avatar>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu(){
      this.$store.commit('toggleSideMenu')
    }
  }
}
</script>

<style lang='scss' scoped>
.j-header {
  .header-title-text {
    width: 300px;
  }
}
</style>
