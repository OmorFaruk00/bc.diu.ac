<template>
  <!-- Single Team Start -->
  <div class="single-team">
    <div class="team-thumb">
      <img class="img-fluid" :data-src="teamMember.image_url" :alt="teamMember.name" v-lazy-load>
    </div>
    <div class="team-content">
      <h4 class="name">{{ teamMember.name }}</h4>
      <span class="designation text-capitalize">{{ teamMember.designation }}</span>
      <span v-if="type != 'member'" class="designation"><a :href="`mailTo:${teamMember.email}`">{{ teamMember.email }}</a></span>
    </div>
  </div>
  <!-- Single Team End -->
</template>

<script>
export default {
  name: "Team",
  props: {
    teamMember: {
      type: Object,
      required: true
    },
    type : {
      type:String,
      defaults:'member'
    }
  }
}
</script>

<style scoped>
.team-header {
  padding: 40px 0px !important;
}

.team-header h1 {
  color: #01aa4d !important;
}

.single-team {
  text-align: center;
  margin-bottom: 30px;
}

.single-team .team-thumb img {
  border-radius: 50%;
  padding: 10px;
  border: 1px solid #01aa4d;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  height: 250px;
  width: 100%;
}

.single-team .team-content {
  padding-top: 15px;
}

.single-team .team-content .rating {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.single-team .team-content .rating .count {
  font-size: 14px;
  font-weight: 500;
  color: #212832;
}

.single-team .team-content .rating i {
  color: #ffba00;
  margin: 0 5px;
}

.single-team .team-content .rating .text {
  font-size: 13px;
  font-family: serif;
  font-weight: 400;
  color: #848886;
}

.single-team .team-content .name {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 0;
}

@media only screen and (min-width: 992px) and (max-width: 1199px), only screen and (max-width: 575px) {
  .single-team .team-content .name {
    font-size: 16px;
  }
}

.single-team .team-content .designation {
  display: block;
  font-size: 13px;
  color: #309255;
  margin-top: 10px;
}

.single-team:hover .team-thumb img {
  border-color: #007bff;
}
</style>
