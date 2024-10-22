<template>
  <!-- Page Header Start here -->
  <section class="page-header section-notch">
    <div class="overlay">
      <div class="container">
        <div class="col-md-12 text-center header">
          <h1 class="page-title text-capitalize">{{ title }}</h1>

          <p>
            <nuxt-link to="/" class="default-title">Home</nuxt-link>
            <span style="color: #FFFFFF!important;">/</span> <span class="text-capitalize"
                                                                   style="color: #FFFFFF!important;">{{ title }}</span>
          </p>

        </div>
      </div>
    </div>
  </section>
  <!-- Page Header End here -->
</template>

<script>
export default {
  name: "Banner",
  props: {
    title: {
      type: String,
      default: 'Home'
    }
  }
}
</script>

<style scoped>
.page-header {
  background-image:  url('~assets/images/banner.png');
  background-size: 100% 100%;
  /*background-position: center;*/
}
.page-title{
  color: #FFFFFF;
}

.default-title{
  color: #5B9BBF;
}

.page-header .overlay {
  padding: 25px 0px;
  background-color: rgba(0,0,0,.6);
  text-align: center;
}
</style>
