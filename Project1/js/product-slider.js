export const productSlider = () => {
  const roulette = document.querySelector(".get-catalog__roulette");
  if (!roulette) return;

  const slider = roulette.querySelector(".js-slider");
  if (!slider) return;

  if (slider.dataset.initialized === "true") return;
  slider.dataset.initialized = "true";

  const originalCards = Array.from(slider.children);
  slider.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    originalCards.forEach((card) => {
      slider.appendChild(card.cloneNode(true));
    });
  }
};
