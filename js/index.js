$(function () {
    $('.skitter-large').skitter({
        label: false,
        dots: false,


    });
});

$(function () {
    $('#camera_wrap_1').camera({
        pagination: false,
    });
});
//===========================================================
var index = 0;
var imgs = [];
var popUPContainer = document.querySelector(".popup-container");
var imgList = document.querySelectorAll(".img-product");
var close = document.getElementById("close");
var forward = document.getElementById("right");
var backword = document.getElementById("left");
var popUpImage = document.querySelector('.popup-img');


close.addEventListener("click", function () {
    popUPContainer.style.display = "none";
})

document.addEventListener("keydown", function (e) {

    if (e.keyCode === 32 || e.keyCode === 27) {
        popUPContainer.style.display = "none";
    }

})


for (let i = 0; i < imgList.length; i++) {
    
    imgs.push(imgList[i]);
    imgList[i].addEventListener("click", function (e) {
        
        let path = e.target.src;
        index = imgs.indexOf(e.target);
        popUpImage.style.backgroundImage = "url("+path+")";
        popUPContainer.style.display = "flex";

    })
}




forward.addEventListener("click",function(){
    index++;
    let nextImage = imgs[index].src;
    popUpImage.style.backgroundImage = "url("+nextImage+")";
    if(index == 5)
        {
            index = -1;
        }
})



backword.addEventListener("click",function(){
    index--;
    if(index == "-1")
        {
            index = imgs.length-1;
        }
    let nextImage = imgs[index].src;
    popUpImage.style.backgroundImage = "url("+nextImage+")";
    
})



document.addEventListener("keydown", function (e) {

    if (e.keyCode === 39) {
        
        index++;
    let nextImage = imgs[index].src;
    popUpImage.style.backgroundImage = "url("+nextImage+")";
    if(index == 5)
        {
            index = -1;
        }
        
    }

})


document.addEventListener("keydown", function (e) {

    if (e.keyCode === 37) {
        
        index--;
    if(index == "-1")
        {
            index = imgs.length-1;
        }
    let nextImage = imgs[index].src;
    popUpImage.style.backgroundImage = "url("+nextImage+")";
    
    }

})












/*
function forward(){
    index++;
    let nextImage = imgs[index].src;
    popUpImage.style.backgroundImage = "url("+nextImage+")";
    if(index == 5)
        {
            index = -1;
        }



    
    
    
    
    function backword(){
    
    index--;
    if(index == "-1")
        {
            index = imgs.length-1;
        }
    let nextImage = imgs[index].src;
    popUpImage.style.backgroundImage = "url("+nextImage+")";
    
}

*/
    
    
    
    
    
    
    
    