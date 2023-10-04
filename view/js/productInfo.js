let cateList = [];

let data;
let responseUrl = "http://localhost:8090/shop/search/getPrdtList";
if (window.location.href.indexOf("joynjoin") > -1) {
  responseUrl = imgLoc + "/shop/search/getPrdtList";
}

let productList = [];

const categItem = (categ) => {
  prodArr = productList[categ.dataset.type];
  let prodCate = document.querySelectorAll(".productCate");
  prodCate.forEach((prodC) => {
    prodC.classList.remove("on");
  });
  categ.classList.add("on");

  setCategProductItems(prodArr);
};

const setProduct = () => {
  let cnt = 5;

  let a = parseInt(cateList.length / cnt);
  let b = cateList.length % cnt > 0 ? 1 : 0;
  let c = a + b;
  let d = c * cnt;
  let inner = "";
  for (let i = 0; i < d; i++) {
    if (i == 0) {
      inner += `<div class="productCate on" data-type="${i}" onclick="categItem(this);">${cateList[i]}</div>`;
    } else if (i < cateList.length) {
      inner += `<div class="productCate" data-type="${i}" onclick="categItem(this);">${cateList[i]}</div>`;
    } else {
      inner += `<div class="productCateEmpty productCate"></div>`;
    }
  }

  let productCate = document.querySelector(".productCategory");
  productCate.innerHTML = inner;
};

const setProductM = () => {
  let cnt = 3;

  let a = parseInt(cateList.length / cnt);
  let b = cateList.length % cnt > 0 ? 1 : 0;
  let c = a + b;
  let d = c * cnt;
  let inner = "";
  for (let i = 0; i < d; i++) {
    if (i == 0) {
      inner += `<div class="productCate on" data-type="${i}" onclick="categItem(this);">${cateList[i]}</div>`;
    } else if (i < cateList.length) {
      inner += `<div class="productCate" data-type="${i}" onclick="categItem(this);">${cateList[i]}</div>`;
    } else {
      inner += `<div class="productCateEmpty productCate"></div>`;
    }
  }

  let productCate = document.querySelector(".productCategory_m");
  productCate.innerHTML = inner;
};

const setProductItems = () => {
  let inner = "";
  let prodCnt = productList.length;

  // for (let i = 0; i < prodCnt; i++) {
  productList[0].forEach((prod) => {
    console.log(prod);
    inner += `<div class="productItem">
      <div class="productImg">
        <img src="${imgLoc}/images/${prod.img}" alt="상품이미지" onerror="this.src='../img/sample03.jpg'" />
      </div>
      <div class="productInfo">
        <p>
          <span class="productNm">${prod.name}</span>
        </p>
      </div>
    </div>`;
  });
  // }

  let innerTarget = document.querySelector(".productList");

  if (!!innerTarget) {
    innerTarget.innerHTML = inner;
  }
};

const setCategProductItems = (prodArr) => {
  let inner = "";

  prodArr.forEach((prod) => {
    inner += `<div class="productItem">
      <div class="productImg">
        <img src="${imgLoc}/images/${prod.img}" alt="상품이미지" onerror="this.src='../img/sample03.jpg'" />
      </div>
      <div class="productInfo">
        <p>
          <span class="productNm">${prod.name}</span>
        </p>
      </div>
    </div>`;
  });

  let innerTarget = document.querySelector(".productList");

  if (!!innerTarget) {
    innerTarget.innerHTML = inner;
  }
};

const getPrdtList = () => {
  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == this.DONE) {
      data = JSON.parse(xhr.responseText);
      data = data.categList;
      data.categ.forEach((item) => {
        cateList.push(item.CATEG_NM);

        let result = data.categList.filter(
          (res) => res.P_CATEG_CD == item.CATEG_CD
        );
        productList.push(result);
      });

      if (!!document.querySelector(".productCategory")) {
        setProduct();
        setProductM();
        setProductItems();
      }
    }
  };

  xhr.open("POST", responseUrl, true);
  xhr.send();
};
getPrdtList();
