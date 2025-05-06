//Arreglo para las 5 habitaciones (0 = libre, 1 = ocupada)
let habitaciones = [0, 0, 0, 0, 0];

// Función para contar y mostrar cuántas habitaciones están libres
const mostrarDisponibles = () => {
  let libres = 0;
  for (let i = 0; i < habitaciones.length; i++) {
    if (habitaciones[i] === 0) {
      libres++;
    }
  }
  alert("Habitaciones libres: " + libres);
};

//Funciones para mostrar estado de habitaciones
const mostrarEstado = () => {
    let estado = "Estado de habitaciones:\n";
    for (let i = 0; i < habitaciones.length; i++) {
        estado += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "libre": "Ocupada"} \n`;
    }
    console.log(estado);
    mostrarDisponibles(); //Mostrar cuántas habitaciones libres hay después
};

//Función para reservar una habitación
const reservarHabitacion = (num) => {
    if (num < 1 || num > 5) {
        alert("Número de habitación inválido. usa 1-5.");
    } else if (habitaciones[num - 1] === 1) {
        alert ("Habitación ya ocupada.");
    } else {
        habitaciones[num - 1] = 1;
        alert(`Habitación ${num} reservada con éxito.`);
    }
    mostrarDisponibles();
};

//Función para liberar una habitación
const liberarHabitacion = (num) => {
    if (num < 1 || num > 5) {
      alert("Número de habitación inválido. Usa 1-5.");
    } else if (habitaciones[num - 1] === 0) {
      alert("La habitación ya está libre.");
    } else {
      habitaciones[num - 1] = 0;
      alert(`Habitación ${num} liberada con éxito.`);
    }
    mostrarDisponibles();
  };

//Menú principal
while (true) {
    let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:");
    if (opcion === "1") {
        mostrarEstado();
    }else if (opcion === "2") {
        let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
        reservarHabitacion(num);
    } else if (opcion === "3") {
        let num = parseInt(prompt("Ingresa el número de habitación (1-5)"));
        liberarHabitacion(num);
    } else if (opcion === "4") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}