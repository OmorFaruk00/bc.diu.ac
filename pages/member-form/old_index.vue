<template>
  <div>

    <Molecules-banner title="member form"/>

    <div class="container py-5">
      <form @submit.prevent="login" @keydown="form.onKeydown($event)">
        <div class="row">

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" placeholder="Enter name" required>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="batch">Batch</label>
              <input type="text" class="form-control" placeholder="Enter batch" required>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="semester">Semester</label>
              <input type="number" class="form-control" placeholder="Enter semester" required>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="department">Department</label>
              <input type="text" class="form-control" placeholder="Enter department" required>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" placeholder="Enter email" required>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="github_profile_url">GitHub Profile Url</label>
              <input type="text" class="form-control" placeholder="Enter github profile url" required>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="facebook_profile_url">Facebook Profile Url</label>
              <input type="text" class="form-control" placeholder="Enter facebook profile url" required>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="facebook_profile_url">Facebook Profile Url</label>
              <input type="text" class="form-control" placeholder="Enter facebook profile url" required>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="linkedin_url">Linkedin Url</label>
              <input type="text" class="form-control" placeholder="Enter linkedin url" required>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="transaction_number">Transaction Number</label>
              <input type="text" class="form-control" placeholder="Enter transaction number" required>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="resume">Upload your resume (If Any)</label>
              <input type="file" class="form-control">
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="form-group">
              <label for="member">You will be a ......... *</label>
              <select name="member" class="form-control" id="member">
                <option value="regular member">Regular Member</option>
                <option value="irregular member">Irregular Member</option>
              </select>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label for="computer_sector">Tell us what you like most in computer sector</label>
              <b-form-checkbox-group
                v-model="computer_sector"
                :options="skill"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-checkbox-group>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label for="expertise">Tell us what sector you have expertise</label>
              <b-form-checkbox-group
                v-model="expertise"
                :options="skill"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-checkbox-group>
            </div>
          </div>


          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label for="why">Why do want be a part of DIU CPC ?</label>
              <textarea name="why" id="why" class="form-control" cols="30" rows="2"
                        placeholder="Enter why do want be a part of DIU CPC"></textarea>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label for="additional_comments">Any additional Comments</label>
              <textarea name="additional_comments" id="additional_comments" class="form-control" cols="30" rows="2"
                        placeholder="Enter additional comments"></textarea>
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

    form: new Form({
      username: '',
      password: ''
    }),
    url: 'http://localhost/api/v1/',

  }),

  methods: {
    async login() {
      const response = await this.form.post(`${this.url}/new-member/store`)
    }
  }
}


</script>

<style scoped>

</style>
