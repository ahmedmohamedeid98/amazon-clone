var Name = document.getElementById("name");
var Email = document.getElementById("email");
var pass = document.getElementById("pass");
var pass2 = document.getElementById("pass2");
var errorName = document.getElementById("error1");
var errorMail = document.getElementById("error2");
var errorPass = document.getElementById("error3");
var submit = document.getElementById("submit");

var users = []
var obj = function (userName, Email, pass) {
    this.username = userName;
    this.email = Email;
    this.password = pass;
}

function nameTest() {
    console.log("test name...");
    if (Name.value === "" || Name.length < 3 || Name.value.search(/a-z/i) == 0) {
        errorName.textContent = "*Invalid User Name";
        return false;
    } else {
        return true
    }
}

function mailTest() {
    console.log("test email...");
    if (Email.value == "" || Email.length < 7 || Email.value.search(/@/) == 0) {
        errorMail.textContent = "*Invalid";
        return false;
    }
    // check if the email exist in the current user list or not 
    // if exist return false;
    var users = [];
    var usersData = localStorage.getItem("users");
    if (usersData) {
        users = JSON.parse(usersData);
        if (!users) users = [];
    }
    if (users.length > 0 && users.filter(u => u.email === Email.value).length != 0) {
        errorMail.textContent = "*This email already exist";
        return false;
    } else {
        return true
    }
}

function passwordTest() {
    console.log("test password...");
    if (pass.value < 6 || pass.value == "" || pass2.value == "") {
        errorPass.textContent = "*Invalid Password"
        return false
    } else if (pass.value != pass2.value) {
        errorPass.textContent = "*Error in Password Match"
    } else {
        return true
    }
}

function signUp(e) {
    e.preventDefault();
    console.log("submitttsss.....");
    if (nameTest() && mailTest() && passwordTest()) {
        var user = new obj(Name.value, Email.value, pass.value)
        var userList = [];
        var usersData = localStorage.getItem("users");
        if (usersData) {
            userList = JSON.parse(usersData);
            if (!userList) userList = [];
        }

        if (userList.length > 0) {
            userList.push(user);
            localStorage.setItem("users", JSON.stringify(userList));
        } else {
            localStorage.setItem("users", JSON.stringify([user]))
        }

        // navigate to login page....
        var url = location.origin + location.pathname.replace("register.html", "login.html");
        location.replace(url);

    } 
    // else {
    //     e.preventDefault();
    // }
}

submit.addEventListener('click', signUp)