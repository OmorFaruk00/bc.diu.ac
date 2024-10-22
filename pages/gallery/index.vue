<template>
  <div>
    <Molecules-banner title="Gallery"/>

    <div class="container py-5">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="card-columns" v-viewer="{movable: false}">

            <div class="card" v-for="(gallery,index) in galleries.data" :key="index">
              <img style="cursor: pointer" class="card-img-top" :data-src="gallery.image.full_url"
                   :alt="gallery.title" v-lazy-load>
            </div>

          </div>
        </div>


        <div class="col-lg-12 col-md-12 col-sm-12">
          <pagination :limit="2" :size="small" :align="center" :data="galleries"
                      @pagination-change-page="fetchGalleries"></pagination>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
import Vue from 'vue'
import 'viewerjs/dist/viewer.css'
import {directive as viewer} from "v-viewer"


Vue.component('pagination', require('laravel-vue-pagination'));


export default {
  name: "index",
  data: () => ({
    galleries: []
  }),

  directives: {
    viewer: viewer({
      debug: true,
    }),
  },
  methods: {
    show() {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    },
    async fetchGalleries(page = 1) {
      const galleries = await this.$axios.$get(`/galleries?page=${page}`);
      this.galleries = galleries;
    }
  },
  created() {
    this.fetchGalleries();
  }
}
</script>

<style scoped>

</style>
