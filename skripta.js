// JavaScript Document
 /*var meni = [];
    meni[`home`] = [["home page", "www.example.com"],["contact", "www.example.com"]];
	
    meni[`articles`] = [["main", "www.example.com"],["sub", "www.example.com"],["costumers", "www.example.com"]];

    meni[`support`] = [["manual", "www.example.com"],["FAQ", "www.example.com"]];

    document.write("<ol>");

        for(var i in meni) {
			document.write("<li>"+i+"</li><ul>");
			
			for(var x in meni[i]) {
				document.write("<li><a href=`"+meni[i][x][1]"`>"+meni[i][x][0]+"</a></li>");
			}document.write("</ul>");
		}document.write("</ol>");*/



/*var accountNumber = "20123456789";
    
function converter() {

var first_part = accountNumber.substr(0,2);
var second_part = accountNumber.substr(2,9);
var insert = "0000000";
var e_accountNumber = first_part+insert+second_part;
return e_accountNumber;

}

document.write("Account number is: " +converter(accountNumber));

pitaj zašto stoji ovo u zagradi napisano*/



/*
  var p1 = document.getElementById("p_1");
      p1.removeAttribute('style');

  Ni ovo govno ne radi, niti bilo koji primer poput setAttribute, getAttribute i ostalo...*/    

/*
var p1 = document.getElementById("p_1");
p1.classList.add("new_class");

var p1 = document.getElementById("p_1");
p1.classList.add("new_class");
p1.classList.remove("myClass_1");

Evo ga, ni ova 2 govna ne rade
*/
/*
var p = document.getElementById("p_1");
var st = p.getAttribute("style");
alert(st);
NI OVO GOVNO NEĆE!!!!
*/
/*
var p = document.getElementById("p1");
var st = p.setAttribute("style", "color: blue");

NEĆE
*/
/*
var p = document.getElementById("p1");
p.classList.add("class2");
*/
/*
function convert() {
	var temp = document.getElementById("input_number").value;
	var temp_cel = (temp-32)*5/9;
	var p1 = document.getElementById("result");
	p1.innerHTML = "Temperatura je: " + temp_cel.toFixed(2);
}

OVO RADI, BOGU HVALA
*/

/*
var sliderIndex = 0;
slideshow();

function slideshow() {
	var x = document.getElementsByClassName("slides");
	    for(var i=0; i<x.length; i++) {
		    x[i].style.display = "none";
	}
	
	
	if(sliderIndex > x.length) {
		sliderIndex = 1;
	}
	
	x[sliderIndex].style.display = "block";
	    setTimeout(slideshow, 2000);
	sliderIndex++;
}
*/
/*
function onload() {
	var b = document.getElementsByTagName("body");
	var dugme = document.createEement("button");
	dugme.style.backgroundColor = "red";
	dugme.style.borderRadius = "10px";
	dugme.style.borderColor = "3px";
	dugme.innerHTML = "klik"; 
	b.appendChild(dugme);
	}
*/






/*
ZADATAK
function postaviWrapper() {
	let el = document.getElementById("wrapper");
	el.style.width = "100%";
	el.style.height = "100%";
	el.style.backgroundColor = "grey";
	let dugme = document.createElement("button");
	dugme.innerHTML = "klikni";
	
	dugme.onclick = function () {
		div(el,10);
		alert("Uspeli smo");
	}
	el.appendChild(dugme);
}

function div(id,x) {
	for(let i=0;i<x;i+=5) {
		let el = document.createElement("div");
		el.style.borderRadius = "10px";
		el.style.width = "100px";
		el.style.height = "100px";
		el.style.backgroundColor = "green";
		id.appendChild(el);
	}
}

Umesto paragrafa formiraj DIV elemenat. Onda dodeli da DIV da ima border radijus i da ima pozadinsku boju koja se razlikuje od starije boje.

U drugoj varijanti uradi da svaki peti prikaže. To se radi tako što napišeeš i+=5*/

/*
var x = document.getElementById("myDIV");
	x.style.display = "none";
	
function preko() {
	
	if(x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
   
	

function cao() {
    	if(x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
	
}
*/

function oneFunction() {
	var thumbnail = document.getElementById("thumbnail");
	
	
	
	document.getElementById("big").innerHTML = `<img src="thumbnail.show/thumbnail_large1.jpg">`;
	
	
	for(i=1; i<=5; i++) {
		thumbnail.innerHTML += `<img src="thumbnail.show/small`+i+`.jpg" onclick="change(`+i+`)">`;
		
	
		
	}
	
    
}
      
     function change(a) {
		 var image = document.getElementById("big");
		 image.innerHTML = `<img src="thumbnail.show/thumbnail_large`+a+`.jpg">`
	 } 




 









	




/*
let x;
function oneFunction() {


        x = document.getElementById("myDIV2");
        x.style.display = "none";
}
function preko() {
        if(x.style.display === "none") {
               x.style.display = "block"
        }
        else {
               x.style.display = "none";
        }
}

function nepreko() {
         if(x.style.display === "block") {
                x.style.display = "none";
          } else {
                x.style.display = "block"
          }
}
*/