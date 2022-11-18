import React from 'react'
import '../../styles/pc-models.scss'
import Hero from './Hero'
import Title from './Title'
import Pcs from './Pcs'
import Banner from './Banner'

const PcModels = () => {
  return (
    <main className='pc-models'>
      <Hero />
      <Title />
      <Pcs />
      <Banner />
    </main>
  )
}

export default PcModels
