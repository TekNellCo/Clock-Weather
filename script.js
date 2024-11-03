const city = document.querySelector('.location');
const theme = document.querySelector('.theme');
const lang = document.querySelector('.lang');
const body = document.querySelector('.body');
const locationPopUp = document.querySelector('.locationPopUp');
const searchBar = document.querySelector('.searchBar');
const themePopUp = document.querySelector('.themePopUp');
const themes = document.querySelectorAll('.themes');
const languagePopUp = document.querySelector('.languagePopUp');
const languagePopUpAfter = document.querySelector('.languagesPopUpAfter');
// const languages = document.querySelector('.languages');
const image = document.querySelector('.image');
let imageNum = 0;

///////adds css classes to popups while resetting other buttons
city.addEventListener('click', () => {
  locationPopUp.classList.toggle('locationPopUpAfter');
  searchBar.classList.toggle('searchBarAfter');
  themes.className = 'themes';
  themePopUp.className = 'themePopUp';
  // languages.className = 'languages';
  languagePopUp.className = 'languagePopUp';
  hideLanguage();
  themes.forEach((theme) => {
    theme.classList.remove('themesAfter');
    theme.classList.remove('one');
  });
});
theme.addEventListener('click', () => {
  imageNum = 0;
  themes.forEach((theme) => {
    if (theme.children.length > 0) {
      theme.innerHTML = '';
    } else {
    }
    hideLanguage();
    imageNum++;
    theme.classList.toggle('themesAfter');
    // theme.classList.toggle('one');
    // theme.classList.toggle(imageNum);
    let img = document.createElement('div');
    theme.append(img);
    img.className = 'image';
    img.classList.toggle(imageNum);
    img.style.backgroundImage = `url(./images/${imageNum}.png)`;
    img.addEventListener('click', () => {
      if (img.className === 'image 1') {
        console.log('image one');
        rainbowTheme();
      } else if (img.className === 'image 2') {
        console.log('image two');
        blueCreamTheme();
      } else if (img.className === 'image 3') {
        console.log('image three');
        lightTheme();
      }
    });
  });
  themePopUp.classList.toggle('themePopUpAfter');
  searchBar.className = 'searchBar';
  locationPopUp.className = 'locationPopUp';
  // languages.className = 'languages';
  languagePopUp.className = 'languagePopUp';
});

lang.addEventListener('click', () => {
  languagePopUp.classList.toggle('languagePopUpAfter');
  // languages.classList.toggle('languagesAfter');
  searchBar.className = 'searchBar';
  locationPopUp.className = 'locationPopUp';
  themes.className = 'themes';
  themePopUp.className = 'themePopUp';
  themes.forEach((theme) => {
    theme.classList.remove('themesAfter');
    theme.classList.remove('one');
  });
  if (languagePopUp.children.length > 0) {
    hideLanguage();
  } else {
    languageChange();
  }
});

/////////////////Theme Functions replace colors

let splashColor = document.querySelector('.whiteBG');
let clockGradient = document.querySelector('.clockTime');
let bodyBackground = document.querySelector('.body');
let bottomContainer = document.querySelector('.bottomContainer');
let neonContainer = document.querySelector('.neonClockContainer');
let svgOne = document.querySelector('.svgOne');
let svgTwo = document.querySelector('.svgTwo');
let svgThree = document.querySelector('.svgThree');
let days = document.querySelectorAll('.days');
let hr = document.querySelector('.hr');
let sun = document.querySelectorAll('.sun');
let temp = document.querySelectorAll('.temp');

function rainbowTheme() {
  clockGradient.className = 'clockTime';
  splashColor.style = 'background : var(--Rainbow-Gradient)';
  bodyBackground.style = 'background: var(var(--Black-Background))';
  bottomContainer.style = 'background: var(--Black-Container)';
  neonContainer.style = 'background: var(--Black-Container)';
  svgOne.style = 'color: #ff00ff';
  svgTwo.style = 'color: #099fff';
  svgThree.style = 'color:#00ff66';
  days.forEach((day) => {
    day.style = 'color:#c45bfe';
  });
  hr.style = 'border-color: #ff1ec6';
  hr.style = 'border-color: #b41eff';
  sun.forEach((suns) => {
    suns.style = 'color:#e6fb04';
  });
  temp.forEach((temps) => {
    temps.style = 'color: #099fff';
  });
}
function blueCreamTheme() {
  clockGradient.className = 'clockTimeTwo';
  splashColor.style = 'background : var(--Heart-Background)';
  bodyBackground.style = 'background: var(--Purple-Background)';
  bottomContainer.style = 'background: var(--Purple-Container)';
  neonContainer.style = 'background: var(--Purple-Container)';
  svgOne.style = 'fill :#ffffff';
  svgTwo.style = 'fill :#ffffff';
  svgThree.style = 'fill:#ffffff';
  days.forEach((day) => {
    day.style = 'color:#ffffff';
  });
  hr.style = 'border-color: #b41eff';
  sun.forEach((suns) => {
    suns.style = 'color:#ff1ec6';
  });
  temp.forEach((temps) => {
    temps.style = 'color: white';
  });
}
///////////////green
// #39af5e
function lightTheme() {}

///////Adds popup selection for languages and triggers functions for language change
function languageChange() {
  let english = document.createElement('div');
  const spanish = document.createElement('div');
  const thai = document.createElement('div');

  languagePopUp.innerHTML = '';

  languagePopUp.append(english);
  languagePopUp.append(spanish);
  languagePopUp.append(thai);

  english.className = 'english';
  spanish.className = 'spanish';
  thai.className = 'thai';

  english.style = 'display : inline';
  spanish.style = 'display : inline';
  thai.style = 'display : inline';
}

function hideLanguage() {
  languagePopUp.innerHTML = '';
}

/////Manipulates text on dom to specific languages

function englishLanguage() {}

function spanishLanguage() {}

function thaiLanguage() {}
