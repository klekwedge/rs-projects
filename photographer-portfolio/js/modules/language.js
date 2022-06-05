import i18Obj from './translate';

function languageChange() {
  const rusLanguage = document.querySelector('.language__rus');
  const engLanguage = document.querySelector('.language__eng');
  const wordsTranslate = document.querySelectorAll('[data-i18]');
  const email = document.querySelector('.input__e-mail');
  const phone = document.querySelector('.input__phone');
  const textarea = document.querySelector('.input__textarea');

  rusLanguage.addEventListener('click', () => {
    email.placeholder = 'Электронная почта';
    phone.placeholder = 'Телефон';
    textarea.placeholder = 'Сообщенние';
    wordsTranslate.forEach((item) => {
      item.textContent = i18Obj.ru[item.dataset.i18];
    });
    rusLanguage.classList.toggle('language__active');
    engLanguage.classList.remove('language__active');
  });

  engLanguage.addEventListener('click', () => {
    email.placeholder = 'E-mail';
    phone.placeholder = 'Phone';
    textarea.placeholder = 'Message';
    wordsTranslate.forEach((item) => {
      item.textContent = i18Obj.en[item.dataset.i18];
    });
    rusLanguage.classList.remove('language__active');
    engLanguage.classList.toggle('language__active');
  });
}

export default languageChange;
