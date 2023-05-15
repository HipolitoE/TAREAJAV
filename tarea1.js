console.log("Tarea 1");

function piramide(num) {
    for (let i = 1; i <= num; i++) {
      let fila = '';
      for (let j = 1; j <= i; j++) {
        fila += j;
      }
      console.log(fila);
    }
  }

 let num = 6
 piramide(num);

