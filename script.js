//var Btn = document.createElement(button)
var time= (1000*60) * 5;

var timeFunc= setInterval(function() {
time = time -1000;
var mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
var secs = Math.floor((time % (1000 * 60)) / 1000);
document.getElementById("timer").innerHTML = mins + "m " + secs +"s";
if(time<0){
    clearInterval(timeFunc);
    document.getElementById("timer").innerHTML = "FAILED"
}
}, 1000);

/*if (question==false){
    time =-(1000*60)
}*/
