document.getElementById("btnMes")?.addEventListener("click", () => {
  console.clear();
  let mes: number = Number(document.getElementById("mes").value);

  let dias: number;

  switch (mes) {
    case 1:
      dias = 31;
      break;
    case 2:
      dias = 28;
      break;
    case 3:
      dias = 31;
      break;
    case 4:
      dias = 30;
      break;
    case 5:
      dias = 31;
      break;
    case 6:
      dias = 30;
      break;
    case 7:
      dias = 31;
      break;
    case 8:
      dias = 31;
      break;
    case 9:
      dias = 30;
      break;
    case 10:
      dias = 31;
      break;
    case 11:
      dias = 30;
      break;
    case 12:
      dias = 31;
      break;
    default:
      console.log("Inserte una fecha valida");
  }
  if (dias) {
    console.log(`El mes ${mes} tiene ${dias} dias`);
  }

//EJERCICIO 2//

document.getElementById("btnNumeros")?.addEventListener("click", () => {
  console.clear();
  let numero: number = Number(prompt("Inserte el primer numero"));
  let suma: number = 0;

  while (numero >= 1 && numero <= 10) {
    suma += numero;
    numero = Number(prompt("Ingrese otro numero"));
  }
  console.log(
    `La suma de los numeros que ingresaste da como resultado ${suma}`
  );
});

//EJERCICIO 3//

document.getElementById("btnTabla")?.addEventListener("click", () => {
  console.clear();
  let letra: string = prompt 
  ("Ingresa la letra A,B,C o D si quiere ver la tabla del 9")
  .toLowerCase());

  if (letra === "a" || letra === "b" || letra === "c") {
    for (let i: number = 1; i <= 10; i++) {
      console.log(`${9} x ${i} = ${i * 9}`);
    }
  }
});
