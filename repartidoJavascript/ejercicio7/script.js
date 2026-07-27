const pacientes = [
  {
    id: 1,
    nombre: "Ana",
    apellido: "Rodríguez",
    ci: "3.456.789-0",
    activo: true,
  },
  {
    id: 2,
    nombre: "Luis",
    apellido: "Fernández",
    ci: "4.123.456-1",
    activo: true,
  },
  {
    id: 3,
    nombre: "Marta",
    apellido: "González",
    ci: "2.987.654-3",
    activo: false,
  },
  {
    id: 4,
    nombre: "Pedro",
    apellido: "Suárez",
    ci: "5.321.098-7",
    activo: true,
  },
  {
    id: 5,
    nombre: "Carmen",
    apellido: "López",
    ci: "1.654.321-2",
    activo: false,
  },
];

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

const traslados = [
  {
    id: 1,
    pacienteId: 1,
    ambulanciaId: 2,
    medico: "Dr. Pérez",
    distanciaKm: 4.2,
    fecha: "2026-06-01",
    estado: "completado",
  },
  {
    id: 2,
    pacienteId: 3,
    ambulanciaId: 1,
    medico: "Dra. Torres",
    distanciaKm: 7.8,
    fecha: "2026-06-02",
    estado: "completado",
  },
  {
    id: 3,
    pacienteId: 2,
    ambulanciaId: 4,
    medico: "Dr. Pérez",
    distanciaKm: 2.5,
    fecha: "2026-06-03",
    estado: "completado",
  },
  {
    id: 4,
    pacienteId: 4,
    ambulanciaId: 2,
    medico: "Dr. Morales",
    distanciaKm: 9.1,
    fecha: "2026-06-04",
    estado: "completado",
  },
  {
    id: 5,
    pacienteId: 1,
    ambulanciaId: 5,
    medico: "Dra. Torres",
    distanciaKm: 3.3,
    fecha: "2026-06-05",
    estado: "completado",
  },
  {
    id: 6,
    pacienteId: 2,
    ambulanciaId: 1,
    medico: "Dr. Pérez",
    distanciaKm: 5.6,
    fecha: "2026-06-06",
    estado: "completado",
  },
];

// a. Usá find para obtener el objeto completo de la ambulancia con patente 'TRV 0098'.
const ambulancia = ambulancias.find((a) => a.patente === "TRV 0098");
console.log({ ambulancia });

// b. Usá findIndex para obtener la posición en el arreglo de esa misma ambulancia.
const posicion = ambulancias.findIndex((a) => a.patente === "TRV 0098");
console.log({ posicion });

// c. Buscá con find el primer traslado asignado al médico 'Dr. Pérez'. ¿Qué traslado devuelve? ¿Por qué solo devuelve uno si hay varios?
const traslado = traslados.find((t) => t.medico === "Dr. Pérez");
console.log({ traslado });

// d. Buscá con find una ambulancia con patente inexistente ('XYZ 0000'). ¿Qué retorna? ¿Y findIndex en ese caso?
const ambulanciaInexistente = ambulancias.find((a) => a.patente === "XYZ 0000");
const posicionInexistente = ambulancias.findIndex(
  (a) => a.patente === "XYZ 0000",
);
console.log({ ambulanciaInexistente });
console.log({ posicionInexistente });
