// 상품 카드의 장바구니 버튼만 적용

document.querySelectorAll(".addCart").forEach(function(btn){

    btn.onclick=function(){

        alert("장바구니에 담았습니다.");

    }

});
