import React from 'react'
import '../../styles/peripherals.scss'
import Hero from './Hero'
import Filter from './Filter'
import Items from './Items'
import Banner from './Banner'

const Peripherals = () => {
  return (
    <main className='peripherals'>
      <Hero />
      <Filter />
      <Items />
      <Banner />
    </main>
  )
}

export default Peripherals
