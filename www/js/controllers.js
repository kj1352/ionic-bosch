angular.module('starter.controllers', [])

    .controller('HomeCtrl', function ($scope, $state) {
        $scope.$on('$ionicView.afterEnter', function () {
            setTimeout(function () {
                document.getElementById("custom-overlay").style.display = "none";
            }, 3930);
        });

        $scope.dishdetails = function () {
            $state.go('dishdetails');
        }
    })

    .controller('DishdetailsCtrl', function ($scope, $state, $rootScope, $ionicLoading) {
        $scope.showfeatures = function (option) {
            $rootScope.frame_name = option;
            console.log($rootScope.frame_name);

            $scope.show = function () {
                $ionicLoading.show({
                    template: 'Loading...',
                    duration: 1000
                }).then(function () {
                    console.log("The loading indicator is now displayed");
                });
            };
            $scope.hide = function () {
                $ionicLoading.hide().then(function () {
                    console.log("The loading indicator is now hidden");
                });
            };
            
            setTimeout(function () { $scope.show(); }, 1000);
            $state.go("dishinstallation");
        }
    })