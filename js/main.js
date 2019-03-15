var getCanvas; // global variable

let app = new Vue({
  el: '#app',
  data: {
    card: {
      name: 'Your Name',
      job: 'Your Job',
      email: 'email@domain.com',
      phone: '(123) 123 4567',
      theme: 'card-4'
    },
    newData: '',
    cardFromDatabase: {},
    currentCanvas: '',
    submited: false
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
          if(this.currentCanvas) {
            document.body.removeChild(this.currentCanvas);  
          }
          this.currentCanvas = canvas
          document.body.appendChild(canvas).style.display = 'none';
          getCanvas = canvas
        });
    },
    submit() {  
      var imgageData = getCanvas.toDataURL("image/png");
      // Now browser starts downloading it instead of just showing it
      this.newData = imgageData.replace(/^data:image\/png/, "data:image/png");
      let data = new FormData()
      data.append('image', dataURItoBlob(this.newData), 'image')
      axios
        .post('http://localhost:3000/uploads', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(({ data }) => {
          this.cardFromDatabase = data;
          this.submited = true;
        })
        .catch(({ response }) => {
          console.log(response);
        })
    },
    download() {
      $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", this.newData);
    }
  }
})