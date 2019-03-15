Vue.component('field-card', {
  props: ['card'],
  template: `
  <div class="col-lg-4 align-self-center justify-content-center">
    <form>
      <div class="form-group">
        <input v-model="card.name" type="text" class="form-control editable" id="name" placeholder="Name">
      </div>
      <div class="form-group">
        <input v-model="card.job" type="text" class="form-control" id="company" placeholder="Job">
      </div>
      <div class="form-group">
        <input v-model="card.email" type="text" class="form-control" id="email" placeholder="Email">
      </div>
      <div class="form-group">
        <input v-model="card.phone" type="text" class="form-control" id="phone" placeholder="Phone">
      </div>
    </form>
  </div>
  `
})