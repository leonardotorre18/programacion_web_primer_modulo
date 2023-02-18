import './styles/index.scss';
import { getData } from './services';
import { itemSongComponent, currentSongComponent } from './components';
import { addClickListener, removeAllChild, useLocalstorage } from './utils';

const header = document.getElementById('header')
const responsiveMenu = document.getElementById('responsive_menu')
const trackList = document.getElementById('track_list')
const currentSong = document.getElementById('current_song')

const storage = useLocalstorage('currentSong')

getData((res) => {
  removeAllChild(trackList)
  res.forEach(element => {
    trackList.appendChild(
      itemSongComponent(
        element, 
        data => {
          storage.setItem(data)
          setCurrentSong(currentSongComponent(data))
        }
    ))
  });
})

const setCurrentSong = (child) => {
  removeAllChild(currentSong)
  currentSong.appendChild(child)
}


addClickListener(responsiveMenu, () => {
  header.classList.toggle('visible')
})


if (storage.getItem()) {
  const data = storage.getItem()
  setCurrentSong(currentSongComponent(data))
}


