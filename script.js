document.getElementById("darkBtn").onclick=function(){

localStorage.setItem("mode","dark");

localStorage.setItem("startTime",Date.now());

window.location.href="dark-home.html";

}

document.getElementById("goodBtn").onclick=function(){

localStorage.setItem("mode","good");

localStorage.setItem("startTime",Date.now());

window.location.href="good-home.html";

}
