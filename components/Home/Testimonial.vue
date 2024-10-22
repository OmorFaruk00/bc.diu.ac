<template>
  <section v-if="testimonials.length > 0" class="client-testimonial-area ptb-100 bg-2 overlay">
    <div class="container">
      <!-- Testimonial Content Area Start -->
      <div style="opacity: 1; display: block;">

        <client-only>
          <carousel :autoplay="true" :nav="false"
                    :responsive="{0:{items:1,nav:false},576:{items:1,nav:false},768:{items:1,nav:false},992:{items:1,nav:false},1200:{items:1,nav:false}}">

            <div v-for="(testimonial,index) in testimonials" :key="index" class="client-testimonial-single text-center">
              <div class="ct-cp">
                <img
                  :data-src="testimonial.image.full_url"
                  :alt="testimonial.name" v-lazy-load>
              </div>
              <div class="client-say text-white">
                <p v-text="testimonial.description"></p>
                <div class="client-info">
                  <h6>{{ testimonial.name }}</h6>
                  <p>{{ testimonial.designation }}</p>
                </div>
              </div>
            </div>

          </carousel>

          </client-only>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial",
  data: () => ({
    testimonials: []
  }),
  methods: {
    async fetchTestimonial() {
      const testimonials = await this.$axios.$get('/testimonial');
      this.testimonials = testimonials;
    }
  },
  created() {
    this.fetchTestimonial();
  }
}
</script>

<style scoped>

.client-testimonial-area {
  background: #0C0B03;
}

.client-testimonial-single {
  max-width: 85%;
  margin: 0 auto;
  padding: 40px 0 !important;
}

.ct-cp {
  max-width: 200px;
  margin: 0 auto;
}

.ct-cp img {
  border-radius: 100%;
  border: 3px solid #FFF;
  margin-bottom: 20px;
  height: 200px;
}

.owl-dots {
  margin-top: -85px;
}

.client-say p {
  color: #d7d7d7;
  display: inline-block;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 30px;
  max-width: 850px;
  vertical-align: top;
}


</style>
