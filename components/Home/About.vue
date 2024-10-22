<template>
  <div>
    <Molecules-home-about :about="setting.introduction"/>
    <Molecules-home-mission :mission="setting.mission"/>
    <Molecules-home-vision :vision="setting.vision"/>
  </div>

</template>

<script>
export default {
  name: "About",
  data: () => ({
    setting: {}
  }),

  methods: {
    async fetchSetting() {
      const setting = await this.$axios.$get('/setting');
      this.setting = setting;
    }
  },

  created() {
    this.fetchSetting();
  }
}
</script>

<style scoped>

</style>
