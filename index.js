function siguiente(x) {
  return x + 1
}

function doble(x) {
  return x * 2
}

function dobleDelSiguiente(x) {
  return doble(siguiente(x))
}

console.log('Siguiente de 8 =>', siguiente(8))
console.log('Doble de 8 =>', doble(8))
console.log('Siguiente del doble de 8 =>', siguiente(doble(8)))
console.log('Doble del siguiente de 8 =>', dobleDelSiguiente(8))
console.log('Cuadruple de 8 =>', doble(doble(8)))
