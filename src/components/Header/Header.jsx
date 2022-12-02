import React, { useState } from 'react'
import "./Header.css"
import {BiSearch} from 'react-icons/bi'
import {BiCartAlt} from 'react-icons/bi'
import PopupProfile from '../Profile/Profile'


const User = ({profile}) => {
  const[buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      {buttonPopup && <PopupProfile trigger={buttonPopup} setTrigger={setButtonPopup} />}
      <div className="user_container" onClick={!profile ? () => setButtonPopup(true): ""} >
        <img className="profile_button" src="/images/user.jpg" alt="user avatar" style={profile ? {width:"5em", height: "5em"}: {}}/>
        {!profile && <span>Alexander</span>}
      </div>
    </>
  )
}

export {User}

const Header = () => {
  return (
    <div className="header_container">
      <img className="header_logo" src="/images/Amakilogo.png" alt="pagelogo" />
      <div className="search">
        <input className='search_box' placeholder='Wanna see something cool?'/>
        <BiSearch className='search_icon'/>
      </div>
      <div className='user_actions'>
        <User />
        <div className='cart'>
            <BiCartAlt className='cart_icon'/>
        </div>
      </div>
    </div>
  )
}
export default Header