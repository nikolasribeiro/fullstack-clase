// Función A
function calcularEdad(anioNacimiento) {
  return 2026 - anioNacimiento;
}
/*
La funcion A es posible realizarle un return implicito dado que es 1 sola linea la que existe dentro del scope
*/
const calcularEdadImplicita = (anioNacimiento) => 2026 - anioNacimiento;

// Función B
function describirTraslado(t) {
  const texto = "Paciente: " + t.paciente;
  const destino = " → Destino: " + t.destino;
  return texto + destino;
}

/*
la funcion B es posible aplicarle un return explicito si utilizas template
strings
*/
const describirTrasladoImplicita = (t) =>
  `Paciente: ${t.paciente} -> Destino: ${t.destino}`;

// Función C
function crearRegistro(id, paciente) {
  return { id: id, paciente: paciente, fecha: new Date() };
}

/*
La funcion C es posible realizarle un return explicito retornando el objeto
con sus valores asignados
*/
const crearRegistroImplicito = (id, paciente) => ({
  id,
  paciente,
  fecha: new Date(),
});

// Función D
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

/*
La funcion D es posible realizarle un return explicito ya que cuando se tienen condicionales y el retorno es un tipo booleano, no es necesario aplicar ninguna logica o condicional mas

*/
const esMayorDeEdadImplicito = (edad) => edad >= 18;

const paciente = { paciente: "Juan", destino: "Hospital Central" };

console.log("Ejercicio 3: Funciones flecha");
console.log("Edad: " + calcularEdad(1990));
console.log("Edad (implícita): " + calcularEdadImplicita(1990));
console.log("Traslado: " + describirTraslado(paciente));
console.log("Traslado (implícito): " + describirTrasladoImplicita(paciente));
console.log("Registro: ", crearRegistro(1, "Juan"));
console.log("Registro (implícito): ", crearRegistroImplicito(1, "Juan"));
console.log("Mayor de edad: " + esMayorDeEdad(20));
console.log("Mayor de edad (implícito): " + esMayorDeEdadImplicito(20));
