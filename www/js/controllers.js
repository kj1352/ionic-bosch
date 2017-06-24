angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $state) {
    $scope.dishdetails = function() {
        $state.go('dishdetails');
    }
})

.controller('DishdetailsCtrl', function($scope, $state) {
    $scope.showfeatures = function () {
        $state.go('dishinstallation');
    }
})
