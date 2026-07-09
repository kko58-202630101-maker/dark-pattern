// dark.js

// ==========================
// 타이머
// ==========================

let seconds = 0;

const timer = document.getElementById("timer");

setInterval(function(){

    seconds++;

    const min = String(Math.floor(seconds/60)).padStart(2,"0");
    const sec = String(seconds%60).padStart(2,"0");

    timer.textContent = min + ":" + sec;

},1000);


// ==========================
// 클릭 수
// ==========================

let clickCount = 0;

const clickText = document.getElementById("clickCount");

document.addEventListener("click",function(){

    clickCount++;

    clickText.textContent = "클릭수 : " + clickCount;

});


// ==========================
// 페이지 방문 기록
// ==========================

let historyList =
JSON.parse(localStorage.getItem("history")) || [];

historyList.push("홈");

localStorage.setItem(
    "history",
    JSON.stringify(historyList)
);


// ==========================
// 시작 시간 저장
// ==========================

if(!localStorage.getItem("startTime")){

    localStorage.setItem(
        "startTime",
        Date.now()
    );

}


// ==========================
// 장바구니 버튼
// ==========================

const cartButtons =
document.querySelectorAll(".card button");

cartButtons.forEach(function(btn){

    btn.addEventListener("click",function(){

        alert("장바구니에 담았습니다.");

    });

});


// ==========================
// 검색
// ==========================

const searchButton =
document.querySelector(".searchBox button");

searchButton.onclick=function(){

    alert("검색 기능은 준비 중입니다.");

}


// ==========================
// 쿠폰 버튼
// ==========================

const couponButton =
document.querySelector(".hero button");

couponButton.onclick=function(){

    alert("🎉 10,000원 쿠폰이 지급되었습니다!");

}


// ==========================
// 메뉴 클릭
// ==========================

document.querySelectorAll("nav a").forEach(function(menu){

    menu.addEventListener("click",function(){

        localStorage.setItem(
            "lastMenu",
            menu.innerText
        );

    });

});


// ==========================
// 종료 전 저장
// ==========================

window.addEventListener("beforeunload",function(){

    localStorage.setItem(
        "clickCount",
        clickCount
    );

    localStorage.setItem(
        "playTime",
        seconds
    );

});
