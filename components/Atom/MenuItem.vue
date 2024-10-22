<template>
  <span>
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
  </span>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "MenuItem",
  methods: {
    ...mapActions({
      actionStatusChange: 'toggleMenu/actionToggle'
    }),

    toggleMenu() {
      this.actionStatusChange({
        status: '',
      });
    }
  }
}
</script>

<style scoped>

</style>
