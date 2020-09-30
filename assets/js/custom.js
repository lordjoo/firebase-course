let colorsClasses = ['green','orange','blue','red','purple','grey',];
for(let i =1;i<=4;i++){
    colorsClasses.push("blue darken-"+i.toString());
    colorsClasses.push("red darken-"+i.toString());
    colorsClasses.push("green darken-"+i.toString());
    colorsClasses.push("orange darken-"+i.toString());
}
$(document).ready(function() {
    $(".r-color").each(function (el){
        let rand = Math.floor(Math.random() * colorsClasses.length-1) + 1;
        document.querySelectorAll('.r-color')[el].className +=  " "+colorsClasses[rand];
    });
})
