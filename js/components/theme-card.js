Vue.component('theme-card', {
  
  template: `
  <div class="col-md-3">
    <button class="card-1 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-1')">Template 1</button>
    <button class="card-2 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-2')">Template 2</button>
    <button class="card-3 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-3')">Template 3</button>
    <button class="card-4 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-4')">Template 4</button>
    <button class="card-5 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-5')">Template 5</button>
    <button class="card-6 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-6')">Template 6</button>
    <button class="card-7 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-7')">Template 7</button>
    <button class="card-8 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-8')">Template 8</button>
  </div>
  `
})