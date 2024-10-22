<template>

  <div>
    <Molecules-header-toggle/>
    <!--    <header class="site-navbar site-navbar-target position-fixed bg-white"  role="banner">-->
    <header class="site-navbar site-navbar-target bg-white" :class="visible == true ? 'header-fixed' : ''"
            role="banner">

      <div class="container">
        <div class="row align-items-center position-relative">

          <div class="site-logo">
            <nuxt-link to="/">
              <img style="height: 80px" class="img-fluid" src="/logo/logo.png" alt="DIU">
            </nuxt-link>
          </div>

          <div class="col-12">
            <nav class="site-navigation text-right ml-auto " role="navigation">

              <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">

                <li>
                  <nuxt-link to="/" class="nav-link" :class="$nuxt.$route.name == 'index' ? 'active' : ''">Home
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/about-us" class="nav-link" :class="$nuxt.$route.name == 'about-us' ? 'active' : ''">
                    About Us
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/gallery" class="nav-link" :class="$nuxt.$route.name == 'gallery' ? 'active' : ''">
                    Gallery
                  </nuxt-link>
                </li>


                <li>
                  <nuxt-link to="/blogs" class="nav-link" :class="$nuxt.$route.name == 'blogs' ? 'active' : ''">
                    Blogs
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/event" class="nav-link" :class="$nuxt.$route.name == 'event' ? 'active' : ''">
                    Event
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/members" class="nav-link" :class="$nuxt.$route.name == 'members' ? 'active' : ''">
                    Members
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/member-form" class="nav-link"
                             :class="$nuxt.$route.name == 'member-form' ? 'active' : ''">
                    Member Form
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/alumni" class="nav-link" :class="$nuxt.$route.name == 'alumni' ? 'active' : ''">
                    Alumni
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/contact-us" class="nav-link"
                             :class="$nuxt.$route.name == 'contact-us' ? 'active' : ''">
                    Contact Us
                  </nuxt-link>
                </li>

                <!--                <li class="has-children">
                                  <a href="#about-section" class="nav-link">About Us</a>
                                  <ul class="dropdown arrow-top">
                                    <li><a href="#team-section" class="nav-link">Team</a></li>
                                    <li><a href="#pricing-section" class="nav-link">Pricing</a></li>
                                    <li><a href="#faq-section" class="nav-link">FAQ</a></li>
                                    <li class="has-children">
                                      <a href="#">More Links</a>
                                      <ul class="dropdown">
                                        <li><a href="#">Menu One</a></li>
                                        <li><a href="#">Menu Two</a></li>
                                        <li><a href="#">Menu Three</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>-->

              </ul>
            </nav>

          </div>

          <Atom-menu-toggle/>
        </div>
      </div>

    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  head: {
    link: [
      {rel: 'stylesheet', href: '/header/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/header/css/style.css'},
    ],
    script: [
      {src: '/header/js/jquery-3.3.1.min.js'},
      {src: '/header/js/popper.min.js'},
      {src: '/header/js/bootstrap.min.js'},
      {src: '/header/js/jquery.sticky.js'},
      {src: '/header/js/main.js'},
    ],
  },
  data: () => ({
    visible: false,
  }),
  methods: {
    scrollListener: function (e) {
      this.visible = window.scrollY >150
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

<style scoped>
.header-fixed {
  box-shadow: 0px 1px 1px 0px #ccc;
  position: fixed;
  top: 0;
}
</style>
