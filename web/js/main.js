var swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      510: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      758: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
}); 

const playButton = document.querySelector(".play-movie");
const videoContainer = document.querySelector(".video-container");
const myVideo = document.querySelector("#myvideo");

function openVideo() {
    videoContainer.classList.add("show-video");
    myVideo.currentTime = 0; 
    myVideo.play();
}

function closeVideo() {
    videoContainer.classList.remove("show-video");
    myVideo.pause();
    myVideo.currentTime = 0; 
}

if (playButton) {
    playButton.onclick = openVideo;
}

if (!videoContainer || !myVideo) {
    console.error("Video elements not found.");
}


