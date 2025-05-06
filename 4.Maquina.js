// Inventario de productos
let productos = ["Galletas", "Papitas", "Chocolate", "Refresco", "Chicle"];
let cantidades = [6, 2, 3, 4, 5]; // Stock inicial de cada producto 

// Función para mostrar el inventario
function mostrarInventario() {
    let mensaje = "Inventario actual:\n";
    for (let i = 0; i < productos.length; i++) {
        mensaje += `${i + 1}. ${productos[i]} - Cantidad: ${cantidades[i]}\n`;
    }
    alert(mensaje);
}

// Función para entregar un producto
function comprarProducto(codigo) {
    if (codigo < 1 || codigo > productos.length) {
        alert("Código inválido. Ingresa un número del 1 al 5.");
        return;
    }

    let indice = codigo - 1;

    if (cantidades[indice] <= 0) {
        alert(`El producto "${productos[indice]}" está agotado.`);

        // Sugerencia de otro producto disponible
        for (let i = 0; i < cantidades.length; i++) {
            if (cantidades[i] > 0) {
                alert(`Sugerencia: Puedes comprar "${productos[i]}".`);
                return;
            }
        }
        alert("Todos los productos están agotados.");
        return;
    }

    // Simula inserción de moneda
    let moneda = prompt(`Insertaste $1. ¿Deseas comprar "${productos[indice]}"? (Sí/No)`);
    if (moneda.toLowerCase() === "sí" || moneda.toLowerCase() === "si") {
        cantidades[indice]--;
        alert(`¡Has comprado "${productos[indice]}"! Gracias por tu compra.`);
    } else {
        alert("Compra cancelada. Moneda devuelta.");
    }
}

// Menú principal
while (true) {
    let opcion = prompt("Máquina Expendedora:\n1. Ver inventario\n2. Comprar producto\n3. Salir\nElige una opción:");

    if (opcion === "1") {
        mostrarInventario();
    } else if (opcion === "2") {
        let codigo = parseInt(prompt("Ingresa el código del producto (1-5):"));
        comprarProducto(codigo);
    } else if (opcion === "3") {
        alert("Gracias por usar la máquina expendedora. ¡Hasta pronto!");
        break;
    } else {
        alert("Opción inválida. Intenta de nuevo.");
    }
}
