import React from 'react'
import html from '../../../public/cards-images/html.png'
import { IoIosPerson } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import gd from '../../../public/cards-images/gdesign.png'
import market from '../../../public/cards-images/market.png'
import flutter from '../../../public/cards-images/flutter.png'
import ml from '../../../public/cards-images/ml.png'
import mern from '../../../public/cards-images/mern.png'


const Cards = () => {
    return (
        <div className='main'>
            <p>Perfect Internship For You</p>
            <div className='pt1'>
                <div className='html'>
                    <div className='head'>
                        <h3>HTML/CSS <br />JavaScript</h3>
                        <p>Ezitech Institute</p>
                        <img src={html} alt="" />
                    </div>

                    <div className='body'>
                        <p><IoIosPerson /> Employment- <span>Hybrid</span></p>
                        <p><FaLocationArrow /> Location <span>Rawalpindi</span></p>
                        <p><IoBag /> Job Type - <span>Full Time</span><span>Part Time</span></p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='gdesign'>
                    <div className='head'>
                        <h3>Graphic Designing</h3>
                        <p>Ezitech Institute</p>
                        <img src={gd} alt="" />
                    </div>
                    <div className='body'>
                        <p><IoIosPerson /> Employment- <span>Hybrid</span></p>
                        <p><FaLocationArrow /> Location <span>Rawalpindi</span></p>
                        <p><IoBag /> Job Type - <span>Full Time</span><span>Part Time</span></p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='digital'>
                    <div className='head'>
                        <h3>Graphic Designing</h3>
                        <p>Ezitech Institute</p>
                        <img src={market} alt="" />
                    </div>
                    <div className='body'>
                        <p><IoIosPerson /> Employment- <span>Hybrid</span></p>
                        <p><FaLocationArrow /> Location <span>Rawalpindi</span></p>
                        <p><IoBag /> Job Type - <span>Full Time</span><span>Part Time</span></p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            <div className='pt2'>
                <div className='html'>
                    <div className='head'>
                        <h3>Flutter Development</h3>
                        <p>Ezitech Institute</p>
                        <img src={flutter} alt="" />
                    </div>

                    <div className='body'>
                        <p><IoIosPerson /> Employment- <span>Hybrid</span></p>
                        <p><FaLocationArrow /> Location <span>Rawalpindi</span></p>
                        <p><IoBag /> Job Type - <span>Full Time</span><span>Part Time</span></p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='gdesign'>
                    <div className='head'>
                        <h3>Machine Learning</h3>
                        <p>Ezitech Institute</p>
                        <img src={ml} alt="" />
                    </div>
                    <div className='body'>
                        <p><IoIosPerson /> Employment- <span>Hybrid</span></p>
                        <p><FaLocationArrow /> Location <span>Rawalpindi</span></p>
                        <p><IoBag /> Job Type - <span>Full Time</span><span>Part Time</span></p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='digital'>
                    <div className='head'>
                        <h3>MERN Stack</h3>
                        <p>Ezitech Institute</p>
                        <img src={mern} alt="" />
                    </div>
                    <div className='body'>
                        <p><IoIosPerson /> Employment- <span>Hybrid</span></p>
                        <p><FaLocationArrow /> Location <span>Rawalpindi</span></p>
                        <p><IoBag /> Job Type - <span>Full Time</span><span>Part Time</span></p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
