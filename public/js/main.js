import Menu from "./Menu/Menu";
import Products from "./Products/Products";
import Slider from "./Slider/Slider";

const initSlider = () => {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
const allData = async () => {
  await Menu();
  await Slider();
  await Products();
  initSlider();
};
allData()
