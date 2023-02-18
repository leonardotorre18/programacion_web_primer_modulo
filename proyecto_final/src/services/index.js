export const getData = (callback) => {
  fetch('https://leonardoapi.onrender.com/music')
  // fetch('http://localhost:3001/music')
    .then(res => res.json())
    .then(res => callback(res))
}