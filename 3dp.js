angular.module("App", [])
.controller("mainController", ['$scope', '$window', function ($scope, $window) {
  $scope.xs = [0, 0, 0, 0];
  $scope.ys = [0, 0, 0, 0];
  $scope.x = 0;
  $scope.y = 0;

  $scope.on_move = function($event) {
    $scope.data = $event.offsetX + ", " + $event.offsetY;
    $scope.x = $event.offsetX - $event.target.clientWidth * 0.5;
    $scope.y = $event.offsetY - $event.target.clientHeight * 0.5;
  };

  $window.addEventListener('devicemotion', function(e) {
    var x = 0;
    var y = 0
    for (var i = 0; i < 3; i++) {
      $scope.xs[i] = $scope.xs[i + 1];
      $scope.ys[i] = $scope.ys[i + 1];
      x += $scope.xs[i];
      y += $scope.ys[i];
    }
    $scope.xs[3] = -e.accelerationIncludingGravity.x * 100.0;
    $scope.ys[3] = -e.accelerationIncludingGravity.y * 100.0;

    x += $scope.xs[3];
    y += $scope.ys[3];

    $scope.x = x / 4;
    $scope.y = y / 4;

    $scope.$apply();
  });
}]);
