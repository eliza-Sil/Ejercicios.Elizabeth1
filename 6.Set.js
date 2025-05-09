// Crear un Set para almacenar los números de las habitaciones ocupadas
const habitacionesOcupadas = new Set();

// Función para contar y mostrar cuántas habitaciones están libres
const mostrarDisponibles = () => {
  // Calcular el número de habitaciones libres restando el tamaño del Set (habitaciones ocupadas) de 5
  const libres = 5 - habitacionesOcupadas.size;
  // Mostrar el número de habitaciones libres
  alert("Habitaciones libres: " + libres);
};

// Función para mostrar el estado de las habitaciones
const mostrarEstado = () => {
  // Inicializar una cadena con el encabezado
  let estado = "Estado de habitaciones:\n";
  // Iterar sobre los números de las habitaciones (del 1 al 5)
  for (let i = 1; i <= 5; i++) {
    // Agregar a la cadena el estado de cada habitación (ocupada o libre)
    estado += `Habitación ${i}: ${habitacionesOcupadas.has(i) ? "Ocupada" : "Libre"}\n`;
  }
  // Mostrar el estado de todas las habitaciones en la consola
  console.log(estado);
  // Llamar a la función para mostrar cuántas habitaciones libres hay después
  mostrarDisponibles();
};

// Función para reservar una habitación
const reservarHabitacion = (num) => {
  // Verificar si el número de habitación es válido (entre 1 y 5)
  if (num < 1 || num > 5) {
    // Mostrar un mensaje de error si el número es inválido
    alert("Número de habitación inválido. Usa 1-5.");
  } else if (habitacionesOcupadas.has(num)) {
    // Verificar si la habitación ya está ocupada
    alert("Habitación ya ocupada.");
  } else {
    // Agregar el número de la habitación al Set de habitaciones ocupadas
    habitacionesOcupadas.add(num);
    // Mostrar un mensaje de éxito
    alert(`Habitación ${num} reservada con éxito.`);
  }
  // Llamar a la función para mostrar cuántas habitaciones libres hay después de la reserva
  mostrarDisponibles();
};

// Función para liberar una habitación
const liberarHabitacion = (num) => {
  // Verificar si el número de habitación es válido (entre 1 y 5)
  if (num < 1 || num > 5) {
    // Mostrar un mensaje de error si el número es inválido
    alert("Número de habitación inválido. Usa 1-5.");
  } else if (!habitacionesOcupadas.has(num)) {
    // Verificar si la habitación ya está libre
    alert("La habitación ya está libre.");
  } else {
    // Eliminar el número de la habitación del Set de habitaciones ocupadas
    habitacionesOcupadas.delete(num);
    // Mostrar un mensaje de éxito
    alert(`Habitación ${num} liberada con éxito.`);
  }
  // Llamar a la función para mostrar cuántas habitaciones libres hay después de la liberación
  mostrarDisponibles();
};

// Menú principal
while (true) {
  // Mostrar el menú y obtener la opción del usuario
  let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:");
  if (opcion === "1") {
    // Si el usuario elige "1" (Ver estado), mostrar el estado de las habitaciones
    mostrarEstado();
  } else if (opcion === "2") {
    // Si el usuario elige "2" (Reservar), solicitar el número de habitación y reservarla
    let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
    reservarHabitacion(num);
  } else if (opcion === "3") {
    // Si el usuario elige "3" (Liberar), solicitar el número de habitación y liberarla
    let num = parseInt(prompt("Ingresa el número de habitación (1-5)"));
    liberarHabitacion(num);
  } else if (opcion === "4") {
    // Si el usuario elige "4" (Salir), mostrar un mensaje de salida y salir del bucle
    alert("Saliendo...");
    break;
  } else {
    // Si la opción no es válida, mostrar un mensaje de error
    alert("Opción inválida.");
  }
}