import { renderHTML, renderHamburgerSubscriptions } from "./htmlRender.js";
import { closeOpenedShowMore } from "./interactivity.js";

renderHTML();
renderHamburgerSubscriptions();

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
  const bodyPadding = document.body;
  const sideBar = document.querySelector('.sidebar');

  if (isClicked === 0) {
    bodyPadding.style.paddingLeft='265px';
    sideBar.style.display = 'none';
    hamburgerContainer.style.display = 'block';
    isClicked = 1;
  } else if (isClicked === 1) {
    bodyPadding.style.paddingLeft='95px';
    sideBar.style.display = 'block';
    hamburgerContainer.style.display = 'none';
    isClicked = 0;
  }
});







