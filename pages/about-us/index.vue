<template>

  <div>
    <Molecules-banner title="about us"/>
    <About-introduction :about="setting.introduction"/>
    <About-mission :mission="setting.mission"/>
    <About-vission :vision="setting.vision"/>
    <About-committe-member/>
  </div>

</template>

<script>
export default {
  name: "index",
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
