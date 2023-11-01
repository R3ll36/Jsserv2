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
    path: 'https://uploads-ssl.webflow.com/64339668e5bde96984e41146/64eef1a47046f4b5858347c0_SP-CE_LogoWebsite-v3.json', // Replace with your animation's URL
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

// Slider
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

//COOKIES
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

document.addEventListener('DOMContentLoaded', function (event) {
  var cookieConsent = document.getElementById('cookie-consent');
  var cookieConsentOk = document.getElementById('cookie-consent-ok');

  if (getCookie('cookieConsentShown')) {
    cookieConsent.style.display = 'none';
  } else {
    cookieConsent.style.display = 'flex';
  }

  cookieConsentOk.addEventListener('click', function () {
    setCookie('cookieConsentShown', true, 30);
    cookieConsent.style.display = 'none';
  });
});

//LENIS SCROLL
// Lenis for the normal-scroll section
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Lenis for the slow-scroll section (half the speed)
const lenisSlow = new Lenis({
  duration: 2.4, // Adjusted duration for slower scrolling (twice as slow)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Modify the easing function if needed
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 0.5, // Reduce the mouse multiplier for slower scrolling
  smoothTouch: false,
  touchMultiplier: 1, // Reduce the touch multiplier for slower scrolling
  infinite: false,
  // Add any other options specific to the slower-scroll section
});

// The raf function for smooth scrolling
function raf(time) {
  // Check if the section has the [slow-scroll] attribute
  const isSlowScroll = $('[data-lenis]').is('[slow-scroll]');

  if (isSlowScroll) {
    lenisSlow.raf(time); // Use the slower-scroll instance
  } else {
    lenis.raf(time); // Use the default instance
  }

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

//TEXT ANIMATION
window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    $('[js-line-animation]').each(function (index) {
      gsap.set($(this), { autoAlpha: 1 });
      let textEl = $(this);
      let textContent = $(this).text();
      let tl;

      function splitText() {
        new SplitType(textEl, { types: 'lines', tagName: 'span' });
        textEl.find('.line').each(function (index) {
          let lineContent = $(this).html();
          $(this).html('');
          $(this).append(
            `<span class="line-inner" style="display: block;">${lineContent}</span>`
          );
        });
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: textEl,
            start: 'top bottom',
            end: 'bottom bottom',
            toggleActions: 'none play none reset',
          },
        });
        tl.fromTo(
          textEl.find('.line-inner'),
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 0.5,
            stagger: { amount: 0.7, ease: 'power1.out' },
          }
        );
      }
      splitText();

      let windowWidth = window.innerWidth;
      window.addEventListener('resize', function () {
        if (windowWidth !== window.innerWidth) {
          windowWidth = window.innerWidth;
          tl.kill();
          textEl.text(textContent);
          splitText();
        }
      });
    });
  }, 700);
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
