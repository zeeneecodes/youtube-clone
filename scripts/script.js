import { renderHTML, renderHamburgerSubscriptions } from "./htmlRender.js";
import { closeOpenedShowMore } from "./interactivity.js";
import { renderYoutubeShorts } from "./htmlRender.js";

renderHTML();
renderHamburgerSubscriptions();
//renderYoutubeShorts();

let isClicked = 0;
let currentId = 0;
const showMoreBtn = document.querySelectorAll('.more');
showMoreBtn.forEach((click) => {
  click.addEventListener('click', () => {
    let moreId = click.dataset.showMoreIconId;
    let showMoreContainer = document.querySelector(`.js-show-more-option-${moreId}`);
    closeOpenedShowMore();
    
    
    if(currentId !== moreId) {
      showMoreContainer.classList.add('show-more-active');
      isClicked = 1;
      currentId = moreId;
    } else if (currentId === moreId) {
      if (isClicked === 0){
        showMoreContainer.classList.add('show-more-active');
        isClicked = 1;
        currentId = moreId;
      } else if (isClicked === 1){
        showMoreContainer.classList.remove('show-more-active');
        isClicked = 0;
        currentId = moreId;
      }
    }
  });
});

const hamburgerBtn = document.querySelector('.hamburger-menu');
let hamburgerIsClicked = 0;
hamburgerBtn.addEventListener('click', () => {
  const hamburgerContainer = document.querySelector('.hamburger-container');
  const body = document.body;
  const sideBar = document.querySelector('.sidebar');

  if (hamburgerIsClicked === 0) {
    body.style.paddingLeft='265px';
    body.style.height = '100%';
    body.style.overflowY = 'hidden';
    sideBar.style.display = 'none';
    hamburgerContainer.style.display = 'block';
    hamburgerIsClicked = 1;
  } else if (hamburgerIsClicked === 1) {
    hamburgerContainer.style.display = 'none';
    body.style.paddingLeft='95px';
    sideBar.style.display = 'block';
    body.style.removeProperty('height');
    body.style.removeProperty('overflow-y');
    hamburgerIsClicked = 0;
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
  hamburgerIsClicked = 0;
});






