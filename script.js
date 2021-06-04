window.onscroll = function () {
  rotate();
};

function rotate() {
  let image = document.querySelector('.fixed-item .text');
  image.style.transform = 'rotate(' + window.pageYOffset / 20 + 'deg)';
}

const modal = document.querySelector('#modal');

const button = document.querySelector('#modal-button');

const span = document.querySelectorAll('.close')[0];

// Show modal
button.onclick = () => {
  modal.style.display = 'block';
};

// Hide modal
span.onclick = () => {
  modal.style.display = 'none';
};

// Hide modal when clicking outside
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
