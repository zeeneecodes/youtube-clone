import { videoDetails } from "../data/videos.js";

renderHTML();


function renderHTML() {
  let html = '';
  videoDetails.forEach((video) => {
    html += `
      <div class="video-preview">
          <div class="thumbnail-row">
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
          </div>
          <div class="video-info-grid">
            <div class="channel-picture">
              <img class="profile-picture" src="${video.channelPicture}">
            </div>
            <div class="video-info">
              <p class="video-title">${video.title}</p>
              <a href="${video.channelLink}"><p class="video-author">${video.channelName}</p></a>
              <p class="video-stats">${video.views} views &#183; ${video.publishedWhen}</p>
            </div>
          </div>
      </div>
    `;
    })

  const videoContainer = document.querySelector('.video-grid');
  videoContainer.innerHTML = html;
}