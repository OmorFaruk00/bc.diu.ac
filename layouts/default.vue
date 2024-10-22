<template>

  <div class="mobile-menu" :class="mobileMenu">

    <Header/>



<!--    <div style="padding-top: 100px">-->
      <Nuxt/>
<!--    </div>-->

    <Footer/>


    <a v-show="visible" href="javaScript:void(0)" id="scrollUp" v-scroll-to="'body'">
      <span class="icon-arrow-up" style="vertical-align: bottom;"></span>
    </a>

  </div>

</template>

<script>

import {mapState} from "vuex";

export default {

  data: ()=>({
    visible: false,
  }),

  computed: {
    ...mapState({
      mobileMenu: state => state.toggleMenu.toggleStatus
    })
  },

  methods: {
    scrollListener: function (e) {
      this.visible = window.scrollY > 200
    }
  },

  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },

  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }

}
</script>


<style>
#scrollUp {
  background: linear-gradient(#4F75B5, #000000);
  bottom: 7px;
  color: #fff;
  font-size: 15px;
  height: 30px;
  position: fixed;
  right: 7px;
  text-align: center;
  transition: all 0.3s ease 0s;
  width: 30px;
  z-index: 200;
  border-radius: 100%;
}

#scrollUp:hover {
  background: linear-gradient(#000000, #4F75B5);
}

body {
  margin: 0;
  padding: 0;
  z-index: 1;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #ddd;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #5B9BBF);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #5B9BBF);
}
</style>
