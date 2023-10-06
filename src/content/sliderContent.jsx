import {BsGithub} from 'react-icons/bs';
import ellas from '../imgs/pr_ellas2.jpg';
import ella2022 from '../imgs/pr_ella.jpg';
import follow from '../imgs/follow.jpeg';

const SliderContent = [
    {
        path: "https://dashing-semifreddo-d6bc58.netlify.app/",
        image: ellas,
        label: "Ella´s Choice",
        text: "Bewerbungsprojekt 2023",
        subText: "Nutzung der Web-Frontend Technologien: React, SCSS",
        gitpath: "https://github.com/ellachoy/pr_ellas",
        icon: {BsGithub},
    },
    {
        path: "https://ellachoy.github.io/Ella_Portfolio/",
        image: ella2022,
        label: "Dream Coder",
        text: "Bewerbungsprojekt aus 2022 ",
        subText: "Nutzung der Web-Frontend Technologien: HTML, CSS, JS",
        gitpath: "https://github.com/ellachoy/Ella_Portfolio",
        icon: {BsGithub},
    },
    {
        path: "https://shiny-pegasus-1083d5.netlify.app",
        image: follow,
        label: "007 (Follow the target)",
        text: "Side Projekt",
        subText: "Nutzung der Web-Frontend Technologien: React, CSS",
        gitpath: "https://github.com/ellachoy/pr_follow",
        icon: {BsGithub},
    },
   



];

export default SliderContent;
