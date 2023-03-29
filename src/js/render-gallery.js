import { refs } from '..';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(galleryArray) {
  console.log('galleryArray', galleryArray);
  const markup = galleryArray
    .map(picture => {
      return `<a class="gallery__item gallery__link" href="${picture.largeImageURL}"><div class="photo-card">
  <img class="gallery__image" src="${picture.webformatURL}" alt="${picture.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes<br>
      ${picture.likes}</b>
    </p>
    <p class="info-item">
      <b>Views<br>
      ${picture.views}</b>
    </p>
    <p class="info-item">
      <b>Comments<br>
      ${picture.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads<br>
      ${picture.downloads}</b>
    </p>
  </div>
</div></a>`;
    })
    .join('');
  refs.divGallery.insertAdjacentHTML('beforeend', markup);
  let gallery = new SimpleLightbox('.gallery a');
  refs.loadMoreBtn.classList.remove('btn--hide');
}
