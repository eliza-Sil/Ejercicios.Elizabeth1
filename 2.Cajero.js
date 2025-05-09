// Declaración de variables
let saldo = 1000; // Saldo inicial de la cuenta
let transacciones = []; // Arreglo para almacenar las últimas 5 transacciones

// Función para consultar el saldo actual
function consultarSaldo() {
    alert("Saldo actual: $" + saldo); // Muestra el saldo actual en una alerta
}

// Función para registrar una transacción
function registrarTransaccion(monto) {
    if (transacciones.length >= 5) {
        transacciones.shift(); // Elimina la transacción más antigua si hay 5
    }
    transacciones.push(monto); // Añade la nueva transacción al final del arreglo
}

// Función para depositar dinero
function depositar(monto) {
    if (monto > 0) { // Verifica que el monto sea positivo
        saldo += monto; // Suma el monto al saldo
        registrarTransaccion(monto); // Registra la transacción como un depósito
        alert("Depósito exitoso de: $ " + monto); // Muestra un mensaje de éxito
    } else {
        alert("El monto debe ser positivo."); // Muestra un mensaje de error si el monto no es positivo
    }
}

// Función para retirar dinero
function retirar(monto) {
    if (monto <= 0) {
        alert("El monto debe ser positivo."); // Muestra un mensaje de error si el monto no es positivo
    } else if (monto > 500) {
        alert("No se puede retirar más de $500 en una sola transacción."); // Muestra un mensaje de error si el monto excede el límite
    } else if (monto > saldo) {
        alert("Fondos insuficientes."); // Muestra un mensaje de error si no hay suficiente saldo
    } else {
        saldo -= monto; // Resta el monto al saldo
        registrarTransaccion(-monto); // Registra la transacción como un retiro
        alert("Retiro exitoso de $: " + monto); // Muestra un mensaje de éxito
    }
}

// Función para mostrar las últimas 5 transacciones
function mostrarTransacciones() {
    if (transacciones.length === 0) {
        alert("No hay transacciones aún."); // Muestra un mensaje si no hay transacciones
    } else {
        let resumen = "Últimas transacciones:\n"; // Inicializa el resumen de transacciones
        for (let i = 0; i < transacciones.length; i++) {
            let tipo = transacciones[i] > 0 ? "Depósito" : "Retiro"; // Determina el tipo de transacción
            resumen += `${tipo}: $${Math.abs(transacciones[i])}\n`; // Añade la transacción al resumen
        }
        alert(resumen); // Muestra el resumen de transacciones
    }
}

// Menú principal que se ejecuta en un bucle hasta que el usuario decide salir
while (true) {
    let opcion = prompt("Cajero Automático:\n1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Ver transacciones\n5. Salir\nElige una opción:");

    if (opcion === "1") {
        consultarSaldo(); // Llama a la función para consultar el saldo
    } else if (opcion === "2") {
        let monto = parseFloat(prompt("Ingrese el monto a depositar:")); // Solicita el monto a depositar
        depositar(monto); // Llama a la función para depositar el monto
    } else if (opcion === "3") {
        let monto = parseFloat(prompt("Ingrese el monto a retirar:")); // Solicita el monto a retirar
        retirar(monto); // Llama a la función para retirar el monto
    } else if (opcion === "4") {
        mostrarTransacciones(); // Llama a la función para mostrar las transacciones
    } else if (opcion === "5") {
        alert("Saliendo del cajero. ¡Gracias!"); // Muestra un mensaje de despedida
        break; // Sale del bucle y termina el programa
    } else {
        alert("Opción inválida. Intenta de nuevo."); // Muestra un mensaje si la opción no es válida
    }
}
