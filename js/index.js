// Your code goes here
const busPic = document.querySelector('.intro img');

busPic.addEventListener('mouseenter', () => {
  busPic.style.transform = "skew(45deg)";
  busPic.style.transition = "all 1s";
})

busPic.addEventListener('mouseleave', () => {
  busPic.style.transform = 'skew(0deg)';
})

const adventurePics = document.querySelectorAll('section');

adventurePics[0].addEventListener('click', () => {
  adventurePics[0].style.transform = 'scale(1.1)';
  adventurePics[0].style.transition = '0.5s';

})

adventurePics[1].addEventListener('click', () => {
  adventurePics[1].style.transform = 'scale(1.1)';
  adventurePics[1].style.transition = '0.5s';
})

adventurePics[0].addEventListener('dblclick', () => {
  adventurePics[0].style.transform = 'scale(1)';
  adventurePics[0].style.transition = '0.5s';
})

adventurePics[1].addEventListener('dblclick', () => {
  adventurePics[1].style.transform = 'scale(1)';
  adventurePics[1].style.transition = '0.5s';

})

const whereTo = document.querySelector(".content-destination");

whereTo.addEventListener('mouseover', () => {
  whereTo.style.backgroundColor = '#17A2B8';
})

whereTo.addEventListener('mouseout', () => {
  whereTo.style.backgroundColor = 'transparent';
})

const webPage = document.querySelector("body");

webPage.addEventListener('keypress', () => {
  webPage.style.backgroundColor = 'aquamarine';
})

webPage.addEventListener('keyup', () => {
  webPage.style.backgroundColor = 'burlywood';
})

const theP = document.querySelectorAll('p');

theP.forEach(pTag => {
  pTag.addEventListener('select', () => {
    webPage.style.color = 'white';
  })
})

webPage.addEventListener('select', () => {
  webPage.style.color = 'white';
})

const destination = document.querySelectorAll('.destination .btn');

// destination[0].addEventListener('mousedown', () => {
//   destination[0].style.visibility = 'hidden';
// })

// destination[1].addEventListener('mousedown', () => {
//   destination[1].style.visibility = 'hidden';
// })

// destination[2].addEventListener('mousedown', () => {
//   destination[2].style.visibility = 'hidden';
// })

destination.forEach(section => {
  section.addEventListener('mousedown', () => {
    section.style.visibility = 'hidden'
  })
})

const stopNav = document.querySelector('.nav');

stopNav.addEventListener('click', (event) => {
  event.preventDefault()
})