export const addClickListener = (element, listener) => {
  element.addEventListener('click', listener)
}

export const removeAllChild = (father) => {
  while (father.hasChildNodes()) {
    father.removeChild(father.firstChild)
  }
}