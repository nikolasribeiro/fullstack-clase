const traslados = [
  {
    id: 1,
    paciente: "Ana Rodríguez",
    ambulancia: "SBD 1021",
    distanciaKm: 4.2,
    estado: "completado",
  },
  {
    id: 2,
    paciente: "Luis Fernández",
    ambulancia: "KLM 4432",
    distanciaKm: 7.8,
    estado: "pendiente",
  },
  {
    id: 3,
    paciente: "Marta González",
    ambulancia: "TRV 0098",
    distanciaKm: 2.5,
    estado: "completado",
  },
  {
    id: 4,
    paciente: "Pedro Suárez",
    ambulancia: "SBD 1021",
    distanciaKm: 9.1,
    estado: "en curso",
  },
  {
    id: 5,
    paciente: "Carmen López",
    ambulancia: "AZQ 7714",
    distanciaKm: 3.3,
    estado: "completado",
  },
];

// Consignas
// a. Escribí una función flecha calcularCostoTraslado(distanciaKm) con return implícito que retorne el
// costo (distanciaKm * 85). Probala con el traslado id 2.
const costoTraslado = (distanciaKm) => distanciaKm * 85;
const distanciaTraslado2 = traslados.find((t) => t.id === 2).distanciaKm;

console.log("Costo traslado id 2: " + costoTraslado(distanciaTraslado2));

// b. Usá filter para obtener solo los traslados con estado 'completado'.
const trasladosCompletados = traslados.filter((t) => t.estado === "completado");
console.log("Traslados completados: ", trasladosCompletados);

// c. Usá map sobre el resultado del inciso b para obtener un arreglo de objetos { paciente, costo },
// reutilizando la función del inciso a.
const costosTrasladosCompletados = trasladosCompletados.map((t) => ({
  paciente: t.paciente,
  costo: costoTraslado(t.distanciaKm),
}));
console.log("Costos de traslados completados: ", costosTrasladosCompletados);

// d. Usá reduce sobre los traslados completados para calcular el costo total facturado.
// Desafío
const costototalFacturado = trasladosCompletados.reduce(
  (acc, t) => acc + costoTraslado(t.distanciaKm),
  0,
);
console.log("Costo total facturado: " + costototalFacturado);

// e. Encadená filter, map y reduce en una sola expresión para calcular el costo total de los traslados
// con distancia mayor a 3 km, sin usar variables intermedias.
const costoTotalDistanciaMayor3 = traslados
  .filter((t) => t.distanciaKm > 3)
  .map((t) => costoTraslado(t.distanciaKm))
  .reduce((acc, costo) => acc + costo, 0);

console.log(
  "Costo total de traslados con distancia mayor a 3 km: " +
    costoTotalDistanciaMayor3,
);
