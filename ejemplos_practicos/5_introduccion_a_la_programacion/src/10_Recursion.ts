let contador = 0

const incrementar = () => {
  contador++
  console.log(contador)

  if (contador < 10) incrementar()
}

incrementar()