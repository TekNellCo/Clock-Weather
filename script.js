const clockTime = document.querySelector('.clockTime');
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
const submitBtn = document.querySelector('.submitBtn');
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
  if (submitBtn.style.display == '') {
    submitBtn.style.display = 'flex';
  } else {
    submitBtn.style.display = '';
  }
});
theme.addEventListener('click', () => {
  imageNum = 0;
  themes.forEach((theme) => {
    if (theme.children.length > 0) {
      theme.innerHTML = '';
    } else {
    }
    hideSubmitBtn();
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
    console.log(languagePopUp);
  } else {
    languageChange();
    console.log(languagePopUp);
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
const today = document.querySelector('.today');
const tmrw = document.querySelector('.tmrw');
let hr = document.querySelector('.hr');
let sun = document.querySelectorAll('.sun');
let temp = document.querySelectorAll('.temp');
const todayTemp = document.querySelector('.todayTemp');
const tmrwTemp = document.querySelector('.tmrwTemp');

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
  let spanish = document.createElement('div');
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

  // english.onclick = englishLanguage();
  console.log(languagePopUp);
  english.addEventListener('click', () => {
    englishLanguage();
  });
  spanish.addEventListener('click', () => {
    spanishLanguage();
  });
  thai.addEventListener('click', () => {
    thaiLanguage();
  });
}

function hideLanguage() {
  languagePopUp.innerHTML = '';
}
function hideSubmitBtn() {
  submitBtn.style = 'display : none';
}

/////Manipulates text on dom to specific languages
function englishLanguage() {
  today.textContent = 'Today';
  tmrw.textContent = 'Tmrw';
}
function spanishLanguage() {
  today.textContent = 'Hoy';
  tmrw.textContent = 'Mañana';
}

function thaiLanguage() {
  today.textContent = 'วันนี้';
  tmrw.textContent = 'พรุ่งนี้';
}

//////////////Sets time and updates it every 1 second
function currentTime() {
  //////gets date, hours, minutes and seconds
  let day;
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(hours, minutes);

  ///makes it 12 hour clock
  day = hours < 12 ? 'AM' : 'PM';
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours == 0 ? (hours = 12) : hours;
  ////if less then 10, adds 0
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  /////appends time to page
  clockTime.textContent = `${hours}:${minutes}  ${day}`;
}
////repeats clock every second
setInterval(currentTime, 1000);

////initially runs api
// weatherFetch();
///////////////////Weather API
function weatherFetch() {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchBar.value}?key=KKVUK46W8Y8XW9S5YZJML55KE `,
    { mode: 'cors' }
  )
    .then((response) => {
      if (!response.ok) {
        displayError();
      }
      return response.json();
    })
    .then(function (response) {
      // console.log(response);
      // console.log(response.days[1].temp);
      let tdy = response.currentConditions.temp;
      let tmw = response.days[1].temp;
      print(tdy, tmw);
    });

  function print(tdy, tmw) {
    // temp.textContent = `${temperature}`;
    todayTemp.textContent = tdy;
    tmrwTemp.textContent = tmw;
  }
}
////////fetches api every minute

submitBtn.addEventListener('click', () => {
  try {
    searchBar.value;
    weatherFetch();

    setInterval(weatherFetch, 60000);
  } catch (error) {
    displayError();
  }
});

function displayError() {
  searchBar.value = '';
  searchBar.placeholder = 'Error, enter a city';
}
