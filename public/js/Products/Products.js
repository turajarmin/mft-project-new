const Products = async () => {
  let products = "";
  try {
    let res = await axios.get("https://turajarmin.github.io/json-server-2/db.json");
    products = res.data.products.map((item) => {
      return ` <div class="product p-[10px] box-border w-[45%]">
              <h4 class="text-center text-[24px] font-bold">${item.title}</h4>
              <h4 class="text-center text-[24px] font-bold">${item.brand}</h4>
              <p class="text-center text-[14px] line-clamp-2">${item.description}</p>
              <div class="images">
              ${item.images.map((image)=>{
                return `<img src=${image} class="inline-block w-[300px] object-cover" >`
              }).join("")}
              </div>
          </div>`;
    });
    document.querySelector(".products").insertAdjacentHTML("beforeend",products.join(''))
    
  } catch (error) {
    console.log(error.message);
  }
};
export default Products;
