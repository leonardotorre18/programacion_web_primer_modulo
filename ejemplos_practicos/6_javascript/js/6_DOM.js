const container = document.getElementById('container');

function addElement() {
  // const parrafo = document.createElement('p')
  // parrafo.innerText = 'Hello Word'
  // parrafo.classList.add('font-bold', 'text-center', 'py-4')
  // container.appendChild(parrafo)
  const clases = ['font-bold', 'text-center', 'py-4']
  container.innerHTML += `<p class="${clases.join(' ')}">Hellor Word</p>`
}
function ClearElement() {
  container.innerHTML = ''
}

container.addEventListener('click', addElement)
container.addEventListener('drag', ClearElement)