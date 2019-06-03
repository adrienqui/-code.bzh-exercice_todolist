var app = new Vue({
  el: '#app',
  data: {
    nom: '',
    error: false,
    taches: [
      { id: 0, nom: 'Course', done: false },
      { id: 1, nom: 'Poste', done: true },
      { id: 2, nom: 'C.V.', done: false }
    ]
  },
  methods: {
    add: function() {
      if (this.nom) {
        this.error = false;
        this.taches.push({
          id: (this.taches.length) ? this.taches[this.taches.length - 1].id + 1 : 0,
          nom: this.nom,
          done: false
        });
        this.nom = ''
      } else {
        this.error = true
      }
    },
    remove: function(index) {
      this.taches.splice(index, 1)
    }
  }
});
