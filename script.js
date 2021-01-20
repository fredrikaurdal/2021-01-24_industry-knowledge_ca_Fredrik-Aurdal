window.onscroll = function () {
  rotate();
};

function rotate() {
  let image = document.querySelector('.fixed-item .text');
  image.style.transform = 'rotate(' + window.pageYOffset / 20 + 'deg)';
}
