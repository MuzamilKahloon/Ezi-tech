import React from 'react'
import phone from '../../../public/images/phone-copy.webp'
import apple from '../../../public/images/apple.webp'
import play from '../../../public/images/playstore.png'
const Download = () => {
  return (
    <>
       <div className='main-down'>
           <div className='hand'>
              <img src={phone} alt="" />
           </div>
           <div className='store'>
            <h3>Learn <span>anytime</span> from anywhere</h3>
            <p>Increase the mobility level with Eziline Technologies LMS
                App. Take your courses in your pocket and access them
                whenever you want without any limits. Make your learning
                more engaging using modern LMS app.
            </p>
             <div className='store-img'>
             <div className='pic-apple'><img src={apple} alt="" /></div>
             <div className='pic-play'><img src={play} alt="" /></div>
             </div>
                
           </div>
       </div>
    </>
  )
}

export default Download
