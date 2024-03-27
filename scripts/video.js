export function isChannelVerified() {
  const verifyChannel = document.getElementsByClassName('verified');
  
  for (let i = 0; i < verifyChannel.length; i++) {
    const verification = verifyChannel[i].dataset.channelVerification;
    if (verification === 'Yes') {
      verifyChannel[i].classList.add('is-verified');
    }
  }
}