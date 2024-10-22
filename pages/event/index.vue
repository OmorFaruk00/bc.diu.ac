<template>
  <div>
    <Molecules-banner title="event"/>
    <div class="container">
      <div class="row" style="margin: 80px 0px">
        <div v-if="blogsData.length > 0" v-for="blog in blogsData" class="col-lg-4 col-md-4 col-sm-6">
          <Molecules-card :blog="blog"/>
        </div>

        <div v-if="visible && !blogsData.length > 0" class="col-lg-12 col-md-12 col-sm-12">
          <h3 class="text-center">No data found.</h3>
        </div>

        <div v-if="blogsData.length >= 12" class="col-lg-12 col-md-12 col-sm-12">
          <pagination :limit="2" :size="small" :data="blogs"
                      @pagination-change-page="fetchBlogs"></pagination>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data: () => ({
    blogs: [],
    blogsData: [],
    type: 'event',
    visible:false
  }),

  methods: {
    async fetchBlogs(page = 1) {
      const blogs = await this.$axios.$get(`/blogs-events/${this.type}?page=${page}`);
      this.blogs = blogs;
      this.blogsData = blogs.data;
      this.visible = true;
    }
  },

  created() {
    this.fetchBlogs();
  }
}
</script>

<style scoped>

</style>
