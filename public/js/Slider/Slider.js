const Slider = async () => {
  let sliderImage = "";
  try {
    let res = await axios.get("https://turajarmin.github.io/json-server-2/db.json");
    console.log(res);
    
    sliderImage = res.data.slider.map((item) => {
      return `<div class="swiper-slide"><img src=${item.image} alt='${item.alt}' /></div>`;
    });
    document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend",sliderImage.join(""))
    
  } catch (error) {
    console.log(error.message);
  }
};
export default Slider;
