<template>
  <section class="mission-area py-5">
    <div class="container">
      <div class="row">

        <!-- About Content -->
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="mission-content">
            <h1>Mission</h1>
            <p v-html="mission"></p>


            <div class="read-more-btn mt-45">
              <nuxt-link to="/about-us">Read More</nuxt-link>
            </div>
          </div>
        </div>
        <!-- About Content -->

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Mission",
  props: {
    mission: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.mission-area {
  background: #F5F5F5;
}

.mission-content p {
  color: #606060;
  text-align: justify;
}

.mission-content h1 {
  color: #5B9BBF;
  font-weight: bold;
}

</style>
