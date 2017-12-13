function flipit() {
  const firstDivContents = document.getElementById('firstdiv').innerHTML;
  const secondDivContents = document.getElementById('seconddiv').innerHTML;
  const firstDivWtContents = document.getElementById('firstdivWt').innerHTML;
  const secondDivWtContents = document.getElementById('seconddivWt').innerHTML;
  const firstDivTempContents = document.getElementById('firstdivTemp').innerHTML;
  const secondDivTempContents = document.getElementById('seconddivTemp').innerHTML;
  const firstDivHtContents = document.getElementById('firstdivHt').innerHTML;
  const secondDivHtContents = document.getElementById('seconddivHt').innerHTML;
  document.getElementById('firstdivWt').innerHTML=secondDivWtContents;
  document.getElementById('seconddivWt').innerHTML=firstDivWtContents;
  document.getElementById('firstdiv').innerHTML=secondDivContents;
  document.getElementById('seconddiv').innerHTML=firstDivContents;
  document.getElementById('firstdivTemp').innerHTML=secondDivTempContents;
  document.getElementById('seconddivTemp').innerHTML=firstDivTempContents;
  document.getElementById('firstdivHt').innerHTML=secondDivHtContents;
  document.getElementById('seconddivHt').innerHTML=firstDivHtContents;
}

function selectMeasurement() {
	
const firstDivWtContents = document.getElementById('firstdivWt').innerHTML;
  const secondDivWtContents = document.getElementById('seconddivWt').innerHTML;
  const firstDivTempContents = document.getElementById('firstdivTemp').innerHTML;
  const secondDivTempContents = document.getElementById('seconddivTemp').innerHTML;
  const firstDivHtContents = document.getElementById('firstdivHt').innerHTML;
  const secondDivHtContents = document.getElementById('seconddivHt').innerHTML;
    
	var measurement1 = document.getElementById("dropDown").value;
	
	if (measurement1 == 1)
	{
document.getElementById('firstdiv').innerHTML=firstDivWtContents;
 document.getElementById('seconddiv').innerHTML=secondDivWtContents;
	}
	else if (measurement1 == 3)
	{
  document.getElementById('firstdiv').innerHTML=firstDivTempContents;
  document.getElementById('seconddiv').innerHTML=secondDivTempContents;
	}
	else if (measurement1 == 2)
	{
  document.getElementById('firstdiv').innerHTML=firstDivHtContents;
  document.getElementById('seconddiv').innerHTML=secondDivHtContents;
	}
}




// JavaScript Document
/*
function doMath() {
  if (document.form1.qft.value == "") {
    var one = 0;
  } else {
    var one = eval(document.form1.qft.value);
  }
  if (document.form1.qin.value == "") {
    var two = 0;
  } else {
    var two = eval(document.form1.qin.value);
  }
  var fac = eval(document.form1.factor.value);
  var prod = ((one * 12) + two) * fac * 100;
  var mt = prod;
  document.form1.qm.value = mt.toFixed(0);
}

function doMath2() {
  if (document.form1.qm.value == "") {
    var one = 0;
  } else {
    var one = eval(document.form1.qm.value);
  }
  var fac = eval(document.form1.factor.value);
  var prod = one / fac / 100;
  var ft = parseInt(prod / 12);
  var inch = prod % 12;
  document.form1.qft.value = ft.toFixed(0);
  document.form1.qin.value = inch.toFixed(0);
}
*/
/* /experiment */



/* converter */
function myFunction() {
	var measurement = document.getElementById("dropDown").value;


	
	if (measurement == 1)
	{
		var y = document.getElementById("kgTo2");
		document.getElementById("pndTo2").value = y.value*2.2046226218;
		
		var x = document.getElementById("kgTo");
		document.getElementById("pndTo").value = x.value*2.2046226218;
		
		
	}
	else if (measurement == 2)
	{
		if (document.getElementById("ftTo").value == "") {
			var one = 0;
		} else {
		var one = eval(document.getElementById("ftTo").value);
		}
		if (document.getElementById("inTo").value == "") {
			var two = 0;
		} else {
		var two = eval(document.getElementById("inTo").value);
		}
		var fac = eval(0.0254);
		var prod = ((one * 12) + two) * fac * 100;
		var mt = prod;
		document.getElementById("cmTo").value = mt.toFixed(0);
	}
	
	else if (measurement == 3)
	{
		var x = document.getElementById("csTo");
		document.getElementById("fhTo").value = x.value*1.8 + 32; 
	}
	
	
    
}

/* reverse converter */
function myFunction2() {
    
	var measurement = document.getElementById("dropDown").value;
	
	if (measurement == 1)
	{
		var y = document.getElementById("pndTo2");
		document.getElementById("kgTo2").value = y.value*0.453592;
		
		var x = document.getElementById("pndTo");
		document.getElementById("kgTo").value = x.value*0.453592;			
	}
	else if (measurement == 2)
	{
		 if (document.getElementById("cmTo").value == "") {
			var one = 0;
		  } else {
			var one = eval(document.getElementById("cmTo").value );
		  }
		  var fac = eval(0.0254);
		  var prod = one / fac / 100;
		  var ft = parseInt(prod / 12);
		  var inch = prod % 12;
		  document.getElementById("ftTo").value = ft.toFixed(0);
		  document.getElementById("inTo").value = inch.toFixed(0);
	}
	else if (measurement == 3)
	{

		var x = document.getElementById("fhTo");
		document.getElementById("csTo").value = (x.value-32)/1.8; 
	}
	
}
