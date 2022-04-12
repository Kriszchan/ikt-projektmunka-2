function changeBackground() {
    document.body.style.backgroundImage = "radial-gradient(#111, #323)";
    document.body.style.backgroundAttachment = "fixed";
}
function changeBackground2() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#292b2c";
}
function changeBackground3() {
    document.body.style.backgroundColor = "#ffffff";
}
var counterVar = 0;
var currentslide = 0
function varreset(){
    if(currentslide > 2){
        counterVar = 0;
        alert(counterVar);
        currentslide = counterVar
    }
}
function kattintasfrwd() {
    counterVar += 1;
    alert(counterVar);
    if(counterVar > 2)
        counterVar = 0;
}
function kattintasbkwd() {
    updateDisplay(counterVar--);
}
function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}