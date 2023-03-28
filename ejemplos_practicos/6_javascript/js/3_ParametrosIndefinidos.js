const suma = (...numbers) => {
  // return numbers.reduce((a,b) => a + b, 0)
  let resultado = 0
  numbers.forEach( num => resultado += num)
  return resultado
}
console.log(suma(1,3,4,5,6,65,7,8,43,9))