<template>
  <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="visible" fixed app>
    <v-list dense>
      <template v-for="item in items">
        <v-list-group v-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.icon" append-icon="keyboard_arrow_down">
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="(child, i) in item.children" :key="i">
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
        <v-list-tile v-else :key="item.text">
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
        { icon: 'apps', text: '菜单01'},
        { icon: 'apps', text: '菜单02' },
        { icon: 'apps', text: '菜单03' },
        {
          icon: 'apps',
          text: '菜单04',
          model: false,
          children: [
            { text: '菜单04-01', icon: 'apps' },
            { text: '菜单04-02', icon: 'apps' }
          ]
        },
        { icon: 'apps', text: '菜单05' }
      ]
    }
  },
  computed: {
    visible: {
      set(){},
      get(){
        return this.$store.state.sideMenuVisible
      }
    }
  }
}
</script>

<style lang='scss'>
</style>
