window.onload = function (){
	var elements = document.getElementsByTagName("li");
	var screen = document.querySelectorAll(' p')[0];
	var clear =   document.getElementsByClassName('clear')[0];
	
	for(var i=0;i<elements.length;i+=1){
		  if(elements[i].innerHTML === '='){
			    elements[i].addEventListener("click", calculate(i));
		  }else{
			   elements[i].addEventListener("click", addtocurrentvalue(i));
		  }
	}
	
function addtocurrentvalue (i){
		return function(){
			if (elements[i].innerHTML === "÷") {
               screen.innerHTML  +=  "/ " ;
      }else if(elements[i].innerHTML === "x"){
			      screen.innerHTML += "*";
		   } else{
			   screen.innerHTML  += elements[i].innerHTML;
		   }
	  };
   }
 


   clear.onclick = function () {
    screen.innerHTML = '';
  }; 

 function calculate(i) {
    return function () {
        screen.innerHTML = eval(screen.innerHTML);
    };
  }
};
<!DOCTYPE html>
<html>
<html lang="eng">
<h1>Pure JavaScript Calculator</h1>
		  <div class="main-div">
		           
				  
				            <div class="screen" id="screen"><p></p></div>
							<div class="clear" id="clear">C</div>
					
				
				               <ul class="number-div">
							             <li>1</li>
										 <li>2</li>
										 <li>3</li>
									     <li>+</li>
										 <li>4</li>
										 <li>5</li>
										 <li>6</li>
									     <li>x</li>
										 <li>7</li>
										 <li>8</li>
										 <li>9</li>
									     <li>-</li>
										 <li>0</li>
										 <li>.</li>
										 <li id="equals">=</li>
									     <li>÷</li>
										 
										 
							   </ul>
				   
		  </div>
      
      </html>
      
      html,body{
	width:100%;
	height:100%;
	margin:0;
	padding:0;
	font-family: 'Noto Serif', serif;
}
*{box-sizing:border-box;font: bold 14px Arial, sans-serif;}

h1{
	font-size:40px;
	text-align:center;
	margin-bottom:110px;
	background:#673AB7;
	color:white;
	margin-top:0;
	padding:20px;
	
}

.main-div{
	 width:290px;
	 margin:0 auto;
	 background:#3F475B;
	 height:310px;
	 box-shadow:2px 2px 2px gray;
	 padding:15px;
	 border-bottom:5px solid #ED586C;
     border-radius:4px;	
position:relative;	 
}

.screen-div,.number-div{
	  padding:0;
	  margin:0;
}

.screen{
	list-style:none;
	color:white;
	height:45px;
	width:58px;
  margin-left:8px;
	border-radius:4px;
	border-top:4px solid #828A9B;
	text-align:center;
	font-weight:bold;
	font-family: 'Ubuntu', sans-serif;
	margin-bottom:8px;
  width:182px;
	background:#828A9B;
   border-top:4px solid #ED586C;
  overflow:hidden;
}

.clear{
    width:60px;
	background:#7B8D8E;
	padding:10px 17px;
	position:absolute;
	border-radius:3px;
	left:215px;
	top:18px;
	color:white;
	cursor:pointer;
	text-align:center;
}
.screen{
  p{
    margin: 0;
  }
}


.number-div li{
	 list-style:none;
	 float:left;
     width:52px;
    background:white;
	margin:9px 5px;
	padding:10px;
	border-bottom:4px solid #828A9B;
	border-radius:5px;
	color:#888888;
	text-align:center;
	transition:.2s;
	cursor:pointer;
}

.number-div li:hover{
	background: #44B3C2;
	border-bottom: 4px solid #336699;
	color: white;
}

#equals{
	background:#F43341;
	color:white;
}

#equals:hover{
	background: #FE5E6A;
	border-bottom: 4px solid #B3232E;
	color: white;
}

		  
