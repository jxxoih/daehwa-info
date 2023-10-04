let imgLoc = "http://b2b.joynjoin.kr:8090";

window.onload = function () {
  let header = document.querySelector(".headerContainer");
  let footer = document.querySelector(".footerContainer");

  let target = document.querySelector(".header");
  let menu = document.querySelector(".headerContainer1");
  let subMenu = document.querySelector(".headerContainer2");
  let dis1 = document.querySelector(".headerLogoImg");
  let dis2 = document.querySelector(".headerLangSelector");

  if (!!target) {
    target.addEventListener("mouseover", () => {
      setTimeout(() => {
        subMenu.classList.remove("disnone");
      }, 0);
      subMenu.classList.add("vOn");
      subMenu.classList.remove("vOff");
    });

    target.addEventListener("mouseleave", () => {
      setTimeout(() => {
        subMenu.classList.add("disnone");
      }, 280);
      subMenu.classList.remove("vOn");
      subMenu.classList.add("vOff");
    });

    dis1.addEventListener("mouseenter", () => {
      setTimeout(() => {
        subMenu.classList.add("disnone");
      }, 280);
      subMenu.classList.remove("vOn");
      subMenu.classList.add("vOff");
    });
    dis2.addEventListener("mouseenter", () => {
      setTimeout(() => {
        subMenu.classList.add("disnone");
      }, 280);
      subMenu.classList.remove("vOn");
      subMenu.classList.add("vOff");
    });
  }

  if (!!document.querySelector(".productSlider")) {
    setMainProduct();
    setMainProduct_m();
  }
};

const moveToUrl = (url) => {
  location.href = url;
};

const shopLocation = (e) => {
  switch (e.value) {
    case "1":
      location.href = "http://b2b.joynjoin.kr:8090";
      break;
    case "2":
      location.href = "http://b2c.joynjoin.kr";
      break;
    default:
      break;
  }
};

const shopLocation_m = (e) => {
  e = e * 1;
  switch (e) {
    case 1:
      location.href = "http://b2b.joynjoin.kr:8090";
      break;
    case 2:
      location.href = "http://b2c.joynjoin.kr";
      break;
    default:
      break;
  }
};

const openMenu = () => {
  let submenu_m = document.querySelector(".headerContainer2_m");
  if (!!submenu_m) {
    submenu_m.classList.toggle("vMOn");
    submenu_m.classList.toggle("vMOff");
  }
};

const closeMenu = () => {
  let submenu_m = document.querySelector(".headerContainer2_m");
  if (!!submenu_m) {
    submenu_m.classList.toggle("vMOn");
    submenu_m.classList.toggle("vMOff");
  }
};

const selectBox = () => {
  let target = document.querySelector(".subMenuSelector");
  target.classList.toggle("_toggle");

  document.querySelector(".upImg").classList.toggle("disnone");
  document.querySelector(".subMenuOption_m").classList.toggle("disnone");
};

const clickQuestion = () => {
  location.href = "question.html";
};

const topScroll = () => {
  scrollTo(document.documentElement, 0, 500);
};

function scrollTo(el, to, duration) {
  let start = el.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20;

  let animateScroll = function () {
    currentTime += increment;
    let val = Math.easeInOutQuad(currentTime, start, change, duration);
    el.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

window.addEventListener("scroll", function () {
  let offsetY = window.pageYOffset;
  let topBtn = document.querySelector(".topBtn");

  if (offsetY > 20) {
    topBtn.classList.remove("disnone");
  } else {
    topBtn.classList.add("disnone");
  }
});

let mainProductObj = [
  {
    img: "product1.png",
    name: "칼라피스",
  },
  {
    img: "product2.png",
    name: "육각머리 직결피스",
  },
  {
    img: "product3.png",
    name: "알루미늄리벳",
  },
  {
    img: "product4.png",
    name: "와샤머리(W)",
  },
];

const setMainProduct = () => {
  let innerTarget = document.querySelector(".mainProductSlider");
  let inner = "";

  for (let i = 0; i < mainProductObj.length; i++) {
    let item = mainProductObj[i];

    inner += `
            <div class="swiper-slide productList">
                <div class="product">
                    <div>
                        <img src="../img/${item.img}" alt="상품이미지">
                    </div>
                    <div class="productNm">
                        <span>${item.name}</span>
                    </div>
                </div>
            </div>
        `;
  }

  innerTarget.innerHTML = inner;
};

const setMainProduct_m = () => {
  let innerTarget = document.querySelector(".productContainer_m");
  let inner = "";

  for (let i = 0; i < mainProductObj.length; i++) {
    let item = mainProductObj[i];

    inner += `
            <swiper-slide class="productSlide_m">
                <div>
                    <img src="../img/${item.img}" alt="상품이미지">
                </div>
                <div class="productNm">
                    <span>${item.name}</span>
                </div>
            </swiper-slide>
        `;
  }

  innerTarget.innerHTML = inner;
};
