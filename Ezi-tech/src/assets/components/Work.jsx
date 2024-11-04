import React from 'react'
import lap1 from '../../../public/images/Laptop1.jpg'
import lap2 from '../../../public/images/laptop2.jpg'
import lap3 from '../../../public/images/Laptop 3.jpg'
const Work = () => {
  return (
       <div className='work'>
        <p>How it works?</p>
        <img src={lap1} alt="" className='imges'/>
        <img src={lap2} alt="" className='imges'/>
        <img src={lap3} alt="" className='imges'/>
       </div>
   
  )
}

export default Work
