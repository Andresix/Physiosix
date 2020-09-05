var i = 0;
var j = 0;
function containerChange() {
    var container = document.querySelector(".container .jumbotron");
    var bgColor = ["#DE781F", "#1FDECF", "rgb(7, 20, 39)"];
    var txt = ["Top notch Physio keeps us moving", "Top notch Physio adds more meaning to our lives", "Exquisite Physiotherapy Services"];
    container.style.background= bgColor[i];
    container.textContent= txt[j];
    i = (i + 1) % bgColor.length;
    j = (j + 1) % txt.length
}
setInterval(containerChange, 3000);