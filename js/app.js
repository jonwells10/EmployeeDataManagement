var config = {
    apiKey: "AIzaSyAt3OlfgjnOieC5yj3VJabC7gFsdLyIKD8",
    authDomain: "employee-data-management-c0065.firebaseapp.com",
    databaseURL: "https://employee-data-management-c0065.firebaseio.com",
    projectId: "employee-data-management-c0065",
    storageBucket: "",
    messagingSenderId: "1054530695732"
};

firebase.initializeApp(config);

let database = firebase.database();

$(document).ready(function () {
    $('#submit').on('click', function (ev) {
        console.log('was clicked');
        ev.preventDefault();

        let name = $('#name-input').val();
        let role = $('#role-input').val();
        let startDate = $('#start-input').val();
        let rate = $('#rate-input').val();

        console.log(name);

        database.ref().set({
            name: name,
            role: role,
            startDate: startDate,
            rate: rate
        })

    })
})

database.ref().on('value', function(snapshot) {
    let employee = snapshot.val()

    let nameTd = $('<td>' + employee.name + '</td>')
    let roleTd = $('<td>' + employee.role + '</td>')
    let startTd = $('<td>' + employee.startDate + '</td>')
    let rateTd = $('<td>' + employee.rate + '</td>')
    
    let row = $('<tr>');
    row.append(nameTd)
    row.append(roleTd)
    row.append(startTd)
    row.append(rateTd)

    $('#table-body').append(row);
    
})

