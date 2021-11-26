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

var entered_email = "";
var entered_password = "";
var showPass = true;

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

continueBtn.addEventListener("click", () => {
    console.log("continueButton Clikced");
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email_inpt.value != "" && email_inpt.value.match(re)) {
        entered_email = email_inpt.value;
        viewPasswordSection();
    } else {
        
    }

});

changeBtn.addEventListener("click", () => {
    viewEmailSection();
});