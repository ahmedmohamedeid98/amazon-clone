$(document).ready(() => {
  











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