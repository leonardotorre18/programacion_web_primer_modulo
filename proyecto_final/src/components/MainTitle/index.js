const Component = (text = 'Título Principal') => {
  const title = document.createElement('h1')
  title.classList.add('title')
  title.innerText = text

  return title
}

export default Component;