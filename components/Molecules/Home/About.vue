<template>
  <section class="about-area py-5">
    <div class="container ">
      <div class="row">
        <!-- About Content -->
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="about-content">
            <h1>Who We Are</h1>
            <p v-html="about"></p>
          </div>

          <div class="read-more-btn mt-45">
            <nuxt-link to="/about-us">Read More</nuxt-link>
          </div>
        </div>
        <!-- About Content -->

        <!-- About Left Image -->
        <!-- <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="abt-left-pic">
            <img class="img-fluid" data-src="/about.jpg" alt="DIU-cpc" v-lazy-load>
          </div>
        </div> -->
        <!-- About Left Image -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  props:{
    about:{
      type:String,
      default:''
    }
  }
}
</script>

<style scoped>
.about-content p{
  text-align: justify;
  color: #606060;
  font-weight: 400;
}
.about-content h1 {
  color: #5B9BBF;
  font-weight: bold;
}
</style>
