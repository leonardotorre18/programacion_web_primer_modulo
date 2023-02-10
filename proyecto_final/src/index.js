import './styles/index.scss'
import { useShake } from './animations/animations';
import MainTitle from './components/MainTitle';
import Image from './components/Image';
import Container from './components/Container'

const root = document.getElementById('root')

root.appendChild(MainTitle('Proyecto Webpack + JavaScript Vanilla'));

const Jumbotron = document.createElement('div')
Jumbotron.classList.add('jumbotron')
Jumbotron.appendChild(Container(Image('/javascript_logo.png', useShake)))
Jumbotron.appendChild(Container(Image('/webpack_logo.png', useShake)))

root.appendChild(Jumbotron)
