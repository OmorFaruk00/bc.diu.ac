<template>
  <v-app dark>
    <Molecules-banner title="Error"/>

    <div class="container" >

      <div class="row mt-5">
        <div class="col-lg-8 col-md-8 col-sm-12 offset-lg-2 offset-md-2 text-center">
          <h3 class="text-center">THE PAGE YOU ARE LOOKING FOR IS NOT FOUND! PLEASE CHECK THE URL AGAIN...</h3>

          <nuxt-link to="/" class="btn btn-outline-secondary">Home</nuxt-link>
        </div>

      </div>

    </div>

  </v-app>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
