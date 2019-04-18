<template>
  <v-navigation-drawer
    width="200"
    :clipped="$vuetify.breakpoint.lgAndUp"
    v-model="visible"
    fixed
    app
  >
    <v-list dense>
      <template v-for="item in menu">
        <v-list-group
          @click="onClickMenu(item)"
          :key="item.text"
          :prepend-icon="item.icon"
          :append-icon="item.children ? 'keyboard_arrow_down' : ''"
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            class="sub-menu"
            v-for="(child, i) in item.children"
            :key="i"
            @click="onClickMenu(child)"
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
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { menu } from '@/utils/const'

export default {
  data() {
    return {
      menu
    };
  },
  methods: {
    noop() {},
    onClickMenu(menu) {
      if(menu && !menu.children) {
        this.$router.push({name: menu.name})
      }
    }
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

<style lang='scss' scoped>
  .sub-menu{
    .v-list__tile__action {
      justify-content: center;
    }
  }
</style>
