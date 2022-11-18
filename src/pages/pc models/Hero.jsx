import React from 'react'
import PcFront from '../../assets/images/pc-front.png'

const Hero = () => {
  return (
    <section className='pc-models-hero'>
      <img src={PcFront} alt='pc-front' />
      <h1 data-text='Pc Models'>Pc Models</h1>
    </section>
  )
}

export default Hero
