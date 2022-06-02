const imageList = document.querySelector('.page__list');
const inputTextImage = document.querySelector('.header__input');
const resetButton = document.querySelector('.header__reset');
const searchButton = document.querySelector('.header__search');

let url = 'https://api.unsplash.com/search/photos?query=city&per_page=15&orientation=landscape&client_id=XYHa5jZUrMSn4kdounYYTKHBY-NuZxfrTCAEtN-72nE';

const newElement = function (newImage) {
  const imageItem = document.createElement('li');
  imageItem.classList.add('page__item');

  const imageContent = document.createElement('img');
  imageContent.classList.add('page__image');

  imageContent.src = newImage.urls.regular;
  imageContent.alt = 'image';

  imageItem.appendChild(imageContent);
  imageList.appendChild(imageItem);
};

const showData = function (data) {
  for (let i = 0; i < data.results.length; i += 1) {
    newElement(data.results[i]);
  }
};

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}

getData();

resetButton.onclick = function () {
  inputTextImage.value = '';
  url = 'https://api.unsplash.com/search/photos?query=city&per_page=15&orientation=landscape&client_id=XYHa5jZUrMSn4kdounYYTKHBY-NuZxfrTCAEtN-72nE';

  while (imageList.firstChild) {
    imageList.removeChild(imageList.lastChild);
  }

  getData();
};

inputTextImage.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && inputTextImage.value !== '') {
    url = `https://api.unsplash.com/search/photos?query=${inputTextImage.value}&per_page=15&orientation=landscape&client_id=XYHa5jZUrMSn4kdounYYTKHBY-NuZxfrTCAEtN-72nE`;

    while (imageList.firstChild) {
      imageList.removeChild(imageList.lastChild);
    }
    getData();
  }
});

searchButton.onclick = function () {
  url = `https://api.unsplash.com/search/photos?query=${inputTextImage.value}&per_page=15&orientation=landscape&client_id=XYHa5jZUrMSn4kdounYYTKHBY-NuZxfrTCAEtN-72nE`;
  while (imageList.firstChild) {
    imageList.removeChild(imageList.lastChild);
  }

  if (inputTextImage.value === '') {
    url = 'https://api.unsplash.com/search/photos?query=city&per_page=15&orientation=landscape&client_id=XYHa5jZUrMSn4kdounYYTKHBY-NuZxfrTCAEtN-72nE';
  }
  getData();
};
