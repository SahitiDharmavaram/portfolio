/* eslint-disable */
import { BiShoppingBag, BiPencil } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineMail, AiFillAudio } from "react-icons/ai";
import { FaInternetExplorer, FaChalkboardTeacher, FaCameraRetro, FaPinterest, FaVideo, FaTabletAlt, FaRegNewspaper } from "react-icons/fa";

// Import the PNG files
import dancingIcon from './dancing.png';
import paintingIcon from './painting.png';
import poetryIcon from './poetry.png';

const imageStyles = {
  maxWidth: '84%',   // Ensure the image doesn't exceed the container width
  maxHeight: '140%',  // Ensure the image doesn't exceed the container height
};

const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};
export const servicesData = [

    {
        id: 14,
        title: 'Indian Classical Dance',
        icon: <div style={{ width: '80px', height: '80px' }}>
          <img src={dancingIcon} alt="Dancing" style={imageStyles} />
        </div>
    },
    {
        id: 16,
        title: 'Poetry',
        icon: <div style={{ width: '90px', height: '100px' }}>
          <img src={poetryIcon} alt="Poetry" style={imageStyles} />
        </div>
    }, 
    {
        id: 15,
        title: 'Painting',

        icon: <div style={{ width: '80px', height: '80px' }}>
          <img src={paintingIcon} alt="Painting" style={imageStyles} />
        </div>
       
    },

];
