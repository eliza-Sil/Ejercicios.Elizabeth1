// Arreglo para las 5 habitaciones (0 = libre, 1 = ocupada)
let habitaciones = [0, 0, 0, 0, 0]; // Inicializa un arreglo con 5 elementos, todos en 0 (habitaciones libres)

// Función para contar y mostrar cuántas habitaciones están libres
const mostrarDisponibles = () => {
  let libres = 0; // Variable para contar las habitaciones libres
  for (let i = 0; i < habitaciones.length; i++) { // Recorre el arreglo de habitaciones
    if (habitaciones[i] === 0) { // Si la habitación está libre (valor 0)
      libres++; // Incrementa el contador de habitaciones libres
    }
  }
  alert("Habitaciones libres: " + libres); // Muestra una alerta con la cantidad de habitaciones libres
};

// Función para mostrar el estado de todas las habitaciones
const mostrarEstado = () => {
  let estado = "Estado de habitaciones:\n"; // Inicializa una cadena con el encabezado
  for (let i = 0; i < habitaciones.length; i++) { // Recorre el arreglo de habitaciones
    estado += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "libre" : "ocupada"} \n`; // Añade el estado de cada habitación a la cadena
  }
  console.log(estado); // Muestra en la consola el estado de todas las habitaciones
  mostrarDisponibles(); // Llama a la función para mostrar cuántas habitaciones están libres
};

// Función para reservar una habitación
const reservarHabitacion = (num) => {
  if (num < 1 || num > 5) { // Si el número de habitación no es válido (fuera del rango 1-5)
    alert("Número de habitación inválido. Usa 1-5."); // Muestra una alerta de error
  } else if (habitaciones[num - 1] === 1) { // Si la habitación ya está ocupada
    alert("Habitación ya ocupada."); // Muestra una alerta indicando que la habitación está ocupada
  } else {
    habitaciones[num - 1] = 1; // Marca la habitación como ocupada (cambia el valor a 1)
    alert(`Habitación ${num} reservada con éxito.`); // Muestra una alerta confirmando la reserva
  }
  mostrarDisponibles(); // Llama a la función para mostrar cuántas habitaciones están libres
};

// Función para liberar una habitación
const liberarHabitacion = (num) => {
  if (num < 1 || num > 5) { // Si el número de habitación no es válido (fuera del rango 1-5)
    alert("Número de habitación inválido. Usa 1-5."); // Muestra una alerta de error
  } else if (habitaciones[num - 1] === 0) { // Si la habitación ya está libre
    alert("La habitación ya está libre."); // Muestra una alerta indicando que la habitación ya está libre
  } else {
    habitaciones[num - 1] = 0; // Marca la habitación como libre (cambia el valor a 0)
    alert(`Habitación ${num} liberada con éxito.`); // Muestra una alerta confirmando la liberación
  }
  mostrarDisponibles(); // Llama a la función para mostrar cuántas habitaciones están libres
};

// Menú principal que se ejecuta en un bucle infinito
while (true) {
  let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:"); // Muestra un cuadro de diálogo solicitando una opción
  if (opcion === "1") { // Si el usuario elige "1" (Ver estado)
    mostrarEstado(); // Llama a la función para mostrar el estado de las habitaciones
  } else if (opcion === "2") { // Si el usuario elige "2" (Reservar)
    let num = parseInt(prompt("Ingresa el número de habitación (1-5):")); // Solicita el número de habitación a reservar
    reservarHabitacion(num); // Llama a la función para reservar la habitación
  } else if (opcion === "3") { // Si el usuario elige "3" (Liberar)
    let num = parseInt(prompt("Ingresa el número de habitación (1-5):")); // Solicita el número de habitación a liberar
    liberarHabitacion(num); // Llama a la función para liberar la habitación
  } else if (opcion === "4") { // Si el usuario elige "4" (Salir)
    alert("Saliendo..."); // Muestra una alerta indicando que se está saliendo
    break; // Sale del bucle infinito, terminando el programa
  } else {
    alert("Opción inválida."); // Muestra una alerta si la opción ingresada no es válida
  }
}
