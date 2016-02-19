/**
 * Created by liujin834 on 2/19/16.
 */
var userControllers = angular.module('userControllers', []);

userControllers.controller('userIndexController', ['$scope', '$http',
  function ($scope, $http) {
    //$http.get('phones/phones.json').success(function(data) {
    //  $scope.phones = data;
    //});

    $scope.orderProp = 'age';
}]);

userControllers.controller('userListController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
}]);
