let cola = []; // Arreglo para almacenar los nombres de los clientes
const capacidadMaxima = 7; // Capacidad máxima de la cola

// Función para mostrar la cola actual
function mostrarCola() {
    if (cola.length === 0) {
        alert("La cola está vacía.");
    } else {
        let estado = "Clientes en cola:\n";
        for (let i = 0; i < cola.length; i++) {
            estado += `${i + 1}. ${cola[i]}\n`;
        }
        alert(estado);
    }
}

// Función para agregar un cliente
function agregarCliente(nombre) {
    if (cola.length >= capacidadMaxima) {
        alert("La cola está llena. No se pueden agregar más clientes.");
    } else if (nombre.trim() === "") {
        alert("Nombre no válido.");
    } else {
        cola.push(nombre);
        alert(`Cliente "${nombre}" agregado a la cola.`);
    }
}

// Función para atender al siguiente cliente
function atenderCliente() {
    if (cola.length === 0) {
        alert("No hay clientes en la cola.");
    } else {
        let atendido = cola.shift(); // Elimina y obtiene el primer cliente
        alert(`Cliente "${atendido}" ha sido atendido.`);
    }
}

// Menú principal
while (true) {
    let opcion = prompt("Supermercado - Gestión de Cola:\n1. Ver cola\n2. Agregar cliente\n3. Atender cliente\n4. Salir\nElige una opción:");

    if (opcion === "1") {
        mostrarCola();
    } else if (opcion === "2") {
        let nombre = prompt("Ingrese el nombre del cliente:");
        agregarCliente(nombre);
    } else if (opcion === "3") {
        atenderCliente();
    } else if (opcion === "4") {
        alert("Saliendo del sistema de cola. ¡Hasta pronto!");
        break;
    } else {
        alert("Opción inválida. Intenta de nuevo.");
    }
}
