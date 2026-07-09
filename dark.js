// ==========================
// 오늘만 할인 카운트다운
// ==========================

let minute = 9;
let second = 59;

const timer = document.getElementById("timer");

function updateTimer(){

    if(!timer) return;

    timer.innerHTML =
        String(minute).padStart(2,"0") +
        ":" +
        String(second).padStart(2,"0");

    second--;

    if(second < 0){

        second = 59;
        minute--;

    }

    // 다크패턴 연구용:
    // 시간이 끝나도 다시 9분 59초로 리셋
    if(minute < 0){

        minute = 9;
        second = 59;

    }

}

setInterval(updateTimer,1000);


// ==========================
// 구매 버튼 클릭
// ==========================

const buyButtons = document.querySelectorAll(".product button");

buyButtons.forEach(function(btn){

    btn.addEventListener("click",function(){

        location.href="dark-account.html";

    });

});


// ==========================
// 메인 배너 버튼
// ==========================

const bannerButton=document.querySelector(".banner button");

if(bannerButton){

    bannerButton.addEventListener("click",function(){

        location.href="dark-account.html";

    });

}


// ==========================
// 이벤트 버튼
// ==========================

const eventButton=document.querySelector(".event-btn");

if(eventButton){

    eventButton.addEventListener("click",function(){

        location.href="dark-account.html";

    });

}
// ==========================
// 현재 보고 있는 사람 수 (다크패턴 연출)
// ==========================

const viewers = document.createElement("div");

viewers.id = "viewers";

viewers.style.position = "fixed";
viewers.style.bottom = "20px";
viewers.style.left = "20px";
viewers.style.background = "#ff4444";
viewers.style.color = "white";
viewers.style.padding = "12px 18px";
viewers.style.borderRadius = "10px";
viewers.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";
viewers.style.zIndex = "9999";
viewers.style.fontWeight = "bold";

document.body.appendChild(viewers);

let people = 23;

function updateViewer(){

    people += Math.floor(Math.random()*5)-2;

    if(people < 18) people = 18;
    if(people > 35) people = 35;

    viewers.innerHTML =
    "👀 현재 " + people + "명이 이 상품을 보고 있습니다.";

}

updateViewer();

setInterval(updateViewer,3000);


// ==========================
// 구매 알림 팝업
// ==========================

const names = [

"김**",
"이**",
"박**",
"최**",
"정**",
"한**",
"윤**",
"강**"

];

const items = [

"무선 이어폰",
"스마트 워치",
"게이밍 키보드",
"블루투스 스피커",
"태블릿",
"LED 스탠드"

];

function showPurchasePopup(){

    const popup = document.createElement("div");

    popup.style.position="fixed";
    popup.style.right="20px";
    popup.style.bottom="80px";
    popup.style.background="white";
    popup.style.padding="18px";
    popup.style.borderRadius="12px";
    popup.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";
    popup.style.zIndex="9999";
    popup.style.width="280px";

    popup.innerHTML=
    "<b>"+names[Math.floor(Math.random()*names.length)]+"</b>님이<br><b>"
    +items[Math.floor(Math.random()*items.length)]
    +"</b>을(를) 방금 구매했습니다.";

    document.body.appendChild(popup);

    setTimeout(function(){

        popup.remove();

    },3000);

}

setInterval(showPurchasePopup,9000);


// ==========================
// AI 추천 문구 변경
// ==========================

const recommendText =
document.querySelector(".recommend-message");

const messages=[

"회원님의 최근 검색을 분석하여 추천했습니다.",

"오늘 가장 구매 가능성이 높은 상품입니다.",

"회원님만 받을 수 있는 특별 추천입니다.",

"지금 구매하면 추가 할인 혜택이 적용됩니다."

];

let msg=0;

if(recommendText){

setInterval(function(){

msg++;

if(msg>=messages.length){

msg=0;

}

recommendText.innerHTML=messages[msg];

},5000);

}


// ==========================
// 쿠폰 팝업
// ==========================

setTimeout(function(){

alert("🎁 축하합니다!\n\n회원님께만 지급되는 15% 할인 쿠폰이 도착했습니다.\n지금 사용하지 않으면 자동 소멸될 수 있습니다.");

},12000);


// ==========================
// 페이지 오래 머물렀을 때
// ==========================

setTimeout(function(){

alert("⏰ 할인 종료까지 얼마 남지 않았습니다!\n\n지금 구매하지 않으면 할인 혜택이 종료될 수 있습니다.");

},25000);
