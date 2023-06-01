var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var interval = setInterval(nextSlide, 2000);

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

var prevButton = document.createElement("button");
prevButton.innerHTML = "Volta";
prevButton.onclick = function() {
  prevSlide();
};

var nextButton = document.createElement("button");
nextButton.innerHTML = "Avança";
nextButton.onclick = function() {
  nextSlide();
};

var carrossel = document.getElementById("carrossel");
carrossel.appendChild(prevButton);
carrossel.appendChild(nextButton);