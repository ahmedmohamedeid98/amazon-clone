var continueBtn = document.getElementById("continue_btn");
var changeBtn = document.getElementById("change_btn");
var emailDiv = document.getElementsByClassName("email_div")[0];
var passwordDiv = document.getElementsByClassName("password_div")[0];
var dividerDiv = document.getElementsByClassName("divider")[0];
var createAccountDiv = document.getElementsByClassName("create_account")[0];
var aggreementAndHelpDiv = document.getElementById("aggreement_and_help_div");
var remeberMeDiv = document.getElementById("remember_me_div_id");
var shownEnteredEmailDiv = document.getElementById("entered_email_section");
var email_inpt = document.getElementById("email");
var password_inpt = document.getElementById("password");
var shown_email_span = document.getElementById("entered_email");

var emailError = document.getElementById("email_error_li_id");
var passwordError = document.getElementById("password_error_li_id");
var problemCard = document.getElementById("problem_card");
var problemBody = document.getElementById("problem_body");
var entered_email = "";
var entered_password = "";
var showPass = true;


var emailErrorMessage = "";
var passwordErrorMessage = "";

var email_list_in_database = [
    "ahmedmohamedeid98@gmail.com"
];
var password_list_in_database = [
    "12345678"
];

function emailExistInDatabase() {
    if(email_list_in_database.includes(email_inpt.value)) {
        return true;
    } else {
        return false;
    }

}

function passwordMatchWithEnteredEmail() {
    let entered_email_index = email_list_in_database.indexOf(email_inpt.value);
    if(password_list_in_database[entered_email_index] == password_inpt.value) {
        return true;
    } else {
        return false;
    }
}

function emailIsValid() {
    emailErrorMessage = "";
    if (email_inpt.value == "") {
        emailErrorMessage = "Enter your email or mobile phone number";
        return false;
    } else {
        entered_email = email_inpt.value;
        return true;
    }
}

function passwordisValid() {
    passwordErrorMessage = "";
    if (password_inpt.value == "") {
        passwordErrorMessage = "Enter your password";
        return false;
    } else {
        entered_password = password_inpt.value;
        return true;
    }

}

function viewEmailSection() {
    console.log("show email section....");
    continueBtn.textContent = "Continue";
    emailDiv.style.display = "block";
    dividerDiv.style.display = "flex";
    createAccountDiv.style.display = "block";
    aggreementAndHelpDiv.style.display = "block";
    remeberMeDiv.style.display = "none";
    passwordDiv.style.display = "none";
    email_inpt.value = entered_email;
    shownEnteredEmailDiv.style.display = "none";

}

function viewPasswordSection() {
    console.log("show pass section...");
    continueBtn.textContent = "Sign In";
    emailDiv.style.display = "none";
    dividerDiv.style.display = "none";
    createAccountDiv.style.display = "none";
    aggreementAndHelpDiv.style.display = "none";
    remeberMeDiv.style.display = "inline-flex";
    shownEnteredEmailDiv.style.display = "inline";
    passwordDiv.style.display = "flex";
    password_inpt.value = "";
    entered_password = "";
    shown_email_span.textContent = entered_email;
}



function addErrorStyleToEmailInput() {
    emailError.style.display = "block";
    emailError.style.margin = "2px 0 10px 0";
    emailError.innerText = emailErrorMessage;
    email_inpt.style.border = "1px solid red";
    email_inpt.style.boxShadow = "0px 1px 2px 3px rgba(192, 0, 0, 0.2)";
}

function addErrorStyleToPasswordInput() {
    passwordError.style.display = "block";
    passwordError.style.margin = "2px 0 10px 0";
    passwordError.innerText = passwordErrorMessage;
    password_inpt.style.border = "1px solid red";
    password_inpt.style.boxShadow = "0px 1px 2px 3px rgba(192, 0, 0, 0.2)";
}

function removeErrorStyleFromEmailInput() {
    email_inpt.style.border = null;
    email_inpt.style.boxShadow = null;
    emailError.style.display = "none";
}

function removeErrorStyleFromPasswordInput() {
    password_inpt.style.border = null;
    password_inpt.style.boxShadow = null;
    passwordError.style.display = "none";
}

var isContinue = true;
continueBtn.addEventListener("click", () => {
    console.log("continueButton Clikced");
    if (isContinue) {
        if (emailIsValid()) {
            if(emailExistInDatabase()) {
                viewPasswordSection();
                isContinue = false;
                problemCard.style.display = "none";
                removeErrorStyleFromEmailInput();
            } else {
                problemBody.innerText = "We cannot find an account with that email address";
                problemCard.style.display = "inline-flex";
            }
        } else {
            addErrorStyleToEmailInput();
        }
    } else {
        if (passwordisValid()) {
            // check email and password in database
            removeErrorStyleFromPasswordInput();
            if(passwordMatchWithEnteredEmail()) {
                // if email and password matched go to index page
                problemCard.style.display = "none";
                console.log("login successfully!!!");
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("currentUser", JSON.stringify({"username": "ahmed"}));
                location.replace("../index.html");
            } else {
                // else show problem box with error message
                problemBody.innerText = "Your password is incorrect";
                problemCard.style.display = "inline-flex";

            }
            
        } else {
            addErrorStyleToPasswordInput()
        }
    }

});

changeBtn.addEventListener("click", () => {
    viewEmailSection();
    isContinue = true;
    problemCard.style.display = "none";
});