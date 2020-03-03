function siguiente(x, next) {
  next(x + 1);
}

const doble = (n, next) => {
  next(n * 2);
};

const dobleDelSiguiente = (n, next) => {
  siguiente(n, res => {
    doble(res, r => {
      next(r);
    });
  });
};

const dobleDelDoble = (n, next) => {
  doble(n, res => {
    doble(res, r => {
      next(r);
    });
  });
};
const siguienteDelDoble = (n, next) => {
  doble(n, res => {
    siguiente(res, r => {
      next(r);
    });
  });
};

siguiente(2, resultado => {
  console.log("siguiente =>", resultado);
});

doble(2, res => {
  console.log("doble => ", res);
});

dobleDelSiguiente(2, res => {
  console.log("dobleDelSiguiente =>", res);
});
dobleDelDoble(2, res => {
  console.log("dobleDelDoble =>", res);
});
siguienteDelDoble(2, res => {
  console.log("siguiienteDelDoble =>", res);
});
