var app = angular.module("dnd", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/layout1', {
      templateUrl: 'templates/layout1.html',
      controller: 'FirstController',
      css: 'templates/layout1.css'
    })
    .when('/layout2', {
      templateUrl: 'templates/layout2.html',
      controller: 'SecondController',
      css: 'templates/layout2.css'
    })
    .when('/layout3', {
      templateUrl: 'templates/layout3.html',
      controller: 'ThirdController',
      css: 'templates/layout3.css'
    })
    .otherwise({
       redirectTo: '/layout1' //catch-all re-route
    });
});