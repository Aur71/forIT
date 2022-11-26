import React from 'react'
import Showcase from './Showcase'
import Items from './Items'
import { cases } from '../../../data/cases'

const PcStyle = ({
  setFullSpec,
  setActiveCase,
  activeCase,
  setShowCase,
  showCase,
  setActiveStage,
  activeStage,
}) => {
  return (
    <section
      className={`${activeStage === 'style' ? 'pc-style active' : 'pc-style'}`}
    >
      <Showcase
        setFullSpec={setFullSpec}
        showCase={showCase}
        setShowCase={setShowCase}
        activeCase={activeCase}
      />
      <Items
        setFullSpec={setFullSpec}
        activeCase={activeCase}
        setActiveCase={setActiveCase}
        setShowCase={setShowCase}
        setActiveStage={setActiveStage}
      />
    </section>
  )
}

export default PcStyle
