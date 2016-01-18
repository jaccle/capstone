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
    phone = "555555555",
    email = "example@example.com",
    address = {
        street: '11 Sweet St.',
        city: 'San Francisco',
        state: "CA",
        zip: "94105"
    },
    experience = [{
            name: 'Name',
            title: 'Title',
            when: 'When',
            bullets: ['I had this responsibility','and this responsibility']
        }],
    school = [{
            name: 'School',
            when: 'Graduation date',
            major: 'Major/Focus',
            degree: 'Degree',
            gpa: 'GPA'
        }],
    strengths = [{name: 'Strength', amount: 50}],
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
        phone: function () {
            return phone;
        },
        email: function () {
            return email;
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
        strengths: function () {
            return strengths;
        }
    };
});
