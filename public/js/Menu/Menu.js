const Menu = async () => {
  let menu = "";
  try {
    let res = await axios.get("https://turajarmin.github.io/json-server-2/db.json");
    menu = res.data.menu.map((item) => {
      if (item.dropdown.length > 0) {
        return `<div class="w-fit h-[inherit] relative group"><a href="#" class="block leading-[40px] px-[10px] text-white/[0.9] capitalize text-[12px] hover:bg-[deeppink] transition-all duration-150 ease-linear font-bold">${
          item.name
        }</a>
        <div class="w-[300px] absolute left-0 hidden group-hover:block ">
     ${item.dropdown
       .map((menu) => {
         return `<div><a class="block leading-[40px] px-[10px] text-white/[0.9] capitalize text-[12px] bg-[#0b0b0b] text-center font-bold hover:bg-[#3b3b3b]" href=${menu.link}>${menu.name}</a></div>`;
       })
       .join("")}   
        </div>
        </div>`;
      } else {
        return `<div class="w-fit h-[inherit]"><a href=${item.link} class="block leading-[40px] px-[10px] text-white/[0.9] capitalize text-[12px] hover:bg-[deeppink] transition-all duration-150 ease-linear font-bold">${item.name}</a></div>`;
      }
    });
    document.querySelector(".menu nav").insertAdjacentHTML("beforeend", menu);
  } catch (error) {
    console.log(error.message);
  }
};
export default Menu;
