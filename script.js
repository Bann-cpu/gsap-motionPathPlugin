let words = gsap.utils.toArray(h1),
    tl = gsap.timeline({delay: 0.5}),
    timePerCharacter = 0.2;

words.forEach(el => {
  tl.from(el, {text: "", duration: el.innerHTML.length * timePerCharacter, ease: "none"});
});