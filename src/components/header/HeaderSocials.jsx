import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/penasnipute/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/penasNipute" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://m.facebook.com/penasNipute" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
    </div>
  )
}

export default HeaderSocials