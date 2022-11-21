import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className='peripherals-banner'>
      <Link data-aos='fade-right' className='img-1' to='/pc-models'>
        <h2 data-text='PC MODELS'>PC MODELS</h2>
      </Link>

      <Link data-aos='fade-left' className='img-2' to='/helpmechose'>
        <h2 data-text='HELP ME CHOSE'>HELP ME CHOSE</h2>
      </Link>
    </section>
  )
}

export default Banner
