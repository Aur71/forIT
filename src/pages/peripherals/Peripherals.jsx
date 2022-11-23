import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'
import '../../styles/peripherals.scss'
import Hero from './Hero'
import Filter from './Filter'
import Items from './Items'
import Banner from './Banner'

const Peripherals = () => {
  return (
    <>
      <Navbar />
      <main className='peripherals'>
        <Hero />
        <Filter />
        <Items />
        <Banner />
      </main>
      <Footer />
    </>
  )
}

export default Peripherals
