import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className='peripherals-banner'>
      <Link className='img-1' data-aos='fade-right'>
        <h2 data-text='PC MODELS'>PC MODELS</h2>
      </Link>

      <Link className='img-2' data-aos='fade-left'>
        <h2 data-text='HELP ME CHOSE'>HELP ME CHOSE</h2>
      </Link>
    </section>
  )
}

export default Banner
