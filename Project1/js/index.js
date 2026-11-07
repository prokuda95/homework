import BurgerMenu from "./burger.js";
import { productSlider } from "./product-slider.js";

try {
  new BurgerMenu({
    BURGER: "burger",
    BURGER_OPEN: "burger--open",
    HEADER_MENU: "burger__elements",
    HEADER_MENU_OPEN: "burger__elements--open",
    lABEL: {
      OPEN: "Открыть меню",
      CLOSE: "Закрыть меню",
    },
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
    MENU_LINK: "menu__link",
    BREAKPOINT: 992,
    MAIN: "main",
  });

  productSlider();
} catch (error) {
  console.error(error);
}
