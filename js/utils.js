// Punto 1: calcularEdad();

function calcularEdad() {
    let nombre = prompt("Ingresa tu nombre", "");
    let fecha = prompt("Ingresa tu fecha de nacimiento con el formato 'YYYY-MM-DD'", "");

    fechaNac = new Date(fecha);
    fechaHoy = new Date();

    if(nombre != "" && nombre != null)
        console.log(`Hola ${nombre}, tenes ${(fechaHoy.getFullYear() - fechaNac.getFullYear())} años!`);
}

// Punto 2: tirarFruta();

function tirarFruta() {
    const arrayFrutas = ["Banana", "Manzana", "Uva", "Melon", "Sandia", "Pera", "Arandano", "Mandarina", "Naranja", "Durazno"];

    let frutaPedida = prompt("Ingresa una fruta", "");
    
    const encontro = arrayFrutas.find(fruta => fruta === frutaPedida);

    console.log(frutaPedida);

    if(frutaPedida != null && frutaPedida != ""){
        if (encontro === frutaPedida) {
            console.log("Si, tenemos " + frutaPedida + "!");
        }
        else{
            console.log("No, no tenemos " + frutaPedida + "!");
        }
    }
    
}

// Punto 3: comparar();

function comparar(){
    let num = 10;

    // A. Esto anduvo
    if(num == '10'){
        console.log("AnduvoA");
    }

    // B. Esto no anduvo debido a que con tres iguales es estricta. Es decir, que verifica si dos valores son iguales y tambien sus tipos de datos.
    if(num === '10'){
        console.log("AnduvoB");
    }

    // C. Es un tipo 'number'
    console.log(typeof 10.6);

    // D. Si, mi conclusion es que es debido a que toma el concepto del numero binario. (0 = false) (1 = true)
    if(true == 1){
        console.log("AnduvoD");
    }

}

// Punto 4: creandoObjeto();

function creandoObjeto(){
    const ciudad = {
        nombre: "Buenos Aires",
        fechaFundacion: "1580-06-11",
        poblacion: "17.569.053",
        extensión: "203 km²"
    }

    for (const propiedad in ciudad) {
        console.log(propiedad + ": " + ciudad[propiedad]);
    }
}

// Punto 5: arrayDoble([2, 3, 4]);

function arrayDoble(arrayViejo) {

    const arrayNuevo = arrayViejo.map(num => num * 2)

    console.log(arrayNuevo);
}

// Punto 6: dibujarTriangulo1();
// dibujarTriangulo2(5);

function dibujarTriangulo1() {
    const asterisco = '*';
    let string = "";

    for (let i = 0; i < 6; i++) {
        string += asterisco;
        console.log(string);
    }
}

function dibujarTriangulo2(altura) {
    const asterisco = '*';
    const guion = '-';

    for (let i = 1; i <= altura; i++) {
        let guiones = guion.repeat(altura - i);
        let asteriscos = asterisco.repeat(2 * i - 1);
        let fila = guiones + asteriscos + guiones;
    
        console.log(fila);
    }
}

// Punto 7: nombresA();

const resultado = document.getElementById('resultado');

function nombresA() {
    let stringNombres = prompt("Ingresa una lista de nombres separados por comas", "");

    const listaNombres = stringNombres.split(",");

    const nombresA = listaNombres.filter(nombre => nombre.startsWith('A'))
        .map(nombre => nombre);

    for (var item in nombresA) {
        resultado.innerHTML += nombresA[item] + '<br>';
    }
}

// Punto 8: reemplazarPalabras();

function reemplazarPalabras() {
    let string = prompt("Ingresa una cadena de texto", "");

    let palVieja = prompt("Ingresa una palabra que quieras reemplazar", "");

    let palNueva = prompt("Ingresa la palabra que reemplazara", "");

    const stringNuevo = string.replaceAll(palVieja, palNueva);

    resultado.innerHTML = stringNuevo;
}

// Punto 9: cortarTexto();

function cortarTexto() {
    let string = prompt("Ingresa una cadena de texto", "");

    let numero = parseInt(prompt("Ingrese un numero", ""));

    resultado.innerHTML = string.slice(0, numero);
}

// Punto 10: stringSeparador();

function stringSeparador() {
    let string = prompt("Ingresa una lista de elementos separados por comas", "");

    const lista = string.split(",");

    resultado.innerHTML = lista.join(' - ');
}

// Punto 11: calcularRecaudacion();

function calcularRecaudacion() {
    let string = prompt("Ingrese una lista de objetos pedidos junto con sus respectivos totales, separados por coma. Cada pedido se debe ingresar en el formato 'nombre:total'.", "");

    let lista = string.split(", ");

    const listaB = lista.map(nombre => nombre.split(':'));

    let total = 0;

    for (const item in listaB) {
        total += parseFloat(listaB[item][1]);
    }

    if (!isNaN(total)) {
        resultado.innerHTML = "El total de la recaudacion es " + total;
    }
}