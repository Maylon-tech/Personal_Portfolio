import React from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'

const Footer = () => {
  return (
    <footer className='h-64 bg-red pt-10'>
        <div className="w-5/6 mx-auto">
            <SocialMediaIcons />
            <div className='md:flex align-center md:justify-between text-center'>
                <p className='font-playfair font-semibold text-2xl text-yellow'>John Lennon</p>
                <p className='font-playfair text-md text-yellow'>&copy; 2024. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer