Vue.component('modal-card', {
  props: ['urlGoogle'],
  data() {
    return {
      fb: `https://www.facebook.com/sharer/sharer.php?u=`,
      tweet: `https://twitter.com/share?url=`
    }
  },
  template: `
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Bussiness Card</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <img style="width: 100%" :src="urlGoogle" />
          </div>

          <div class="d-flex justify-content-around pb-3">
            <div class="btn btn-facebook btn-md" v-bind:data-href="urlGoogle" data-layout="button_count" data-size="small">
              <a
              target="_blank" v-bind:href="fb+urlGoogle" class="fb-xfbml-parse-ignore">Share on Facebook</a>
            </div>

            <a class="btn btn-md btn-success" href="https://api.whatsapp.com/send?text=%20https://storage.googleapis.com/hacktiv8/1552576536390contohpic1.jpg">SHARE WA</a>

            <div id="social-share-container">
              <div id="custom-tweet-button">
                  <a class="btn btn-twitter" id="tweetShare" v-bind:href="tweet+ urlGoogle" target="_blank">
                      <i class="fab fa-twitter"></i> Tweet
                  </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `
})