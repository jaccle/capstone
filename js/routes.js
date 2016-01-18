var app = angular.module("capstone", ['ngRoute', 'dndLists', 'routeStyles']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/layout1', {
      templateUrl: 'layouts/layout1.html',
      controller: 'FirstController',
      css: 'layouts/layout1.css'
    })
    .when('/layout2', {
      templateUrl: 'layouts/layout2.html',
      // controller: 'SecondController',
      css: 'layouts/layout2.css'
    })
    .when('/layout3', {
      templateUrl: 'layouts/layout3.html',
      // controller: 'SecondController',
      css: 'layouts/layout3.css'
    })
    .otherwise({
       redirectTo: '/layout1' //catch-all re-route
    });
});

app.filter('tel', function () {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }

        if (country == 1) {
            country = "";
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return (country + " (" + city + ") " + number).trim();
    };
});