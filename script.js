var counterVar = 0;
function changeBackground() {
    document.body.style.backgroundColor = "none";
    document.body.style.backgroundImage = "radial-gradient(#111, #323)";
    document.body.style.backgroundAttachment = "fixed";
    alert("lef");
}
function kattintasbkwd() {
    counterVar += 1;
    if(counterVar > 2)
        counterVar = 0;
        alert(counterVar);
        if(counterVar == 0){
            document.body.style.backgroundColor = "none";
            document.body.style.backgroundImage = "radial-gradient(#111, #323)";
            document.body.style.backgroundAttachment = "fixed";
            alert("lef");
        }
         else if(counterVar == 1){
            document.body.style.backgroundImage = "none";
            alert("lef2");
        }
        else{
            document.body.style.backgroundColor = "none";
            document.body.style.setProperty('background-color', '#ffffff', 'important');
            alert("lef3");
        }
}
function kattintasfrwd() {
    counterVar -= 1;
    if(counterVar < 1)
        counterVar = 2;
        alert(counterVar);
                if(counterVar == 0){
            document.body.style.backgroundColor = "none";
            document.body.style.backgroundImage = "radial-gradient(#111, #323)";
            document.body.style.backgroundAttachment = "fixed";
            alert("lef");
        }
         else if(counterVar == 1){
            document.body.style.backgroundImage = "none";
            alert("lef2");
        }
        else{
            document.body.style.backgroundColor = "none";
            document.body.style.setProperty('background-color', '#ffffff', 'important');
            alert("lef3");
        }
}