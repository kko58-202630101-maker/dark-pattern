// 회원가입 폼
const form = document.getElementById("signupForm");

// 팝업
const popup = document.getElementById("popup");
const cancelBtn = document.querySelector(".cancelBtn");
const stayBtn = document.getElementById("stay");
const leaveBtn = document.getElementById("leave");

// 실시간 가입
const memberList = document.getElementById("memberList");

// 쿠폰
const couponCount = document.getElementById("couponCount");

// ----------------------
// 실시간 가입자
// ----------------------

const names = [
    "김○○",
    "이○○",
    "박○○",
    "최○○",
    "정○○",
    "윤○○",
    "송○○",
    "임○○",
    "오○○",
    "한○○"
];

setInterval(function(){

    const randomName =
    names[Math.floor(Math.random()*names.length)];

    const li = document.createElement("li");

    li.textContent = randomName + "님 가입 완료";

    memberList.prepend(li);

    if(memberList.children.length>5){

        memberList.removeChild(memberList.lastChild);

    }

},3000);


// ----------------------
// 남은 쿠폰 감소
// ----------------------

let coupon = 3;

setInterval(function(){

    if(coupon>1){

        coupon--;

        couponCount.textContent = coupon;

    }

},8000);


// ----------------------
// 나중에 하기
// ----------------------

cancelBtn.addEventListener("click",function(){

    popup.style.display="flex";

});


// ----------------------
// 계속 가입
// ----------------------

stayBtn.addEventListener("click",function(){

    popup.style.display="none";

});


// ----------------------
// 나가기
// ----------------------

leaveBtn.addEventListener("click",function(){

    popup.style.display="none";

    alert("다음에 다시 방문해주세요.");

});


// ----------------------
// 회원가입
// ----------------------

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("🎉 회원가입이 완료되었습니다!");

});
