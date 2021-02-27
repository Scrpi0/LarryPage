
function HideSource() {
	var s = document.getElementById("source_title");
	s.onclick = function() {hide('source')};
}

function HideBG() {
	var s = document.getElementById("BGH");
	s.onclick = function() {hide('BGB')};
}



function hide(id) {
   var box = document.getElementById(id); 
   if (box.style.display === "flex") {
      box.style.display = "none";
  }
   else {
     box.style.display = "flex";
  }
}	


function light() { 
	document.getElementById("page").className = 
	"clair";
    
}

function dark() {
    document.getElementById("page").className = 
	"sombre"; 
}	


window.onscroll = function()  {scroll()};

function scroll() {
	var menu = document.getElementById("main_menu");
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) 
	{	
		menu.style.position = "fixed";
	} 
	else 
	{
		menu.style.position = "static"; 	
	}
}


function quizz()  {
	var GeCompteur = 0 , GoCompteur = 0 , PCompteur=0 ,BCompteur=0 ; 
	var V1=document.getElementById('inp1').value, V2=document.getElementById('inp2').value, V3=document.getElementById('inp3').value, V4=document.getElementById('inp4').value, V5=document.getElementById('inp5').value, V6=document.getElementById('inp6').value, V7=document.getElementById('inp7').value, V8=document.getElementById('inp8').value, V9=document.getElementById('inp9').value, V10=document.getElementById('inp10').value, V11=document.getElementById('inp11').value;
	
	if (V1==="Michigan") {
		GeCompteur = GeCompteur+1;
	}

	if (V2==="2") {
		GeCompteur = GeCompteur+1;
	}	
	
	if (V3==="1998") {
		GeCompteur = GeCompteur+1;
	}
	
	if (V4==="PageRank") {
		GeCompteur = GeCompteur+1;
	}
	
	if (V5==="90") {
		GoCompteur = GoCompteur+1;
	}
	
	if (V6==="AdWords") {
		GoCompteur = GoCompteur+1;
	}
	
	if (V7==="dizaines de milliers de milliards") {
		GoCompteur = GoCompteur+1;
	}
	
	if (V8==="popularité") {
		PCompteur = PCompteur+1;
	}
	
	if (V9==="quantité de") {
		PCompteur = PCompteur+1;
	}
	
	if (V10==="non") {
		PCompteur = PCompteur+1;
	}
	
	if (V11==="idiot") {
		BCompteur = BCompteur+1;
	}
	
	document.getElementById('Ger').innerHTML = GeCompteur+"/4";
	document.getElementById('Gor').innerHTML = GoCompteur+"/3";
	document.getElementById('Pr').innerHTML = PCompteur+"/3";
	document.getElementById('Br').innerHTML = BCompteur;
	document.getElementById('Tr').innerHTML = GeCompteur+GoCompteur+PCompteur+BCompteur+"/10";
	
	if (GeCompteur+GoCompteur+PCompteur+BCompteur===10) {
		alert("10/10 bravo !")
	}
	
	if (GeCompteur+GoCompteur+PCompteur+BCompteur===11) {
		document.getElementById('11/10n0').style.display = "block";
		document.getElementById('11/10n1').style.display = "block";
	}

}

function fin() {
	document.getElementById('11/10n0').style.display = "none";
	document.getElementById('11/10n1').style.display = "none";
}