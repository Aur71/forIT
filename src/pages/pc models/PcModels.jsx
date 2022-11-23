import React from 'react'
import '../../styles/pc-models.scss'
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'
import Hero from './Hero'
import Title from './Title'
import Pcs from './Pcs'
import Banner from './Banner'

const PcModels = () => {
  return (
    <>
      <Navbar />
      <main className='pc-models'>
        <Hero />
        <Title />
        <Pcs />
        <Banner />
      </main>
      <Footer />
    </>
  )
}

export default PcModels
