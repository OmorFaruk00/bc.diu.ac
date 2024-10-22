<template>
  <section class="about-area py-5">
    <div class="container ">

      <div class="committee-header">
        <h1 class="text-center">OUR COMMITTEE MEMBER</h1>
      </div>


      <div class="team-wrapper py-5">
        <div class="row">
          <div v-for="(teamMember,index) in members" :key="index" class="col-lg-3 col-md-4 col-sm-6">

            <Molecules-team :teamMember="teamMember"/>

          </div>

        </div>
      </div>


    </div>
  </section>
</template>

<script>

export default {
  name: "CommitteMember",
  data: () => ({
    members: []
  }),

  methods: {
    async fetchMember() {
      const member = await this.$axios.$get('/member/committee');
      this.members = member.data;
    }
  },

  created() {
    this.fetchMember();
  }
}
</script>

<style scoped>
.committee-header h1 {
  color: #5B9BBF;
  font-weight: bold;
  padding-bottom: 20px;
}

.partner-single {
  padding: 0 10px;
}
</style>
