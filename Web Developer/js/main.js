
var progressbar = document.getElementsByClassName('progressbar');
var progress = document.getElementsByClassName('progress');
var timer = document.getElementsByClassName('timer')[0];
var offset = progressbar[0].offsetTop - 400;


var progressText = document.getElementsByClassName('progressText');
var offset2 = progressText[0].offsetTop - 400;


var anim = false;
var anim2 = false;


document.addEventListener('scroll', function(){
	if(window.pageYOffset > offset  && !anim){
		for(var i = 0; i < progressbar.length; i++){
			animateProgress(i);
			anim = true;
		}
	}
	if(window.pageYOffset > offset2  && !anim2){
		for(var j = 0; j < progressbar.length; j++){
			animateProgressText(j);
			anim2 = true;
		}

	} 
});


var start = 0;

	
	setInterval(function(){
		if(true){
			timer.innerHTML = start;
			start++; 
			console.log('Hi1');
		}
	},1000);








function animateProgress(n) {

	var start = 0;
	var currentProgress = progress[n];
	var max = parseInt(progress[n].getAttribute('data-value'));

	var timerID = setInterval(function() {
		if(start <= max){
			currentProgress.style.width = start + '%';
			start += 1;
		}
		else {
			clearInterval(timerID);
		}
	},2000/max); 
};

function animateProgressText(n) {

	var start = 0;
	var currentProgress = progressText[n];
	var max = parseInt(progressText[n].getAttribute('data-value'));
	var timerID = setInterval(function() {
		if(start <= max){

			currentProgress.innerHTML = start;
			start += 1;
		}
		else {
			clearInterval(timerID);
		}
	},1500/max); 
};

