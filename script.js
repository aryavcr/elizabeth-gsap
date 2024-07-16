gsap.from(".nav", {
  y: -100,
  duration: 0.5,
  delay: 0.7,
  opacity: 0,
  stagger: 0.1,
});
//gsap.from(".page2 .line", {
//    duration:2,
//    delay:0.7,
// opacity:0,
// stagger:0.6,
//each element appears one by one
// scrollTrigger:{
//     trigger:".page2 .line",
//which element to trigger for scroll based animation
// markers:true,
// start:"top 60%",
//position from which animation gets triggered
// scrub:true,
//% of animation completion wrt to scroll%
// }
// })
gsap.to(".page2 img", {
  width: "60%",
  scrollTrigger: {
    trigger: ".page2",
    scrub: 2,
    pin: true,
  },
});
gsap.from(".page2 .hi", {
  y: -100,
  opacity: 0,
  stagger: 0.1,
  delay: 3,
  scrollTrigger: {
    trigger: ".hi",
    scrub: 2,
    pin: true,
  },
});
gsap.from(".page3 p", {
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".page3",
    scrub: 3,
    pin: true,
  },
});
