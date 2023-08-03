const popUpModal = document.querySelector('.btn-popup');
const closeModal = document.querySelector('.close-modal');
const modalContainer = document.querySelector('.container');
const overlay = document.querySelector('.overlay');

const handleOpenModal = () => {
  modalContainer.style.display = 'flex';
  overlay.style.display = 'block';
};

const handleCloseModal = () => {
  modalContainer.style.display = 'none';
  overlay.style.display = 'none';
};

popUpModal.addEventListener('click', handleOpenModal);
modalContainer.addEventListener('click', handleCloseModal);
overlay.addEventListener('click', handleCloseModal);
