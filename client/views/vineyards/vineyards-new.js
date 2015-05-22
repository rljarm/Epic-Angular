'use strict';

angular.module('PickYourVine')
.controller('VineyardsNewCtrl', function($scope, $state, Vineyard){

  $scope.addVineyard = function(vineyard){
    Vineyard.add(vineyard)
    .then(function(){
      $state.go('vineyards.list');
    });
  };
});
