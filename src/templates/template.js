document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", (event) => {
    const { key: name } = event;
    if (name === "ArrowDown" || name == "ArrowRight" || name == "j") {
      event.preventDefault();
      scrollToNextSection();
    } else if (name === "ArrowUp" || name == "ArrowLeft" || name == "k") {
      event.preventDefault();
      scrollToPreviousSection();
    } else if (name == "g") {
      event.preventDefault();
      const firstChild = document.querySelector(".slider").firstElementChild;
      const currentSection = document.querySelector(".active-section");
      changeSection(currentSection, firstChild);
    } else if (name == "G") {
      const lastChild = document.querySelector(".slider").lastElementChild;
      const currentSection = document.querySelector(".active-section");
      changeSection(currentSection, lastChild);
    } else if (name == "F11") {
      // this doesn't work as expected, because is not trigger when event is out
      refreshViewport();
    }
  });

  document.addEventListener("fullscreenchange", () => {
    refreshViewport();
  });

  const refreshViewport = () => {
    const currentSection = document.querySelector(".active-section");
    window.scrollTo({
      top: currentSection.offsetTop,
      behavior: "instant",
    });
  };

  // change the current section to another
  const changeSection = (prevSection, nextSection) => {
    prevSection.classList.remove("active-section");
    nextSection.classList.add("active-section");
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth",
    });
  };

  // scroll to the next section
  const scrollToNextSection = () => {
    const currentSection = document.querySelector(".active-section");
    const nextSection = currentSection.nextElementSibling;

    if (nextSection !== null) {
      changeSection(currentSection, nextSection);
    }
  };

  // scroll to the previous section
  const scrollToPreviousSection = () => {
    const currentSection = document.querySelector(".active-section");
    const previousSection = currentSection.previousElementSibling;

    if (previousSection !== null) {
      changeSection(currentSection, previousSection);
    }
  };
});
