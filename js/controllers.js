angular.module("capstone")

.controller("FirstController", ['$scope', 'DummyFormData', function($scope, DummyFormData) {

    $scope.models = DummyFormData.model();

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
    //////////////////////////////////////////////////////////////////////////////////////
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
    $scope.layout = DummyFormData.layout();
    $scope.theme = DummyFormData.theme();

    $scope.disappear = function(){
        $scope.class = 'disappear';
    };

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
        console.log(what);
    };

    $scope.themeChange = function(scheme) {
        $scope.theme = scheme;
    };

    $scope.layoutChange = function(layout) {
        $scope.layout = layout;
    };

    $scope.print = function(layout, theme) {
        var printContents = document.getElementById('demo').innerHTML;
        var popupWin = window.open('', '_blank');
            popupWin.document.open();
        if (layout === 'layout4') {
            popupWin.document.write('<html><head><link rel="stylesheet" href="./bower_components/Skeleton-2.0.4/css/normalize.css"><link rel="stylesheet" href="./bower_components/Skeleton-2.0.4/css/skeleton.css"><link href="https://fonts.googleapis.com/css?family=Spinnaker|Puritan" rel="stylesheet" type="text/css"><link rel="stylesheet" type="text/css" href="layouts/'+layout+'/'+layout+'.css" /><link rel="stylesheet" href="./print/print4.css"><link rel="stylesheet" href='+theme+'></head><body onload="window.print()">' + printContents + '</html>');
        } else if (layout === 'layout1') {
            popupWin.document.write('<html><head><link rel="stylesheet" href="./bower_components/Skeleton-2.0.4/css/normalize.css"><link rel="stylesheet" href="./bower_components/Skeleton-2.0.4/css/skeleton.css"><link href="https://fonts.googleapis.com/css?family=Spinnaker|Puritan" rel="stylesheet" type="text/css"><link rel="stylesheet" href="./print/print.css"><link rel="stylesheet" href='+theme+'></head><body onload="window.print()">' + printContents + '</html>');
        } else{
            popupWin.document.write('<html><head><link rel="stylesheet" href="./bower_components/Skeleton-2.0.4/css/normalize.css"><link rel="stylesheet" href="./bower_components/Skeleton-2.0.4/css/skeleton.css"><link rel="stylesheet" type="text/css" href="layouts/'+layout+'/'+layout+'.css" /><link rel="stylesheet" href="./print/print.css"><link rel="stylesheet" href='+theme+'></head><body onload="window.print()">' + printContents + '</html>');
        }
        popupWin.document.close();
    };


}]);
