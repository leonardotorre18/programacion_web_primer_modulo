const MiPromesa = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve({id: 1, name: 'Leonardo'})
  }, 3000)
})


// const data = MiPromesa.then(res => res)
// console.log(data)


const DatosServidor = async () => {
  const datos = await MiPromesa.then(res => res)
  console.log(datos)
}
