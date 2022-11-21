import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className='banner'>
      <Link className='img-1' data-aos='fade-right' to='/peripherals'>
        <h2 data-text='peripherals'>peripherals</h2>
      </Link>

      <Link className='img-2' data-aos='fade-left' to='/pc-models'>
        <h2 data-text='PC MODELS'>PC MODELS</h2>
      </Link>
    </section>
  )
}

export default Banner
