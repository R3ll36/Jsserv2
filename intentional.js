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
        duration: .5,
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
