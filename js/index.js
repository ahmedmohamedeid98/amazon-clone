$(document).ready(() => {
  // get ui items
  const signinLabel = $('#sign_in_or_username');
  const signinBtn = $('#sign_in_out');
  const registerItem = $('#register_nav_item');

  // check if user logged in or not
  var isLoggedIn = localStorage.isLoggedIn ? true : false;

  // init data
  if (isLoggedIn) {
    // get current logged user if exist
    let data = localStorage.getItem("currentUser");
    if (data) {
      let user = JSON.parse(data);
      registerItem.hide();
      signinBtn.text("Sign out");
      signinLabel.text(user.username);
    }
  } else {
    registerItem.show();
    signinBtn.text("Signin");
    signinLabel.text("sign in");
  }

  // handel click event on signin/signout button
  signinBtn.on("click", () => {
    // if user logged in clear user data
    if (isLoggedIn) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");
    }
    // redired user to login page
    var url = location.origin + location.pathname.replace("index.html", "pages/login.html");
    location.replace(url);
  });











  //=============================
  //      SlideShow
  //=============================

  const prev = $(".prev");
  const next = $(".next");
  const slides = $(".mySlides");
  var n = slides.length;
  var index = 0;
  var prevIndex = 0;

  // init show at index 0 and hide the remaining
  slides[0].style.display = "block";
  for (let i = 1; i < n; i++)
    slides[i].style.display = "none";
  

  prev.on("click", () => {
    // index--; if (index < 0) index = n - 1 
    prevIndex = index;
    index = (index + n - 1) % n;
    showCurrentAndHidePrevIndex();
  });

  next.on("click", () => {
    // index++; if (index >= n) index = 0
    prevIndex = index;
    index = (index + 1) % n;
    showCurrentAndHidePrevIndex();
  });

  function showCurrentAndHidePrevIndex() {
    slides[index].style.display = "block";
    slides[prevIndex].style.display = "none";
  }

});