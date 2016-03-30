(function() {
      angular.module('notely')
        .service('NotesService', NotesService);

      NotesService.$inject = ['$http'];
      function NotesService($http) {
        var _this = this;
        _this.fetch = function(callback) {
          callback();
          $http.get('http://localhost:3030')
            .success(function(notesData) {
            _this.notes = notesData;
            callback();
            });
        };
      }
    }());
