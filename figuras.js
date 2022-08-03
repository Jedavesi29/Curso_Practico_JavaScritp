
const ladoCuadrado = 5;

console.group("CUADRADO");
function perimetro(){
var perimetro=0;
if (ladoCuadrado > 0){
perimetro = ladoCuadrado *4;

}else{
console.log("Por favor colocar valor al lado cuadrado")

}

return perimetro;

}


var area = ladoCuadrado **2;
console.log ("El lado del cuadrado es: " + ladoCuadrado);
console.log("El perimetro del cuadrado es: " + perimetro());
console.log("El area del cuadrado es: " + area + "cm^2");
console.groupEnd();

console.group("TRIANGULO");

function triangulo (){
var lado1= 6
var lado2=6
var ladoBase3=6
var altura =6.5;
var perimetroTriangulo= lado1+ lado2+ladoBase3;
var areaTriangulo=(ladoBase3*altura)/2 ;

return "El area del triangulo es: " + areaTriangulo +" "+"El perimetro del triangulo es: "+perimetroTriangulo;

}
console.log(triangulo());

console.groupEnd();


// Ahora Procedemos a ejecutar calculos con la figura circulo.

var valorPi= Math.PI;
console.log("Numero entero PI "+ Math.round(valorPi));
console.log("Valor de PI es: "+valorPi);

// Comenzaremos a interactuar con HTML

function calcularPerimetroCuadrado(){
var perimetro_cuadrado=0;
  var lado_cuadrado=  document.getElementById("ladoCuadrado").value;
 //var cuadrado= ladoCuadrado.valueOf
 perimetro_cuadrado= lado_cuadrado*4;
//console.log("PRUEBA"+perimetro_cuadrado);
document.getElementById("RespuestaperimetroCuadrado").innerHTML=`${perimetro_cuadrado.toFixed(1)} cm`


}

function calcularAreaCuadrado(){

    var lado_cuadrado=  document.getElementById("ladoCuadrado").value;

  var area_cuadardo = lado_cuadrado**2;
  document.getElementById("RespuestaeraCuadrado").innerHTML=`${area_cuadardo.toFixed(1)} cm2`
  
  }

  
  function calcularDescuento(){
    var total=0;


var pago= document.getElementById("pagar").value;

var descuento = document.getElementById("descuento").value;

if (descuento >100 || descuento <0) {


    document.getElementById("total").innerHTML=`No puede haber porcentaje mayor que 100 o menor que 0`;
}
else{

total = (pago * descuento)/100;
totalListo= pago - total;
document.getElementById("descuento_total").innerHTML=`${total.toFixed(1)}`;
document.getElementById("total").innerHTML=`${totalListo.toFixed(1)}`;


}

}


  


