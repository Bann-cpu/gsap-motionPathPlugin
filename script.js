gsap.registerPlugin(MotionPathPlugin);

gsap.to("#rect", {
  ease: "power3.out",
  duration: 5,
  yoyo: true,
  repeat: 12,
  repeatDelay: 3,
  motionPath: {
    start: 0.25,
    end: 0.80,
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5], //aligner
    autoRotate: true
  }
})

gsap.to(".depart-path", {
  ease: "power1.out",
  repeat: 5,
  repeatDelay: 2,
  yoyo: true,
  duration: 5,
  motionPath: {
    path: "#tr-path",
    align: "#tr-path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5], //aligner
  }
})