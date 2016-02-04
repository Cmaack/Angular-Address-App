// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
window.onload = function(){
  console.log('give me digits!');
};


var app = angular.module('ContactHelper', []);

app.controller('ContactsController', ['$scope', '$http', function($scope, $http){
  $http.get('/api/contacts').then(function(response){
    var data = response.data;
    $scope.contacts = data.contacts;

  });

  $scope.newContact = {};
    $scope.createContact = function(){
      $http.post('/api/contacts', {contact: $scope.newContact}).then(function(response){
        var data = response.data;
        $scope.contacts.push( data );
      });
    };

    $scope.deleteContact = function(index) {

        var contact = $scope.contacts[index];
        $http.delete('/api/contacts/' + contact.id);
        $scope.contacts.splice(index, 1);
      };

}]);
