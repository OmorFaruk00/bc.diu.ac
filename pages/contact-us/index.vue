<template>
  <div>
    <Molecules-banner title="contact us"/>
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12">
          <h2 class="text-uppercase" style="margin-bottom: 15px">LEAVE A MASSAGE</h2>


          <form @submit.prevent="submit()">
            <div class="row">

              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" v-model="contact.name" required class="form-control" placeholder="Enter Name">
                  <small v-if="errors.name" class="text-danger with-errors"
                         v-html="errors.name[0]"></small>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" v-model="contact.email" required class="form-control" placeholder="Enter email">
                  <small v-if="errors.email" class="text-danger with-errors"
                         v-html="errors.email[0]"></small>
                </div>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" class="form-control" required v-model="contact.subject"
                         placeholder="Enter subject">
                  <small v-if="errors.subject" class="text-danger with-errors"
                         v-html="errors.subject[0]"></small>
                </div>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea name="message" class="form-control" required v-model="contact.message" id="message" rows="3"
                            placeholder="Enter message"></textarea>

                  <small v-if="errors.message" class="text-danger with-errors"
                         v-html="errors.message[0]"></small>
                </div>
              </div>

              <div class="col-lg-2 col-md-2 col-sm-12 offset-lg-5 offset-md-5">
                <button type="submit" class="btn btn-outline-secondary btn-block">Send</button>
              </div>


            </div>
          </form>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">

          <h2 class="text-uppercase" style="margin-bottom: 15px">Contact Us</h2>

          <div class="adrs-details mt-60">
            <ul>
              <li>

                <svg xmlns="http://www.w3.org/2000/svg" style="width: 35px;height: 35px" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>

                <p>Bcel Bhaban</p>
              </li>
              <li>

                <svg xmlns="http://www.w3.org/2000/svg" style="width: 35px;height: 35px" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>

                <a href="tel:+8801580356908">+8801580356908</a>
              </li>
              <li>

                <svg xmlns="http://www.w3.org/2000/svg" style="width: 35px;height: 35px" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                </svg>

                <a href="mailto:dibusinessclubdiubc@gmail.com">dibusinessclubdiubc@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default {
  name: "index",
  data: () => ({
    contact: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    errors: [],
  }),
  methods: {
    async submit() {

      await this.$axios.$post('/contact/store', this.contact).then((res) => {

        this.formClear();
        Toast.fire({
          icon: 'success',
          title: res.message
        })

      }).catch((error) => {

        this.errors = error.response.data.errors;

        Toast.fire({
          icon: 'error',
          title: error.message
        })
      });
    },

    formClear() {
      for (const property in this.contact) {
        this.contact[property] = '';
      }
    }
  }
}
</script>


<style scoped>

h2 {
  color: #5B9BBF;
}

.adrs-details ul li {
  list-style: none;
}

.adrs-details ul li a {
  color: #606060;
  display: inline-block;
  font-size: 16px;
  height: 38px;
  line-height: 38px;
  margin-right: 20px;
  margin-top: 10px;
  text-align: center;
  transition: all 0.3s ease 0s;
}

.adrs-details p {
  color: #606060;
  display: contents;
  font-size: 16px;
}
</style>
