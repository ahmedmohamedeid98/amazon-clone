



let a_signin = document.getElementById("sing_in_a_id");
let signin_or_username = document.getElementById("sign_in_or_username");

function loggedIn() {
  if(localStorage.isLoggedIn) {
    return true;
  }
  return false;
}

if(loggedIn) {
  let data = localStorage.getItem("currentUser");
  let user = JSON.parse(data);
  signin_or_username.textContent = user.username;
} else {
  signin_or_username.textContent = "sign in"
}

a_signin.addEventListener("click", () => {
  
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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
