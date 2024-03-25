export const videoDetails = [
  {
    id: 1,
    channelName:"ezlilyy",
    channelLink: "https://www.youtube.com/@ezlilyy",
    channelPicture: "Images/Channel Pictures/channel-1.jpeg",
    thumbnail: "Images/thumbnails/thumbnail-1.webp",
    title:"Checking Out The BRAND NEW Festivals 🏜️",
    duration:"3:15:16",
    views:"5.8K",
    publishedWhen:"Streamed 1 day ago",
    originalLink: "https://www.youtube.com/watch?v=kZ0-eF9xY28",
    isVerified: "Yes"
  }, {
    id: 2,
    channelName:"Kara and Nate",
    channelLink: "https://www.youtube.com/@KaraandNate",
    channelPicture: "Images/Channel Pictures/channel-2.jpeg",
    thumbnail: "Images/thumbnails/thumbnail-2.webp",
    title:"95 hours on Canadas BEST train! (Vancouver to Toronto on Via Rail)",
    duration:"32:54",
    views:"107K",
    publishedWhen:"3 hours ago",
    originalLink: "https://www.youtube.com/watch?v=G9Xh95FO0i4",
    isVerified: "Yes"
  }, {
    id: 3,
    channelName:"Sandristas 009",
    channelLink: "https://www.youtube.com/@sandristas009",
    channelPicture: "Images/Channel Pictures/channel-3.jpeg",
    thumbnail: "Images/thumbnails/thumbnail-3.webp",
    title:"Playlist for Smooth Brained Organisms",
    duration:"44:22",
    views:"1M",
    publishedWhen:"3 months ago",
    originalLink: "https://www.youtube.com/watch?v=1rd4P7uMvvQ",
    isVerified: "No"
  }, {
    id: 4,
    channelName:"Ashikai",
    channelLink: "https://www.youtube.com/@Ashikai",
    channelPicture: "Images/Channel Pictures/channel-4.jpeg",
    thumbnail: "Images/thumbnails/thumbnail-4.webp",
    title:"[4.5] Xamaran, Paimon, And Eating Things You're Not Supposed To - A...",
    duration:"43:52",
    views:"75K",
    publishedWhen:"2 days ago",
    originalLink: "https://www.youtube.com/watch?v=YHCv8KFdL6M",
    isVerified: "Yes"
  }, {
    id: 5,
    channelName:"PeruseProject",
    channelLink: "https://www.youtube.com/@Ashikai",
    channelPicture: "Images/Channel Pictures/channel-5.jpeg",
    thumbnail: "Images/thumbnails/thumbnail-5.webp",
    title:"I finally found a slow burn romantasy book!! and I liked it!!",
    duration:"35:42",
    views:"31K",
    publishedWhen:"9 days ago",
    originalLink: "https://www.youtube.com/watch?v=GqMQLP6N25g",
    isVerified: "Yes"
  }, {
    id: 6,
    channelName:"The Rain Driver",
    channelLink: "https://www.youtube.com/@TheRainDriver",
    channelPicture: "Images/Channel Pictures/channel-6.jpeg",
    thumbnail: "Images/thumbnails/thumbnail-6.webp",
    title:'Driving in Rain for Sleeping "Real Footage" Rain Noise Highway,...',
    duration:"8:01:22",
    views:"322K",
    publishedWhen:"1 year ago",
    originalLink: "https://www.youtube.com/watch?v=GV4TNIiJQQU",
    isVerified: "No"
  }, {
    id: 7,
    channelName:"HITO",
    channelLink: "https://www.youtube.com/@hito7302",
    channelPicture: "Images/Channel Pictures/channel-7.jpg",
    thumbnail: "Images/thumbnails/thumbnail-7.webp",
    title:'Rainy day • lofi ambient music I chill beats to relax/study to',
    duration:"1:05:03",
    views:"295K",
    publishedWhen:"7 months ago",
    originalLink: "https://www.youtube.com/watch?v=INMWDBgfGBM",
    isVerified: "No"
  }, {
    id: 8,
    channelName:"em iffy",
    channelLink: "https://www.youtube.com/@emiffy646",
    channelPicture: "Images/Channel Pictures/channel-8.jpg",
    thumbnail: "Images/thumbnails/thumbnail-8.webp",
    title:'6am productive morning to night routine🌥 | having fun alone, morning cafe, housework',
    duration:"26:18",
    views:"1.4M",
    publishedWhen:"8 months ago",
    originalLink: "https://www.youtube.com/watch?v=wHdqPFESgCs",
    isVerified: "No"
  }, {
    id: 9,
    channelName:"Bernadette Banner",
    channelLink: "https://www.youtube.com/@bernadettebanner",
    channelPicture: "Images/Channel Pictures/channel-9.jpg",
    thumbnail: "Images/thumbnails/thumbnail-9.webp",
    title:"NYC's Last Flower Makers Explain the Victorian Craft of Artificial Flower Production",
    duration:"18:46",
    views:"892K",
    publishedWhen:"3 years ago",
    originalLink: "https://www.youtube.com/watch?v=UTWsDC24IIw",
    isVerified: "Yes"
  }, {
    id: 10,
    channelName:"Just Alex",
    channelLink: "https://www.youtube.com/@just_alex",
    channelPicture: "Images/Channel Pictures/channel-10.jpg",
    thumbnail: "Images/thumbnails/thumbnail-10.webp",
    title:"I Moved into an Off Grid Wilderness Mountain Hut - Living in the Alps",
    duration:"44:49",
    views:"3.3M",
    publishedWhen:"1 year ago",
    originalLink: "https://www.youtube.com/watch?v=KcmjitAB0sM",
    isVerified: "No"
  }, {
    id: 11,
    channelName:"Solo Solo Travel",
    channelLink: "https://www.youtube.com/@SoloSoloTravel",
    channelPicture: "Images/Channel Pictures/channel-11.jpg",
    thumbnail: "Images/thumbnails/thumbnail-11.webp",
    title:"Visiting Japan's Famous Snow Village | Ginzan Onsen 🇯🇵",
    duration:"33:13",
    views:"198K",
    publishedWhen:"3 weeks ago",
    originalLink: "https://www.youtube.com/watch?v=WmQDnAV_ASM&t=1174s",
    isVerified: "Yes"
  }
];

export const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 