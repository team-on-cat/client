Vue.component('preview-card', {
  props: ['card'],
  template: `
  <div class="col-md-8 col-lg-5 align-self-center">
    <div id="element" class="card-template" v-bind:class="card.theme">
      <div id="card-template" class="container mt-5">
        <div class="mt-2 row align-items-end">
          <div class="col-md-7">
            <div><h3><p>{{ card.name }}</p></h3></div>
            <div class="row mt-5">
              <div class="col-md-12">
                <div>{{ card.job }}
                <br /> {{ card.email }}                
                <br /> {{ card.phone }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  `
})