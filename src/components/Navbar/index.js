import React from 'react'; 
import logo from "../../assets/Vector - 0.svg"; 
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import "./styles.css"; 

function Navbar() {
  return (
    <div className='nav-bar'>
        <div className='logo'>
            <img src={logo}/>
            <h2>indiana.edu</h2>
        </div>
        <div className='nav-links-pages-account'>
            <div className='nav-links'>
                <ul>
                    <li>
                        Aptitude
                    </li>
                    <li>
                        Reasoning
                    </li>
                    <li>
                        GS
                    </li>
                    <li>
                        Engineering
                    </li>
                    <li>
                        Programming
                    </li>
                </ul>
            </div>

            <div className='nav-links-account'>
                <button className='book-mark-button'>Book Mark</button>
                <button className='bell-icon-button'><NotificationsNoneRoundedIcon /></button>
                <div className='accnt-img'>
                    <img src='https://picsum.photos/id/237/200/300'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar; 