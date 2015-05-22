'use strict';

angular.module('PickYourVine')
.controller('HotelsNewCtrl', function($scope, $state, Hotel){
  $scope.addHotel = function(hotel){
    Hotel.add(hotel)
    .then(function(){
      $state.go('hotels.list');
    });
  };
});
