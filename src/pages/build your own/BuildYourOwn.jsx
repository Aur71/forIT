import '../../styles/build-your-own.scss'
import { useState } from 'react'
import Progress from './Progress'
import FullSpec from './FullSpec'
import PcStyle from './pc - style/PcStyle'
import { cases } from '../../data/cases'

const BuildYourOwn = () => {
  const [activeStage, setActiveStage] = useState('style')
  const [fullSpec, setFullSpec] = useState(false)
  const [activeCase, setActiveCase] = useState(cases[0])
  const [showCase, setShowCase] = useState(false)

  return (
    <main className='build-your-own'>
      <Progress activeStage={activeStage} />
      <FullSpec
        fullSpec={fullSpec}
        setFullSpec={setFullSpec}
        activeCase={activeCase}
      />
      <PcStyle
        setFullSpec={setFullSpec}
        setActiveCase={setActiveCase}
        activeCase={activeCase}
        showCase={showCase}
        setShowCase={setShowCase}
        activeStage={activeStage}
        setActiveStage={setActiveStage}
      />
    </main>
  )
}

export default BuildYourOwn
