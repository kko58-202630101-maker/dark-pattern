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
// 클릭수
// ==========================

let clickCount = 0;

const clickText = document.getElementById("clickCount");

document.addEventListener("click",function(){

    clickCount++;

    clickText.textContent="클릭수 : "+clickCount;

});


// ==========================
// 시작시간 저장
// ==========================

if(!localStorage.getItem("goodStartTime")){

    localStorage.setItem(
        "goodStartTime",
        Date.now()
    );

}


// ==========================
// 방문기록
// ==========================

let historyList=
JSON.parse(localStorage.getItem("goodHistory"))||[];

historyList.push(document.title);

localStorage.setItem(
    "goodHistory",
    JSON.stringify(historyList)
);


// ==========================
// 장바구니
// ==========================

document.querySelectorAll(".card button").forEach(function(btn){

    btn.onclick=function(){

        alert("장바구니에 담았습니다.");

    }

});


// ==========================
// 검색
// ==========================

document.querySelector(".searchBox button").onclick=function(){

    alert("검색 기능입니다.");

};


// ==========================
// 추천상품
// ==========================

document.querySelector(".hero button").onclick=function(){

    alert("추천 상품을 확인하세요!");

};


// ==========================
// 메뉴 저장
// ==========================

document.querySelectorAll("nav a").forEach(function(menu){

    menu.onclick=function(){

        localStorage.setItem(
            "goodLastMenu",
            menu.innerText
        );

    }

});


// ==========================
// 종료 시 저장
// ==========================

window.addEventListener("beforeunload",function(){

    localStorage.setItem(
        "goodPlayTime",
        seconds
    );

    localStorage.setItem(
        "goodClickCount",
        clickCount
    );

});
