const shake = (element) => {
  element.classList.add('shake')
  setTimeout(()=> {
    element.classList.remove('shake')
  }, 500)
}

export const useShake = (element) => {
  element.addEventListener('mouseover', () => {
    shake(element)
  })
}