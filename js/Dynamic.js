'use strict';

/*Initiate Button Redirect and Style Change*/
function initiate () { 
	document.getElementById('btn').style.backgroundColor='#eee';
	document.getElementById('btn').style.color='#111';
	
	setTimeout(function () {
		location.href='../app/Quiz.html'
	}, 650);
}


/*Increase Points and Bar Height*/
function increase(points, bar) {
	
    var scoreElement = document.getElementById(points);
    var scoreValue = parseFloat(scoreElement.innerHTML);
    
    scoreValue += 5;
    scoreElement.innerHTML = scoreValue; 
    
    var barElement = document.getElementById(bar);
    var barHeight = parseFloat(barElement.style.height);
    
    if (scoreValue > 0 && scoreValue <= 205) { 
        barHeight += 2;
        barElement.style.height = barHeight + '%';
    }
   
}

/*Decrease Points and Bar Height*/
function decrease(points, bar) {
	
    var scoreElement = document.getElementById(points);
    var scoreValue = parseFloat(scoreElement.innerHTML);
    
    scoreValue -= 5;
    scoreElement.innerHTML = scoreValue;
    
    var barElement = document.getElementById(bar);
    var barHeight = parseFloat(barElement.style.height);
    
    if (scoreValue >= 0 && scoreValue < 205) { 
        barHeight -= 2;
        barElement.style.height = barHeight + '%';
    }
}


/*Visual Round Toggle*/
var visualElement;
function visualToggle () {
	visualElement = document.getElementById('visual');
	if (visualElement.style.display=='none') {
		visualElement.style.display='flex';
	} else {
		visualElement.style.display='none';
	}
}

/*Visual Round Start*/
function visualStart () {
	document.getElementById('startBtn').style.display='none';
	document.getElementById('image').style.display='block';
	document.getElementById('initiateTitle').style.fontSize='4vw';
	document.getElementById('visual').style.justifyContent='flex-start';
}

/*Visual Round Image Slideshow*/
var images = ['../images/p1.png', '../images/p2.png', '../images/p3.png', '../images/p4.png', '../images/p5.png', '../images/p6.png', '../images/p7.png', '../images/p8.png', '../images/p9.png', '../images/p10.png', '../images/p11.png', '../images/p12.png'];
var currentImage = 0;
var imageElement;

//Slideshow NEXT Image
function nextImage () {
	imageElement = document.getElementById('image');
	if (document.getElementById('visual').style.display!='none') {
		if (currentImage==11) {
			imageElement.src = images[11];
		} else {
			currentImage++;
			imageElement.src = images[currentImage];
		}
	} else {}
}

//Slideshow PREVIOUS Image
function prevImage () {
	imageElement = document.getElementById('image');
	if (document.getElementById('visual').style.display!='none') {
		if (currentImage==0) {
			imageElement.src = images[0];
		} else {
			currentImage--;
			imageElement.src = images[currentImage];
		}
	} else {}
}



/*Keypress Respective Function*/
function keyPress (e) {
	//enter
	if (e.keyCode==13) {
		initiate();
	}
	//end
	if (e.keyCode==35) {
		location.href = "gg.html";
	}
	//1
	if (e.keyCode==49) {
		increase('points1','bar1');
	}
	//2
	if (e.keyCode==50) {
		increase('points2','bar2');
	}
	//3
	if (e.keyCode==51) {
		increase('points3','bar3');
	}
	//4
	if (e.keyCode==52) {
		increase('points4','bar4');
	}
	//q
	if (e.keyCode==81) {
		decrease('points1','bar1');
	}
	//w
	if (e.keyCode==87) {
		decrease('points2','bar2');
	}
	//e
	if (e.keyCode==69) {
		decrease('points3','bar3');
	}
	//r
	if (e.keyCode==82) {
		decrease('points4','bar4');
	}
    //v (visual)
    if (e.keyCode==86) {
        visualToggle();
    }
	//right-arrow
    if (e.keyCode==39) {
		nextImage();
	}
	//left-arrow
	if (e.keyCode==37) {
		prevImage();
	}
}