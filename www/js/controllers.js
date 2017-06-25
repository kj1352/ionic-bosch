angular.module('starter.controllers', [])

    .controller('HomeCtrl', function ($scope, $state) {
      $scope.$on('$ionicView.afterEnter', function () {
            setTimeout(function () {
                document.getElementById("custom-overlay").style.display = "none";
            }, 3200);
        }); 

        $scope.dishdetails = function () {
            $state.go('dishdetails');
        }
    })

    .controller('DishdetailsCtrl', function ($scope, $state) {
        $scope.showfeatures = function () {
            $state.go('dishinstallation');
        }
    })