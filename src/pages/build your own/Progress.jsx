import React from 'react'
import ExitBtn from './ExitBtn'
import { stages } from '../../data/stages'
import { useState } from 'react'

const Progress = ({ activeStage }) => {
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

        <div className='stage-bar'>
          <span
            className={`${activeStage === 'style' ? 'active' : null}`}
          ></span>
          <span
            className={`${activeStage === 'performance' ? 'active' : null}`}
          ></span>
          <span
            className={`${activeStage === 'upgrades' ? 'active' : null}`}
          ></span>
          <span
            className={`${activeStage === 'checkout' ? 'active' : null}`}
          ></span>
        </div>
      </div>
      <ExitBtn />
    </div>
  )
}

export default Progress
