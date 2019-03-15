Vue.component('theme-card', {
  
  template: `
  <div>
    <button class="card-1 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-1')">Dark Blue</button>
    <button class="card-2 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-2')">Simple Blue</button>
    <button class="card-3 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-3')">Orealis Green</button>
    <button class="card-4 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-4')">Abstract Blue</button>
    <button class="card-5 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-5')">Dark</button>
    <button class="card-6 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-6')">Tint White</button>
    <button class="card-7 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-7')">Doodle Blue</button>
    <button class="card-8 btn btn-lg btn-block" v-on:click="$emit('change-theme', 'card-8')">Hacktiv Rocket</button>
  </div>
  `
})