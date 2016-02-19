/**
 * Created by liujin834 on 2/19/16.
 */
var weplantAdmin = angular.module('weplantAdmin', [
  'ngRoute',
  'indexControllers',
  'userControllers'
]);

weplantAdmin.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/templates/weplant-admin/index/index.html',
      controller: 'indexController'
    }).
    when('/user', {
      templateUrl: '/templates/weplant-admin/user/index.html',
      controller: 'userIndexController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
