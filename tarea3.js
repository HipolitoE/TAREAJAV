class GenerarCarrito {
    montoTotal = 0;
    productos = [];
  
    constructor(montoTotal, productos) {
      this.montoTotal = montoTotal;
      this.productos = productos;
    }
  
    agregarProducto(nombre, precio) {
      if (this.productos.includes(nombre)) {
        console.log(`Ya existe el producto ${nombre} en el carrito`);
      } else {
        console.log(`* Producto agregado al carrito: ${nombre} - Precio $ ${precio}`);
        this.productos.push(nombre);
        this.actualizarMontoTotal(precio);
      }
    }
  
    actualizarMontoTotal(precio) {
      this.montoTotal += precio;
      console.log(`Monto acumulado: $ ${this.montoTotal}`);
    }
  }
  
  let montoInicial = 0;
  let productosIniciales = [];
  let carrito = new GenerarCarrito(montoInicial, productosIniciales);
  
  console.log(`El monto Total inicial es de: $ ${carrito.montoTotal} con el producto: ${carrito.productos}`);
  carrito.agregarProducto("azúcar", 1000);
  carrito.agregarProducto("Yerba", 500);
  carrito.agregarProducto("Harina", 400);
  carrito.agregarProducto("Leche", 400);
  
  console.log(`El monto total es de: $ ${carrito.montoTotal}`);
  console.log(`y los productos son: ${carrito.productos}`);