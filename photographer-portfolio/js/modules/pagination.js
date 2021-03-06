function pagination() {
  function preloadImages(season) {
    for (let i = 1; i <= 6; i += 1) {
      const img = new Image();
      img.src = `./assets/img/${season}/${i}.jpg`;
    }
  }

  preloadImages('winter');
  preloadImages('spring');
  preloadImages('summer');
  preloadImages('autumn');

  const portfolioButtons = document.querySelectorAll('.portfolio__button');
  const portfolioImage = document.querySelectorAll('.portfolio__item');

  portfolioButtons.forEach((portfolioButton) => {
    portfolioButton.addEventListener('click', () => {
      const portfolioImageActive = document.querySelector('.portfolio__button-active');
      portfolioImageActive.classList.remove('portfolio__button-active');
      portfolioButton.classList.add('portfolio__button-active');

      for (let i = 1, j = 0; i <= 6 && j < 6; i += 1, j += 1) {
        portfolioImage[j].src = `assets/img/${portfolioButton.dataset.season}/${i}.jpg`;
      }
    });
  });
}

export default pagination;
