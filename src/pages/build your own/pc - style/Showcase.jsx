import React from 'react'

const Showcase = ({ caseShowcase, setCaseShowcase, setFullSpec }) => {
  return (
    <div className={`showcase ${caseShowcase.id && 'active'}`}>
      <div className='btn-container'>
        <button
          className='full-spec-btn'
          onClick={() => setFullSpec({ id: 1 })}
        >
          FULL SPEC
        </button>
        <button className='change-case-btn' onClick={() => setCaseShowcase({})}>
          CHANGE CASE
        </button>
      </div>
    </div>
  )
}

export default Showcase
