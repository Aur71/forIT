import React from 'react'
import Showcase from './Showcase'
import Items from './Items'

const PcStyle = ({ setFullSpec, caseShowcase, setCaseShowcase }) => {
  return (
    <section className='pc-style'>
      <Showcase
        setFullSpec={setFullSpec}
        caseShowcase={caseShowcase}
        setCaseShowcase={setCaseShowcase}
      />
      <Items setFullSpec={setFullSpec} setCaseShowcase={setCaseShowcase} />
    </section>
  )
}

export default PcStyle
