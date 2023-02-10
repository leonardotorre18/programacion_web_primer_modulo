const Component = (url, animation) => {
  const img = document.createElement('img')
  img.src= url
  animation(img)
  
  return img
}
export default Component;