import { videoDetails, shuffle } from "../data/videos.js";

renderHTML();


function renderHTML() {
  const videoContainer = document.querySelector('.video-grid');
  let html = '';

  shuffle(videoDetails);
  
  videoDetails.forEach((video) => {
    html += `
    <div class="video-preview">
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
          <p class="video-title">${video.title}</p>
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