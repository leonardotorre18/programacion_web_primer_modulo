const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()
  const datos = new URLSearchParams(new FormData(form));

  fetch('https://leonardoapi.onrender.com/form/signin',{
    method: "POST",
    headers: {
      // "Content-Type": "application/json"
      "Content-Type":"application/x-www-form-urlencoded"
    },
  //   mode: "cors",
    body: datos
  }).then(res => res.json()
  ).then(res => {
    console.log(res)
    form.reset()
  })
  .catch(err => {
    console.log(err)
  })


})