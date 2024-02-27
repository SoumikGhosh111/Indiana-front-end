import React from 'react'; 
import logo from "../../assets/Vector - 0.svg"; 
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; 
import "./styles.css"; 
import { lightGreen } from '@mui/material/colors';

function Navbar() {
  return (
    <div className='nav-bar'
    >
        <div className='logo'>
            <img src={logo}/>
            <h2><Link to='/' className = 'navbar-links'>indiana.edu</Link></h2>
        </div>
        <div className='nav-links-pages-account'>
            <div className='nav-links'>
                <ul>
                    <li>
                   <Link to='/aptitude' className = 'navbar-links hover-animation'>
                        Aptitude
                   <div className='on-hover-hor-line'></div>
                   </Link>
                    </li>
                    <li>
                    <Link to='/reasoning' className = 'navbar-links hover-animation'>
                        Reasoning
                        <div className='on-hover-hor-line'></div>
                   </Link>
                    </li>
                    <li>
                    <Link to='/gs' className = 'navbar-links hover-animation'>
                        GS
                        <div className='on-hover-hor-line'></div>
                   </Link>
                    </li>
                    <li>
                    <Link to='/programing' className = 'navbar-links hover-animation'>
                        Programing
                        <div className='on-hover-hor-line'></div>
                   </Link>
                    </li>
                    <li>
                    <Link to='/engineering' className = 'navbar-links hover-animation'>
                        Engineering
                        <div className='on-hover-hor-line'></div>
                   </Link>
                    </li>
                </ul>
            </div>

            <div className='nav-links-account'>
                <motion.button className='book-mark-button'
                    whileHover={{}} 
                    whileTap={{scale: 0.9}}
                >Book Mark</motion.button>
                <motion.button className='bell-icon-button'
                    whileTap= {{scale:0.8}}
                ><NotificationsNoneRoundedIcon /></motion.button>
                <div className='accnt-img'>
                    <img src='https://picsum.photos/id/237/200/300'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar; 