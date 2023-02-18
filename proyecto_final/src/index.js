import './styles/index.scss';
import { getData } from './services';
import { itemSongComponent, currentSongComponent } from './components';
import { addClickListener, removeAllChild } from './utils';


const setCurrentSong = (child) => {
  const currentSong = document.getElementById('current_song');
  removeAllChild(currentSong)
  
  currentSong.appendChild(child)
}

const header = document.getElementById('header')
const responsiveMenu = document.getElementById('responsive_menu')

addClickListener(responsiveMenu, () => {
  header.classList.toggle('visible')
})

const trackList = document.getElementById('track_list')

getData((res) => {
  setCurrentSong(currentSongComponent(res[0]))
  res.forEach(element => {
    trackList.appendChild(
      itemSongComponent(element, data => setCurrentSong(currentSongComponent(data))
    ))
  });
})


