/**
 * Created by liujin834 on 2/19/16.
 */
var userControllers = angular.module('userControllers', []);

userControllers.controller('userIndexController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/user').success(function(data) {
      $scope.list = data;
    });

    $scope.orderProp = 'age';
}]);

userControllers.controller('userListController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
}]);

userControllers.controller('userStatisticsController', ['$scope', '$http',
  function ($scope, $http) {
    //$http.get('/user/statistics').success(function(data) {
    //  console.log(data);
    //  $scope.list = data.model;
    //});

    $scope.orderProp = 'age';
  }]);
