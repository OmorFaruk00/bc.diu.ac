<template>
  <div>
    <Molecules-details-banner title="Blog Details"/>
    <div class="container">
      <div class="row mt-5">
        <div v-if="blog" class="col-lg-12 col-md-12 col-sm-12">
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

  async asyncData(context) {
     return await context.$axios
      .$get(`/blogs-events/show/${context.route.params.slug}`)
      .then((res) => {
        // console.log(res,'working...');
        let obj1 = {url: `${context.env.BASE_PATH}${context.route.path}`};
        return {fetchedData: {...res.data, ...obj1}}
      })
  },

  head({$seoMeta}) {
    return {
      title: this.fetchedData?.meta_title || this.fetchedData?.name,
      meta: $seoMeta({
        title: this.fetchedData?.meta_title || this.fetchedData?.name,
        description: this.fetchedData?.meta_description || this.fetchedData?.blog_body,
        url: this.fetchedData?.url,
        image: this.fetchedData?.banner_url,
        keywords: this.fetchedData?.meta_keyword
      }, false)
    }
  },

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
