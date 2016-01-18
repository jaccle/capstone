angular.module("capstone")

.controller("FirstController", ['$scope', 'DummyFormData', function($scope, DummyFormData) {

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
                "id": "Build your own",
                'model': 'name'
            }],
            "Waitlist": [{
                "type": "item",
                "id": "I'm set aside",
                'model': ''
            }]
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

}])

.controller("SecondController", ['$scope', 'DummyFormData', function($scope, DummyFormData) {
    $scope.name = DummyFormData.name();
    $scope.strengths = DummyFormData.strengths();
    $scope.address = DummyFormData.address();
    $scope.experience = DummyFormData.experience();
    $scope.school = DummyFormData.school();
    $scope.objective = DummyFormData.objective();
    $scope.languages = DummyFormData.languages();
    $scope.contacts = DummyFormData.contacts();
    $scope.otherSide = DummyFormData.otherSide();
    $scope.otherMain = DummyFormData.otherMain();

    $scope.addExp = function() {
        $scope.experience.push({
            name: 'Name',
            title: 'Title',
            when: 'When',
            bullets: ['I had this responsibility', 'and this responsibility']
        });
    };
    $scope.addBullet = function(i) {
        $scope.experience[i].bullets.push('and this responsibility');
    };

    $scope.addStrength = function() {
        $scope.strengths.push({
            name: 'Strength',
            amount: 50
        });
    };
    $scope.addSchool = function() {
        $scope.school.push({
            name: 'School',
            when: 'Graduation date',
            major: 'Major/Focus',
            degree: 'Degree',
            gpa: 'GPA'
        });
    };
    $scope.addLang = function() {
        $scope.languages.push({
            language: 'language',
            proficiency: 'Business'
        });
    };
    $scope.addMain = function() {
        $scope.otherMain.push({
            name: '',
            title: '',
            text: '',
            bullets: ['']
        });
    };
    $scope.addMainBull = function(i) {
        $scope.otherMain[i].bullets.push('');
    };
    $scope.addSide = function() {
        $scope.otherSide.push({
            name: '',
            title: '',
            text: '',
            bullets: ['']
        });
    };
    $scope.addSideBull = function(i) {
        $scope.otherSide[i].bullets.push('');
    };
    $scope.addContact = function() {
        $scope.contacts.push({
            type: '',
            text: ''
        });
    };
    $scope.remove = function(what, i) {
        what.splice(i, 1);
    };


}]);
