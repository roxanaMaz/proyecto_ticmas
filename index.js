

 document.getElementById('num1').onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("persona").innerHTML= "Mi nombre es : Robin Perez";
}

document.getElementById('num2').onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("persona").innerHTML= "Mi email es : robinperez@example.com";
}

document.getElementById('num3').onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("persona").innerHTML= "Mi fecha de nacimiento es : 03/01/1956";
}

document.getElementById('num4').onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("persona").innerHTML= "Mi direccion es: Smokey Ln";
}

document.getElementById('num5').onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("persona").innerHTML= "Mi numero de telefono es : (780) 835-5337";
}

document.getElementById('num6').onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("persona").innerHTML= "RMi clave es : joung";
}

document.getElementById('num7').onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("persona").innerHTML= "Soy graduada de la carrera : Administracion de Empresas";
}

document.getElementById('num8').onclick = function () {
  console.log("capturamos el evento click");
  document.getElementById("persona").innerHTML= "Mi experiencia en el area es de : 15 años";
}

document.getElementById('volver').addEventListener('click', function() {
  document.getElementById('persona').innerHTML= "Sobre mi :";
}) 

