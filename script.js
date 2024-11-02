const city = document.querySelector('.location');
const theme = document.querySelector('.theme');
const lang = document.querySelector('.lang');
const body = document.querySelector('.body');
const locationPopUp = document.querySelector('.locationPopUp');
const themePopUp = document.querySelector('.themePopUp');
const languagePopUp = document.querySelector('.languagePopUp');

// location.addEventListener('click', () => {
//   console.log('whats up');
// });
city.addEventListener('click', () => {
  console.log('city');
  locationPopUp.classList.add('locationPopUpAfter');
});

theme.addEventListener('click', () => {
  console.log('theme');
  themePopUp.classList.add('themePopUpAfter');
});

lang.addEventListener('click', () => {
  console.log('theme');
  languagePopUp.classList.add('languagePopUpAfter');
});
