import 'notiflix/dist/notiflix-3.2.6.min.css';
import { refs } from '..';
import { getPictures } from './c-get-pictures';

export function loadNextPage(q, page, per_page) {
  refs.pageCount += 1;
  getPictures(q, page, per_page);
}
