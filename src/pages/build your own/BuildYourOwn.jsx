import '../../styles/build-your-own.scss'
import { useState } from 'react'
import Progress from './Progress'
import FullSpec from './FullSpec'
import PcStyle from './pc - style/PcStyle'

const BuildYourOwn = () => {
  const [activeStage, setActiveStage] = useState('style')
  const [fullSpec, setFullSpec] = useState({})
  const [caseShowcase, setCaseShowcase] = useState({})

  return (
    <main className='build-your-own'>
      <Progress activeStage={activeStage} />
      <FullSpec fullSpec={fullSpec} setFullSpec={setFullSpec} />
      <PcStyle
        setFullSpec={setFullSpec}
        caseShowcase={caseShowcase}
        setCaseShowcase={setCaseShowcase}
      />
    </main>
  )
}

export default BuildYourOwn
