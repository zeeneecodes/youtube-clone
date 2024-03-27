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








