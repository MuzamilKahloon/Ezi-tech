import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const Contacts = () => {
  return (
    <>
      <div className='info'>
        <p><FaPhone className='social-icon'/>  +92 3455555396</p>
        <p> <CiLocationOn className='social-icon' />   Westridge 1, Office #304-G Peshawar Road, Rawalpindi, Pakistan</p>
        <p><FaClock className='social-icon' />   Mon - Fri 8.00 - 20.00</p>
        <p className='social-media'>
        <FaFacebook className='social-icon' />
        <FaInstagram className='social-icon' />
        <FaLinkedin className='social-icon' />
        <FaYoutube className='social-icon' />
          </p>

        <p className='log'> <IoPerson />   Login | Register </p>
        
      </div>
    </>
  )
}

export default Contacts
