var app = angular.module("capstone", ['ngRoute', 'dndLists', 'routeStyles']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/layout1', {
      templateUrl: 'layouts/layout1/layout1.html',
      // controller: 'FirstController',
      css: 'layouts/layout1/layout1.css'
    })
    .when('/layout2', {
      templateUrl: 'layouts/layout2/layout2.html',
      // controller: 'SecondController',
      css: 'layouts/layout2/layout2.css'
    })
    .when('/layout3', {
      templateUrl: 'layouts/layout3/layout3.html',
      // controller: 'SecondController',
      css: 'layouts/layout3/layout3.css'
    })
    .otherwise({
       redirectTo: '/layout1' //catch-all re-route
    });
});
