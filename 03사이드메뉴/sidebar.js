
//window.onload = function() { //화면에서 1개 밖에 사용을 못함
//}

var menu = document.querySelector(".menuBtn");
var side = document.querySelector(".sidenav");

menu.addEventListener('click', function() {
    
    //클릭할때마다 sidenav의 너비를 확인
    var w = side.style.width

    // if(w == '' || w == '0px') {
    //     side.style.width = '200px';   
    // } else {
    //     side.style.width = '0px';
    // }  
    if(window.innerWidth <= 767) { //브라우저 너비 767이하일때
        if(w == '' || w == '0px') {
            side.style.width = '200px';   
        } else {
            side.style.width = '0px';
        }  
    } else { //브라우저 너비가 767초과 일때
        if(w == '0px') { //공백일때는 제외하고
            side.style.width = '200px';
        } else {
            side.style.width = '0px'; 
        }
    }




}) 

