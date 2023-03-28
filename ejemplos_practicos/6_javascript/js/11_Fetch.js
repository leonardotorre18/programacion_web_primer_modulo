fetch('https://leonardoapi.onrender.com/music')
  .then(async (res) => {
    console.log(await res.json())
  })

const container = document.getElementById('container')

const printAudio = (data) => {
  const audio = `
    <audio controls src="${data.path.audio}">
  `
  container.innerHTML += audio
}

const loadData = async () => {
  const data = await fetch('https://leonardoapi.onrender.com/music').then(res => res.json())
  data.map(audio => printAudio(audio))
}

loadData()