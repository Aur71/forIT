import React from 'react'
import ExitBtn from './ExitBtn'
import { stages } from '../../data/stages'
import { useState } from 'react'

const Progress = () => {
  const [activeStage, setActiveStage] = useState('style')

  return (
    <div className='progress-bar'>
      <div className='progress'>
        {stages.map((stage) => {
          return (
            <h2
              key={stage.id}
              className={`${activeStage === stage.name ? 'active' : null}`}
            >
              {stage.name}
            </h2>
          )
        })}
      </div>
      <ExitBtn />
    </div>
  )
}

export default Progress
