// Your code goes here
const busPic = document.querySelector('.intro img');

busPic.addEventListener('mouseenter', () => {
  busPic.style.transform = "skew(45deg)";
  busPic.style.transition = "all 1s";
})

busPic.addEventListener('mouseleave', () => {
  busPic.style.transform = 'skew(0deg)';
})

const adventurePics = document.querySelectorAll('.img-content img');

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

whereTo.addEventListener('select', () => {
  whereTo.style.color = 'red';
})