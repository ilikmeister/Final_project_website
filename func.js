// registration

const email = document.getElementById('email');
const password = document.getElementById('password');
const password_repeat = document.getElementById('password_repeat');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password_repeatValue = password_repeat.value.trim();

    if (emailValue === '') {
        errorMessage(email, 'The line cannot be empty');
    } else if (!isEmail(emailValue)) {
        errorMessage(email, 'Email is invalid');
    } else {
        return true;
    }

    if (passwordValue === '') {
        errorMessage(password, 'The line cannot be empty');
    } else if (!isPassword(passwordValue)) {

    } else {
        return true;
    }

    if (password_repeatValue === '') {
        errorMessage(password_repeat, 'The line cannot be empty');
    } else if (passwordValue !== password_repeatValue) {
        errorMessage(password_repeat, 'Passwords do not match');
    } else {
        errorMessage(password_repeat);
    }
}

function errorMessage(input, message) {
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function isEmail(email) {
    return /[\w-\.]+@+(gmail.com|yandex.ru|yahoo.com|mail.ru|outlook.com)/gi.test(email);
}

function isPassword(password) {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}/gi.test(password);
}

// sending the data

function postRequest() {
    var http = new XMLHttpRequest();

    var user_email = email.value;
    var user_password = password.value;

    var userObj = {
        email: user_email,
        password: user_password
    }

    http.open("POST", 'https://my-json-server.typicode.com/ilikmeister/Final_project_website/posts', false);

    http.onreadystatechange = function () {
        console.log(http.status);
        if (http.readyState === 4 && http.status === 201) {
            window.alert("You were successfully registered!");
        }
    }

    var data = JSON.stringify(user);
    http.send(data);
}

// check the registered user during sign in

function getRequest() {
    var http = new XMLHttpRequest();

    var user_email = email.value;
    var user_password = password.value;

    var userObj = {
        "email": user_email,
        "password": user_password
    }

    var postsObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/Final_project_website/posts', false);
    var json = JSON.parse(postsObj);

    if (userObj.email == json.email && userObj.password == json.password) {
        return true;
    } else {
        window.alert("Your input is incorrect");
        return false;
    }

}

// search for dota 2 heroes

function getHero() {

const hero = document.getElementById('hero');

var http = new XMLHttpRequest();

var miderObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/Final_project_website/mider', false);
var json1 = JSON.parse(miderObj);

var carryObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/Final_project_website/carry', false);
var json2 = JSON.parse(carryObj);

var supportObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/Final_project_website/support', false);
var json3 = JSON.parse(supportObj);

if (hero.value == "Mider" || hero.value == "mider") {
    document.getElementById("hero_text").innerHTML == json1;
}

if (hero.value == "Carry" || hero.value == "carry") {
    document.getElementById("hero_text").innerHTML == json2;
}

if (hero.value == "Support" || hero.value == "support") {
    document.getElementById("hero_text").innerHTML == json3;
}

return document.getElementById("hero_text").innerHTML;

}

// profile info

function profile() {

    const login = document.getElementById('login');
    const fav = document.getElementById('fav');
    const role = document.getElementById('role');

    var http = new XMLHttpRequest();

    var myObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/Final_project_website/posts', false);

    var miderObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/Final_project_website/mider', false);
    var json1 = JSON.parse(miderObj);

    var carryObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/Final_project_website/carry', false);
    var json2 = JSON.parse(carryObj);

    var supportObj = http.open("GET", 'https://my-json-server.typicode.com/ilikmeister/Final_project_website/support', false);
    var json3 = JSON.parse(supportObj);

}
