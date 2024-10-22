<template>
  <div>

    <Molecules-banner title="member form"/>

    <div class="container py-5">
      <form @submit.prevent="login()" @keydown="form.onKeydown($event)">
        <div class="row">

          <div class="col-lg-12">
            <h6 class="text-info">***<b>Payments:</b> bKash/Nagad : <a href="tel:01736121557">01736121557</a> (Rakibur Rahman - Treasurer DIU CPC)</h6>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" v-model="form.name" class="form-control" placeholder="Enter name">

              <div class="text-danger" v-if="form.errors.has('name')" v-html="form.errors.get('name')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="batch">Batch</label>
              <input type="text" class="form-control" v-model="form.batch" placeholder="Enter batch">
              <div class="text-danger" v-if="form.errors.has('batch')" v-html="form.errors.get('batch')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="semester">Semester</label>

              <select name="semester" id="semester" class="form-control" v-model="form.semester">
                <option value="" selected disabled hidden>select one</option>
                <option v-for="(n,index) in 12" :key="index" :value="n"> {{ n }}</option>
              </select>
              <div class="text-danger" v-if="form.errors.has('semester')" v-html="form.errors.get('semester')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="department">Department</label>
              <input type="text" class="form-control" v-model="form.department" placeholder="Enter department">
              <div class="text-danger" v-if="form.errors.has('department')" v-html="form.errors.get('department')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" v-model="form.email" placeholder="Enter email">
              <div class="text-danger" v-if="form.errors.has('email')" v-html="form.errors.get('email')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="github_profile_url">GitHub Profile Url</label>
              <input type="text" class="form-control" v-model="form.github_url" placeholder="Enter github profile url">
              <div class="text-danger" v-if="form.errors.has('github_url')" v-html="form.errors.get('github_url')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="facebook_profile_url">Facebook Profile Url</label>
              <input type="text" class="form-control" v-model="form.facebook_url"
                     placeholder="Enter facebook profile url">
              <div class="text-danger" v-if="form.errors.has('facebook_url')" v-html="form.errors.get('facebook_url')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="linkedin_url">Linkedin Url</label>
              <input type="text" class="form-control" v-model="form.linkedin_url" placeholder="Enter linkedin url">
              <div class="text-danger" v-if="form.errors.has('linkedin_url')" v-html="form.errors.get('linkedin_url')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="payment_channel">Payment Channel</label>

              <select name="payment_channel" id="payment_channel" v-model="form.payment_channel" class="form-control">
                <option v-for="(paymentChannel,index) in paymentChannels" :value="paymentChannel.value"
                        v-text="paymentChannel.text"></option>
              </select>
              <div class="text-danger" v-if="form.errors.has('payment_channel')"
                   v-html="form.errors.get('payment_channel')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="transaction_number">Transaction Number</label>
              <input type="text" class="form-control" v-model="form.transaction_number"
                     placeholder="Enter transaction number">
              <div class="text-danger" v-if="form.errors.has('transaction_number')"
                   v-html="form.errors.get('transaction_number')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="image_url">Image</label>
              <input type="file" name="file" class="form-control" accept="image/*" @change="handleFile">

              <div v-if="form.progress">Progress: {{ form.progress.percentage }}%</div>


              <div class="text-danger" v-if="form.errors.has('image_url')" v-html="form.errors.get('image_url')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="resume">Upload your resume (If Any)</label>
              <input type="file" class="form-control" accept="application/pdf" @change="uploadYourResume">
              <div class="text-danger" v-if="form.errors.has('resume_url')" v-html="form.errors.get('resume_url')"/>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="member_type">You will be a ......... *</label>
              <select name="member_type" v-model="form.member_type" class="form-control" id="member_type">
                <option value="" selected disabled hidden>select one</option>
                <option value="regular member">Regular Member</option>
                <option value="irregular member">Irregular Member</option>
              </select>
              <div class="text-danger" v-if="form.errors.has('member_type')" v-html="form.errors.get('member_type')"/>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label for="computer_sector">Tell us what you like most in computer sector</label>
              <b-form-checkbox-group
                v-model="form.computer_sector"
                :options="skill"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-checkbox-group>

              <div class="text-danger" v-if="form.errors.has('computer_sector')"
                   v-html="form.errors.get('computer_sector')"/>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label for="expertise">Tell us what sector you have expertise</label>
              <b-form-checkbox-group
                v-model="form.expert"
                :options="skill"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-checkbox-group>
              <div class="text-danger" v-if="form.errors.has('expert')" v-html="form.errors.get('expert')"/>
            </div>
          </div>


          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label for="part_cpc">Why do want be a part of DIU CPC ?</label>
              <textarea v-model="form.part_cpc" name="part_cpc" id="why" class="form-control" cols="30" rows="2"
                        placeholder="Enter why do want be a part of DIU CPC"></textarea>
              <div class="text-danger" v-if="form.errors.has('part_cpc')" v-html="form.errors.get('part_cpc')"/>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label for="additional_comments">Any additional Comments</label>
              <textarea v-model="form.additional_comment" name="additional_comment" id="additional_comment"
                        class="form-control" cols="30" rows="2"
                        placeholder="Enter additional comments"></textarea>
              <div class="text-danger" v-if="form.errors.has('additional_comment')"
                   v-html="form.errors.get('additional_comment')"/>
            </div>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-6 offset-lg-5 offset-md-5 offset-sm-3">
            <button type="submit" class="btn btn-outline-secondary btn-block">Submit</button>
          </div>

        </div>
      </form>
    </div>

  </div>
</template>

<script>
import Form from 'vform'

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
    computer_sector: [],
    expertise: [],
    skill: [
      {item: 'Web Design and Develop', name: 'Web Design and Develop'},
      {item: 'Competitive Programming', name: 'Competitive Programming'},
      {item: 'IOT', name: 'IOT'},
      {item: 'Mobile Apps develop', name: 'Mobile Apps develop'},
      {item: 'Game develop', name: 'Game develop'},
      {item: 'Machine Learning', name: 'Machine Learning'},
      {item: 'Deep Learning', name: 'Deep Learning'},
      {item: 'Other', name: 'Other'},
    ],

    paymentChannels: [
      {value: '', text: 'Please select an option', disabled: true},
      {value: 'bKash', text: 'bKash'},
      {value: 'nagot', text: 'Nagad'},
      {value: 'rocket', text: 'Rocket'},
    ],

    form: new Form({
      name: '',
      batch: '',
      semester: '',
      department: '',
      email: '',
      github_url: '',
      facebook_url: '',
      linkedin_url: '',
      transaction_number: '',
      payment_channel: '',
      resume_url: '',
      image_url: '',
      part_cpc: '',
      additional_comment: '',
      member_type: '',
      computer_sector: [],
      expert: [],
    }),
    url: process.env.API_HOST ?? 'lemon',

  }),

  methods: {

    handleFile(event) {
      const file = event.target.files[0];
      this.form.image_url = file;
    },

    uploadYourResume(event) {
      const file = event.target.files[0];
      this.form.resume_url = file;
    },

    async login() {

      // alert('ww');
      await this.form.post(`${this.url}new-member/store`).then((res) => {

        this.form.reset();

        Toast.fire({
          icon: 'success',
          title: res.data.message
        })

      }).catch((error) => {
        console.log(error.response)
      })
    }
  }
}


</script>

<style scoped>

</style>
