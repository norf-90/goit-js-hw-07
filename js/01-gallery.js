import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
let modalEl = '';
makeMarkup(galleryItems, galleryEl);
galleryEl.addEventListener('click', onImageClick);

function makeMarkup(galleryItems, element) {
  const markup = galleryItems
    .map(galleryItem => {
      return `
        <div class="gallery__item">
        <a class="gallery__link href="${galleryItem.original}">
        <img
            class="gallery__image"
            src="${galleryItem.preview}"
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}"
        />
        </a>
        </div>`;
    })
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
      onShow: modalEl => {
        window.addEventListener('keydown', onEscapePress);
      },
      onClose: modalEl => {
        window.removeEventListener('keydown', onEscapePress);
      },
    }
  );

  modalEl.show();
}

function onEscapePress(event) {
  console.log(event.code);
  if (event.code !== 'Escape') {
    return;
  }
  modalEl.close();
}
