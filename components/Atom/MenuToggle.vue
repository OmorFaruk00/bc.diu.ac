<template>
  <div class="toggle-button d-inline-block d-lg-none">
    <a href="javaScript:void(0)" @click="toggleMenu" class="site-menu-toggle py-5 js-menu-toggle text-black">
      <span class="icon-menu h3"></span>
    </a>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "MenuToggle",
  methods: {

    ...mapActions({
      actionStatusChange: 'toggleMenu/actionToggle'
    }),

    toggleMenu() {
      this.actionStatusChange({
        status: 'offcanvas-menu',
      });
    }

  }
}
</script>

<style scoped>

</style>
