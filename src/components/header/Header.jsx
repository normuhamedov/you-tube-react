import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import Logo from './img-h/Black.png'
import { BsCameraVideo } from 'react-icons/bs'
import { TbGridDots } from 'react-icons/tb'
import { MdNotificationsNone } from 'react-icons/md'
import Search from './img-h/search.png'
import User from './img-h/user.png'

import "../footer/Footer.scss"
import { AiOutlineHome } from 'react-icons/ai'
import { MdSubscriptions } from 'react-icons/md'
import { AiOutlineFire } from 'react-icons/ai'
import { AiOutlineFolder } from 'react-icons/ai'
import { RiFilePaper2Line } from 'react-icons/ri'
import { BsStopwatch } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { CiMusicNote1 } from 'react-icons/ci'
import { SlGameController } from 'react-icons/sl'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'


import Fatch from '../Fatch/Fatch';

const Header = () => {
  
  
  
  const [isClicked, setIsClicked] = useState(true);
  
  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <div className='position-relative'>
    <div className='container-fluid position-sticky sticky-top headerrr'>
    <div className='header '>
    <RxHamburgerMenu onClick={handleClick} className='burger'/>
    <img className='me-auto ms-sm-4' src={Logo} alt="" />
    <div className="container center">
    <form className='col-8' action="">
    <input className='inputSearch' type="text" placeholder='Search'/>
    </form>
    <div className='col-4 text-end d-none d-sm-block'>
    <BsCameraVideo className='col-2'/>
    <TbGridDots className='col-2'/>
    <MdNotificationsNone className='col-2'/>
    </div>
    </div>
    <img src={User} alt="" />
    </div>
    </div>
    
    
    <section className='sec_wrap d-flex'>
    <div className=' left_footer'>
    <NavLink className='activee' to={'/Home'}>
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <AiOutlineHome/>
    <h5>Home</h5>
    </div>
    </NavLink>
    <NavLink className='activee' to={'/Trending'}>
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <AiOutlineFire/>
    <h5>Trending</h5>
    </div>
    </NavLink>
    <NavLink className='activee' to={'/Subscriptions'}>
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <MdSubscriptions/>
    <h5>Subscriptions</h5>
    </div>
    </NavLink>
    
    <NavLink className='activee' to={'/Library'}>
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <AiOutlineFolder/>
    <h5>Library</h5>
    </div>
    </NavLink>

    <NavLink className='activee' to={'/History'}>
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <RiFilePaper2Line/>
    <h5>History</h5>
    </div>
    </NavLink>

    <NavLink className='activee' to={'/Watch'}>
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <BsStopwatch/>
    <h5>Watch later</h5>
    </div>
    </NavLink>

    <NavLink className='activee' to={'/Favourites'}>
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <AiOutlineStar/>
    <h5>Favourites</h5>
    </div>
    </NavLink>

    <NavLink className='activee' to={'/Liked'}>
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <AiOutlineHeart/>
    <h5>Liked videos</h5>
    </div>
    </NavLink>

    <NavLink className='activee' to={'/Music'}>
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <CiMusicNote1/>
    <h5>Music</h5>
    </div>
    </NavLink>

    <NavLink className='activee' to={'/Game'}>
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <SlGameController/>
    <h5>Games</h5>
    </div>
    </NavLink>

    
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <HiOutlineChevronDown/>
    <h5>Show more</h5>
    </div>
    
    
    <NavLink className='activee' to={'/Settings'}>
    <div className='position-absolute bottom-0'>
    <div className={isClicked ? 'f_icons' : 'newww'}>
    <FiSettings/>
    <h5>Setting</h5>
    </div>
    </div>
    </NavLink>
    </div>
    <div className='fetching'>
    <Fatch />
    </div>
    </section>


     <section className='footer_sec position-sticky sticky-bottom'>
    <footer>
        <div className='footer_wrap container-fluid pt-3'>
        <NavLink className='f_link'>
            <AiOutlineHome/>
            <p className='foter_text'>Home</p>
        </NavLink>

        <NavLink className='f_link'>
            <MdSubscriptions/>
            <p className='foter_text'>Trending</p>
        </NavLink>

        <NavLink className='f_link'>
            <AiOutlineFire/>
            <p className='foter_text'>Subscriptions</p>
        </NavLink>

        <NavLink className='f_link'>
            <AiOutlineFolder/>
            <p className='foter_text'>Library</p>
        </NavLink>

        <NavLink className='f_link'>
            <RiFilePaper2Line/>
            <p className='foter_text'>History</p>
        </NavLink>
        </div>
        </footer>
        </section>

       
    </div>
    )
  }
  
  export default Header