import React from 'react'
import Case from '../../assets/icons/case.png'
import Gear from '../../assets/icons/gear.png'
import Tick from '../../assets/icons/tick.png'
import Tools from '../../assets/icons/tools.png'

const Hero = () => {
  return (
    <header className='hero'>
      <div className='wrapper'>
        <div className='step'>
          <img src={Case} alt='case' />
          <p>Start by choosing the case that best fits your setup</p>
        </div>

        <div className='line'></div>

        <div className='step'>
          <img src={Gear} alt='case' />
          <p>
            Decide which components work best with your overall look and feel
          </p>
        </div>

        <div className='line'></div>

        <div className='step'>
          <img src={Tick} alt='case' />
          <p>Complete your configuration and place your order</p>
        </div>

        <div className='line'></div>

        <div className='step'>
          <img src={Tools} alt='case' />
          <p>
            We will build and test your system before delivering it to your door
          </p>
        </div>
      </div>
    </header>
  )
}

export default Hero
