export function closeOpenedShowMore() {
  const allShowMore = document.getElementsByClassName('show-more-option-container');

  for(let i = 0; i < allShowMore.length; i++) {
    if(allShowMore[i].classList.contains('show-more-active')) {
      allShowMore[i].classList.remove('show-more-active');
    }
  }
}