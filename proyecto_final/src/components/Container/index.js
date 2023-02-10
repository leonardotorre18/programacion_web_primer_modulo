const Component = (childrens) => {
  const container = document.createElement('div')
  container.classList.add('container')
  container.appendChild(childrens)

  return container
}

export default Component