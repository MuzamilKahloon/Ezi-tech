import React from 'react';
import img1 from '../../../public/images/img1.webp';
import img2 from '../../../public/images/img2.webp';
import { FaFacebook, FaBehance, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h2>ABOUT</h2>
                    <p>
                        Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work-oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.
                    </p>
                </div>

                <div className="footer-section courses">
                    <h2>POPULAR COURSES</h2>
                    <ul>
                        <li>
                            <img src={img1} alt="Online Arbitrage Mastermind" />
                            Online Arbitrage Mastermind 2.0 [By Husnain Ali]
                        </li>
                        <li>
                            <img src={img2} alt="Node.js Bootcamp" />
                            The Complete Bootcamp 2024: Node.js [By Ezitech]
                        </li>
                    </ul>
                </div>

                <div className="footer-section pages">
                    <h2>PAGES</h2>
                    <ul>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">EZICODING</a></li>
                        <li><a href="#">INTERNSHIP</a></li>
                        <li><a href="#">OUR SERVICES</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h2>CONTACT</h2>
                    <p>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
                    <p>+92345555396</p>
                    <p><a href="mailto:info@ezitech.org">info@ezitech.org</a></p>
                </div>
            </div>

            <div className="footer-social">
                <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                <a href="https://behance.net" aria-label="Behance"><FaBehance /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>

            <div className="footer-copyright">
                <p>
                    Copyright © 2024 Ezitech Institute | Design & Develop by <a href="#">Eziline Software House</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
