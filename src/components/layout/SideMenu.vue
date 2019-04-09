<template>
  <v-navigation-drawer
    width="200"
    :clipped="$vuetify.breakpoint.lgAndUp"
    v-model="visible"
    fixed
    app
  >
    <v-list dense>
      <template v-for="item in items">
        <v-list-group
          v-if="item.children"
          v-model="item.model"
          :key="item.text"
          :prepend-icon="item.icon"
          append-icon="keyboard_arrow_down"
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            @click="noop"
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else :key="item.text" @click="noop">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: "home", text: "主页" },
        {
          icon: "widgets",
          text: "常用功能",
          model: false,
          children: [
            { text: "常用功能", icon: "apps" },
            { text: "菜单04-02", icon: "apps" }
          ]
        },
        {
          icon: "settings",
          text: "系统设置",
          children: [
            { text: "系统信息", icon: "apps" },
            { text: "菜单04-02", icon: "apps" }
          ]
        },
        { icon: "apps", text: "菜单02" },
        { icon: "apps", text: "菜单03" }
      ]
    };
  },
  methods: {
    noop() {}
  },
  computed: {
    visible: {
      set() {},
      get() {
        return this.$store.state.sideMenuVisible;
      }
    }
  }
};
</script>

<style lang='scss'>
</style>
