<template>
  <div class="site-mobile-menu site-navbar-target">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close mt-3">
        <span @click="toggleMenu" class="icon-close2 js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body">
      <ul class="site-nav-wrap">
        <Atom-menu-item/>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "HeaderToggle",
  methods: {
    ...mapActions({
      actionStatusChange: 'toggleMenu/actionToggle'
    }),

    toggleMenu() {
      this.actionStatusChange({
        status: '',
      });
    }
  }
}
</script>

<style scoped>

</style>
