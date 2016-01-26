var app = angular.module("capstone", ['ngRoute', 'dndLists', 'routeStyles']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/layout1', {
      templateUrl: 'layouts/layout1/layout1.html',
      css: 'layouts/layout1/layout1.css'
    })
    .when('/layout2', {
      templateUrl: 'layouts/layout2/layout2.html',
      css: 'layouts/layout2/layout2.css'
    })
    .when('/layout3', {
      templateUrl: 'layouts/layout3/layout3.html',
      css: 'layouts/layout3/layout3.css'
    })
    .when('/layout4', {
      templateUrl: 'layouts/layout4/layout4.html',
      css: 'layouts/layout4/layout4.css'
    })
    .otherwise({
       redirectTo: '/layout2' //catch-all re-route
    });
});
