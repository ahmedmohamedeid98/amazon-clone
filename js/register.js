
var Name = document.getElementById("name");
var Email = document.getElementById("email");
var pass = document.getElementById("pass");
var pass2 = document.getElementById("pass2");
var errorName = document.getElementById("error1");
var errorMail= document.getElementById("error2");
var errorPass = document.getElementById("error3");

var users=[]
var obj = function(userName,Email,pass){
    this.userName=userName;
    this.Email=Email;
    this.pass=pass;
}

function nameTest(){
    if(Name.value ==="" || Name.length<3 || Name.value.search(/a-z/i)==0)
    {errorName.textContent="*Invalid User Name";
    return false;}
    else{return true}
}
function mailTest(){
    if(Email.value =="" || Email.length< 7 || Email.value.search(/@/)==0)
    {errorMail.textContent="*Invalid";
    return false;}
    else{return true}
}
function passwordTest(){
    if(pass.value<6 || pass.value=="" || pass2.value=="")
    {errorPass.textContent="*Invalid Password"
    return false}
    else if(pass.value != pass2.value)
    {errorPass.textContent="*Error in Password Match"}
    else{ return true}
}

function signUp(e){

if(nameTest() && mailTest() && passwordTest())
{
    var user=new obj(Name.value,Email.value,pass.value)
    users.push(user);
    localStorage.setItem(users,JSON.stringify(users));
    console.log(users);
}
else{ 
    e.preventDefault();
    
}
}
addEventListener('submit',signUp)




