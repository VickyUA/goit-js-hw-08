import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const container = document.querySelector('.gallery');
container.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

function createMarkup(arr) {
  return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  ).join('');
}

const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: "alt",
  captionDelay: 250,
});
