<template>
  <section class="about-area py-5" v-if="partners.length > 0">
    <div class="container" style="vertical-align: center">

      <div class="partner-header">
        <h1 class="text-center">WE WORK TOGETHER</h1>
      </div>

      <client-only>
        <carousel :autoplay="true" :nav="false"
                  :responsive="{0:{items:1,nav:false},576:{items:1,nav:false},768:{items:2,nav:false},992:{items:3,nav:false},1200:{items:5,nav:false}}">

          <div v-for="(partner,index) in partners" :key="index" class="partner-single text-center align-middle">

            <a href="javascript:void(0)">
              <img :data-src="partner.image.full_url" :alt="partner.name" v-lazy-load>
            </a>
          </div>

        </carousel>
      </client-only>

    </div>
  </section>
</template>

<script>
export default {
  name: "Partner",

  data: () => ({
    partners: []
  }),

  methods: {
    async fetchPartners() {
      const partners = await this.$axios.$get('/partners');
      this.partners = partners;
    }
  },

  created() {
    this.fetchPartners();
  }
}
</script>

<style scoped>

.partner-header h1 {
  color: #5B9BBF;
  font-weight: bold;
  padding: 25px 0;
}

.partner-single {
  padding: 0 10px;
}
</style>
