const arreglo = [
  3,
  1,
  2,
  4,
  'Leonardo',
  'Instituto Alfa Carabobo',
  true,
  false,
  true,
  [ 'Carabobo', 'Delta Amacuro', 'Caracas', 'Bolívar' ],
  [ 'Venezuela', 'Colombia', 'Brazil', 'Paraguay', 'Chile' ],
  { nombre: 'Leonardo', edad: 4 },
]


console.log(arreglo.length)

// Concatenar
console.log(arreglo.push('Nuevo dato con Push'))
console.log(arreglo.unshift('Nuevo dato Unshift'))
console.log(arreglo.concat([5,6,7]))
console.log(arreglo.join(' - '))

// Eliminar
console.log(arreglo.splice(4, 2))
console.log(arreglo.pop())

// Recorrer
arreglo.map( elemento => {
  console.log(typeof elemento)
})
console.log( arreglo.includes(3))
console.log( arreglo.filter( elemento => typeof elemento == 'number' ))
console.log( arreglo.find( elemento => typeof elemento == 'string' ) )
console.log( arreglo.some( elemento => typeof elemento == 'string' ) )
console.log( arreglo.every( elemento => elemento !== null && elemento !== undefined ))
console.log( [{num:1}, {num:4},{num:2},{num:5},{num:3}]
  .sort((a,b)=> a.num < b.num ? -1 : 1))
console.log(arreglo.reverse())
console.log( arreglo.indexOf('Leonardo'))
console.log([{num:1}, {num:4},{num:2},{num:5},{num:3}]
  .findIndex(elemento => elemento.num === 5))
console.log(arreglo.fill(10,9,11))
console.log( [{num:1}, {num:4},{num:2},{num:5},{num:3}]
  .reduce((contador, elemento) => 
    contador ? 
      contador.num < elemento.num ? 
        elemento 
        : contador
      : elemento,
  null)
)

// Recorrer con Bucle
arreglo.forEach( elemento => console.log(elemento))
for (elemento of arreglo) {
  console.log(elemento)
}
for (index in arreglo) {
  console.log(index)
}

console.log(arreglo)
