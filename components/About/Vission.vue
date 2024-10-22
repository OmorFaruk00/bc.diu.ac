<template>
  <section class="vission-area py-5">
    <div class="container">
      <div class="row">



        <!-- About Content -->
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="vission-content">
            <h1>Vision</h1>
            <p v-html="vision"></p>
          </div>
        </div>
        <!-- About Content -->

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Vission",
  props:{
    vision:{
      type:String,
      default:''
    }
  }
}
</script>

<style scoped>
.vission-content p {
  color: #606060;
  text-align: justify;
}

.vission-content h1 {
  color: #5B9BBF;
  font-weight: bold;
}
</style>
