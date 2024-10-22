<template>
  <section class="introduction-area py-5">
    <div class="container">
      <div class="row">



        <!-- About Content -->
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="introduction-section">
            <h1>Introduction</h1>
            <p v-html="about"></p>

          </div>
        </div>
        <!-- About Content -->

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Introduction",
  props:{
    about:{
      type:String,
      default:''
    }
  }
}
</script>

<style scoped>
.introduction-section p {
  color: #606060;
  text-align: justify;
}

.introduction-section h1 {
  color: #5B9BBF;
  font-weight: bold;
}
</style>
