import { videoDetails, shuffle } from "../data/videos.js";

renderHTML();

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

const subscriptions = document.querySelector('.subscriptions-container');
let subscriptionList = [];
let subscriptionsHTML = '';
const shuffledList = shuffle(videoDetails);

for(let i = 0; i < 5; i++) {
  subscriptionList.push({
    channelName: shuffledList[i].channelName,
    channelLink: shuffledList[i].channelLink,
    channelPicture: shuffledList[i].channelPicture
  });
}

subscriptionList.forEach((subscription) => {
  subscriptionsHTML += `
    <a href="${subscription.channelLink}"><div class="hamburger-link">
      <img class="hamburger-subscription-pic" src="${subscription.channelPicture}">
      <div>${subscription.channelName}</div>
    </div></a>
  `;
});
subscriptions.innerHTML = subscriptionsHTML;

function closeOpenedShowMore() {
  const allShowMore = document.getElementsByClassName('show-more-option-container');

  for(let i = 0; i < allShowMore.length; i++) {
    if(allShowMore[i].classList.contains('show-more-active')) {
      allShowMore[i].classList.remove('show-more-active');
    }
  }
}


function renderHTML() {
  const videoContainer = document.querySelector('.video-grid');
  let html = '';

  shuffle(videoDetails);
  
  videoDetails.forEach((video) => {
    html += `
    <div class="video-preview" data-video-id=${video.id}>
      <div class="thumbnail-row">
        <a href="${video.originalLink}">
          <img class="thumbnail" src="${video.thumbnail}">
          <div class="video-time">${video.duration}</div>
          <div class="tool-watch-later">
            <img src="Images/icons/watch-later.png" class="tool-icon">
            Watch Later
          </div>
          <div class="tool-queue">
            <img src="Images/icons/add-to-queue.png" class="tool-icon">
            Add to queue
          </div>
          </a>
      </div>

      <div class="video-info-grid">
        <div class="channel-picture">
          <img class="profile-picture" src="${video.channelPicture}">
        </div>
        <div class="video-info">
          <div class="video-title-container">
            <p class="video-title">${video.title}</p>
            <div class="more-container">
                <img class="more" src="Images/icons/more.svg" data-show-more-icon-id=${video.id}>
                <div class="show-more-option-container js-show-more-option-${video.id}">
                  <div class="show-more-option">
                    <img src="Images/icons/add-to-queue-black.png">
                    <div>Add to queue</div>
                  </div>
                  <div class="show-more-option">
                    <img src="Images/icons/watch-later.svg">
                    <div>Save to Watch later</div>
                  </div>
                  <div class="show-more-option">
                    <img src="Images/icons/add-to-playlist-black.svg">
                    <div>Save to playlist</div>
                  </div>
                  <div class="show-more-option">
                    <img src="Images/icons/download.svg">
                    <div>Download</div>
                  </div>
                  <div class="show-more-option">
                    <img src="Images/icons/share.png">
                    <div>Share</div>
                  </div>
                  <hr>
                  <div class="show-more-option">
                    <img src="Images/icons/not-interested.svg">
                    <div>Not Interested</div>
                  </div>
                  <div class="show-more-option">
                    <img src="Images/icons/do-not-recommend.svg">
                    <div>Don't recommend channel</div>
                  </div>
                  <div class="show-more-option">
                    <img src="Images/icons/report.svg">
                    <div>Report</div>
                  </div>
                </div>
              </div>
          </div>
          <div class="channel-details-container">
            <div class="channel-name-container">
              <a href="${video.channelLink}"><p class="video-author">${video.channelName}</p></a>
              <div class="tooltip2">${video.channelName}</div>
            </div>
            <div class="verified-container">
              <img class="verified" src="Images/icons/verified.svg" data-channel-verification=${video.isVerified}>
              <div class="tooltip2-v">Verified</div>
            </div>
          </div>
          <p class="video-stats">${video.views} views &#183; ${video.publishedWhen}</p>
        </div>
      </div>
    </div>
    `;
  })
  
  videoContainer.innerHTML = html;
  isChannelVerified();
}

function isChannelVerified() {
  const verifyChannel = document.getElementsByClassName('verified');
  
  for (let i = 0; i < verifyChannel.length; i++) {
    const verification = verifyChannel[i].dataset.channelVerification;
    if (verification === 'Yes') {
      verifyChannel[i].classList.add('is-verified');
    }
  }
}