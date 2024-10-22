<template>
  <div>
    <Molecules-banner title="members"/>

    <div class="container ">
      <div class="team-wrapper py-5">
        <div class="row">
          <div v-for="(teamMember,index) in members.data" :key="index" class="col-lg-3 col-md-4 col-sm-6">

            <Molecules-team type="member" :teamMember="teamMember"/>

          </div>

          <div class="col-12">
            <Pagination align="center" size="small" :data="members" @pagination-change-page="fetchMember" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LaravelVuePagination from 'laravel-vue-pagination';

export default {
  name: "index",
  components: {
    'Pagination': LaravelVuePagination
  },
  data: () => ({
    members: []
  }),

  methods: {
    async fetchMember(page = 1) {
      const member = await this.$axios.$get(`/member/member?page=${page}`);
      this.members = member;
      $('html,body').animate({ scrollTop: 0 }, 400);
    }
  },

  created() {
    this.fetchMember();
  }
}
</script>

<style scoped>

</style>
