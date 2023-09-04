////////////////////////////////////////////////
// Sticky navigation
////////////////////////////////////////////////

const header = document.querySelector(".header");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.nav.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.nav.classList.remove("sticky");
    }
  },

  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(header);

///////////////////////////////////////////////////
// Revealing Content
/////////////////////////////////////////////////

const allSections = document.querySelectorAll("section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  entry.target.classList.remove("section--hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
