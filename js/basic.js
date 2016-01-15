angular.module("capstone").factory('DummyFormData', function () {
    var templates = [
            {'type': "item", "name": "Item", 'id': "Item"},
            {'type': "container", "name": "2 Columns", 'columns': [[], []]},
            {'type': "container", "name": "3 Columns", 'columns': [[], [], [] ]},
            {'type': "container", "name": "4 Columns", 'columns': [[], [], [], []]},
            {'type': "h1", "name": "Title1", 'id': "Title"},
            {'type': "h2", "name": "Title2", 'id': "Title"},
            {'type': "h3", "name": "Title3", 'id': "Title"},
            {'type': "h4", "name": "Title4", 'id': "Title"},
            {'type': "h5", "name": "Title5", 'id': "Title"},
            {'type': "h6", "name": "Title6", 'id': "Title"},
            {'type': "bullet",  "name": "Bullet", 'id': "point"}
        ],
    name = "Full Name",
    phone = "555 555 555",
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
    school = {
        name: 'School',
        when: 'Graduation date',
        major: 'Major/Focus',
        degree: 'Degree',
        gpa: 'GPA'
    };
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
        }
    };
});
