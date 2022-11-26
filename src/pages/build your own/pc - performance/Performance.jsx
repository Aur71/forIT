import React from 'react'

const Performance = ({ activeStage }) => {
  return (
    <section
      className={`${
        activeStage === 'performance' ? 'performance active' : 'performance'
      }`}
    >
      Performance coming soon
    </section>
  )
}

export default Performance
