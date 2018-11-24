<template>
  <div id="home">
    <j-header></j-header>
    <j-menu></j-menu>
    <v-content>
      <router-view></router-view>
    </v-content>
    <j-footer></j-footer>
  </div>
</template>

<script>
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'
import Menu from '@/components/layout/SideMenu.vue'

export default {
  components: {
    'j-footer': Footer,
    'j-header': Header,
    'j-menu': Menu
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'contacts', text: 'Contacts' },
      { icon: 'history', text: 'Frequently contacted' },
      { icon: 'content_copy', text: 'Duplicates' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Labels',
        model: true,
        children: [{ icon: 'add', text: 'Create label' }]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' }
        ]
      },
      { icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Send feedback' },
      { icon: 'help', text: 'Help' },
      { icon: 'phonelink', text: 'App downloads' },
      { icon: 'keyboard', text: 'Go to the old version' }
    ]
  }),
  props: {
    source: String
  }
}
</script>