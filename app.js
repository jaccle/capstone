angular.module("dnd").controller("NestedListsDemoController", function($scope) {

    $scope.models = {
        selected: null,
        templates: [
            {type: "item", "name": "Item", id: "Item"},
            {type: "container", "name": "Container", columns: [[], []]},
            {type: "section", "name": "Section", id: "Section Title"},
            {type: "title", "name": "Title", id: "Title"},
            {type: "bullet",  "name": "Bullet", id: "point"}
        ],
        dropzones: {
            "heading": [
                {
                    "type": "title",
                    "id": $scope.name
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