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

console.log([...arreglo, 4])
console.log({...arreglo[11], apellido: 'Torrealba'})