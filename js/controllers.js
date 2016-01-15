angular.module("capstone")

.controller("FirstController", ['$scope', 'DummyFormData', function($scope, DummyFormData) {

    $scope.models = {
        selected: null,
        templates: DummyFormData.templates(),
        dropzones: {
            "heading": [],
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

    $scope.models = { //=json.parse
        selected: null,
        templates: DummyFormData.templates(),
        dropzones: {
            "heading": [{
                "type": "section",
                'name': "Section",
                "id": $scope.name,
                "model": 'name'
            }],
            "main": [{
                "type": "title",
                "id": "4"
            }, {
                "type": "section",
                "id": "5"
            }, {
                "type": "item",
                "id": "6"
            }],
            "side": [{
                "type": "title",
                'name': "Title",
                "id": $scope.name,
                "model": 'name'
            }],
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
    $scope.street = DummyFormData.address.street;
    $scope.city = DummyFormData.address.city;
    $scope.state = DummyFormData.address.state;
    $scope.zip = DummyFormData.address.zip;
    $scope.experience = DummyFormData.experience.name;
    $scope.exTitle = DummyFormData.experience.title;
    $scope.exWhen = DummyFormData.experience.when;




    function capitalize(s) {
        return s[0].toUpperCase() + s.substr(1);
    }

    function item(type, model) {
        return {
            "type": type,
            'name': capitalize(type),
            'id': $scope.model,
            'model': model.toString()
        };
    }

    function variation(type, name, model) {
        return {
            'type': type,
            'name': capitalize(name),
            'id': $scope.model,
            'model': model
        };
    }

    $scope.models = {
        selected: null,
        templates: DummyFormData.templates(),
        dropzones: {
            "heading": [{
                "type": "h1",
                "name": "Title1",
                "id": $scope.name,
                'model': 'name'
            }],
            "main": [{
                "type": "h3",
                "name": "Title3",
                "id": $scope.experience,
                'model': 'experience'
            }, {
                "type": "h6",
                "name": "Title6",
                "id": $scope.exWhen,
                'model': 'exWhen'
            }, {
                "type": "bullet",
                "name": "Bullet",
                "id": "responsibility",
                'model': ''
            }, {
                "type": "bullet",
                "name": "Bullet",
                "id": "responsibility",
                'model': ''
            }, {
                "type": "bullet",
                "name": "Bullet",
                "id": "responsibility",
                'model': ''
            }],
            "side": [{
                "type": "item",
                "id": 17,
                'model': ''
            }],
            "Waitlist": [{
                "type": "item",
                "id": "6",
                'model': ''
            }, {
                "type": "item",
                "id": "5",
                'model': ''
            }]
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

}]);
