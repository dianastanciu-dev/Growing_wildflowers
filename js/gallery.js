let galleryImages= document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth=window.innerWidth;

if(galleryImages){
    galleryImages.forEach(function(image, index){
        image.onclick = function(){
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("img/thumbs/");
            //alert(getFullImgUrl);
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');
            //alert(setNewImgUrl);//replace works
            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class" , "img-window");//works
            newImgWindow.setAttribute("onclick" , "closeImg()");//not working. Function not created yet
            
            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src" , "img/" + setNewImgUrl);//not
                       
    });
}