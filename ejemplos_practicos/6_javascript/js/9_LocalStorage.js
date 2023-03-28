// localStorage.setItem('nombre', 'Leonardo')
// console.log(localStorage.getItem('nombre'))

function Usuario (id, name, lastname, age) {
  return {
    id, name, lastname, age
  }
}

const listaUsuario = [
  Usuario(1, 'Pacho', 'Torres', 35),
  Usuario(2, 'Luis', 'Perez', 25),
  Usuario(3,'Carlos', 'Vaca', 47)
]


localStorage.setItem('lista', JSON.stringify(listaUsuario))

JSON.parse(localStorage.getItem('lista')).map(res => console.log(res))