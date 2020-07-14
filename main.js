let title = document.getElementById("title");
// titulo
title.innerHTML = "Estadísticas de Centro Médico de Ñuñoa";
// arreglos
// radiologia
let radiologia = [
    {
        hora: "11:00am",
        especialista: "Ignacio Schulz",
        paciente: "Francisca Rojas",
        rutPaciente: "9.878.782-1",
        prevision: "FONASA"   
    },
    {
        hora: "11:30am",
        especialista: "Federico Subercaseaux",
        paciente: "Pamela Estrada",
        rutPaciente: "15.345.241-3",
        prevision: "ISAPRE"  
    },
    {
        hora: "15:00am",
        especialista: "Fernando Wurthz",
        paciente: "Armando Luna",
        rutPaciente: "16.445.345-9",
        prevision: "ISAPRE"
    },
    {
        hora: "15:30am",
        especialista: "Ana Maria Godoy",
        paciente: "Manuel Godoy",
        rutPaciente: "17.666.419-0",
        prevision: "FONASA"  
    },
    {
        hora: "16:00am",
        especialista: "Patricia Suazo",
        paciente: "Ramon Ulloa",
        rutPaciente: "14.989.389-K",
        prevision: "FONASA" 
    },
]
// traumatologia
let traumatologia = [
    {
        hora: "08:00am",
        especialista: "Maria Paz Altuzurra",
        paciente: "Paula Sanchez",
        rutPaciente: "15.554.774-5",
        prevision: "FONASA"  
    },
    {
        hora: "10:00am",
        especialista: "Raul Araya",
        paciente: "Angélica Navas",
        rutPaciente: "15.444.147-9",
        prevision: "ISAPRE"
    },
    {
        hora: "10:30am",
        especialista: "Maria Arriegada",
        paciente: "Ana Klapp",
        rutPaciente: "17.879.423-9",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00am",
        especialista:"Alejandro Badilla",
        paciente: "Felipe Mardones",
        rutPaciente: "1.547.423-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30am",
        especialista:"Cecilia Budnik",
        paciente: "Diego Marre",
        rutPaciente: "16.554.741-K",
        prevision: "FONASA"
    },
    {
        hora: "12:00pm",
        especialista:"Arturo Cavagnaro",
        paciente: "Cecilia Mendez",
        rutPaciente: "9.747.535-8",
        prevision: "ISAPRE"
    },
    {
        hora: "12:30pm",
        especialista:"Andres Kanacri",
        paciente: "Marcial Suazo",
        rutPaciente: "11.254.785-5",
        prevision: "ISAPRE"
    },
];
// dental
let dental = [
    {
      hora: "8:30",
      especialista: "Andrea Zuñiga",
      paciente: "Marcela Retamal",
      rutPaciente: "11.123.425-6",
      prevision: "ISAPRE"
    },
    {
      hora: "11:00",
      especialista: "Maria Pia Zañartu",
      paciente: "Angel Muñoz",
      rutPaciente: "9.878.789-2",
      prevision: "ISAPRE"
    },
    {
      hora: "11:30",
      especialista: "Scarlett Witting",
      paciente: "Mario Kast",
      rutPaciente: "7.998.789-5",
      prevision: "FONASA"
    },
    {
      hora: "13:00",
      especialista: "Francisco Von Teuber",
      paciente: "Karin Fernández",
      rutPaciente: "18.887.662-k",
      prevision: "FONASA"
    },
    {
      hora: "13:30",
      especialista: "Eduardo Viñela",
      paciente: "Hugo Sanchez",
      rutPaciente: "17.665.461-4",
      prevision: "FONASA"
    },
    {
      hora: "14:00",
      especialista: "Raquel Villaseca",
      paciente: "Ana Sepulveda",
      rutPaciente: "17.665.461-4",
      prevision: "ISAPRE"
    }
  ];


//   variable para guardar la longitud de los array

let radioLongitud = radiologia.length;
let traumaLongitud = traumatologia.length;
let dentalLongitud = dental.length;

// impresion de la longitud de los array

document.write(`cantidad de atenciones para Radiología es: ${radioLongitud} </br>`);
document.write(`cantidad de atenciones para Traumatología es: ${traumaLongitud} </br>`);
document.write(`cantidad de atenciones para Dental es: ${dentalLongitud} </br>`);

// el primer paciente y el ultimo paciente de cada array

// radiologia
document.write(`Primer paciente de Radiología es: ${radiologia[0].paciente} - ${radiologia[0].rutPaciente} - ${radiologia[0].prevision} | El último paciente de Radiologia es: ${radiologia[radioLongitud - 1].paciente} - ${radiologia[radioLongitud-1].rutPaciente} - ${radiologia[radioLongitud-1].prevision} </br>`);


// traumatologia
document.write(`Primer paciente de traumatología es: ${traumatologia[0].paciente} - ${traumatologia[0].rutPaciente} - ${traumatologia[0].prevision} | El último paciente de traumatología es: ${traumatologia[traumaLongitud - 1].paciente} - ${traumatologia[traumaLongitud-1].rutPaciente} - ${traumatologia[traumaLongitud-1].prevision} </br>`);

// dental
document.write(`Primer paciente de traumatología es: ${dental[0].paciente} - ${dental[0].rutPaciente} - ${dental[0].prevision} | El último paciente de traumatología es: ${dental[dentalLongitud - 1].paciente} - ${dental[dentalLongitud-1].rutPaciente} - ${dental[dentalLongitud-1].prevision} </br>`);







