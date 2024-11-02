const city = document.querySelector('.location');
const theme = document.querySelector('.theme');
const lang = document.querySelector('.lang');
const body = document.querySelector('.body');
const locationPopUp = document.querySelector('.locationPopUp');
const searchBar = document.querySelector('.searchBar');
const themePopUp = document.querySelector('.themePopUp');
const themes = document.querySelectorAll('.themes');
const languagePopUp = document.querySelector('.languagePopUp');
const languages = document.querySelector('.languages');
const image = document.querySelector('.image');

// const test = document.querySelector('.test');
// test.style = 'color: red';

///////adds css classes to popups while resetting other buttons
city.addEventListener('click', () => {
  locationPopUp.classList.toggle('locationPopUpAfter');
  searchBar.classList.toggle('searchBarAfter');
  themes.className = 'themes';
  themePopUp.className = 'themePopUp';
  languages.className = 'languages';
  languagePopUp.className = 'languagePopUp';
  themes.forEach((theme) => {
    theme.classList.remove('themesAfter');
    theme.classList.remove('one');
  });
});
theme.addEventListener('click', () => {
  let imageNum = 0;

  themes.forEach((theme) => {
    if (theme.children.length > 0) {
      theme.innerHTML = '';
    } else {
    }
    imageNum++;
    theme.classList.toggle('themesAfter');
    theme.classList.toggle('one');
    let img = document.createElement('div');
    theme.append(img);
    img.className = 'image';
    img.style.backgroundImage = `url(./images/${imageNum}.png)`;
  });
  themePopUp.classList.toggle('themePopUpAfter');
  searchBar.className = 'searchBar';
  locationPopUp.className = 'locationPopUp';
  languages.className = 'languages';
  languagePopUp.className = 'languagePopUp';
});

lang.addEventListener('click', () => {
  languagePopUp.classList.toggle('languagePopUpAfter');
  languages.classList.toggle('languagesAfter');
  searchBar.className = 'searchBar';
  locationPopUp.className = 'locationPopUp';
  themes.className = 'themes';
  themePopUp.className = 'themePopUp';
  themes.forEach((theme) => {
    theme.classList.remove('themesAfter');
    theme.classList.remove('one');
  });
});

//   searchBar.className = 'searchBar';
//   locationPopUp.className = 'locationPopUp';
//   themes.className = 'themes';
//   themePopUp.className = 'themePopUp';
//   languages.className = 'languages';
//   languagePopUp.className = 'languagePopUp';
// themes.forEach((theme) => {
//   for (let i = 0; i < 3; i++) console.log(theme.i);
// });
