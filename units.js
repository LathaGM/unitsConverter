/*    Area  */

function myFunction(){
  const one = document.getElementById("area12").value;
  const two = document.getElementById("area22").value;
  var m = document.getElementById("area11").value;
  var z = 0;
/* milimeter to other */
  
if (one == "milimeter" && two == "centimeter"){
    z = m/10;   
}

else if (one == "milimeter" && two == "kilometer"){   
        z = m/(1000000);
}

else if (one == "milimeter" && two == "micrometer"){   
        z = m*1000;
}

else if (one == "milimeter" && two == "meter"){   
        z = m/1000;
}

/* centimeter to other */

else if(one == "centimeter" && two == "milimeter"){
  z = m*10;  
}

else if(one == "centimeter" && two == "kilometer"){
  z = m/100000 ;  
}

else if(one == "centimeter" && two == "micrometer"){
  z = m*10000;  
}

else if(one == "centimeter" && two == "meter"){
  z = m/100;  
}

/* kilometer to other */

else if(one == "kilometer" && two == "centimeter"){
  z = m*100000; 
}

else if(one == "kilometer" && two == "milimeter"){
  z = m*1000000; 
}

else if(one == "kilometer" && two == "micrometer"){
  z = m*1000000000; 
}

else if(one == "kilometer" && two == "meter"){
  z = m*1000; 
}


/* micrometer to other */
else if (one == "micrometer" && two == "centimeter"){
  z = m/10000;  
}

else if  (one == "micrometer" && two == "milimeter"){
  z = m/1000;
}

else if  (one == "micrometer" && two == "kilometer"){
  z = m/1000000000;
}

else if  (one == "micrometer" && two == "meter"){
  z = m/1000000;
}

/* meter to other */

else if (one == "meter" && two == "centimeter"){
  z = m*100;  
}

else if (one == "meter" && two == "milimeter"){
  z = m*1000;  
}

else if (one == "meter" && two == "kilometer"){
  z = m/1000;  
}

else if (one == "meter" && two == "micrometer"){
  z = m*1000000;  
}

/* same on both side */
else {
  z = m;
}
  document.getElementById("area21").value = z;
 }



/* Temperature */

function myFunc(){
var c = document.getElementById("tempc").value;
var f = document.getElementById("tempf").value;
var k = document.getElementById("tempk").value;
var fix = 273.15;
console.log(f);

/* cel to other */
if (c !== 0 && f == 0 && k == 0){
f = (c*(9/5)) + 32;
document.getElementById("tempf").value = f;
k = Number(c) + Number(fix);
document.getElementById("tempk").value = k;
}

/* far to other */
if (f !== 0 && c == 0 && k == 0){
c = (f - 32) * (5/9);
document.getElementById("tempc").value = c;
k = ((f - 32) * (5/9))+273.15;
document.getElementById("tempk").value = k;
}

/* kel to other */
if (k !== 0 && c == 0 && f == 0){
f = ((k - 273.15)* (9/5))+32;
document.getElementById("tempf").value = f;
c = k - 273.15;
document.getElementById("tempc").value = c;
}
}


/* Weight Converter */

