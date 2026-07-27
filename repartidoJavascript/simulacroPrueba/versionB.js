const pacientes = [
  {
    id: 1,
    nombre: "Ana",
    apellido: "Rodríguez",
    activo: true,
    historial: {
      cantidadTraslados: 3,
      alergias: ["penicilina"],
    },
  },
  {
    id: 2,
    nombre: "Luis",
    apellido: "Fernández",
    activo: true,
    historial: {
      cantidadTraslados: 1,
      alergias: [],
    },
  },
  {
    id: 3,
    nombre: "Marta",
    apellido: "González",
    activo: false,
    historial: {
      cantidadTraslados: 5,
      alergias: ["ibuprofeno", "aspirina"],
    },
  },
  {
    id: 4,
    nombre: "Pedro",
    apellido: "Suárez",
    activo: true,
    historial: {
      cantidadTraslados: 0,
      alergias: [],
    },
  },
  {
    id: 5,
    nombre: "Carmen",
    apellido: "López",
    activo: false,
    historial: {
      cantidadTraslados: 2,
      alergias: ["penicilina", "aspirina"],
    },
  },
];

// Consignas
// a. Escribí una función flecha formatearNombreQR(nombre, apellido) con return implícito que retorne
// 'APELLIDO, Nombre' (apellido en mayúsculas).
const formatearNombreQR = (nombre, apellido) =>
  `${apellido.toUpperCase()}, ${nombre}`;

// b. Usá filter para obtener solo los pacientes activos.
const pacientesActivos = pacientes.filter((paciente) => paciente.activo);

// c. Usá map sobre los pacientes activos para obtener { nombreCompleto, alergias }, usando
// desestructuración en los parámetros de la arrow function.
const pacientesConAlergias = pacientesActivos.map(
  ({ nombre, apellido, historial }) => ({
    nombreCompleto: formatearNombreQR(nombre, apellido),
    alergias: historial.alergias,
  }),
);

// d. Usá find para obtener el paciente con mayor cantidadTraslados en su historial. Mostrá en consola
// su nombre completo (usando la función del inciso a) y esa cantidad.
const pacienteConMasTraslados = pacientes.reduce((max, paciente) =>
  paciente.historial.cantidadTraslados > max.historial.cantidadTraslados
    ? paciente
    : max,
);
console.log(
  formatearNombreQR(
    pacienteConMasTraslados.nombre,
    pacienteConMasTraslados.apellido,
  ),
);
console.log(pacienteConMasTraslados.historial.cantidadTraslados);

// Desafío e. Usá reduce para generar un objeto { conAlergias: n, sinAlergias: m } que cuente cuántos
// pacientes tienen al menos una alergia registrada.
const conteoAlergias = pacientes.reduce(
  (acc, paciente) => {
    if (paciente.historial.alergias.length > 0) {
      acc.conAlergias++;
    } else {
      acc.sinAlergias++;
    }
    return acc;
  },
  { conAlergias: 0, sinAlergias: 0 },
);

console.log(conteoAlergias);
