
const container = document.querySelector('#container')

container.addEventListener('click', ()=> {
  container.classList.add("shake-slow")
  setTimeout(()=>{
    container.classList.remove("shake-slow")
  }, 1000)
})
