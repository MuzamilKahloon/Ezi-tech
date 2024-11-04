import React, { useEffect, useState } from 'react';
import logo from '../../../public/images/logo.png'; // Adjust the path as needed
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import img1 from '../../../public/images/img1.png';
import img2 from '../../../public/images/img2.png';
import img3 from '../../../public/images/img3.png';

const Hero = () => {
    const texts = ["Web Designer", "Programming", "Social Skills", "Marketing"];
    const [index, setIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState(''); // State for search input

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through texts
        }, 1500); // Change text every 1.5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [texts.length]);

    return (
        <div className='Hero-sec'>
            <div className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <ul className="nav-items">
                    <li><a href="#home">Home</a></li>
                    <li className="dropdown">
                        <a href="#certifications">Certifications</a>
                        <ul className="dropdown-content">
                            <li><a href="#onsite-courses">Onsite Courses</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#careers">Careers</a>
                        <ul className="dropdown-content">
                            <li><a href="#internships">Internships</a></li>
                            <li><a href="#jobs">Job Opportunities</a></li>
                        </ul>
                    </li>
                    <li><a href="#seminars">Seminars</a></li>
                    <li><a href="#techblogs">Tech Blogs</a></li>
                    <li><a href="#iportallogin">Iportal Login</a></li>
                </ul>
                <div className="nav-icons">
                    <span className="separator">|</span>
                    <i className="heart-icon"><FaRegHeart /></i>
                    <i className="search-icon"><CiSearch /></i>
                </div>
            </div>

            <div className="content">
                <p>Learn the fundamentals with our <br /> experts in <span>{texts[index]}</span></p>
                <p className='dot-cont'>Utilize Effective Learning to Research Your Potential!</p>
            </div>

            {/* Search Bar */}
            <div className="search-bar">
                <div className="search-input-container">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="search-input"
                        value={searchTerm} // Controlled input
                        onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
                    />
                    <FaSearch className="search" />
                </div>
            </div>

            <div className='my-cont'>
                Explore Our More Useful Products 🤍
            </div>

            <div className='Products'>
                <img src={img1} alt="Product 1" className='imgs' />
                <img src={img2} alt="Product 2" className='imgs' />
                <img src={img3} alt="Product 3" className='imgs-t' />
            </div>
        </div>
    );
};

export default Hero;
