gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false,
});

// Animate From
$('.htm').each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: '-100px top',
      end: 'bottom top',
      scrub: 0.8,
    },
  });
  tl.to(targetElement, {
    y: '110%',
    duration: 1,
  });
});
