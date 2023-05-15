class Carrito {
  montoTotal = 0;
  productos = [];
  cantidad = []

  constructor(montoTotal, productos) {
    this.montoTotal = 0;
    this.productos = [];
    this.cantidad = [];
  }

  agregarProducto(nombre, precio, cantidad) {
    if (this.productos.includes(nombre)) {
      console.log(`Ya existe el producto ${nombre} en el carrito`);
    } else {
      console.log(`* Producto agregado al carrito: ${nombre} - Precio $ ${precio} - ${cantidad}`);
      this.productos.push(nombre);
      this.actualizarMontoTotal(precio*cantidad);
    }
  }

  actualizarMontoTotal(precio) {
    this.montoTotal += precio;
    console.log(`Monto acumulado: $ ${this.montoTotal}`);
  }
}

let montoInicial = 0;
let productosIniciales = [];
let carrito = new Carrito(montoInicial, productosIniciales);

console.log(`El monto Total inicial es de: $ ${carrito.montoTotal} con el producto: ${carrito.productos}`);
carrito.agregarProducto("azúcar", 1000, 2);
carrito.agregarProducto("Yerba", 500, 3);
carrito.agregarProducto("Harina", 400, 1);
carrito.agregarProducto("Leche", 400, 2);

console.log(`El monto total es de: $ ${carrito.montoTotal}`);
console.log(`y los productos son: ${carrito.productos}`);