angular.module("App", [])
.controller("mainController", ['$scope', '$window', function ($scope, $window) {
  $scope.on_move = function($event) {
    $scope.data = $event.offsetX + ", " + $event.offsetY;
    $scope.x = $event.offsetX - $event.target.clientWidth * 0.5;
    $scope.y = $event.offsetY - $event.target.clientHeight * 0.5;
  };

  var scope = $scope;
  $window.addEventListener('devicemotion', function(e) {
    scope.x = e.accelerationIncludingGravity.x * 10;
  });
}]);
