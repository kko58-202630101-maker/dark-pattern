// ===========================
// Good UI JavaScript
// 불필요한 팝업이나 강제 요소 없이
// 필요한 기능만 제공합니다.
// ===========================

// 추천 상품 보기 버튼

const bannerButton = document.querySelector(".banner button");

if(bannerButton){

    bannerButton.addEventListener("click",function(){

        location.href="good-mypage.html";

    });

}

// 상품 버튼

const productButtons=document.querySelectorAll(".product button");

productButtons.forEach(function(button){

    button.addEventListener("click",function(){

        location.href="good-mypage.html";

    });

});

// 검색

const searchInput=document.querySelector(".search-box input");

const searchButton=document.querySelector(".search-box button");

function searchProduct(){

    const keyword=searchInput.value.trim();

    if(keyword===""){

        alert("검색어를 입력해주세요.");

        return;

    }

    alert("검색 기능 예시입니다.\n\n검색어 : "+keyword);

}

if(searchButton){

    searchButton.addEventListener("click",searchProduct);

}

if(searchInput){

    searchInput.addEventListener("keydown",function(e){

        if(e.key==="Enter"){

            searchProduct();

        }

    });

}
