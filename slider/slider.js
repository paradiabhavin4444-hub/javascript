const sliders = [
  {
    img: "slider1.jpg",
  },
  {
    img: "slider2.jpg",
  },
  {
    img: "slider3.jpg",
  },
];

let index = 0;

function showslider() {
  const sliderImg = document.querySelector("#sliderimg");
  sliderImg.src = sliders[index].img;
}

function next() {
  index++;
  if (index > sliders.length) {
    index = 0;
  }
  showslider();
}
setInterval(() => {
  next();
}, 2000);

showslider();
setInterval(() => {
  prev();
}, 7000);

showslider();

function prev() {
  index--;
  if (index < 0) {
    index = sliders.length - 1;
  }
  showslider();
}
showslider();
