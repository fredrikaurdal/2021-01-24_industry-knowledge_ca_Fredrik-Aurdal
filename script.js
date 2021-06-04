window.onscroll = function () {
  rotate();
};

function rotate() {
  let image = document.querySelector('.fixed-item .text');
  image.style.transform = 'rotate(' + window.pageYOffset / 20 + 'deg)';
}

const modal = document.querySelector('#modal');

const button = document.querySelector('#modal-button');

const span = document.getElementsByClassName('close')[0];

button.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
