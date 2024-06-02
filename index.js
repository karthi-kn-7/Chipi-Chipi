function iconChange() {
    setTimeout(function(){ document.getElementById("icon").href = "images/c1.png";}, 200);
    setTimeout(function(){ document.getElementById("icon").href = "images/c2.png";}, 400);
    setTimeout(function(){ document.getElementById("icon").href = "images/c3.png";}, 600);
    setTimeout(function(){ document.getElementById("icon").href = "images/c2.png";}, 800);
    setTimeout(function(){ document.getElementById("icon").href = "images/c1.png";}, 1000);
}

window.onload = function() {
    var index = 0;
    setInterval(function() {
        iconChange();
        index = (index + 1) % 3; // Increment index and wrap around
    }, 1000); // Adjust the interval to match the timing of your PNG sequence
};
 
function toPlay(key){
    switch(key){
        case "1":
            var a=new Audio("chi/1chipi22.mp3");
            a.play();
            break;
        case "2":
            var a=new Audio("chi/2chapa.mp3");
            a.play();
            break;
        case "3":
            var a=new Audio("chi/3daba.mp3");
            a.play();
            break;
        case "4":
            var a=new Audio("chi/4machicomidubidubi.mp3");
            a.play();
            break;
        case "5":
            var a=new Audio("chi/5boom.mp3");
            a.play();
            break;
        default:
    }
}
for(i=0;i<5;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var v=this.innerHTML;
        console.log(v);
        toPlay(v);
    });
}
document.addEventListener("keydown",function(event){
    toPlay(event.key);
});