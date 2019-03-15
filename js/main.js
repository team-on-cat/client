let app = new Vue({
  el: '#app',
  data: {
    card: {
      name: 'Your Name',
      company: 'Company',
      address: 'Address',
      email: 'email@domain.com', 
      phone: '(123) 123 4567',
      theme: 'card-4'
    }
  }, 
  methods: {
    changeTheme(theme) {
      this.card.theme = theme
    }
  }
})