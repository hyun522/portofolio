
// a태그 전부 없애고 싶음 
// overflow:hidden 대체 어디에


// header_slider 
const h_s_img = document.querySelectorAll(".wrap > a > img");
const sliderWrap = document.querySelector(".wrap");

value = 0;

setInterval(function(){
    if(value === h_s_img.length -1){
        value = 0;
    }
    else{
        value +=1; 
    }
    sliderWrap.style.marginTop =  - value *42 + "px";
},3000);

// 스크롤기능
const depth1 = document.querySelectorAll(".depth1 > li")
const d2 = document.querySelectorAll(".d2")
const depth2 = document.querySelectorAll(".d2_center")



for(let i=0; i<depth1.length; i++){
    depth1[i].onmouseenter = function(){
        d2[i].style.height = "80px";
        // 높이값이 늘어나는 것이기 때문에 css로 줄수 없다!
        d2[i].style.borderBottom = "1px solid #000";
        depth2[i].style.display = "flex";
        
    }
}
for(let i=0; i<depth1.length; i++){
    depth1[i].onmouseleave = function(){
        d2[i].style.height = "0px";
        d2[i].style.borderBottom = "none";
        depth2[i].style.display = "none";
    }
}

const header = document.querySelector(".h_mainGnb")
console.log(header)

// 스크롤 기능
window.onscroll = function(){
    let scTop = window.scrollY; 
    if(scTop > 0){
        header.classList.add("on");
    }
    else{
        header.classList.remove("on");
    }
}

// c1
// count 기능
const c1_plus = document.querySelector(".c1_plus")
const c1_minus = document.querySelector(".c1_minus")
const c1_countN = document.querySelector(".c1_countN")
const c1_divide_4_two = document.querySelector(".c1_divide_4_two")

// 변수 만들기 
let countNumber = 1;
let totalPrice = 0;
let productPrice = 52000;

// PLUS 버튼 눌렀을때
c1_plus.onclick = function(){
    if(countNumber === 10){
        c1_countN.innerText = 10;
    }
    else{
        countNumber = countNumber + 1;
        c1_countN.innerText = countNumber;
        totalPrice = productPrice * countNumber;
        c1_divide_4_two.innerText = "￦" + totalPrice.toLocaleString();
    }
}
//마이너스 버튼 눌렀을때 
c1_minus.onclick = function(){
    if(countNumber === 1){
        c1_countN.innerText = 1
    }
    else {
        countNumber = countNumber - 1;
        c1_countN.innerText = countNumber;
        totalPrice = productPrice * countNumber;
        c1_divide_4_two.innerText = "￦" + totalPrice.toLocaleString();

    }
}

// c1
// 버튼 기능 
const C1_bookmark = document.querySelector(".fa-bookmark")
const C1_heart = document.querySelector(".fa-heart")
C1_bookmark.onclick = function(){
    alert('찜하기 등록은 회원만 가능합니다. \n로그인 페이지로 이동하시겠습니까?')

}