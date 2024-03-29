import { renderHTML, renderHamburgerSubscriptions } from "./htmlRender.js";
import { closeOpenedShowMore } from "./interactivity.js";
import { renderYoutubeShorts } from "./htmlRender.js";

renderHTML();
renderHamburgerSubscriptions();
//renderYoutubeShorts();

const showMoreBtn = document.querySelectorAll('.more');
showMoreBtn.forEach((click) => {
  let isClicked = 0;
  click.addEventListener('click', () => {
    let moreId = click.dataset.showMoreIconId;
    let showMoreContainer = document.querySelector(`.js-show-more-option-${moreId}`);
    closeOpenedShowMore();
    showMoreContainer.classList.add('show-more-active');

    if (isClicked === 0){
      isClicked = 1;
    } else if (isClicked === 1){
      showMoreContainer.classList.remove('show-more-active');
      isClicked = 0;
    }
  });
});


const hamburgerBtn = document.querySelector('.hamburger-menu');
let isClicked = 0;
hamburgerBtn.addEventListener('click', () => {
  const hamburgerContainer = document.querySelector('.hamburger-container');
  const body = document.body;
  const sideBar = document.querySelector('.sidebar');

  if (isClicked === 0) {
    body.style.paddingLeft='265px';
    body.style.height = '100%';
    body.style.overflowY = 'hidden';
    sideBar.style.display = 'none';
    hamburgerContainer.style.display = 'block';
    isClicked = 1;
  } else if (isClicked === 1) {
    hamburgerContainer.style.display = 'none';
    body.style.paddingLeft='95px';
    sideBar.style.display = 'block';
    body.style.removeProperty('height');
    body.style.removeProperty('overflow-y');
    isClicked = 0;
  }
});

const hamburgerBG = document.querySelector('.hamburger-background');
hamburgerBG.addEventListener('click',()=>{
  const body = document.body;
  const hamburgerContainer = document.querySelector('.hamburger-container');
  const sideBar = document.querySelector('.sidebar');
  hamburgerContainer.style.display = 'none';
  body.style.paddingLeft='95px';
  sideBar.style.display = 'block';
  body.style.removeProperty('height');
  body.style.removeProperty('overflow-y');
  isClicked = 0;
});





