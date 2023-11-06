//<script src="http://localhost:3000/space.js"></script>
//<script src="https://cdn.jsdelivr.net/gh/R3ll36/JSServ@main/space.js"></script>

// Function to load and play the Lottie animation
function playLottieAnimation() {
  // Load the Lottie animation
  const animationContainer = document.getElementById('lottie-container');
  const animationData = {
    container: animationContainer,
    renderer: 'svg',
    loop: false, // Set to false to play the animation once
    autoplay: false, // Set autoplay to false initially
    path: 'https://uploads-ssl.webflow.com/64339668e5bde96984e41146/65427579077e379cbd86b7ce_SP-CE_LogoWebsite-v4.json', // Replace with your animation's URL
  };
  const anim = lottie.loadAnimation(animationData);

  anim.addEventListener('DOMLoaded', () => {
    // Set the initial frame to start from 20%
    anim.goToAndStop(anim.totalFrames * 0.3, true);

    // Function to replay from 20% when the animation completes
    function replayFrom20Percent() {
      anim.goToAndPlay(anim.totalFrames * 0.7); // Go to 20% and play
    }

    // Start the animation
    anim.play();

    // Add an event listener for when the animation completes
    anim.addEventListener('complete', () => {
      replayFrom20Percent(); // Replay from 20% when complete
    });
  });
}

// Call the function to start the animation
playLottieAnimation();

// Splide Slider
function slider1() {
  let splides = $('.slider1');

  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Your existing options...
      perPage: 1,
      perMove: 1,
      focus: 0,
      type: 'loop',
      gap: '1rem',
      arrows: false,
      pagination: false,
      speed: 600,
      dragAngleThreshold: 30,
      autoWidth: false,
      rewind: false,
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false,
      breakpoints: {
        991: {
          perPage: 1,
        },
        767: {
          perPage: 1,
        },
        479: {
          perPage: 1,
        },
      },
      autoplay: true, // Enable autoplay with default settings
      // If you want custom autoplay settings, use an object like this:
      autoplay: {
        delay: 3000, // Time between each slide transition in milliseconds
        disableOnInteraction: true, // Set to true to stop autoplay on user interaction (e.g., when the user manually changes slides)
      },
    }).mount();
  }
}

slider1();

//LENIS SCROLL
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Event listeners to control Lenis behavior

$('[data-lenis-start]').on('click', function () {
  lenis.start();
});

$('[data-lenis-stop]').on('click', function () {
  lenis.stop();
});

$('[data-lenis-toggle]').on('click', function () {
  $(this).toggleClass('stop-scroll');
  if ($(this).hasClass('stop-scroll')) {
    lenis.stop();
  } else {
    lenis.start();
  }
});

// The raf function for smooth scrolling
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



// SWIPER SLIDER

$(document).ready(function () {
  // Function to check if the device is mobile
  function isMobileDevice() {
    return window.matchMedia('(max-width: 500px)').matches;
  }

  var slidesToShow = isMobileDevice() ? 1 : 'auto'; // Set '1' for mobile, 'auto' otherwise

  var slider_wrapper = new Swiper('.slider-wrapper', {
    wrapperClass: 'slider-list',
    slideClass: 'slider-item',
    navigation: {
      nextEl: '.next-slide',
      prevEl: '.prev-slide',
    },
    pagination: {
      type: 'bullets',
      el: '.pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 700,
    slidesPerView: slidesToShow, // Use the slidesToShow variable
    loop: true,

    on: {
      init: function () {
        var swiper_pagination_bulletwe_style = document.createElement('style');
        swiper_pagination_bulletwe_style.type = 'text/css';
        swiper_pagination_bulletwe_style.innerHTML = ` .swiper-pagination-bullet{   background:#fff;
    margin-right:8px;
    transition:.2s;
   } `;
        document
          .getElementsByTagName('head')[0]
          .appendChild(swiper_pagination_bulletwe_style);
        var swiper_pagination_bullethoverwe_style =
          document.createElement('style');
        swiper_pagination_bullethoverwe_style.type = 'text/css';
        swiper_pagination_bullethoverwe_style.innerHTML = ` .swiper-pagination-bullet:hover{   opacity:.7;
   } `;
        document
          .getElementsByTagName('head')[0]
          .appendChild(swiper_pagination_bullethoverwe_style);
        var swiper_pagination_bullet_activehoverwe_style =
          document.createElement('style');
        swiper_pagination_bullet_activehoverwe_style.type = 'text/css';
        swiper_pagination_bullet_activehoverwe_style.innerHTML = ` .swiper-pagination-bullet-active:hover{   opacity:1;
   } `;
        document
          .getElementsByTagName('head')[0]
          .appendChild(swiper_pagination_bullet_activehoverwe_style);
        var swiper_pagination_fractionwe_style =
          document.createElement('style');
        swiper_pagination_fractionwe_style.type = 'text/css';
        swiper_pagination_fractionwe_style.innerHTML = ` .swiper-pagination-fraction{   font-size:16px;
   } `;
        document
          .getElementsByTagName('head')[0]
          .appendChild(swiper_pagination_fractionwe_style);
        var slide_imagewe_style = document.createElement('style');
        slide_imagewe_style.type = 'text/css';
        slide_imagewe_style.innerHTML = ` .slide-image{   transition:transform .2s;
   } `;
        document
          .getElementsByTagName('head')[0]
          .appendChild(slide_imagewe_style);
        var slide_contentwe_style = document.createElement('style');
        slide_contentwe_style.type = 'text/css';
        slide_contentwe_style.innerHTML = ` .slide-content{   transition:opacity .2s;
   } `;
        document
          .getElementsByTagName('head')[0]
          .appendChild(slide_contentwe_style);
        $('.slider-item').on('mouseover', function () {
          $(this).find('.slide-image').css({
            transform: 'scale(1)',
          });
          $(this).find('.slide-content').css({
            opacity: '.8',
          });
        });
        $('.slider-item').on('mouseout', function () {
          $(this).find('.slide-image').css({
            transform: 'scale(1)',
          });
          $(this).find('.slide-content').css({
            opacity: '1',
          });
        });
      },
    },
  });
});

//VIDEO
document.addEventListener('DOMContentLoaded', function () {
  const playPauseButtons = document.querySelectorAll('.play-pause');
  let currentPlayingVideo = null;

  function toggleVideoPlayback(video, button) {
    if (video.paused) {
      if (currentPlayingVideo && currentPlayingVideo !== video) {
        currentPlayingVideo.pause(); // Pause the currently playing video if one exists
      }
      video.play();
      currentPlayingVideo = video; // Set the currentPlayingVideo to the clicked video
    } else {
      video.pause();
    }
  }

  playPauseButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const videoId = this.getAttribute('data-video');
      const video = document.querySelector(`video[data-video="${videoId}"]`);
      if (video) {
        toggleVideoPlayback(video, button);
      } else {
        console.log(`No video found with data-video="${videoId}"`);
      }
    });
  });

  // Progress bar functionality
  playPauseButtons.forEach(function (button) {
    const videoId = button.getAttribute('data-video');
    const video = document.querySelector(`video[data-video="${videoId}"]`);
    const progressContainer = button.parentElement.querySelector(
      '.progress-container'
    );
    const progressBar = progressContainer.querySelector('.progress-bar');

    if (video) {
      video.addEventListener('timeupdate', function () {
        const progress = (video.currentTime / video.duration) * 100 + '%';
        progressBar.style.width = progress;
      });

      // Add a click event listener to the progress bar
      progressContainer.addEventListener('click', function (event) {
        const progressBarWidth = progressContainer.clientWidth;
        const clickX =
          event.clientX - progressContainer.getBoundingClientRect().left;
        const newTime = (clickX / progressBarWidth) * video.duration;
        video.currentTime = newTime;
      });
    }
  });

  // NO SOUND VIDEO AUTOPLAY
  const videos = document.querySelectorAll('[wp-embed="video"]');

  function handleVideoVisibility(video, isVisible) {
    if (isVisible && video.paused) {
      video.play();
    } else if (!isVisible && !video.paused) {
      video.pause();
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        const isVisible = entry.isIntersecting;
        handleVideoVisibility(video, isVisible);
      });
    },
    {
      threshold: 0.2,
    }
  );

  videos.forEach((video) => {
    if (video.tagName === 'VIDEO') {
      video.pause();
      observer.observe(video);
    }
  });
});


