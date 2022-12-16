import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
generateMarkup(galleryItems, galleryEl);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function generateMarkup(galleryItems, element) {
  const markup = galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" 
        alt="${description}" />
      </a></li>`
    )
    .join('');

  element.insertAdjacentHTML('beforeend', markup);
}
