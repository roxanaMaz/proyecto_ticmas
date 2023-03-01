/*document.getElementById('boton').onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("prueba").innerHTML= "probando la primer fusion html/css/js";
}*/

/*   este es con un click en cualquier lado 
document.addEventListener('click', function () {
    console.log("hola mundo desde eventlistener");
    document.getElementById('prueba').innerHTML= "probando la primer fusion html/css/js";
});
*/

document.getElementById('boton').addEventListener('click',function () {
    
    console.log("hola mundo desde eventlistener");
    document.getElementById('prueba').innerHTML= "probando la primer fusion html/css/js";
});

document.getElementById('boton_color').addEventListener('click',function () {
    
    
    document.body.style.backgroundColor = 'red';
});

document.getElementById('boton_default').addEventListener('click',function () {
    
    
    document.body.style.backgroundColor = 'greenyellow';
});