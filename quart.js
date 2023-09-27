//<script src="http://localhost:3000/quart.js"></script>
//<script src="https://cdn.jsdelivr.net/gh/R3ll36/JSServ@main/quart.js"></script>

$('.nav_wrap').each(function () {
  let hamburgerEl = $(this).find('.nav_hamburger_wrap');
  let navLineEl = $(this).find('.nav_hamburger_line');
  let menuContainEl = $(this).find('.menu_contain');
  let flipItemEl = $(this).find('.nav_hamburger_base');
  let menuWrapEl = $(this).find('.menu_wrap');
  let menuBaseEl = $(this).find('.menu_base');
  let menuLinkEl = $(this).find('.menu_link.is--dark');

  let flipDuration = 0.6;

  function flip(forwards) {
    let state = Flip.getState(flipItemEl);
    if (forwards) {
      flipItemEl.appendTo(menuContainEl);
    } else {
      flipItemEl.appendTo(hamburgerEl);
    }
    Flip.from(state, { duration: flipDuration });
  }

  let tl = gsap.timeline({ paused: true });
  tl.set(menuWrapEl, { display: 'flex' });
  tl.from(menuBaseEl, {
    opacity: 0,
    duration: flipDuration,
    ease: 'none',
    onStart: () => {
      flip(true);
    },
  });
  tl.to(navLineEl.eq(0), { y: 4, rotate: 45, duration: flipDuration }, '<');
  tl.to(navLineEl.eq(1), { y: -4, rotate: -45, duration: flipDuration }, '<');
  tl.from(menuLinkEl, {
    opacity: 0,
    yPercent: 50,
    duration: 0.2,
    stagger: { amount: 0.2 },
    onReverseComplete: () => {
      flip(false);
    },
  });

  function openMenu(open) {
    if (!tl.isActive()) {
      if (open) {
        tl.play();
        hamburgerEl.addClass('nav-open');
      } else {
        tl.reverse();
        hamburgerEl.removeClass('nav-open');
      }
    }
  }

  hamburgerEl.on('click', function () {
    if ($(this).hasClass('nav-open')) {
      openMenu(false);
    } else {
      openMenu(true);
    }
  });

  menuBaseEl.on('mouseenter', function () {
    openMenu(false);
  });
  menuBaseEl.on('click', function () {
    openMenu(false);
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      openMenu(false);
    }
  });
});

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


let splitType = new SplitType("[hoverstagger='text']", {
  types: "words,chars",
  tagName: "span"
});

$("[hoverstagger='link']").each(function (index) {
  let text1 = $(this).find("[hoverstagger='text']").eq(0);
  let text2 = $(this).find("[hoverstagger='text']").eq(1);

  let tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.5,
      ease: "power2.out"
    }
  });
  tl.fromTo(text1.find(".char:nth-child(odd)"), { yPercent: 100 }, { yPercent: 0 });
  tl.fromTo(text2.find(".char:nth-child(odd)"), { yPercent: 0 }, { yPercent: -100 }, 0);
  tl.fromTo(text1.find(".char:nth-child(even)"), { yPercent: 0 }, { yPercent: 100 }, 0);
  tl.fromTo(text2.find(".char:nth-child(even)"), { yPercent: -100 }, { yPercent: 0 }, 0);

  $(this).on("mouseenter", function () {
    tl.restart();
  });
});



let typeSplit;
// Split the text up
function runSplit() {
  typeSplit = new SplitType(".split-lines", {
    types: "lines, words"
  });
  $(".line").append("<div class='line-mask'></div>");
  createAnimation();
}
runSplit();
// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    runSplit();
  }
});

gsap.registerPlugin(ScrollTrigger);

function createAnimation() {
  $(".line").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        // trigger element - viewport
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    });
    tl.to($(this).find(".line-mask"), {
      width: "0%",
      duration: 1
    });
  });
}

// Make sure to include the ScrollTrigger plugin before using it
gsap.registerPlugin(ScrollTrigger);

// Use the ScrollTrigger to trigger animations when elements come into view
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
        duration: 0.3,
        delay: index * 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: targetElement, // Element to trigger the animation
          start: 'top 110%', // Start the animation when 80% of the element is in view
          end: 'center center', // End the animation when the element is at the center of the viewport
          toggleActions: 'play none none none', // Play the animation when scrolling into view
        },
      }
    );
  });
});
