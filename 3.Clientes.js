let cola = []; // Se crea un arreglo vacío llamado 'cola' para almacenar los nombres de los clientes
const capacidadMaxima = 7; // Se define la capacidad máxima de la cola como 7 personas

// Función para mostrar la cola actual
function mostrarCola() {
    if (cola.length === 0) {
        alert("La cola está vacía."); // Si no hay clientes en la cola, muestra un mensaje
    } else {
        let estado = "Clientes en cola:\n"; // Inicializa una cadena para listar los clientes
        for (let i = 0; i < cola.length; i++) {
            estado += `${i + 1}. ${cola[i]}\n`; // Agrega cada cliente con su posición en la cola
        }
        alert(estado); // Muestra la cola completa en una alerta
    }
}

// Función para agregar un cliente
function agregarCliente(nombre) {
    if (cola.length >= capacidadMaxima) {
        alert("La cola está llena. No se pueden agregar más clientes."); // Si la cola está llena, muestra un mensaje
    } else if (nombre.trim() === "") {
        alert("Nombre no válido."); // Si el nombre está vacío o en blanco, muestra un error
    } else {
        cola.push(nombre); // Agrega el nombre del cliente al final de la cola
        alert(`Cliente "${nombre}" agregado a la cola.`); // Confirma que el cliente fue agregado
    }
}

// Función para atender al siguiente cliente
function atenderCliente() {
    if (cola.length === 0) {
        alert("No hay clientes en la cola."); // Si no hay clientes, muestra un mensaje
    } else {
        let atendido = cola.shift(); // Elimina y devuelve al primer cliente de la cola
        alert(`Cliente "${atendido}" ha sido atendido.`); // Informa que el cliente ha sido atendido
    }
}

// Menú principal que se repite hasta que el usuario decide salir
while (true) {
    let opcion = prompt("Supermercado - Gestión de Cola:\n1. Ver cola\n2. Agregar cliente\n3. Atender cliente\n4. Salir\nElige una opción:");

    if (opcion === "1") {
        mostrarCola(); // Llama a la función para mostrar la cola
    } else if (opcion === "2") {
        let nombre = prompt("Ingrese el nombre del cliente:"); // Pide al usuario el nombre del nuevo cliente
        agregarCliente(nombre); // Llama a la función para agregarlo
    } else if (opcion === "3") {
        atenderCliente(); // Llama a la función para atender al primer cliente de la cola
    } else if (opcion === "4") {
        alert("Saliendo del sistema de cola. ¡Hasta pronto!"); // Muestra un mensaje de salida
        break; // Termina el ciclo while y el programa
    } else {
        alert("Opción inválida. Intenta de nuevo."); // Muestra un mensaje si la opción no es válida
    }
}

