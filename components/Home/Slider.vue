<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    indicators
    img-width="1072"
    img-height="600"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <div class="overlay"></div>
    <!-- Text slides with image -->
    <b-carousel-slide v-for="(slider,index) in sliders" :key="index"
                      :caption="slider.title"
                      :text="slider.short_description"
                      :img-src="slider.image.full_url"
    ></b-carousel-slide>

  </b-carousel>
</template>

<script>

export default {
  name: "Slider",
  data: () => ({
    slide: 0,
    sliding: null,
    sliders:[],
  }),
  methods: {

    onSlideStart(slide) {
      this.sliding = true
    },

    onSlideEnd(slide) {
      this.sliding = true
    },

    async fetchSliders() {
      const sliders = await this.$axios.$get('/sliders');
      this.sliders = sliders;
    }
  },

  created() {
    this.fetchSliders();
  }
}
</script>

<style>
.carousel-item img {
  width: 100%;
  height: content-box;
  object-fit: cover;
}

.carousel-item img {
  width: 100%;
  height: 850px; /* Set your desired height */
  object-fit: cover;
  object-position: center; /* Centers the image */
}

#carousel-1 .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
  background-color: rgba(0, 0, 0, .3);
}

.carousel-caption {
  transform: translateY(-50%);
  bottom: initial;
  top: 50%;
}

.carousel-caption h3 {
  font-weight: 700;
  font-size: 50px;
  text-transform: capitalize;
  color: #4F75B5;
}


.carousel-item {
  max-height: 510px;
}

.carousel-caption p {
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
}

@media only screen and (min-width: 992px) and (max-width: 1800px) {
  .carousel-item img {
    height: 650px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .carousel-caption h3 {
    font-weight: 700;
    font-size: 30px;
    text-transform: capitalize;
  }

  .carousel-caption p {
    font-weight: 700;
    font-size: 14px;
  }
}

@media only screen and (max-width: 767px) {
  .carousel-caption h3 {
    font-weight: 700;
    font-size: 20px;
    text-transform: capitalize;
  }

  .carousel-caption p {
    font-weight: 700;
    font-size: 14px;
  }
}

@media only screen and (max-width: 575px) {
  .carousel-caption p {
    display: none;
  }
}
</style>
