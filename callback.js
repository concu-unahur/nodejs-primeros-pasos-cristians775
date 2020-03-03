function siguiente(x, done) {
  done(x + 1)
}

siguiente(2, resultado => { 
  console.log('Siguiente de 8 =>', resultado)
})
