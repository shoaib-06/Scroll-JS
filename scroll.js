document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.images-wrapper',
      start: "100 20%",
      end: "+=700",
      markers: true,
      scrub: true,
      pin: true,
      // pinSpacing: false,
      pinReparent: true
    },
  })

  tl.to('.image-container-5', {
    y: 245,
    height: 0,
    duration: 1,
  })

  tl.to('.image-container-4', {
    y: 245,
    height: 0,
    duration: 1,
  })

  tl.to('.image-container-3', {
    y: 245,
    height: 0,
    duration: 1,
  })

  tl.to('.image-container-2', {
    y: 245,
    height: 0,
    duration: 1,
  })

})
