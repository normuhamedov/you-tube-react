import React, { useState } from 'react';
import "./Footer.scss"
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
const Footer = () => {

  const [isClicked, setIsClicked] = useState(true);

  function handleClick() {
    setIsClicked(!isClicked);

  }


  return (
    <div className='container-fluid'>
      <div className={isClicked ? 'f_icons' : 'newww'}>
      <AiOutlineHome onClick={handleClick}/>
      <h5>Home</h5>
      </div>
      <div className='f_icons'>
      <AiOutlineFire/>
      <h5>Trending</h5>
      </div>
      <div className='f_icons'>
      <MdSubscriptions/>
      <h5>Subscriptions</h5>
      </div>
      

      <div className='f_icons mt-4'>
      <AiOutlineFolder/>
      <h5>Library</h5>
      </div>
      <div className='f_icons'>
      <RiFilePaper2Line/>
      <h5>History</h5>
      </div>
      <div className='f_icons'>
      <BsStopwatch/>
      <h5>Watch later</h5>
      </div>
      <div className='f_icons'>
      <AiOutlineStar/>
      <h5>Favourites</h5>
      </div>
      <div className='f_icons'>
      <AiOutlineHeart/>
      <h5>Liked videos</h5>
      </div>
      <div className='f_icons'>
      <CiMusicNote1/>
      <h5>Music</h5>
      </div>
      <div className='f_icons'>
      <SlGameController/>
      <h5>Games</h5>
      </div>
      <div className='f_icons'>
      <HiOutlineChevronDown/>
      <h5>Show more</h5>
      </div>


      <div className='f_icons position-absolute bottom-0'>
      <FiSettings/>
      <h5>Setting</h5>
      </div>
    </div>
  )
}

export default Footer