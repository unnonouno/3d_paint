angular.module("App", [])
.controller("mainController", ['$scope', '$window', function ($scope, $window) {
  $scope.x = 0;

  $scope.on_move = function($event) {
    $scope.data = $event.offsetX + ", " + $event.offsetY;
    $scope.x = $event.offsetX - $event.target.clientWidth * 0.5;
    $scope.y = $event.offsetY - $event.target.clientHeight * 0.5;
  };

  $window.addEventListener('devicemotion', function(e) {
    $scope.x = e.accelerationIncludingGravity.x * 100;
    $scope.$apply();
  });
}]);
