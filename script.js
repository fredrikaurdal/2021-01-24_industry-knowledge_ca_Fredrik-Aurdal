window.onscroll = function () {
  rotate();
};

function rotate() {
  let image = document.querySelector('.fixed-item .text');
  image.style.transform = 'rotate(' + window.pageYOffset / 20 + 'deg)';
}

const modal = document.querySelectorAll('.modal');

const modalContact = document.querySelector('#modal-contact');
const modalMockups = document.querySelector('#modal-mockups');
const modalFrontend = document.querySelector('#modal-frontend');
const modalPrototyping = document.querySelector('#modal-prototyping');

const contactButton = document.querySelector('#modal-contact-button');
const mockupsButton = document.querySelector('#modal-mockups-button');
const frontendButton = document.querySelector('#modal-frontend-button');
const prototypingButton = document.querySelector('#modal-prototyping-button');

const span = document.querySelectorAll('.close');

// Show modalContact
contactButton.onclick = () => {
  modalContact.style.display = 'block';
};

// Show modalMockups
mockupsButton.onclick = () => {
  modalMockups.style.display = 'block';
};

// Show modalFrontend
frontendButton.onclick = () => {
  modalFrontend.style.display = 'block';
};

// Show modalPrototyping
prototypingButton.onclick = () => {
  modalPrototyping.style.display = 'block';
};

// Hide all modal
span.forEach((closeButton) => {
  closeButton.onclick = () => {
    modal.forEach((item) => {
      item.style.display = 'none';
      console.log(item);
    });
  };
});

// Hide modalContact when clicking outside
window.onclick = (event) => {
  if (event.target == modalContact) {
    modalContact.style.display = 'none';
  }
};
