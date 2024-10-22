<template>
  <div>
    <Molecules-details-banner title="Event Details"/>

    <div class="container">
      <div class="row mt-5">
        <div v-if="blog"class="col-lg-12 col-md-12 col-sm-12">
          <Molecules-single :blog="blog"/>
        </div>

        <div v-else class="col-lg-12 col-md-12 col-sm-12">
          <h3 class="text-center">No data found.</h3>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data: () => ({
    blog: {},
  }),

  methods: {
    async fetchBlog() {
      const blog = await this.$axios.$get(`/blogs-events/show/${this.$route.params.slug}`);
      this.blog = blog.data;
    }
  },

  created() {
    this.fetchBlog();
  }
}
</script>

<style scoped>

</style>
