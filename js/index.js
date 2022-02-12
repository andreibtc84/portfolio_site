console.log("Connected!");

// Navigation start
// Transparency on scroll

const navbar = document.querySelector(".navbar");
const navTransparency = () => {
  scrollY === 0
    ? (navbar.style.backgroundColor = "#424b5401")
    : (navbar.style.backgroundColor = "#424b54ff");
};

document.addEventListener("scroll", navTransparency);

// Responsive burger menu

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");
  const navItems = document.querySelectorAll(".nav-item");

  burger.addEventListener("click", () => {
    //Toggles Navigation
    navList.classList.toggle("nav-active");

    //Animates Links
    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navItemFade 0.5s ease forwards ${
          index / 7 + 0
        }s`;
      }
    });

    //Burger animation
    burger.classList.toggle("burgerToX");
  });
};
navSlide();

// Navigation end
