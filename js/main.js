//pomodoro

//=======================Global variable ========================//
var workClick=25;
var breakClick=5;
var workDisplay=document.getElementById('work-display');
var breakDisplay=document.getElementById('break-display');
var count=0;
var workSession;
var breakSession;



//=====================increase work ====================//
var increaseWork=document.getElementById("addWorkButton");
increaseWork.addEventListener('click',function(){
	workClick+=1;
	workDisplay.innerHTML=workClick;
}, false);



//===================Decrease Work========================//
var decreaseWork=document.getElementById("minusWorkButton");
decreaseWork.addEventListener("click", function(){
	workClick-=1;
	workDisplay.innerHTML=workClick;
	
	if(workClick<1){
	   workClick=1;
		workDisplay.innerHTML=workClick;
	   }
}, false);




//==================increase Break========================//
var increaseBreak=document.getElementById('addBreakButton');
increaseBreak.addEventListener("click", function(){
	breakClick+=1;
	breakDisplay.innerHTML=breakClick;
} ,false);





//=================decrease break========================//
var decreaseBreak=document.getElementById("minusBreakButton");
decreaseBreak.addEventListener("click", function(){
	breakClick-=1;
	breakDisplay.innerHTML=breakClick;
	
	if(breakClick<1){
		breakClick=1;
		breakDisplay.innerHTML=breakClick;
	}
}, false);



//=================== start Button======================//

function start(){
	count = workClick*60;
	workSession = setInterval(workCountDown,1000);
}//end of the start


//===========================CountDown===================//

function workCountDown(){
	//alert("Hello");
	var seconds=count;
	var hours=Math.floor(seconds/3600);
	//alert(hours);
	seconds-=hours*3600;
	//seconds=seconds-(hours*3600);
	//alert(seconds)
	
	var minutes=Math.floor(seconds/60);
	seconds-= minutes*60;
	document.getElementById("showtime").innerHTML=('00' + hours).slice(-2) +":" + ("00" +minutes).slice(-2) +":" + ("00" + seconds).slice(-2);
	count--;
	if(count<0){
		clearInterval(workSession);
		workSession=null;
	   document.getElementById("showtime").innerHTML="Starting Break";
		var breakDelay=setTimeout(function(){
			startBreak();
		},3000);
	   }//end of if 
}

// ==========================function pause=====================//

function pause(){
	clearInterval(workSession);
	clearInterval(breakSession);
	workSession=null;
	breakSession=null;
	
}//end of function

//=========================function resume===================//

function resume(){
	workSession=setInterval(workCountDown,1000);
}// end of the function
	
	
//===============================function reset=================//

function reset(){
	if(workSession){
		clearInterval(workSession);
		workSession=null;
	}
	else{
		clearInterval(breakSession);
		breakSession=null;
		
	}
	document.getElementById("showtime").innerHTML="";
	document.getElementById("timer-panel").style.backgroundColor="#fc5d66";
	document.getElementById("pause").disabled=false;
	document.getElementById("resume").disabled=false;
}//end of the function
	
//==================================Start Break ================//

function startBreak(){
	count=breakClick*60;
	breakSession=setInterval(breakCountDown,1000);
	document.getElementById("pause").disabled=true;
	document.getElementById("resume").disabled=true;
	
}// end function
	
// ================================ break countdown=============//

function breakCountDown(){
	document.getElementById("timer-panel").style.backgroundColor="lightblue";
	//alert("Hello");
	var seconds=count;
	var hours=Math.floor(seconds/3600);
	//alert(hours);
	seconds-=hours*3600;
	//seconds=seconds-(hours*3600);
	//alert(seconds)
	
	var minutes=Math.floor(seconds/60);
	seconds-= minutes*60;
	document.getElementById("showtime").innerHTML=('00' + hours).slice(-2) +":" + ("00" +minutes).slice(-2) +":" + ("00" + seconds).slice(-2);
	count--;
	if(count<0){
	   clearInterval(breakSession);
		breakSession=null;
		var message=setTimeout(function(){
			document.getElementById("showtime").innerHTML="Congratualion you have Complete";
		}, 3000);
	   }//end of if
}// end of the function 
	
	
//Complete this project

	
	
	
	
	






