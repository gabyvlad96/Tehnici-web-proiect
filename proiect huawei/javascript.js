window.onload=function() {

// modifica stilul
var elem = document.getElementById("p1");
elem.style.fontFamily = "Courier";
elem.style.fontSize = "x-large";
elem.style.color = "#e85f53";

//manevrare DOM
document.getElementById("p0").style.fontSize = "xx-large";

var x = document.getElementsByTagName("p");
var y = document.getElementById("manevrareDOM");
y.innerHTML = 'Telefon: ' + x[1].innerHTML;
y.style.color = "#e85f53";
y.style.fontSize = "x-large";
y.style.fontFamily = "Courier";
}


// crearea dinamica de elemente
function myFunction() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "poze/logo.png");
    x.setAttribute("width", "70");
    x.setAttribute("height", "70");
    x.setAttribute("alt", "logo");
    document.getElementById("here").appendChild(x);
}

// eventuri
var i =0;
function my2Function(event) {
    var x = event.key;
    i = i + 1;
    var y = document.getElementById("demo").innerHTML = "Lungime nume: " + i;
}

// scriptarea formelor
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["fname0"].value;

    var artpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (x == "" || y == "") {
        alert("Completati toate campurile!");
        return false;
      }
    if (artpos<1 || dotpos<artpos+2 || dotpos+2>=x.length) {
        alert("Adresa de e-mail nu este valida!");
        return false;
    }
    return openWin();
}


//setTimeout
function openWin() {
    var myWindow =  window.open("succes.html");
    setTimeout(function(){ myWindow.close() }, 1000);
}

//setInterval
var myVar
function my3Function(event) {
myVar = setInterval(myFunction ,1000);
}