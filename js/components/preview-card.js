Vue.component('preview-card', {
  props: ['card'],
  template: `
  <div class="col-md-5">
    <div id="html-content-holder" class="card-template" v-bind:class="card.theme">
      <div id="card-template" class="container mt-5">
        <div class="mt-2 row align-items-end">
          <div class="col-md-7">
            <div><h3><p>{{ card.name }}</p></h3></div>
            <div class="row mt-5">
              <div class="col-md-12">
                <div>{{ card.company }}
                <br /> {{ card.email }}
                <br /> {{ card.address }}
                <br /> {{ card.phone }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
          </div>
        </div>
      </div>
    </div>
  </div>
  
  `
})