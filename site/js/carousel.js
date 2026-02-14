(function () {
  function setup(carousel) {
    const track = carousel.querySelector(".c-carousel__track");
    const slides = Array.from(carousel.querySelectorAll(".c-carousel__slide"));
    const left = carousel.querySelector(".c-carousel__btn--left");
    const right = carousel.querySelector(".c-carousel__btn--right");
    const viewport = carousel.querySelector(".c-carousel__viewport");

    if (!track || slides.length === 0 || !left || !right) return;

    function step() {
      if (slides.length > 1) return slides[1].offsetLeft - slides[0].offsetLeft;
      return slides[0].getBoundingClientRect().width;
    }

    function updateButtons() {
      const max = track.scrollWidth - track.clientWidth;
      left.disabled = track.scrollLeft <= 2;
      right.disabled = track.scrollLeft >= max - 2;
    }

    left.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    right.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));

    // keyboard support (viewport has tabindex="0")
    viewport?.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") left.click();
      if (e.key === "ArrowRight") right.click();
    });

    track.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    updateButtons();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".c-carousel").forEach(setup);
  });
})();
