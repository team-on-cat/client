Vue.component('landing-page', {
  template: `
  <div class="full-page d-flex justify-content-center align-items-center">
    <div class="align-self-center text-center">
      <h1 class="cover-heading">The professional business card maker</h1>
      <p class="lead">Make a great first impression with Team'O Cat free business card maker.</p>
      <button v-on:click="$emit('go-dashboard')" class="btn btn-primary btn-lg rounded-0">Start Here</button>
    </div>
  </div>
  `
})