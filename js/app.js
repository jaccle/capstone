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

app.controller("FirstController", function($scope, DummyFormData) {
    $scope.name = DummyFormData.name();
    $scope.phone = DummyFormData.phone;
    $scope.email = DummyFormData.email;

    $scope.models = {
        selected: null,
        templates: [
            {type: "item", "name": "Item", id: "Item"},
            {type: "container", "name": "2 Columns", columns: [[], []]},
            {type: "container", "name": "3 Columns", columns: [[], [], [] ]},
            {type: "container", "name": "4 Columns", columns: [[], [], [], []]},
            {type: "section", "name": "Section", id: "Section Title"},
            {type: "title", "name": "Title", id: "Title"},
            {type: "bullet",  "name": "Bullet", id: "point"}
        ]
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});

app.controller("SecondController", function($scope, DummyFormData) {
    $scope.name = DummyFormData.name();
    $scope.phone = DummyFormData.phone;
    $scope.email = DummyFormData.email;

    $scope.models = {
        selected: null,
        templates: [
            {type: "item", "name": "Item", id: "Item"},
            {type: "container", "name": "2 Columns", columns: [[], []]},
            {type: "container", "name": "3 Columns", columns: [[], [], [] ]},
            {type: "container", "name": "4 Columns", columns: [[], [], [], []]},
            {type: "section", "name": "Section", id: "Section Title"},
            {type: "title", "name": "Title", id: "Title"},
            {type: "bullet",  "name": "Bullet", id: "point"}
        ],
        dropzones: {
            "heading": [
                {
                    "type": "title",
                    'name': "Title",
                    "id": $scope.name,
                    "model": 'name'
                }
            ],
            "main": [
                {
                    "type": "container",
                    "name": {"type": "title", "id": $scope.experience},
                    "columns": [
                        [
                            {
                                "type": "bullet",
                                "id": "1"
                            },
                            {
                                "type": "bullet",
                                "id": "2"
                            }
                        ],
                        [
                            {
                                "type": "bullet",
                                "id": "3"
                            }
                        ]
                    ]
                },
                {
                    "type": "item",
                    "id": "4"
                },
                {
                    "type": "item",
                    "id": "5"
                },
                {
                    "type": "item",
                    "id": "6"
                }
            ],
            "side": [
                {
                    "type": "item",
                    "id": 17
                }
            ],
            "Waitlist": []
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});

app.controller("ThirdController", function($scope, DummyFormData) {
    $scope.name = DummyFormData.name();
    $scope.phone = DummyFormData.phone;
    $scope.email = DummyFormData.email;

    $scope.models = {
        selected: null,
        templates: [
            {type: "item", "name": "Item", id: "Item"},
            {type: "container", "name": "2 Columns", columns: [[], []]},
            {type: "container", "name": "3 Columns", columns: [[], [], [] ]},
            {type: "container", "name": "4 Columns", columns: [[], [], [], []]},
            {type: "section", "name": "Section", id: "Section Title"},
            {type: "title", "name": "Title", id: "Title"},
            {type: "bullet",  "name": "Bullet", id: "point"}
        ],
        dropzones: {
            "heading": [
                {
                    "type": "title",
                    'name': "Title",
                    "id": $scope.name,
                    "model": 'name'
                }
            ],
            "main": [
                {
                    "type": "container",
                    "name": {"type": "title", "id": $scope.experience},
                    "columns": [
                        [
                            {
                                "type": "bullet",
                                "id": "1"
                            },
                            {
                                "type": "bullet",
                                "id": "2"
                            }
                        ],
                        [
                            {
                                "type": "bullet",
                                "id": "3"
                            }
                        ]
                    ]
                },
                {
                    "type": "item",
                    "id": "4"
                },
                {
                    "type": "item",
                    "id": "5"
                },
                {
                    "type": "item",
                    "id": "6"
                }
            ],
            "side": [
                {
                    "type": "item",
                    "id": 17
                }
            ],
            "Waitlist": []
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});