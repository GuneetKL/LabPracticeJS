function changeColor() {

    //document.getElementsByTagName('h1').backgroundColor = fcolor;

    var fcolor = document.querySelector('input[name="color"]:checked').value;
    document.getElementsByTagName('h1')[0].style.color = fcolor;

}

var fontColorArray = ["gray", "slategray", "darkblue", "teal", "maroon", "black"];
var bgColorArray = ["azure", "linen", "snow", "powderblue", "ivory", "lightpink", "lightyellow"];

var curFontColor = 1;
var curBgColor = 1;



function changeFontColor() {





}

function changeBgColor() {

}

function changeBg() {
    var sel = document.getElementById("colorsel").value;

    document.getElementsByTagName('td')[1].style.backgroundColor = sel;

}