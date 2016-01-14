var app = angular.module("dnd", ['ngRoute']);

app.factory('DummyFormData', function () {
    var layout = "Layout1",
    name = "Full Name",
    phone = "555 555 555",
    email = "example@example.com",
    address = {
        street: '11 Sweet St.',
        city: 'San Francisco',
        state: "CA",
        zip: "94105"
    },
    experience = {
        name: 'Name',
        title: 'Title',
        when: 'When',
        bullets: ['I had this responsibility','and this responsibility']
    },
    school = {
        name: 'School',
        when: 'Graduation date',
        major: 'Major/Focus',
        degree: 'Degree',
        gpa: 'GPA'
    };
    return {
        layout: function () {
            return layout;
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
