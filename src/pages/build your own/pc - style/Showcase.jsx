import React from 'react'

const Showcase = ({ setFullSpec, showCase, setShowCase, activeCase }) => {
  return (
    <div className={`showcase  ${showCase && 'active'}`}>
      <div className='model-showcase'></div>

      <div className='btn-container'>
        <button className='full-spec-btn' onClick={() => setFullSpec(true)}>
          FULL SPEC
        </button>
        <button className='change-case-btn' onClick={() => setShowCase(false)}>
          CHANGE CASE
        </button>
      </div>
    </div>
  )
}

export default Showcase
