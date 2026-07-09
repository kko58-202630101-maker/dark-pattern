// =============================
// Dark Pattern Lab
// tracker
// =============================

const Tracker = {

startTime: Date.now(),

clickCount: 0,

wrongClick: 0,

pageHistory: [],

currentPage: document.title,

init(){

this.load();

this.recordPage();

this.bindClicks();

this.startTimer();

},

load(){

if(!localStorage.getItem("labData")){

localStorage.setItem("labData",JSON.stringify({

start:Date.now(),

click:0,

wrong:0,

history:[]

}));

}

},

save(){

const data={

start:this.startTime,

click:this.clickCount,

wrong:this.wrongClick,

history:this.pageHistory

};

localStorage.setItem(

"labData",

JSON.stringify(data)

);

},

recordPage(){

this.pageHistory.push({

page:this.currentPage,

time:new Date().toLocaleTimeString()

});

this.save();

},

bindClicks(){

document.addEventListener(

"click",

(e)=>{

this.clickCount++;

this.save();

}

);

},

startTimer(){

setInterval(()=>{

const sec=Math.floor(

(Date.now()-this.startTime)/1000

);

const timer=document.getElementById("timer");

if(timer){

const m=String(Math.floor(sec/60)).padStart(2,"0");

const s=String(sec%60).padStart(2,"0");

timer.innerHTML=m+":"+s;

}

},1000);

}

};

window.onload=function(){

Tracker.init();

};
// =============================
// 잘못된 클릭 기록
// =============================

Tracker.addWrongClick=function(){

this.wrongClick++;

this.save();

const wrong=document.getElementById("wrongCount");

if(wrong){

wrong.innerHTML=this.wrongClick;

}

};

// =============================
// 페이지 이동 함수
// =============================

Tracker.move=function(page){

this.recordPage();

location.href=page;

};

// =============================
// 버튼 이벤트 자동 연결
// =============================

document.addEventListener("DOMContentLoaded",function(){

// 메뉴 버튼
document.querySelectorAll("[data-page]").forEach(function(btn){

btn.addEventListener("click",function(){

Tracker.move(

btn.dataset.page

);

});

});

// 일부러 잘못 만든 버튼
document.querySelectorAll(".wrongBtn").forEach(function(btn){

btn.addEventListener("click",function(){

Tracker.addWrongClick();

});

});

});

// =============================
// 종료 시 저장
// =============================

window.addEventListener("beforeunload",function(){

Tracker.save();

});
// =============================
// 결과 페이지 표시
// =============================

Tracker.showResult=function(){

const data=JSON.parse(

localStorage.getItem("labData")

);

if(!data)return;

const time=document.getElementById("resultTime");

const click=document.getElementById("resultClick");

const wrong=document.getElementById("resultWrong");

const history=document.getElementById("resultHistory");

const totalSec=Math.floor(

(Date.now()-data.start)/1000

);

const min=String(

Math.floor(totalSec/60)

).padStart(2,"0");

const sec=String(

totalSec%60

).padStart(2,"0");

if(time){

time.innerHTML=min+":"+sec;

}

if(click){

click.innerHTML=data.click+" 회";

}

if(wrong){

wrong.innerHTML=data.wrong+" 회";

}

if(history){

history.innerHTML="";

data.history.forEach(function(item){

const li=document.createElement("li");

li.innerHTML=

item.time+

" - "+

item.page;

history.appendChild(li);

});

}

};

// =============================
// CSV 다운로드
// =============================

Tracker.downloadCSV=function(){

const data=JSON.parse(

localStorage.getItem("labData")

);

if(!data)return;

let csv="항목,값\n";

csv+="클릭수,"+data.click+"\n";

csv+="잘못 클릭,"+data.wrong+"\n";

csv+="방문 페이지 수,"+data.history.length+"\n";

data.history.forEach(function(item){

csv+=item.page+","+item.time+"\n";

});

const blob=new Blob(

[csv],

{type:"text/csv"}

);

const url=

URL.createObjectURL(blob);

const a=

document.createElement("a");

a.href=url;

a.download="experiment_result.csv";

a.click();

URL.revokeObjectURL(url);

};

// =============================
// 결과 페이지 자동 실행
// =============================

document.addEventListener(

"DOMContentLoaded",

function(){

if(document.getElementById("resultTime")){

Tracker.showResult();

}

const download=

document.getElementById("downloadCSV");

if(download){

download.addEventListener(

"click",

function(){

Tracker.downloadCSV();

}

);

}

}

);
