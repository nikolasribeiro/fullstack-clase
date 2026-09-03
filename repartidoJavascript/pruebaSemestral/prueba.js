const turnos = [
  {
    id: 1,
    enfermero: "Rosa Medina",
    area: "Emergencias",
    horas: 8,
    tipo: "nocturno",
  },
  {
    id: 2,
    enfermero: "Jorge Silva",
    area: "Pediatría",
    horas: 6,
    tipo: "diurno",
  },
  {
    id: 3,
    enfermero: "Lucía Paredes",
    area: "Emergencias",
    horas: 12,
    tipo: "nocturno",
  },
  {
    id: 4,
    enfermero: "Diego Ramos",
    area: "Traumatología",
    horas: 8,
    tipo: "diurno",
  },
  {
    id: 5,
    enfermero: "Valentina Cruz",
    area: "Emergencias",
    horas: 10,
    tipo: "nocturno",
  },
];

// Consignas
// a. Escribí una función flecha calcularPago(horas, tipo) con return implícito que retorne horas * (tipo
// === 'nocturno' ? 450 : 350).
const calcularPagos = (horas, tipo) =>
  horas * (tipo === "nocturno" ? 450 : 350);

// b. Usá filter para obtener solo los turnos del área 'Emergencias'.
const turnosEmergencias = turnos.filter(
  (turno) => turno.area.toLowerCase() === "emergencias",
);
console.log("Turnos de Emergencias:", turnosEmergencias);

// c. Usá map sobre los turnos de Emergencias para obtener { enfermero, pago }, reutilizando la
// función del inciso a.
const turnosEmergenciasConPago = turnosEmergencias.map((turno) => ({
  enfermero: turno.enfermero,
  pago: calcularPagos(turno.horas, turno.tipo),
}));
console.log("Turnos de Emergencias con pago:", turnosEmergenciasConPago);

// d. Usá some para verificar si hay algún turno de más de 10 horas, y every para verificar si todos los
// turnos diurnos duran 8 horas o menos.
const hayTurnosLargos = turnos.some((turno) => turno.horas > 10);
const todosTurnosDiurnosLargos = turnos.every((turno) => turno.horas <= 8);

console.log({ hayTurnosLargos, todosTurnosDiurnosLargos });

// Desafío
// e. Usá reduce sobre todos los turnos para calcular el pago total de la guardia, reutilizando la función
// del inciso a.
const pagoTotal = turnos.reduce(
  (total, turno) => total + calcularPagos(turno.horas, turno.tipo),
  0,
);
console.log("Pago total de la guardia:", pagoTotal);
