import React from 'react'
import ai from '../../../public/content-images/AI.png'
import bc from '../../../public/content-images/blockchain.png'
import amz from '../../../public/content-images/amazon.png'
import cyber from '../../../public/content-images/cyber.png'
import dev from '../../../public/content-images/development.png'
import design from '../../../public/content-images/design.png'
import game from '../../../public/content-images/gaming.png'
import artit from '../../../public/content-images/artitect.png'
import ios from '../../../public/content-images/ios.png'
import market from '../../../public/content-images/marketing.png'
import des from '../../../public/content-images/3d.png'
import animation from '../../../public/content-images/animation.png'
const Content = () => {
  return (
    <>
      <div className='main-cnt'>
        <div className='row-1'>
            <div className='items'>
                <img src={ai} alt="" />
                <p>ML & AI</p>
            </div>
            <div className='items'>
                <img src={bc} alt="" />
                <p>Block Chain</p>
            </div>
            <div className='items'>
                <img src={amz} alt="" />
                <p>Amazon</p>
            </div>
            <div className='items'>
                <img src={cyber} alt="" />
                <p>Cybersecurity</p>
            </div>
            <div className='items'>
                <img src={dev} alt="" />
                <p>Web Development</p>
            </div>
            <div className='items'>
                <img src={design} alt="" />
                <p>Designing</p>
            </div>
        </div>
        <div className='row-2'>
        <div className='items'>
          <img src={game} alt="" />
          <p>Gaming</p>
        </div>
        <div className='items'>
          <img src={artit} alt="" />
          <p>Artitect</p>
        </div>
        <div className='items'>
         <img src={ios} alt="" />
         <p>IOS & AND</p>
        </div>
        <div className='items'>
          <img src={market} alt="" />
          <p>Marketing</p>
        </div>
        <div className='items'>
          <img src={des} alt="" />
          <p>3D </p>
        </div>
        <div className='items'>
          <img src={animation} alt="" />
          <p>Animation</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Content
