gsap.registerPlugin(MotionPathPlugin);

gsap.to("#rect", {
  ease: "power3.out",
  duration: 5,
  yoyo: true,
  repeat: 12,
  repeatDelay: 3,
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5], //aligner
    autoRotate: true
  }
})