let saldo = 1000; // Saldo inicial
let transacciones = []; // Arreglo para las últimas 5 transacciones

// Función para mostrar el saldo
function consultarSaldo() {
    alert("Saldo actual: $" + saldo);
}

// Función para registrar una transacción
function registrarTransaccion(monto) {
    if (transacciones.length >= 5) {
        transacciones.shift(); // Quita la más antigua
    }
    transacciones.push(monto); // Agrega nueva
}

// Función para depositar dinero
function depositar(monto) {
    if (monto > 0) {
        saldo += monto;
        registrarTransaccion(monto);
        alert("Depósito exitoso de: $ " + monto);
    } else {
        alert("El monto debe ser positivo.");
    }
}

// Función para retirar dinero
function retirar(monto) {
    if (monto <= 0) {
        alert("El monto debe ser positivo.");
    } else if (monto > 500) {
        alert("No se puede retirar más de $500 en una sola transacción.");
    } else if (monto > saldo) {
        alert("Fondos insuficientes.");
    } else {
        saldo -= monto;
        registrarTransaccion(-monto);
        alert("Retiro exitoso de $: " + monto);
    }
}

// Función para mostrar las últimas 5 transacciones
function mostrarTransacciones() {
    if (transacciones.length === 0) {
        alert("No hay transacciones aún.");
    } else {
        let resumen = "Últimas transacciones:\n";
        for (let i = 0; i < transacciones.length; i++) {
            let tipo = transacciones[i] > 0 ? "Depósito" : "Retiro";
            resumen += `${tipo}: $${Math.abs(transacciones[i])}\n`;
        }
        alert(resumen);
    }
}

// Menú principal (repetitivo hasta que el usuario sale)
while (true) {
    let opcion = prompt("Cajero Automático:\n1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Ver transacciones\n5. Salir\nElige una opción:");

    if (opcion === "1") {
        consultarSaldo();
    } else if (opcion === "2") {
        let monto = parseFloat(prompt("Ingrese el monto a depositar:"));
        depositar(monto);
    } else if (opcion === "3") {
        let monto = parseFloat(prompt("Ingrese el monto a retirar:"));
        retirar(monto);
    } else if (opcion === "4") {
        mostrarTransacciones();
    } else if (opcion === "5") {
        alert("Saliendo del cajero. ¡Gracias!");
        break;
    } else {
        alert("Opción inválida. Intenta de nuevo.");
    }
}
