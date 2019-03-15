let app = new Vue({
  el: '#app',
  data: {
    card: {
      name: 'Your Name',
      job: 'Your Job',
      email: 'email@domain.com',
      phone: '(123) 123 4567',
      theme: 'card-4'
    }
  },
  methods: {
    changeTheme(theme) {
      this.card.theme = theme
    },
    preview() {
      html2canvas(document.getElementById('element'), {
        allowTaint: true
      })
        .then(function (canvas) {
          document.body.appendChild(canvas);
          getCanvas = canvas
        });
    }
  }
})