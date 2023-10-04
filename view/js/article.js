let aNum = 0;
let aCnt = 3;
const videoIdx = 3;

let prevBtn = document.getElementById("aPrevBtn");
let nextBtn = document.getElementById("aNextBtn");

const articleDetail = (aNum) => {
  localStorage.setItem("anum", aNum);
  location.href = "./noticeDetail.html";
};

aNum = localStorage.getItem("anum");
let targetArticle = document.getElementById("article" + aNum);

let articles = document.querySelectorAll(".article");

const btnDisabled = () => {
  prevBtn.setAttribute("data-idx", aNum * 1 - 1);
  nextBtn.setAttribute("data-idx", aNum * 1 + 1);

  prevBtn.removeAttribute("disabled");
  nextBtn.removeAttribute("disabled");

  if (aCnt == 1) {
    prevBtn.setAttribute("disabled", true);
    nextBtn.setAttribute("disabled", true);
  } else if (aNum == 1) {
    prevBtn.setAttribute("disabled", true);
  } else if (aNum == aCnt) {
    nextBtn.setAttribute("disabled", true);
  }
};

if (!!articles) {
  articles.forEach((e) => {
    e.style.display = "none";
  });

  if (!!targetArticle) {
    targetArticle.style.display = "";

    btnDisabled();
  }
}

// 유튜브 영상 재생
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//플레이어 변수 설정
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    //width&height를 설정할 수 있으나, 따로 css영역으로 뺐다.
    videoId: "FMaKtde4T2w",
    events: {
      onReady: onPlayerReady, //로딩중에 이벤트 실행한다
      onStateChange: onPlayerStateChange, //플레이어 상태 변화 시 이벤트를 실행한다.
    },
  });
}

function onPlayerReady(event) {
  //로딩된 후에 실행될 동작을 작성한다(소리 크기,동영상 속도를 미리 지정하는 것등등...)
  event.target.playVideo(); //자동재생
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == 0) {
    videoReplay();
  }
}

const playVideo3 = (idx) => {
  if (idx == videoIdx) {
    player.playVideo();
  }
};
const videoReplay = () => {
  player.stopVideo();
  player.playVideo();
};
// 유튜브 영상 재생

const prevArticle = (e) => {
  player.pauseVideo();
  playVideo3(e.dataset.idx);

  e.setAttribute("data-idx", e.dataset.idx * 1 - 1);
  articles.forEach((e) => {
    e.style.display = "none";
  });
  localStorage.setItem("anum", aNum * 1 - 1);
  aNum = localStorage.getItem("anum");
  targetArticle = document.getElementById("article" + aNum);
  if (!!targetArticle) {
    targetArticle.style.display = "";
    btnDisabled();
  }

  topScroll();
};

const nextArticle = (e) => {
  player.pauseVideo();
  playVideo3(e.dataset.idx);

  e.setAttribute("data-idx", e.dataset.idx * 1 + 1);
  articles.forEach((e) => {
    e.style.display = "none";
  });
  localStorage.setItem("anum", aNum * 1 + 1);
  aNum = localStorage.getItem("anum");
  targetArticle = document.getElementById("article" + aNum);
  if (!!targetArticle) {
    targetArticle.style.display = "";
    btnDisabled();
  }

  topScroll();
};
