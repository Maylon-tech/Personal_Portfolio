import React from 'react'

import LinkedInImg from '../assets/linkedin.png'
import TwitterImg from '../assets/twitter.png'
import FacebookImg from '../assets/facebook.png'
import InstagramImg from '../assets/instagram.png'


const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a 
            className="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com" 
            target='_blank'
            rel='noreferrer'
        >
            <img alt="linkedin-link" src={LinkedInImg} />
        </a>

        <a 
            href="https://www.twitter.com" 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel='noreferrer'
        >
            <img src={TwitterImg} alt="twitter-link" />
        </a>

        <a 
            href="https://www.facebook.com" 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel='noreferrer'
        >
            <img src={FacebookImg} alt="facebook-link" />
        </a>

        <a 
            href="https://www.instagram.com" 
            className="hover:opacity-50 transition duration-500"
            target='_blank'
            rel='noreferrer'
        >
            <img src={InstagramImg} alt="instagram-link" />
        </a>
    </div>
  )
}

export default SocialMediaIcons