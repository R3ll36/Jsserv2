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

document.addEventListener('DOMContentLoaded', function () {
  const playPauseButtons = document.querySelectorAll('.play-pause');

  function toggleVideoPlayback(video, button) {
    if (video.paused) {
      video.play();
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

// document.addEventListener('DOMContentLoaded', function () {
//   var videos = document.querySelectorAll('video');
//   var playButtons = document.querySelectorAll('.play_pause');

//   // Function to toggle audio on/off for a specific video
//   function toggleAudio(video, button) {
//     if (video.readyState === 4) {
//       // Check if the video is fully loaded and ready to play
//       if (video.volume === 0) {
//         video.volume = 1;
//         button.textContent = 'Pause';
//       } else {
//         video.volume = 0;
//         button.textContent = 'Play';
//       }
//     } else {
//       console.log('Video is not fully loaded.');
//     }
//   }

//   // Event listener for play buttons
//   playButtons.forEach(function (button, index) {
//     button.addEventListener('click', function () {
//       toggleAudio(videos[index], button);
//     });
//   });
// });
