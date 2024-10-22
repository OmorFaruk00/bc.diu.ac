<template>
  <div class="card mb-5">
<!--    <img :src="blog.banner_url" class="card-img-top" :alt="blog.name">-->

    <img class="card-img-top" :data-src="blog.banner_url"
         :alt="blog.name" v-lazy-load>

    <div class="card-body">

      <h5 class="card-title">{{ blog.name }}</h5>
      <p class="card-text" v-html="blog.blog_body"></p>

    </div>
  </div>
</template>

<script>
export default {
  name: "Single",
  props: ['blog']
}
</script>

<style scoped>
p {
  color: #606060;
  text-align: justify;
}
</style>
