let movimgImage = document.querySelector(".movimgImage")


function elementInViewPort(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  while (el.offsetParent) {
    el=el.offsetParent;
    top+=el.offsetTop;
   left += el.offsetLeft;
  }

  return(
    top<(window.pageYOffset + window.innerHeight)&&
    left<(window.pageXOffset+window.innerWidth)&&
    (top+height) > window.pageYOffset&&
    (left+width) > window.pageXOffset
  );
}

gsap.registerPlugin(ScrollTrigger);

const path = document.querySelector("#linePath");
const image = document.querySelector("#movimgImage")
const pathLength = path.getTotalLength()

gsap.to(image,{
  scrollTrigger:{
    trigger:path,
    start:"top center",
    end:"bottom center",
    scrub:2,
  },
  motionPath:{
    path:path,
    align:path,
    alignOrigin : [0.5,0.5],
  },
  duration:2,
  ease:"none"
})
// Carrusel de videos YouTube
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
  window.addEventListener('load', updateCarousel);
