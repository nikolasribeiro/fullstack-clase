const ambulancias = [
  {
    id: 1,
    patente: "SBD 1021",
    modelo: "Renault Master",
    estado: "disponible",
    kmRecorridos: 12400,
  },
  {
    id: 2,
    patente: "KLM 4432",
    modelo: "Mercedes Sprinter",
    estado: "en servicio",
    kmRecorridos: 8750,
  },
  {
    id: 3,
    patente: "TRV 0098",
    modelo: "Fiat Ducato",
    estado: "mantenimiento",
    kmRecorridos: 31200,
  },
  {
    id: 4,
    patente: "AZQ 7714",
    modelo: "Renault Master",
    estado: "disponible",
    kmRecorridos: 4100,
  },
  {
    id: 5,
    patente: "MNB 5521",
    modelo: "Mercedes Sprinter",
    estado: "disponible",
    kmRecorridos: 6300,
  },
];

// Consignas
// a. Escribí una función flecha necesitaRevision(km) con return implícito usando operador ternario, que
// retorne true si km > 20000.
const necesitaRevision = (km) => km > 20000;

// b. Usá filter para obtener solo las ambulancias disponibles.
const ambulanciasDisponibles = ambulancias.filter(
  (a) => a.estado === "disponible",
);
console.log("Ambulancias disponibles: ", ambulanciasDisponibles);

// c. Sin mutar el original, ordená las ambulancias por kmRecorridos de mayor a menor y usá slice para
// obtener las 2 con mayor kilometraje.
const ambulanciasOrdenadas = [...ambulancias].sort(
  (a, b) => b.kmRecorridos - a.kmRecorridos,
);
const ambulanciasMayorKilometraje = ambulanciasOrdenadas.slice(0, 2);
console.log("Ambulancias con mayor kilometraje: ", ambulanciasMayorKilometraje);

// d. Usá some para verificar si hay alguna ambulancia en mantenimiento, y every para verificar si
// todas las disponibles tienen menos de 15000 km.
const hayEnMantenimiento = ambulancias.some(
  (a) => a.estado === "mantenimiento",
);
const todasDisponiblesTienenPocaDistancia = ambulanciasDisponibles.every(
  (a) => a.kmRecorridos < 15000,
);
console.log("Hay ambulancias en mantenimiento: ", hayEnMantenimiento);
console.log(
  "Todas las disponibles tienen menos de 15000 km: ",
  todasDisponiblesTienenPocaDistancia,
);

// Desafío e. Combiná filter y map (con desestructuración en los parámetros) para generar un reporte {
// patente, estado } solo de las ambulancias que necesitan revisión, usando la función del inciso a.
const reporte = ambulancias
  .filter((a) => necesitaRevision(a.kmRecorridos))
  .map(({ patente, estado }) => ({ patente, estado }));
console.log("Reporte de ambulancias que necesitan revisión: ", reporte);
