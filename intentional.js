gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false,
});

$(document).ready(function () {
  $('.html').each(function (index) {
    let targetElement = $(this);

    gsap.fromTo(
      targetElement,
      {
        y: '110%',
        opacity: 0,
      },
      {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        delay: index * 0.5, // Optional: Add a delay to stagger the animations
        ease: 'power2.out', // Optional: Use an easing function for smoother animation
      }
    );
  });
});

$('.htm-logo').each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'bottom bottom',
      end: 'bottom bottom',
    },
  });

  tl.from(targetElement, {
    y: '110%',
    opacity: 0, // Add opacity property to fade in
    duration: 1,
    ease: 'power2.out',
  });
});

$('.htm').each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: 'top bottom',
      end: 'bottom bottom',
    },
  });

  tl.from(targetElement, {
    y: '110%',
    opacity: 0, // Add opacity property to fade in
    duration: 0.5,
    ease: 'power2.out',
  });
});

//TEXT2
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
            toggleActions: 'none play none none',
          },
        });
        tl.fromTo(
          textEl.find('.line-inner'),
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: .5,
            stagger: { amount: .4, ease: 'power1.out' },
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
  }, 300);
});


function initializeTruncateText() {
  var showChar = 140;
  var ellipsestext = '...';

  $('.truncate').each(function () {
    var content = $(this).html();
    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content;
      var html =
        '<div class="truncate-text" style="display: block">' +
        c +
        '<span class="moreellipses">' +
        ellipsestext +
        '&nbsp;&nbsp;<a href="" class="moreless more">Read more</a></span></span></div><div class="truncate-text" style="display:none; height: 30vw;">' +
        h +
        '<a href="" class="moreless less">Less</a></span></div>';

      $(this).html(html);
    }
  });

  $('.moreless').click(function () {
    var thisEl = $(this);
    var cT = thisEl.closest('.truncate-text');
    var tX = '.truncate-text';

    if (thisEl.hasClass('less')) {
      cT.prev(tX).toggle();
      cT.slideToggle();
    } else {
      cT.toggle();
      cT.next(tX).fadeToggle();
    }
    return false;
  });
}

$(document).ready(function () {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth > 991) {
    initializeTruncateText();
  }
});

