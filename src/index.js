import { getPictures } from './js/c-get-pictures';
import { loadNextPage } from './js/load-next-page';
import './css/styles.css';
import OnlyScroll from 'only-scrollbar';
import { renderGallery } from './js/render-gallery';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

export const refs = {
  searchForm: document.querySelector('#search-form'),
  divGallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
  pageCount: 1,
  per_page: 40,
};

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
const scroll = new OnlyScroll(window, { damping: 0.8 });

async function onFormSubmit(e) {
  e.preventDefault();
  try {
    refs.divGallery.innerHTML = '';
    const findValue = refs.searchForm.elements.searchQuery.value.trim();
    refs.pageCount = 1;
    const data = await getPictures(findValue, refs.pageCount, refs.per_page);

    console.log('data', data);
    renderGallery(data.hits);
    if (data.totalHits <= refs.per_page) {
      refs.loadMoreBtn.classList.add('btn--hide');
      Notiflix.Notify.failure(
        `We're sorry, but you've reached the end of search results.`
      );
    }

    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
  } catch (error) {
    Notiflix.Notify.failure(error);
  }
}

async function onLoadMoreBtnClick() {
  refs.pageCount += 1;
  const findValue = refs.searchForm.elements.searchQuery.value.trim();

  const data = await getPictures(findValue, refs.pageCount, refs.per_page);
  renderGallery(data.hits);
  if (data.totalHits <= refs.per_page * refs.pageCount) {
    refs.loadMoreBtn.classList.add('btn--hide');
    Notiflix.Notify.failure(
      `We're sorry, but you've reached the end of search results.`
    );
  }
}
