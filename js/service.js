angular.module("capstone").factory('DummyFormData', function () {
    var templates = [
            {'type': "item", "name": "Item", 'id': "Item"},
            {'type': "container", "name": "2 Columns", 'columns': [[], []]},
            {'type': "container", "name": "3 Columns", 'columns': [[], [], [] ]},
            {'type': "container", "name": "4 Columns", 'columns': [[], [], [], []]},
            {'type': "h1", "name": "Title 1", 'id': "Title"},
            {'type': "h2", "name": "Title 2", 'id': "Title"},
            {'type': "h3", "name": "Title 3", 'id': "Title"},
            {'type': "h4", "name": "Title 4", 'id': "Title"},
            {'type': "h5", "name": "Title 5", 'id': "Title"},
            {'type': "h6", "name": "Title 6", 'id': "Title"},
            {'type': "bullet",  "name": "Bullet", 'id': "point"}
        ],
    name = "Full Name",
    address = {
        street: '11 Sweet St.',
        city: 'San Francisco',
        state: "CA",
        zip: "94105"
    },
    contacts = [{
        type: 'Email', text: 'example@example.com'
    }],
    experience = [{
            name: 'Name',
            title: 'Title',
            when: 'When',
            bullets: ['I had this responsibility','and this responsibility']
        }],
    otherSide = [{
            name: '',
            title: '',
            text: '',
            bullets: ['']
        }],
    otherMain = [{
            name: '',
            title: '',
            text: '',
            bullets: ['']
        }],
    school = [{
            name: 'School',
            when: 'Graduation date',
            major: 'Major/Focus',
            degree: 'Degree',
            gpa: 'GPA'
        }],
    strengths = [{name: 'Strength', amount: 50}],
    languages = [{language: 'English', proficiency: 'Native'}],
    objective = "Get job at super duper cool company";
    return {
        templates: function () {
            return templates;
        },
        name: function () {
            return name;
        },
        address: function () {
            return address;
        },
        contacts: function () {
            return contacts;
        },
        experience: function () {
            return experience;
        },
        school: function () {
            return school;
        },
        objective: function () {
            return objective;
        },
        languages: function () {
            return languages;
        },
        strengths: function () {
            return strengths;
        },
        otherSide: function () {
            return otherSide;
        },
        otherMain: function () {
            return otherMain;
        }
    };
});
