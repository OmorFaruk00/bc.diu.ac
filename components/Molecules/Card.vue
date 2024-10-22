<template>
  <div class="card mb-5">
<!--    <img :src="blog.banner_url" class="card-img-top" :alt="blog.name">-->

    <img class="card-img-top img-fluid blog-image" :data-src="blog.banner_url"
         :alt="blog.name" v-lazy-load>

    <div class="card-body" :style="type == 'blog' ? 'height:320px' : ''">
      <h5 class="card-title">{{ blog.name }}</h5>
      <p class="card-text" v-html="blog.blog_body.substr(0,200)"></p>

      <nuxt-link v-if="type == 'blog'" :to="`/blogs/${blog.slug}`">Read more</nuxt-link>
      <nuxt-link v-else :to="`/event/${blog.slug}`">Read more</nuxt-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['blog', 'type']
}
</script>

<style scoped>
p {
  text-align: justify;
}
.blog-image{
  height: 220px;
  width: 100%;
}
</style>
