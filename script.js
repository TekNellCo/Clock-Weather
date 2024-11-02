const city = document.querySelector('.location');
const theme = document.querySelector('.theme');
const lang = document.querySelector('.lang');
const body = document.querySelector('.body');
const locationPopUp = document.querySelector('.locationPopUp');
const searchBar = document.querySelector('.searchBar');
const themePopUp = document.querySelector('.themePopUp');
const themes = document.querySelector('.themes');
const languagePopUp = document.querySelector('.languagePopUp');
const languages = document.querySelector('.languages');

///////Maipulates popups by changing classes in css
city.addEventListener('click', () => {
  locationPopUp.classList.add('locationPopUpAfter');
  searchBar.classList.add('searchBarAfter');
});

theme.addEventListener('click', () => {
  themePopUp.classList.add('themePopUpAfter');
  themes.classList.add('themesAfter');
});

lang.addEventListener('click', () => {
  languagePopUp.classList.add('languagePopUpAfter');
  languages.classList.add('languagesAfter');
});
