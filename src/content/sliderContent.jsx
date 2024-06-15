import { BsGithub } from 'react-icons/bs'
import ellas from '../assets/web-ellaschoicehome.jpeg'
import ella2023 from '../imgs/pr_ellas2.jpg'
import ella2022 from '../imgs/pr_ella.jpg'
import follow from '../imgs/follow.jpeg'
import bobaekim from '../assets/web-bobaekim.jpeg'

const SliderContent = [
  {
    path: 'https://bobaekim.netlify.app/',
    image: bobaekim,
    label: 'Junge Künstlerin Bobae Kim ',
    text: 'Website für Junge Künstlerin Bobae Kim',
    subText: 'Nutzung der WebTechnologien: React, SCSS',
    gitpath: 'https://github.com/ellachoy/bobaekim',
    icon: { BsGithub },
  },
  {
    path: 'https://ellaschoice.netlify.app/',
    image: ellas,
    label: 'Ella´s Choice',
    text: 'Reraunch-Bewerbungsportfolio 2024',
    subText: 'Nutzung der Web Technologien: React, SCSS',
    gitpath: 'https://github.com/ellachoy/pr_ellas/tree/relaunch2024',
    icon: { BsGithub },
  },
  // {
  //   path: 'https://echoy.netlify.app',
  //   image: ella2023,
  //   label: 'Ella´s',
  //   text: 'Bewerbungsportfolio 2023',
  //   subText: 'Nutzung der Web Technologien: React, SCSS',
  //   gitpath: 'https://github.com/ellachoy/pr_ellas',
  //   icon: { BsGithub },
  // },
  {
    path: 'https://ellachoy.github.io/Ella_Portfolio/',
    image: ella2022,
    label: 'Dream Coder',
    text: 'Bewerbungsportfolio 2022 ',
    subText: 'Nutzung der Web Technologien: HTML, CSS, JS',
    gitpath: 'https://github.com/ellachoy/Ella_Portfolio',
    icon: { BsGithub },
  },
  {
    path: 'https://shiny-pegasus-1083d5.netlify.app',
    image: follow,
    label: '007 (Follow the target)',
    text: 'Side Projekt',
    subText: 'Nutzung der Web-Frontend Technologien: React, CSS',
    gitpath: 'https://github.com/ellachoy/pr_follow',
    icon: { BsGithub },
  },
]

export default SliderContent
