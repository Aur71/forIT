import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className='pc-models-banner'>
      <Link className='img-1' data-aos='fade-right' to='/helpmechose'>
        <h2 data-text='What to chose?'>Help me chose</h2>
      </Link>

      <Link className='img-2' data-aos='fade-left' to='/peripherals'>
        <h2 data-text='Peripherals'>Peripherals</h2>
      </Link>
    </section>
  )
}

export default Banner
