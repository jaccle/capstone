angular.module("capstone").factory('DummyFormData', function () {
    var model = {
        selected: null,
        templates: [
            {'type': "item", "name": "Item", 'id': "Item"},
            {'type': "container", "name": "2 Columns", 'id': 'Container', 'columns': [[
            {'type': "item", "name": "Item", 'id': "Placeholder"},], [
            {'type': "item", "name": "Item", 'id': "Placeholder"}]]},
            {'type': "h1", "name": "Title 1", 'id': "Title"},
            {'type': "h2", "name": "Title 2", 'id': "Title"},
            {'type': "h3", "name": "Title 3", 'id': "Title"},
            {'type': "h4", "name": "Title 4", 'id': "Title"},
            {'type': "h5", "name": "Title 5", 'id': "Title"},
            {'type': "h6", "name": "Title 6", 'id': "Title"},
            {'type': "bullet",  "name": "Bullet", 'id': "point"}
        ],
        dropzones: {
            "heading": [{
                "type": "h1",
                "name": "Title1",
                "id": "Build your own",
                'model': 'name'
            },{
                "type": "item",
                "name": "Item",
                "id": "We're all drag and drop! Get more over there <<<<<<",
                'model': 'example'
            },{
                "type": "h5",
                "name": "Title5",
                "id": "Click on us to edit text!",
                'model': 'name'
            }],
            "Waitlist": [{
                "type": "item",
                "id": "I'm set aside",
                'model': 'name'
            }]
        }
    },
    layout = 'layout1',
    name = "Full Name",
    address = {
        street: '11 Sweet St.',
        city: 'San Francisco',
        state: "CA",
        zip: "94105"
    },
    contacts = [{
        type: 'Email', text: 'example@example.com'
    },{
        type: 'Phone', text: '123.456.7890'
    },{
        type: 'Github', text: 'github.com/username'
    },{
        type: 'Website', text: 'example.com'
    },{
        type: 'Twitter', text: '@example'
    }],
    experience = [{
            name: 'Name',
            title: 'Title',
            when: 'When',
            bullets: ['I had this responsibility','and this responsibility', 'and this responsibility which was this and did this', 'and this responsibility all the time all day every day and it was so totally cool']
        },{
            name: 'Name',
            title: 'Title',
            when: 'When',
            bullets: ['I had this responsibility','and this responsibility', 'and I did this other thing where I did stuff', 'and I was in charge of this']
        },{
            name: 'Name',
            title: 'Title',
            when: 'When',
            bullets: ['I had this responsibility','and this responsibility', 'and this responsibility all the time all day every day and it was so totally cool']
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
            name: 'University of School',
            when: '1999',
            major: 'Interestingness',
            degree: 'BA',
            gpa: '4.0'
        },{
            name: 'Important School',
            when: '1995',
            major: 'Trivia',
            degree: 'BS',
            gpa: '3.5'
        }],
    strengths = [{name: 'Strength', amount: 50},{name: 'Respect', amount: 99},{name: 'Mad Skills', amount: 70},{name: 'Lorem', amount: 45},{name: 'Ipsum', amount: 80}],
    languages = [{language: 'English', proficiency: 'Native'}, {language: 'Pig Latin', proficiency: 'Business'}],
    objective = "Get job at super duper cool company that values the important stuff and I can show off my skills",
    theme = 'default';
    return {
        model: function () {
            return model;
        },
        layout: function () {
            return layout;
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
        },
        theme: function () {
            return theme;
        }
    };
});
