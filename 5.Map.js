// Crear un Map para almacenar las habitaciones (clave = número de habitación, valor = 0 (libre) o 1 (ocupada))
let habitaciones = new Map([
    [1, 0], // Habitación 1: libre
    [2, 0], // Habitación 2: libre
    [3, 0], // Habitación 3: libre
    [4, 0], // Habitación 4: libre
    [5, 0]  // Habitación 5: libre
]);

// Función para contar y mostrar cuántas habitaciones están libres
const mostrarDisponibles = () => {
    let libres = 0; // Inicializa el contador de habitaciones libres
    habitaciones.forEach((estado) => { // Itera sobre cada valor (estado) en el Map
        if (estado === 0) { // Si el estado es 0 (libre)
            libres++; // Incrementa el contador de habitaciones libres
        }
    });
    alert("Habitaciones libres: " + libres); // Muestra el número de habitaciones libres
};

// Función para mostrar el estado de las habitaciones
const mostrarEstado = () => {
    let estado = "Estado de habitaciones:\n"; // Inicializa la cadena que mostrará el estado
    habitaciones.forEach((estadoHab, num) => { // Itera sobre cada par clave-valor en el Map
        estado += `Habitación ${num}: ${estadoHab === 0 ? "libre" : "Ocupada"}\n`; // Agrega el estado de cada habitación a la cadena
    });
    console.log(estado); // Muestra el estado de todas las habitaciones en la consola
    mostrarDisponibles(); // Llama a la función para mostrar cuántas habitaciones libres hay después
};

// Función para reservar una habitación
const reservarHabitacion = (num) => {
    if (!habitaciones.has(num)) { // Si el número de habitación no existe en el Map
        alert("Número de habitación inválido. Usa 1-5."); // Muestra un mensaje de error
    } else if (habitaciones.get(num) === 1) { // Si la habitación ya está ocupada
        alert("Habitación ya ocupada."); // Muestra un mensaje de error
    } else {
        habitaciones.set(num, 1); // Cambia el estado de la habitación a ocupada
        alert(`Habitación ${num} reservada con éxito.`); // Muestra un mensaje de éxito
    }
    mostrarDisponibles(); // Muestra cuántas habitaciones libres hay después de la reserva
};

// Función para liberar una habitación
const liberarHabitacion = (num) => {
    if (!habitaciones.has(num)) { // Si el número de habitación no existe en el Map
        alert("Número de habitación inválido. Usa 1-5."); // Muestra un mensaje de error
    } else if (habitaciones.get(num) === 0) { // Si la habitación ya está libre
        alert("La habitación ya está libre."); // Muestra un mensaje de error
    } else {
        habitaciones.set(num, 0); // Cambia el estado de la habitación a libre
        alert(`Habitación ${num} liberada con éxito.`); // Muestra un mensaje de éxito
    }
    mostrarDisponibles(); // Muestra cuántas habitaciones libres hay después de la liberación
};

// Menú principal
while (true) { // Inicia un bucle infinito para mostrar el menú repetidamente
    let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:"); // Muestra el menú y obtiene la opción del usuario
    if (opcion === "1") { // Si el usuario elige "1" (Ver estado)
        mostrarEstado(); // Muestra el estado de las habitaciones
    } else if (opcion === "2") { // Si el usuario elige "2" (Reservar)
        let num = parseInt(prompt("Ingresa el número de habitación (1-5):")); // Solicita el número de habitación al usuario
        reservarHabitacion(num); // Llama a la función para reservar la habitación
    } else if (opcion === "3") { // Si el usuario elige "3" (Liberar)
        let num = parseInt(prompt("Ingresa el número de habitación (1-5)")); // Solicita el número de habitación al usuario
        liberarHabitacion(num); // Llama a la función para liberar la habitación
    } else if (opcion === "4") { // Si el usuario elige "4" (Salir)
        alert("Saliendo..."); // Muestra un mensaje de salida
        break; // Sale del bucle y termina el programa
    } else {
        alert("Opción inválida."); // Si la opción no es válida, muestra un mensaje de error
    }
}