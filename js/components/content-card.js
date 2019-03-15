Vue.component('field-card', {
  props: ['card'],
  template: `
  <div class="col-md-4">
    <form>
    
      <div class="form-group">
        <input v-model="card.name" type="text" class="form-control editable" id="name" placeholder="Name">
      </div>
      <div class="form-group">
        <input v-model="card.company" type="text" class="form-control" id="company" placeholder="Company">
      </div>
      <div class="form-group">
        <input v-model="card.email" type="text" class="form-control" id="email" placeholder="Email">
      </div>
      <div class="form-group">
        <input v-model="card.address" type="text" class="form-control" id="address" placeholder="Address">
      </div>
      <div class="form-group">
        <input v-model="card.phone" type="text" class="form-control" id="phone" placeholder="Phone">
      </div>
    </form>
  </div>
  `
})