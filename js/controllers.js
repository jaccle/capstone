angular.module("dnd")

.controller("FirstController", ['$scope', function($scope, dndLists) {

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
            "heading": [],
            "main": [],
            "side": [],
            "Waitlist": []
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

}])

.controller("SecondController", ['$scope', 'DummyFormData', function($scope, DummyFormData) {
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
                    "type": "section",
                    'name': "Section",
                    "id": $scope.name,
                    "model": 'name'
                }
            ],
            "main": [
                {
                    "type": "title",
                    "id": "4"
                },
                {
                    "type": "section",
                    "id": "5"
                },
                {
                    "type": "item",
                    "id": "6"
                }
            ],
            "side": [
                {
                    "type": "title",
                    'name': "Title",
                    "id": $scope.name,
                    "model": 'name'
                }
            ],
            "Waitlist": []
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

}])

.controller("ThirdController", ['$scope', 'DummyFormData', function($scope, DummyFormData) {
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

}]);