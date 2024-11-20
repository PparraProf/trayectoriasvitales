let movimgImage = document.querySelector(".movimgImage")


function elementInViewPort(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetheight;
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
