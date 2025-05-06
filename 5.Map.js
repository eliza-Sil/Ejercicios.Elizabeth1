// Crear un Map para almacenar las habitaciones (clave = número de habitación, valor = 0 (libre) o 1 (ocupada))
let habitaciones = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0]
]);

// Función para contar y mostrar cuántas habitaciones están libres
const mostrarDisponibles = () => {
    let libres = 0;
    habitaciones.forEach((estado) => {
        if (estado === 0) {
            libres++;
        }
    });
    alert("Habitaciones libres: " + libres);
};

// Función para mostrar el estado de las habitaciones
const mostrarEstado = () => {
    let estado = "Estado de habitaciones:\n";
    habitaciones.forEach((estadoHab, num) => {
        estado += `Habitación ${num}: ${estadoHab === 0 ? "libre" : "Ocupada"}\n`;
    });
    console.log(estado);
    mostrarDisponibles(); // Mostrar cuántas habitaciones libres hay después
};

// Función para reservar una habitación
const reservarHabitacion = (num) => {
    if (!habitaciones.has(num)) {
        alert("Número de habitación inválido. Usa 1-5.");
    } else if (habitaciones.get(num) === 1) {
        alert("Habitación ya ocupada.");
    } else {
        habitaciones.set(num, 1);
        alert(`Habitación ${num} reservada con éxito.`);
    }
    mostrarDisponibles();
};

// Función para liberar una habitación
const liberarHabitacion = (num) => {
    if (!habitaciones.has(num)) {
        alert("Número de habitación inválido. Usa 1-5.");
    } else if (habitaciones.get(num) === 0) {
        alert("La habitación ya está libre.");
    } else {
        habitaciones.set(num, 0);
        alert(`Habitación ${num} liberada con éxito.`);
    }
    mostrarDisponibles();
};

// Menú principal
while (true) {
    let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:");
    if (opcion === "1") {
        mostrarEstado();
    } else if (opcion === "2") {
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