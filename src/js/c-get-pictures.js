import axios from 'axios';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import { renderGallery } from './render-gallery';
import { refs } from '..';
export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '34815242-39bc1251e4e5bf62a3fd3d06c';

let showedPictures = 0;
// function getShowedPictures() {
//   return showedPictures;
// }
console.log('showedPictures before search request', showedPictures);
export async function getPictures(q, page, per_page) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page,
    },
  });
  if (response.data.totalHits === 0) {
    throw 'Sorry, there are no images matching your search query. Please try again.';
  }
  return response.data;
}
