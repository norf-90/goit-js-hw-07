import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
let modalEl;
generateMarkup(galleryItems, galleryEl);
galleryEl.addEventListener('click', onImageClick);

function generateMarkup(galleryItems, element) {
  const markup = galleryItems
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </div>`
    )
    .join('');

  element.insertAdjacentHTML('beforeend', markup);
}

function onImageClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  modalEl = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEscapePress);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscapePress);
      },
    }
  );

  modalEl.show();
}

function onEscapePress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  modalEl.close();
}
