 //Screen, Navigator, Location
 //Punto 1 Mostrar la resolucion de la pantalla
 function resolucion(){
    document.getElementById("screen").innerHTML = "La resolucion de la pantalla es:" + window.innerWidth + "x" + window.innerHeight;
 }
 resolucion();

 //Punto 2 mostrar las propiedades del navegador
function navegador(){
    let navegador=document.getElementById("navigator");
    navegador.insertAdjacentHTML("beforeend",`<p>CodeName:${navigator.appCodeName}</p></br>`);
    navegador.insertAdjacentHTML("beforeend",`<p>Name:${navigator.appName}</p></br>`);
    navegador.insertAdjacentHTML("beforeend",`<p>Version:${navigator.appVersion}</p></br>`);
    navegador.insertAdjacentHTML("beforeend",`<p>Cookies:${navigator.cookieEnabled}</p></br>`);
    navegador.insertAdjacentHTML("beforeend",`<p>Language:${navigator.language}</p></br>`);
    navegador.insertAdjacentHTML("beforeend",`<p>Online:${navigator.onLine}</p></br>`);
    navegador.insertAdjacentHTML("beforeend",`<p>Plataform:${navigator.platform}</p></br>`);
    navegador.insertAdjacentHTML("beforeend",`<p>Product:${navigator.product}</p></br>`);
    navegador.insertAdjacentHTML("beforeend",`<p>User-Agent header:${navigator.userAgent}</p></br>`);
    var nombrenav, uAgent = navigator.userAgent;
    if (uAgent.indexOf("Edge") > -1) {
        nombrenav = "Edge";
    } else if (uAgent.indexOf("Chrome") > -1) {
        nombrenav = "Google Chrome";
    } else if (uAgent.indexOf("Safari") > -1) {
        nombrenav = "Apple Safari";
    } else if (uAgent.indexOf("Opera") > -1) {
        nombrenav = "Opera";
    } else if (uAgent.indexOf("Firefox") > -1) {
        nombrenav = "Mozilla Firefox";
    } else if ((uAgent.indexOf("MSIE") > -1) ||
        (uAgent.indexOf("Trident") > -1)) {
        nombrenav = "Microsoft Internet Explorer";
    }
    navegador.insertAdjacentHTML("beforeend",`<p>navegador:${nombrenav}</p></br>`);
}
navegador();

//Punto 3 mostrar protocolos, etc

function localizacion(){
   let locat = document.getElementById("location");
   locat.insertAdjacentHTML("beforeend",`<p>Protocol:${location.protocol}</p></br>`);
   locat.insertAdjacentHTML("beforeend",`<p>Puerto:${location.port}</p></br>`);
   locat.insertAdjacentHTML("beforeend",`<p>URL:${location.href}</p></br>`);
   for (let cont = 0; cont < navigator.plugins.length; cont++) {
    locat.insertAdjacentHTML("beforeend",`<p>Plugins:${navigator.plugins[cont].name}</p></br>`);       
   }
}
localizacion();

 //Math

 //Punto 1 operaciones matematicas
document.getElementById("mates1").addEventListener("click",math);

 function math(){
     let num1=prompt("Introduzca el primer número:")
     if (isNaN(num1)){
        return "No es un número";
    }
    else{
        let num2=prompt("Introduzca el segundo número:")
        if(isNaN(num2)){
            return "No es un número";
        }
        else{
            let imprimir= document.getElementById("math1");
            imprimir.innerHTML="";
            imprimir.insertAdjacentHTML("beforeend",`<p>Logaritmo neperiano de ${num1}: ${Math.log(num1)}<p>`);
            imprimir.insertAdjacentHTML("beforeend",`<p>Raiz cuadrada de ${num1}: ${ Math.sqrt(num1)}<p>`);
            imprimir.insertAdjacentHTML("beforeend",`<p>${num1} elevado a ${num2}: ${ Math.pow(num1,num2)}<p>`);
            imprimir.insertAdjacentHTML("beforeend",`<p>Entero mas cercano a ${num1}: ${ Math.floor(num1-1)}<p>`);
            imprimir.insertAdjacentHTML("beforeend",`<p>Número entero mas cercano y mayor a ${num2}: ${ Math.ceil(num2)}<p>`);
            imprimir.insertAdjacentHTML("beforeend",`<p>Redondea entero mas cercano a ${num1}: ${ Math.round(num1)}<p>`);
            imprimir.insertAdjacentHTML("beforeend",`<p>Random entre 0 y 1: ${ Math.random()}<p>`);
            imprimir.insertAdjacentHTML("beforeend",`<p>Seno: ${Math.sin(num2)}, conesno: ${Math.cos(num2)}, tangente: ${Math.tan(num2)}, de ${num2}<p>`);
            imprimir.insertAdjacentHTML("beforeend",`<p>Valor absoluto de ${num1}: ${ Math.abs(num1)}<p>`);
            imprimir.insertAdjacentHTML("beforeend",`<p>Valor máximo entre ${num1} y ${num2}: ${ Math.max(num1,num2)}<p>`);
            imprimir.insertAdjacentHTML("beforeend",`<p>Valor mínimo entre ${num1} y ${num2}: ${ Math.min(num1,num2)}<p>`);
        }
    }
 }
//Punto 2 operaciones matematicas triangulo
document.getElementById("mates2").addEventListener("click",math2);

 function math2(){
     let lado1=prompt("Introduzca el primer lado del triangulo:")
     
     if (isNaN(lado1)){
        return "No es un número";
    }
    else{
        let lado2=prompt("Introduzca el segundo lado del triangulo:")
        if(isNaN(lado2)){
            return "No es un número";
        }
        else{
            let imprimir=document.getElementById("math2");
            imprimir.innerHTML="";
            imprimir.insertAdjacentHTML("beforeend",`<p>La hipotenusa es: ${Math.hypot(lado1,lado2)}</p>`);
        }
    }     
 }

 //String punto 1,2 y 3

 document.getElementById("frase").addEventListener("click",strings);

 function strings(){
     document.getElementById("string").innerHTML="";
     let frase=prompt("Introduce la frase a tratar:");

     document.getElementById("string").insertAdjacentHTML("beforeend", `<p>${darlelavueltaCaracteres(frase)}</p>`);
     document.getElementById("string").insertAdjacentHTML("beforeend", `<p>${darlelavueltaPalabras(frase)}</p>`);
     document.getElementById("string").insertAdjacentHTML("beforeend", `<p>${laFrase(frase)}</p>`);
 }

function darlelavueltaCaracteres(frase){
    return frase.split("").reverse().join("");
}

function darlelavueltaPalabras(frase){
    return frase.split(" ").reverse().join(" ");
}

function laFrase(frase){
    let origen=frase.split(" ");
    let copia=origen[0].toUpperCase();
    for (let cont = 1; cont < origen.length; cont++) {
        copia=copia+" " + origen[cont].toLowerCase();
    }
    return copia;
}

//Document Punto 1
function documento(){
    document.getElementById("documento").insertAdjacentHTML("beforeend", `<p>La cantidad de enlaces que hay es: ${document.links.length}</p>`);
    document.getElementById("documento").insertAdjacentHTML("beforeend", `<p>La cantidad de enlaces que hay es: ${document.images.length}</p>`);
    document.getElementById("documento").insertAdjacentHTML("beforeend", `<p>La cantidad de enlaces que hay es: ${document.forms[0].length}</p>`);
}
documento();
