(function() {
      angular.module('notely')
        .service('NotesService', NotesService);

      NotesService.$inject = ['$http'];
      function NotesService($http) {
        this.fetch = function() {
          $http.get('http://localhost:3030')
            .success(function() {
              console.log('It finished!');
            });
        };
      }
    }());
