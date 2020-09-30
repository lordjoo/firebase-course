let colorsClasses = ['green','blue','red','purple','grey'];
$(document).ready(function() {
    $(".r-color").each(function (el){
        let rand = Math.floor(Math.random() * colorsClasses.length-1) + 1;
        document.querySelectorAll('.r-color')[el].className +=  " "+colorsClasses[rand];
    });
})