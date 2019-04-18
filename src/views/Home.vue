<template>
  <div id="home">
    <j-header></j-header>
    <j-menu></j-menu>
    <v-content>
      <v-container fluid>
        <transition name="slide-y-reverse-transition">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <j-footer></j-footer>
  </div>
</template>

<script>
import Footer from '@/views/layout/Footer.vue'
import Header from '@/views/layout/Header.vue'
import Menu from '@/views/layout/SideMenu.vue'

export default {
  components: {
    'j-footer': Footer,
    'j-header': Header,
    'j-menu': Menu
  }
}
</script>