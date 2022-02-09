console.log("Connected!");

const navbar = document.querySelector(".navbar");
const navTransparency = () => {
  scrollY === 0
    ? (navbar.style.backgroundColor = "#424b5401")
    : (navbar.style.backgroundColor = "#424b54ff");
};

document.addEventListener("scroll", navTransparency);
