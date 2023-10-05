import {BsGithub} from 'react-icons/bs';
import ellas from '../imgs/pr_ellas.jpeg';
import ella2022 from '../imgs/pr_ella.jpg';
import follow from '../imgs/follow.jpeg';

const SliderContent = [
    {
        path: "#",
        image: ellas,
        label: "Ella´s Choice",
        text: "Skills: ReactJs, SASS",
        subText: "Bewerbungsprojekt 2023",
        icon: {BsGithub},
    },
    {
        path: "https://ellachoy.github.io/Ella_Portfolio/",
        image: ella2022,
        label: "Dream coader",
        text: "Skills: HTML, CSS, JS",
        subText: "Bewerbungsprojekt aus 2022 ",
        icon: {BsGithub},
    },
    {
        path: "https://shiny-pegasus-1083d5.netlify.app",
        image: follow,
        label: "007 (Follow the target)",
        text: "Skills: ReactJs, CSS",
        subText: "side projekt",
        icon: {BsGithub},
    },
   



];

export default SliderContent;
