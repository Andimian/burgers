var slides = document.getElementsByClassName("burgers__item");
var currentSlide = 0;

function showSlides() {
  slides[currentSlide].className = 'visible';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}



  if (n > slides.length) {
    n = 0;
  }if else (n < 0) {
    slideIndex = slides.length
  }

  // for (var i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  // }

  slides[currentSlide].className += "--active";
}


function nextSlide() {
  showSlides(currentSlide += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function previosSlide() {
  showSlides(currentSlide -= 1);  
}


showSlides(currentSlide);