<template>
  <div>
    <Molecules-banner title="alumni"/>

    <div class="container ">
      <div class="team-wrapper py-5">
        <div class="row">
          <div v-for="(teamMember,index) in members" :key="index" class="col-lg-3 col-md-4 col-sm-6">

            <Molecules-team :teamMember="teamMember"/>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  data: () => ({
    members: []
  }),

  methods: {
    async fetchMember() {
      const member = await this.$axios.$get('/member/alumni');
      this.members = member.data;
    }
  },

  created() {
    this.fetchMember();
  }
}
</script>

<style scoped>

</style>
