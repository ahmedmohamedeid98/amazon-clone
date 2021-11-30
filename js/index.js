// let a_signin = document.getElementById("sing_in_a_id");
let signin_or_username = document.getElementById("sign_in_or_username");
let sign_in_out_button = document.getElementById('sign_in_out');


var isLoggedIn = localStorage.isLoggedIn ? true : false;


if (isLoggedIn) {
  let data = localStorage.getItem("currentUser");
  if (data) {
    let user = JSON.parse(data);
    sign_in_out_button.textContent = "Sing out";
    signin_or_username.textContent = user.username;
  }
} else {
  sign_in_out_button.textContent = "Signin";
  signin_or_username.textContent = "sign in"
}


sign_in_out_button.addEventListener("click", () => {
  if(isLoggedIn) {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
  }

  var url = location.origin + location.pathname.replace("index.html", "pages/login.html");
  location.replace(url);
  // window.location.replace("C:/Users/ahmed/OneDrive/Documents/0. HTML&CSS/project/amazon-clone/pages/login.html");
  // window.location.href = '../pages/login.html';
});

















//=============================
//      SlideShow
//=============================

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}