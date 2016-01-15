var app = angular.module("capstone", ['ngRoute', 'dndLists', 'routeStyles']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/layout1', {
      templateUrl: 'index.html',
      controller: 'FirstController',
      css: 'templates/layout1.css'
    })
    .when('/layout2', {
      templateUrl: 'index.html',
      controller: 'SecondController',
      css: 'templates/layout2.css'
    })
    .when('/layout3', {
      templateUrl: 'index.html',
      controller: 'ThirdController',
      css: 'templates/layout3.css'
    })
    .otherwise({
       redirectTo: '/layout1' //catch-all re-route
    });
});