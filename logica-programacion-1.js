let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));

function ordenarNumeros(num1, num2, num3) {
    let mayor = num1;
    let menor = num1;

    if (num2 > mayor) {
        mayor = num2;
    } else if (num2 < menor) {
        menor = num2;
    }

    if (num3 > mayor) {
        mayor = num3;
    } else if (num3 < menor) {
        menor = num3;
    }

    return { mayor, menor };
}


let { mayor, menor } = ordenarNumeros(num1, num2, num3);

let centro;
if (num1 !== mayor && num1 !== menor) {
    centro = num1;
} else if (num2 !== mayor && num2 !== menor) {
    centro = num2;
} else {
    centro = num3;
}

console.log("Los números ordenados de mayor a menor son: ", mayor, centro, menor);
console.log("Los números ordenados de menor a mayor son: ", menor, centro, mayor);
if (num1 === num2 && num2 === num3) {
    console.log("Los números ingresados son iguales.");
}