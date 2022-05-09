var counterVar = 0;

function changeBackground() {
	document.body.style.backgroundColor = "none";
	document.body.style.backgroundImage = "radial-gradient(#111, #323)";
	document.body.style.backgroundAttachment = "fixed";
    document.querySelector('.carousel-control-prev-icon').style.setProperty('filter', 'invert(100%)', 'important');
    document.querySelector('.carousel-control-next-icon').style.setProperty('filter', 'invert(100%)', 'important');
}

function kattintasbkwd() {
	counterVar += 1;
	if(counterVar > 2) counterVar = 0;
	if(counterVar == 0) {
		document.body.style.backgroundColor = "none";
		document.body.style.backgroundImage = "radial-gradient(#111, #323)";
		document.body.style.backgroundAttachment = "fixed";
	} else if(counterVar == 1) {
		document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#2e2e2e";
	} else if(counterVar == 2) {
		document.body.style.backgroundColor = "none";
		document.body.style.setProperty('background-color', '#ffffff', 'important');
	}
	document.querySelector(carcont).disabled = true;
	if(disabled = true){
	setTimeout(kattintasbkwd, 5000);
	document.querySelector(carcont).disabled = false;
	}
}

function kattintasfrwd() {
	counterVar -= 1;
	if(counterVar < 0) counterVar = 2;
	if(counterVar == 0) {
		document.body.style.backgroundColor = "none";
		document.body.style.backgroundImage = "radial-gradient(#111, #323)";
		document.body.style.backgroundAttachment = "fixed";
	} else if(counterVar == 1) {
		document.body.style.backgroundImage = "none";
		document.body.style.backgroundColor = "#2e2e2e";
	} else if(counterVar == 2) {
		document.body.style.backgroundImage = "none";
		document.body.style.backgroundColor = "none";
		document.body.style.setProperty('background-color', '#f8eeec', 'important');
	}
}
$('.carousel').carousel({
	interval: false,})
	
	