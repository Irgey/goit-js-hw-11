export async function getPictures(e) {
  e.preventDefault();
  // const findValue = e.target.elements.searchQuery.value.trim();
  const findValue = refs.searchForm.elements.searchQuery.value.trim();
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: findValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: refs.pageCount,
        per_page: refs.per_page,
      },
    });

    console.log(typeof response.data.totalHits, response.data.totalHits);
    if (response.data.totalHits !== 0) {
      console.log(response);
      refs.loadMoreBtn.classList.add('btn--hide');

      renderGallery(response.data.hits);
    } else {
      throw new Error();
    }
  } catch (error) {
    Notiflix.Notify.failure(
      `Sorry, there are no images matching your search query. Please try again.`
    );
  }
}

export function getPictures(e) {
  e.preventDefault();
  // const findValue = e.target.elements.searchQuery.value.trim();
  const findValue = refs.searchForm.elements.searchQuery.value.trim();

  axios
    .get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: findValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: refs.pageCount,
        per_page: refs.per_page,
      },
    })
    .then(function (response) {
      console.log(typeof response.data.totalHits, response.data.totalHits);
      if (response.data.totalHits !== 0) {
        console.log(response);
        refs.loadMoreBtn.classList.add('btn--hide');

        renderGallery(response.data.hits);
      } else {
        throw new Error();
      }
    })
    .catch(function (error) {
      Notiflix.Notify.failure(
        `Sorry, there are no images matching your search query. Please try again.`
      );
    });
}
