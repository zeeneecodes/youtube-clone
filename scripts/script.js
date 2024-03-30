import { renderHTML, renderHamburgerSubscriptions } from "./htmlRender.js";
import { closeOpenedShowMore } from "./interactivity.js";

renderHTML();
renderHamburgerSubscriptions();
//renderYoutubeShorts();


// ONLY SHOW ACCORDING TO SELECTED TOPIC

const allTopicBtn = document.querySelectorAll('.topic');
const allTopicBtnArr = document.getElementsByClassName('topic');

allTopicBtn.forEach((button) => {
  button.addEventListener('click', ()=> {
    for (let i = 0; i < allTopicBtnArr.length; i++) {
      if (allTopicBtnArr[i].classList.contains('active-topic')){
        allTopicBtnArr[i].classList.remove('active-topic');
      }
    }
    const topicBtn = button.dataset.topic;
    const videos = document.querySelectorAll('.video-preview');
    button.classList.add('active-topic');
    videos.forEach((video) => {
      const videoTopic = video.dataset.topic;
      if (topicBtn == 'all') {
        video.style.display = 'block';
      } else if (topicBtn === videoTopic) {
        video.style.display = 'block';
      } else if (topicBtn !== videoTopic) {
        video.style.display = 'none';
      }
    });
  });
});


// WHEN CLICKING SHOW MORE

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


// WHEN CLICKING HAMBURGER ICON
// 0: CLOSE || 1: OPEN

const hamburgerBtn = document.querySelector('.hamburger-menu');
let hamburgerIsClicked;

if (window.innerWidth > 600) {
  hamburgerIsClicked = 1;
}  else {
  hamburgerIsClicked = 0;
}
hamburgerBtn.addEventListener('click', () => {
  const hamburgerContainer = document.querySelector('.hamburger-container');
  const body = document.body;
  const sideBar = document.querySelector('.sidebar');

  if (hamburgerIsClicked === 0) {
    if (window.innerWidth > 1310) {
      body.style.paddingLeft='265px';
      body.style.height = '100%';
      sideBar.style.display = 'none';
      hamburgerContainer.style.display = 'block';
    } else if (window.innerWidth < 450){
      body.style.paddingLeft='265px';
      body.style.height = '100%';
      body.style.overflowY = 'hidden';
      body.style.overflowX = 'hidden';
      sideBar.style.display = 'none';
      hamburgerContainer.style.display = 'block';
    } else {
      body.style.paddingLeft='265px';
      body.style.height = '100%';
      body.style.overflowY = 'hidden';
      sideBar.style.display = 'none';
      hamburgerContainer.style.display = 'block';
    }
    hamburgerIsClicked = 1;
  } else if (hamburgerIsClicked === 1) {
    hamburgerContainer.style.display = 'none';

    if (window.innerWidth > 600) {
      sideBar.style.display = 'block';
      body.style.paddingLeft='95px';
    } else {
      sideBar.style.display = 'none';
      body.style.paddingLeft='24px';
      
    }
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